import assert from 'node:assert/strict';
import { execFile } from 'node:child_process';
import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { promisify } from 'node:util';

const execute = promisify(execFile);
const root = fileURLToPath(new URL('../', import.meta.url));
const snapshotPath = resolve(root, 'data/public-code-projects.json');
export const codeCatalogPath = 'docs/public-code.md';
const projectKeys = ['name', 'repository', 'description', 'category', 'defaultBranch',
  'headSha', 'ciRunId', 'ciSummary', 'declaredLicense', 'noticePath', 'attribution', 'fork'];
const plain = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('[', '\\[').replaceAll(']', '\\]')
  .replace(/\s+/g, ' ').trim();

function decodeUrlText(value, context) {
  try {
    for (let depth = 0; depth < 4 && /%[0-9a-f]{2}/i.test(value); depth++) {
      value = decodeURIComponent(value);
    }
  } catch {
    assert.fail(`Invalid encoded URL in ${context}`);
  }
  assert.doesNotMatch(value, /%[0-9a-f]{2}/i, `Ambiguous encoded URL in ${context}`);
  return value;
}

export function assertListedGitHubUrls(text, repositories, context) {
  const sources = new Set([text]);
  for (const source of sources) {
    // Look ahead so an outer URL cannot consume a nested URL's starting point.
    for (const match of source.matchAll(/(?=((?:(?:https?:)?\/\/|(?<![A-Za-z0-9.-])(?:www\.)?github\.com\.?\/)[^\s<>"'`\\)\]]+))/gi)) {
      const target = match[1].replace(/[.,;:!?]+$/, '');
      let url;
      try {
        url = new URL(target.startsWith('//') ? `https:${target}`
          : /^https?:\/\//i.test(target) ? target : `https://${target}`);
      } catch {
        assert.fail(`Invalid URL in ${context}`);
      }
      for (const component of [url.search, url.hash]) {
        if (/%[0-9a-f]{2}/i.test(component)) sources.add(decodeUrlText(component, context));
      }
      const hostname = url.hostname.toLowerCase().replace(/^www\./, '').replace(/\.$/, '');
      if (hostname !== 'github.com') continue;
      assert.ok(!url.username && !url.password, `URL credentials in ${context}`);
      const pathname = decodeUrlText(url.pathname, context);
      const [owner, name] = pathname.toLowerCase().split('/').filter(Boolean);
      if (owner !== 'zeztto' || !name) continue;
      const repository = `${owner}/${name.replace(/\.git$/, '')}`;
      assert.ok(repositories.has(repository), `Unlisted GitHub repository in ${context}`);
    }
  }
}

export function validateCodeSnapshot(snapshot) {
  assert.deepEqual(Object.keys(snapshot).sort(), ['schemaVersion', 'source', 'checkedAt', 'projects'].sort());
  assert.equal(snapshot.schemaVersion, 1);
  assert.equal(snapshot.source, 'https://api.github.com');
  assert.ok(Number.isFinite(Date.parse(snapshot.checkedAt)));
  assert.ok(Array.isArray(snapshot.projects) && snapshot.projects.length > 0);
  const repositories = new Set();
  for (const project of snapshot.projects) {
    assert.deepEqual(Object.keys(project).sort(), [...projectKeys].sort());
    assert.match(project.repository, /^zeztto\/[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(!repositories.has(project.repository), `Duplicate public repository: ${project.repository}`);
    repositories.add(project.repository);
    assert.notEqual(project.repository, 'zeztto/developer-portfolio');
    assert.match(project.defaultBranch, /^[A-Za-z0-9][A-Za-z0-9._/-]*$/);
    assert.match(project.headSha, /^[0-9a-f]{40}$/);
    assert.ok(Number.isSafeInteger(project.ciRunId) && project.ciRunId > 0);
    assert.equal(typeof project.fork, 'boolean');
    assert.match(project.noticePath, /^[A-Za-z0-9][A-Za-z0-9._/-]*$/);
    assert.ok(!project.noticePath.includes('..'));
    for (const key of ['name', 'description', 'category', 'ciSummary', 'declaredLicense', 'attribution']) {
      assert.equal(typeof project[key], 'string');
      assert.ok(project[key].trim() === project[key] && project[key].length > 0
        && project[key].length < 1500, `Invalid ${key}: ${project.repository}`);
    }
  }
  const allowed = new Set(['zeztto/developer-portfolio', ...repositories]);
  for (const project of snapshot.projects) {
    for (const key of projectKeys) {
      if (typeof project[key] === 'string') {
        assertListedGitHubUrls(project[key], allowed, `public code ${key}`);
      }
    }
  }
  return snapshot;
}

export async function readCodeSnapshot() {
  return validateCodeSnapshot(JSON.parse(await readFile(snapshotPath, 'utf8')));
}

export function renderCodeCatalog(snapshot) {
  validateCodeSnapshot(snapshot);
  const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' })
    .format(new Date(snapshot.checkedAt));
  let output = '# 공개 코드\n\n'
    + '[소개](../README.md) · [작업 사례](case-studies.md) · [자료와 공개 범위](evidence.md)\n\n'
    + `기준일: **${date} KST**. **${snapshot.projects.length}개 코드 프로젝트**를 공개 저장소에서 확인했습니다. `
    + '[서비스 소개 아카이브](project-index.md)와 별도로 집계하며, 문서 저장소인 developer-portfolio는 이 수에 포함하지 않습니다.\n\n'
    + '각 링크는 확인한 main source와 같은 head에서 성공한 GitHub Actions를 연결합니다. '
    + '검사 수는 서로 다른 suite의 단위입니다. 실제 배포·장치·host 검증 범위와 외부 코드·자산의 권리는 각 저장소의 문서와 고지를 따릅니다.\n\n';
  for (const category of [...new Set(snapshot.projects.map((project) => project.category))]) {
    output += `## ${plain(category)}\n\n`;
    for (const project of snapshot.projects.filter((item) => item.category === category)) {
      const url = `https://github.com/${project.repository}`;
      const notice = project.noticePath.split('/').map(encodeURIComponent).join('/');
      output += `### [${plain(project.name)}](${url})\n\n`
        + `${plain(project.description)}\n\n`
        + `[${plain(project.defaultBranch)} ${project.headSha.slice(0, 7)}](${url}/tree/${project.headSha}) · `
        + `[CI 통과](${url}/actions/runs/${project.ciRunId}) · `
        + `[권리 고지](${url}/blob/${project.headSha}/${notice})\n\n`
        + `CI 범위: ${plain(project.ciSummary)}. ${plain(project.attribution)}\n\n`;
    }
  }
  return output.trimEnd() + '\n';
}

async function github(endpoint) {
  try {
    const { stdout } = await execute('gh', ['api', endpoint], { maxBuffer: 2 * 1024 * 1024 });
    return JSON.parse(stdout);
  } catch {
    throw new Error(`GitHub public readback failed: ${endpoint}`);
  }
}

export async function verifyPublicRepositories(snapshot) {
  validateCodeSnapshot(snapshot);
  const results = [];
  const pending = [...snapshot.projects];
  async function worker() {
    while (pending.length > 0) {
      const project = pending.shift();
      const prefix = `repos/${project.repository}`;
      const metadata = await github(prefix);
      assert.equal(metadata.private, false, `Repository is not public: ${project.repository}`);
      assert.equal(metadata.archived, false, `Repository is archived: ${project.repository}`);
      assert.equal(metadata.default_branch, project.defaultBranch);
      assert.equal(metadata.fork, project.fork);
      assert.equal(metadata.license?.spdx_id, project.declaredLicense);
      const [main, run] = await Promise.all([
        github(`${prefix}/commits/${encodeURIComponent(project.defaultBranch)}`),
        github(`${prefix}/actions/runs/${project.ciRunId}`),
      ]);
      assert.equal(main.sha, project.headSha, `Current main differs: ${project.repository}`);
      assert.equal(run.repository.full_name, project.repository);
      assert.equal(run.head_sha, project.headSha, `CI head differs: ${project.repository}`);
      assert.equal(run.head_branch, project.defaultBranch);
      assert.ok(['push', 'workflow_dispatch'].includes(run.event), `Not a main CI: ${project.repository}`);
      assert.equal(run.status, 'completed');
      assert.equal(run.conclusion, 'success');
      const notice = project.noticePath.split('/').map(encodeURIComponent).join('/');
      const file = await github(`${prefix}/contents/${notice}?ref=${project.headSha}`);
      assert.equal(file.type, 'file');
      results.push({ repository: project.repository, headSha: project.headSha,
        ciRunId: project.ciRunId, public: true, ci: 'success' });
    }
  }
  await Promise.all(Array.from({ length: Math.min(4, pending.length) }, () => worker()));
  return results.sort((a, b) => a.repository.localeCompare(b.repository));
}

async function main() {
  const mode = process.argv[2];
  assert.ok(['--generate', '--check', '--verify-public'].includes(mode),
    'Use --generate, --check or --verify-public');
  const snapshot = await readCodeSnapshot();
  if (process.argv[3]) {
    assert.equal(process.argv[3], '--expected-count');
    assert.equal(process.argv.length, 5);
    assert.equal(snapshot.projects.length, Number(process.argv[4]));
  } else assert.equal(process.argv.length, 3);
  const target = resolve(root, codeCatalogPath);
  if (mode === '--generate') await writeFile(target, renderCodeCatalog(snapshot));
  if (mode === '--check') assert.equal(await readFile(target, 'utf8'), renderCodeCatalog(snapshot));
  const verification = mode === '--verify-public' ? await verifyPublicRepositories(snapshot) : undefined;
  console.log(JSON.stringify({ status: 'PASS', mode, projects: snapshot.projects.length,
    checkedAt: snapshot.checkedAt, verification }, null, 2));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
