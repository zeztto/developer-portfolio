# 전성운 | h4ppy p1zza

React·Next.js·TypeScript로 웹 서비스를 만들고 운영합니다.

[LMML](https://lmml.kr/) · [p1zza.kr](https://p1zza.kr/) · [텍스트 분석기 공개 코드](https://github.com/zeztto/text-inspector-web)

## 대표 웹 서비스

### LMML 공연 정보 서비스

Next.js·React·TypeScript로 공연 일정과 라인업을 보여주는 공개 화면과 공연 정보 관리 화면을 구현했습니다. 다국어 라인업을 편집한 뒤 다시 열어 저장된 값을 확인하고, 공개 화면의 표시와도 비교했습니다. [서비스 열기](https://lmml.kr/) · [구현 사례](https://p1zza.kr/portfolio/lmml)

### p1zza.kr 개인 포트폴리오

프로젝트 목록·상세 화면을 만들고 공개 데이터 API를 연결했습니다. 데이터를 불러오는 중과 요청이 실패했을 때의 화면을 처리했습니다. 프로젝트 링크와 스크린샷을 갱신한 뒤 PC와 모바일에서 상세 화면을 거쳐 실제 서비스로 이동할 수 있는지 확인했습니다. [홈페이지](https://p1zza.kr/) · [프로젝트 목록](https://p1zza.kr/portfolio)

## Codex 활용과 검증

Codex에 구현할 기능과 수정 범위, 확인할 동작을 먼저 전달합니다. 변경된 코드를 직접 읽고, 실패 상황을 재현하는 회귀 테스트와 실제 화면으로 결과를 확인합니다. 텍스트 분석기에서는 두 업로드가 겹칠 때 이전 결과가 최신 화면을 덮지 않는지 테스트로 남겼습니다. [회귀 테스트](https://github.com/zeztto/text-inspector-web/blob/f2a887aed5b5ef81bc0091d592e3dd6e460bf217/tests/upload-race.test.ts) · [개발·검증 방식](docs/engineering.md)

## 함께 볼 프로젝트

- **텍스트 분석기** · React·TypeScript로 TXT·Markdown·PDF·DOCX를 브라우저에서 읽고 문서 통계를 표시합니다. [실행](https://portfolio-text-inspector-web.vercel.app/) · [공개 코드](https://github.com/zeztto/text-inspector-web)
- **갈릭톤 스튜디오** · Next.js와 Payload CMS로 음반·서비스·공간 정보를 관리하고 한국어·영어 페이지에 연결한 웹 서비스입니다. [서비스](https://www.garlicton.com/ko) · [구현 사례](https://p1zza.kr/portfolio/garlicton)
- **오디오 노멀라이저** · React·TypeScript로 브라우저에서 오디오 파형을 표시하고, Peak·RMS를 조정한 뒤 WAV로 저장하는 도구입니다. [실행](https://portfolio-audio-normalizer-web.vercel.app/)
- **circlr** · 곡의 구조를 원형 타임라인에서 보고 MIDI·오디오를 편집하는 macOS 앱입니다. [구현 사례](https://p1zza.kr/portfolio/circlr) · [공개 코드](https://github.com/zeztto/circlr-app)

## 더 보기

- [공개 코드 20개](docs/public-code.md) · [대표 사례](docs/case-studies.md) · [사용한 기술](docs/stack.md)
- [프로젝트 아카이브](docs/project-index.md) · [기술별 프로젝트](docs/technology-index.md)
- [자료와 공개 범위](docs/evidence.md) · [참고와 출처](docs/references.md) · [변경 기록](CHANGELOG.md)

기자·콘텐츠 제작·마케팅을 거쳐 웹 서비스를 개발하고 있습니다. [프로필](https://p1zza.kr/profile) · [문의](https://p1zza.kr/inquiry)

2026-11-16 · 문서 버전 **1.1.1**
