# 전성운 | h4ppy p1zza

**웹 서비스를 개발·운영하고, macOS 음악 작업 도구를 만듭니다.**

공연 정보를 정리하는 웹 서비스부터 MIDI·오디오 편집 앱까지, 실제 작업에서 생기는 불편을 소프트웨어로 해결합니다. 화면과 API를 만드는 데서 끝내지 않고, 정보가 정확히 저장되는지와 배포된 화면에 반영되는지까지 확인하는 개발을 지향합니다.

[프로젝트 포트폴리오](https://p1zza.kr/portfolio) · [프로필](https://p1zza.kr/profile) · [GitHub](https://github.com/zeztto) · [문의](https://p1zza.kr/inquiry)

## 한눈에 보기

| 분야 | 주로 다루는 기술 | 만드는 것 |
| --- | --- | --- |
| 웹 서비스 | TypeScript, React, Next.js, Vite | 정보 서비스, 관리자 도구, 한국어·영어 화면 |
| 서버·데이터 | Node.js, Express, Python, FastAPI, PostgreSQL, SQLite, Drizzle ORM | API, 데이터 모델, 외부 연동, 비동기 작업 |
| macOS·오디오 | Swift, SwiftUI, AppKit, AVFAudio, C++, JUCE | 음악 작업 앱, 파일 분석 도구, 오디오 플러그인 |
| AI 활용 | DeepSeek·OpenAI·Gemini API, MCP, 역할별 개발 워크플로 | 정보 추출, 생성 기능 연동, 개발·검토 자동화 |
| 전달·운영 | Git, PR 리뷰, Docker, Docker Compose, Caddy, 자동화 테스트 | 재현 가능한 수정, 데이터 보존, 배포 후 확인 |

기술별 사용 맥락과 확인 수준은 [기술 스택](docs/stack.md)에 정리했습니다. 이 표는 모든 기술에 같은 숙련도나 상용 운영 실적이 있다는 뜻이 아닙니다.

## 대표 프로젝트

| 프로젝트 | 해결하는 문제 | 기술·구현 초점 |
| --- | --- | --- |
| [lmml.kr](https://p1zza.kr/portfolio/lmml) | 흩어진 국내 공연 정보의 탐색과 관리 | Next.js, 다국어, 공연·장소·라인업 모델, AI 정보 추출, SEO |
| [circlr](https://p1zza.kr/portfolio/circlr) | 곡의 전체 구조와 세부 편집을 오가는 음악 작업 | SwiftUI·AppKit, 원형 타임라인, MIDI·오디오, 로컬 MCP 연결 |
| [MixManifest](https://p1zza.kr/portfolio/mixmanifest) | 저장된 Logic Pro 프로젝트 정보의 확인·기록 | Swift, 파일 파싱, 출처 추적, JSON·텍스트 내보내기 |
| [Drum Editor](https://p1zza.kr/portfolio/drum-editor) | 멀티마이크 드럼 녹음의 공통 타이밍 편집 | C++, JUCE, 원본 보존, 공통 편집과 BWF 내보내기 |
| [AAF Trans](https://p1zza.kr/portfolio/aaf-trans) | AAF 타임라인·PCM 메타데이터의 검사와 정규화 | Python, pyaaf2, CLI, 복제본 처리·검증 |
| [갈릭톤 스튜디오](https://p1zza.kr/portfolio/garlicton) | 음반·서비스·공간 소개와 콘텐츠 관리 | Next.js, Payload CMS, SQLite, 한국어·영어 콘텐츠 |
| [WP Manager](https://p1zza.kr/portfolio/wp-manager) | 여러 블로그와 게시 작업의 관리 | FastAPI, Celery, Redis, PostgreSQL, React |

이 링크들은 공개 소개 페이지입니다. 소개가 존재한다는 사실과 현재의 제품 동작·배포·상용 이용 실적은 구분합니다. 프로젝트 소스와 운영 자료는 이 저장소에 포함하지 않습니다.

## 개발 이력과 방향

기자·콘텐츠 제작·마케팅·금융 분야의 일을 거쳐 개발을 하고 있습니다. 정보를 이해하고 구조화하는 경험을 웹 서비스와 관리 도구에, 음악 작업에서 발견한 필요를 macOS·오디오 도구에 연결하고 있습니다. 회사명·재직 기간·직함은 확인되지 않은 내용을 덧붙이지 않았습니다. [공개 프로필](https://p1zza.kr/profile)

주요 관심사는 다음 세 가지입니다.

- **정보를 다루기 쉬운 구조로 바꾸기:** 공연의 날짜·장소·출연진과 예매 조건을 구분하고, 편집 화면과 공개 화면이 같은 정보를 보도록 구성합니다.
- **작업 원본을 보존하기:** 오디오·프로젝트 파일을 분석하거나 변환할 때 원본과 결과를 구분하고, 해석할 수 있는 범위를 명시합니다.
- **AI 결과도 검증하기:** AI를 개발과 기능 구현에 활용하되, 제안·구현·테스트·배포·실제 확인을 서로 다른 단계로 취급합니다.

## 문서 탐색

| 문서 | 내용 |
| --- | --- |
| [기술 스택](docs/stack.md) | 분야별 역량과 실제 적용 맥락, 확인 수준 |
| [전체 공개 프로젝트](docs/project-index.md) | 공개 포트폴리오의 날짜 기준 목록 |
| [기술 역색인](docs/technology-index.md) | 공개 목록의 모든 기술명과 해당 프로젝트 |
| [대표 사례](docs/case-studies.md) | 문제 → 설계 선택 → 구현 범위 → 확인 경계 |
| [개발·검증 방식](docs/engineering.md) | AI 협업, 회귀 테스트, 데이터 보존, 릴리스 확인 |
| [근거와 공개 범위](docs/evidence.md) | 공개 출처, 비공개 구현 확인의 한계, 경력 서술 기준 |
| [참고한 오픈소스 문서](docs/references.md) | VS Code·Next.js·FastAPI·Awesome에서 참고한 구조 |
| [변경 기록](CHANGELOG.md) | 포트폴리오 문서 버전 |

## 범위와 유지관리

- 기준일: **2026-10-27**, 문서 버전: **1.0.0**.
- 전체 목록은 공개 프로젝트 데이터의 스냅샷입니다. 항목 수는 개발 연차·고객 수·납품 건수·독립 원작 수를 뜻하지 않습니다.
- 핵심 사례는 실제 코드의 사용 흔적을 교차 확인했습니다. 이번 문서 작업에서 모든 프로젝트를 빌드하거나 재배포하지는 않았습니다.
- 비공개 저장소, 고객 정보, 운영 환경·로그, 개인정보, 자격 증명은 공개하지 않습니다.
- 정정 제안은 GitHub Issue로 받습니다. 문의나 보안 제보에 비밀번호·인증 코드·고객 데이터를 첨부하지 마세요.

외부 기술·제품·오픈소스는 각 소유자의 작업입니다. 사용·참고 사실은 해당 조직과의 고용·제휴·보증 또는 upstream 기여를 의미하지 않습니다.
