import assert from 'node:assert/strict';
import { lstat, readFile, readdir } from 'node:fs/promises';
import { dirname, extname, relative, resolve, sep } from 'node:path';
import { readSnapshot, render, root } from './catalog.mjs';
import { assertListedGitHubUrls, codeCatalogPath, readCodeSnapshot, renderCodeCatalog } from './public-code.mjs';

const files = [];
async function walk(directory) {
  for (const item of await readdir(directory, { withFileTypes: true })) {
    if (['.git', '.private'].includes(item.name)) continue;
    const path = resolve(directory, item.name);
    assert.ok(!item.isSymbolicLink(), `Symlink not allowed: ${relative(root, path)}`);
    if (item.isDirectory()) await walk(path);
    else files.push(path);
  }
}
await walk(root);
const allowed = new Set(['.gitignore', 'VERSION', 'AGENTS.md', 'README.md', 'CHANGELOG.md',
  'docs/stack.md', 'docs/case-studies.md', 'docs/engineering.md', 'docs/evidence.md',
  'docs/references.md', 'docs/project-index.md', 'docs/technology-index.md',
  'docs/public-code.md', 'data/public-projects.json', 'data/public-code-projects.json',
  'scripts/catalog.mjs', 'scripts/public-code.mjs', 'scripts/check-docs.mjs']);
let localLinks = 0;
const external = new Set();
const snapshot = await readSnapshot();
const codeSnapshot = await readCodeSnapshot();
const publicRepositories = new Set(['zeztto/developer-portfolio',
  ...codeSnapshot.projects.map((project) => project.repository)]);
const ids = new Set(snapshot.projects.map((p) => p.id));
for (const path of files) {
  const name = relative(root, path).split(sep).join('/');
  assert.ok(allowed.has(name), `Unexpected public file: ${name}`);
  const text = await readFile(path, 'utf8');
  assert.doesNotMatch(text, /\/(?:Users|home)\//, `Local path in ${name}`);
  assert.doesNotMatch(text, /(?:gh[pousr]_[A-Za-z0-9]{30,}|github_pat_[A-Za-z0-9_]{30,}|AKIA[A-Z0-9]{16}|-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----)/, `Possible credential in ${name}`);
  assert.doesNotMatch(text, /https?:\/\/[^\s/]+:[^\s/@]+@/, `URL credentials in ${name}`);
  if (['.md', '.json'].includes(extname(path))) {
    const content = extname(path) === '.json' ? JSON.stringify(JSON.parse(text)) : text;
    assertListedGitHubUrls(content, publicRepositories, name);
  }
  if (extname(path) !== '.md') continue;
  assert.match(text, /^# .+/);
  const withoutCode = text.replace(/```[^\n]*\n[\s\S]*?```/g, '');
  assert.equal((text.match(/^```/gm) ?? []).length % 2, 0, `Unclosed code block: ${name}`);
  for (const match of withoutCode.matchAll(/(?<!!)\[[^\]\n]*\]\(([^)\s]+)\)/g)) {
    const target = match[1];
    if (/^https:\/\//i.test(target)) {
      const url = new URL(target);
      assert.ok(!url.username && !url.password);
      if (url.hostname === 'p1zza.kr' && url.pathname.startsWith('/portfolio/')) {
        assert.ok(ids.has(url.pathname.slice('/portfolio/'.length)), `Missing public project: ${target}`);
      }
      external.add(target);
    } else {
      assert.ok(!/^(?:[a-z]+:|\/|#)/i.test(target), `Unexpected link: ${target}`);
      const resolved = resolve(dirname(path), decodeURIComponent(target.split('#')[0]));
      assert.ok(resolved.startsWith(root), `Link outside repo: ${name}`);
      assert.ok((await lstat(resolved)).isFile(), `Missing link: ${name} -> ${target}`);
      localLinks++;
    }
  }
}
const version = (await readFile(resolve(root, 'VERSION'), 'utf8')).trim();
assert.match(version, /^\d+\.\d+\.\d+$/);
assert.ok((await readFile(resolve(root, 'README.md'), 'utf8')).includes(`**${version}**`));
const readme = await readFile(resolve(root, 'README.md'), 'utf8');
const codeCounts = [...readme.matchAll(/\[공개 코드 (\d+)개\]/g)];
assert.equal(codeCounts.length, 1, 'README needs one public code catalog count');
assert.equal(Number(codeCounts[0][1]), codeSnapshot.projects.length);
assert.ok((await readFile(resolve(root, 'CHANGELOG.md'), 'utf8')).includes(`## ${version} - `));
for (const [path, content] of Object.entries(render(snapshot))) {
  assert.equal(await readFile(resolve(root, path), 'utf8'), content, `Outdated generated index: ${path}`);
}
assert.equal(await readFile(resolve(root, codeCatalogPath), 'utf8'), renderCodeCatalog(codeSnapshot),
  'Outdated public code catalog');
console.log(JSON.stringify({ status: 'PASS', files: files.length, localLinks,
  externalLinks: external.size, serviceIntroductionItems: ids.size,
  publicCodeProjects: codeSnapshot.projects.length, version,
  limits: 'Offline documentation consistency and heuristic privacy checks; not a full secret or product audit.' }, null, 2));
