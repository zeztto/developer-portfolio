import assert from 'node:assert/strict';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

export const root = fileURLToPath(new URL('../', import.meta.url));
export const source = 'https://p1zza.kr/api/public/projects';
const snapshotPath = resolve(root, 'data/public-projects.json');
const keys = ['id', 'name', 'description', 'category', 'techStack'];
const cell = (value) => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;').replaceAll('|', '&#124;').replaceAll('[', '&#91;')
  .replaceAll(']', '&#93;').replaceAll('*', '&#42;').replaceAll('_', '&#95;')
  .replaceAll('`', '&#96;').replace(/\s+/g, ' ').trim();
const link = (project) => `[${cell(project.name)}](https://p1zza.kr/portfolio/${project.id})`;

export function validate(snapshot) {
  assert.deepEqual(Object.keys(snapshot).sort(), ['capturedAt', 'projects', 'source'].sort());
  assert.equal(snapshot.source, source);
  assert.ok(Number.isFinite(Date.parse(snapshot.capturedAt)));
  assert.ok(Array.isArray(snapshot.projects) && snapshot.projects.length > 0);
  const ids = new Set();
  for (const project of snapshot.projects) {
    assert.deepEqual(Object.keys(project).sort(), [...keys].sort());
    assert.match(project.id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
    assert.ok(!ids.has(project.id), `Duplicate project: ${project.id}`);
    ids.add(project.id);
    for (const key of ['name', 'description', 'category']) {
      assert.equal(typeof project[key], 'string');
      assert.ok(project[key].trim().length > 0 && project[key].length < 2000);
    }
    assert.ok(Array.isArray(project.techStack));
    assert.equal(new Set(project.techStack).size, project.techStack.length);
    for (const tech of project.techStack) {
      assert.equal(typeof tech, 'string');
      assert.ok(tech.trim() === tech && tech.length > 0 && tech.length < 100);
    }
  }
  return snapshot;
}

export function render(snapshot) {
  validate(snapshot);
  const date = new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' })
    .format(new Date(snapshot.capturedAt));
  const projects = snapshot.projects;
  const categories = [...new Set(projects.map((p) => p.category))];
  const technologies = [...new Set(projects.flatMap((p) => p.techStack))].sort();
  const header = `[README](../README.md) · [기술 스택](stack.md) · [근거 기준](evidence.md)\n\n`;
  const note = `기준일: **${date} KST**. [공개 목록](${source})의 스냅샷입니다. `
    + '공개 소개에 기재된 내용이며, 모든 구현·현재 운영 상태의 독립 검증이나 동일 숙련도를 뜻하지 않습니다.\n\n';
  let catalog = '# 전체 공개 프로젝트\n\n' + header + note
    + `**${projects.length}개 공개 항목 · ${categories.length}개 분류.** `
    + '항목 수는 고객·납품·독립 원작의 수가 아닙니다. 같은 서비스의 별도 작업이나 UI 프로젝트도 포함됩니다.\n\n'
    + '[모든 기술별 프로젝트 찾기](technology-index.md)\n\n';
  const names = { Services: '서비스', Productivity: '생산성', Websites: '웹사이트',
    Games: '게임', Tools: '도구', AI: 'AI', Music: '음악', Finance: '금융', Education: '교육' };
  for (const category of categories) {
    catalog += `## ${cell(names[category] ?? category)}\n\n`
      + '| 프로젝트 | 공개 소개 | 기재 기술 |\n| --- | --- | --- |\n';
    for (const project of projects.filter((p) => p.category === category)) {
      catalog += `| ${link(project)} | ${cell(project.description)} | ${project.techStack.map(cell).join(', ')} |\n`;
    }
    catalog += '\n';
  }
  let index = '# 기술 역색인\n\n' + header + note
    + `공개 목록의 **서로 다른 기술 표기 ${technologies.length}개**를 빠짐없이 연결했습니다. `
    + '프레임워크·API·라이브러리·형식·알고리즘을 포함한 표기 수이며, 독립적인 전문 역량의 개수가 아닙니다. '
    + '유사 표기와 제품명은 원자료대로 보존했습니다.\n\n'
    + '[전체 프로젝트 보기](project-index.md)\n\n';
  for (const tech of technologies) {
    index += `## ${cell(tech)}\n\n`
      + projects.filter((p) => p.techStack.includes(tech)).map(link).join(' · ') + '\n\n';
  }
  return { 'docs/project-index.md': catalog.trimEnd() + '\n',
    'docs/technology-index.md': index.trimEnd() + '\n' };
}

export async function readSnapshot() {
  return validate(JSON.parse(await readFile(snapshotPath, 'utf8')));
}

async function main() {
  const mode = process.argv[2];
  assert.ok(['--refresh', '--generate', '--check'].includes(mode), 'Use --refresh, --generate or --check');
  let snapshot;
  if (mode === '--refresh') {
    const response = await fetch(source, { signal: AbortSignal.timeout(30000), redirect: 'error' });
    assert.ok(response.ok, `Public source HTTP ${response.status}`);
    const rows = await response.json();
    assert.ok(Array.isArray(rows));
    assert.ok(rows.every((row) => typeof row.isPublished === 'boolean'));
    snapshot = validate({ capturedAt: new Date().toISOString(), source,
      projects: rows.filter((row) => row.isPublished).map((row) =>
        Object.fromEntries(keys.map((key) => [key, row[key]]))) });
    await mkdir(dirname(snapshotPath), { recursive: true });
    await writeFile(snapshotPath, JSON.stringify(snapshot, null, 2) + '\n');
  } else {
    snapshot = await readSnapshot();
  }
  for (const [path, content] of Object.entries(render(snapshot))) {
    const target = resolve(root, path);
    if (mode === '--check') assert.equal(await readFile(target, 'utf8'), content, `Outdated: ${path}`);
    else {
      await mkdir(dirname(target), { recursive: true });
      await writeFile(target, content);
    }
  }
  console.log(JSON.stringify({ mode, projects: snapshot.projects.length,
    technologies: new Set(snapshot.projects.flatMap((p) => p.techStack)).size,
    capturedAt: snapshot.capturedAt }));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
