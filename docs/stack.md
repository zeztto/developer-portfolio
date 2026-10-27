# 사용한 기술

[README](../README.md) · [기술별 프로젝트](technology-index.md) · [자료와 공개 범위](evidence.md)

대표 작업에서 맡은 구현을 중심으로 설명합니다. 공개 목록에 기재된 모든 기술과 사용 프로젝트는 [기술별 프로젝트](technology-index.md)에서 볼 수 있습니다.

## 웹 서비스와 데이터

[LMML](https://p1zza.kr/portfolio/lmml)에서는 TypeScript·React·Next.js로 공개·관리자 화면과 API를 만듭니다. Drizzle ORM·SQLite로 공연 정보를 저장하고, next-intl로 한국어·영어 콘텐츠를 연결합니다. 포스터 저장에는 Cloudflare R2를 사용합니다. 화면에서 수정한 정보가 저장과 조회를 거쳐 다시 표시되는 흐름을 함께 다룹니다.

[갈릭톤 스튜디오](https://p1zza.kr/portfolio/garlicton)는 콘텐츠 수정이 중심인 웹사이트입니다. Next.js에 Payload CMS·Lexical·SQLite를 연결해 음반·서비스·공간 소개를 관리하고, Sass로 화면을 구성했습니다.

[WP Manager](https://p1zza.kr/portfolio/wp-manager)는 여러 블로그의 게시 작업을 다룹니다. FastAPI·SQLAlchemy로 API와 데이터 계층을 구성하고, 오래 걸리는 작업은 Celery·Redis 작업자로 나눕니다. React 화면과 PostgreSQL 저장소를 연결합니다.

## macOS 앱과 프로젝트 파일

SwiftUI·AppKit은 [circlr](https://p1zza.kr/portfolio/circlr)와 [MixManifest](https://p1zza.kr/portfolio/mixmanifest)의 화면을 만드는 데 사용합니다. circlr는 곡의 구조와 편집 상태를 다루는 모델, AVFAudio·AudioToolbox·CoreMIDI를 쓰는 오디오·MIDI 처리, 앱 화면을 나누어 구성했습니다.

MixManifest는 Foundation·CryptoKit으로 저장된 Logic Pro 프로젝트를 읽고 결과를 기록합니다. parser에는 logicxkit의 포맷 정보와 일부 parsing logic을 참고·이식했으며, Swift 범위 검사·진단과 macOS UI를 더했습니다. 원저작자와 라이선스는 [대표 사례](case-studies.md)에 적었습니다. 해석 범위는 지원하는 필드에 한정합니다.

## 오디오 편집과 교환 파일

[Drum Editor](https://p1zza.kr/portfolio/drum-editor)는 C++·JUCE·CMake로 멀티마이크 공통 편집과 WAV/BWF 내보내기를 구현했습니다. [Realtime Restore](https://p1zza.kr/portfolio/realtime-restore)와 [YAMMY](https://p1zza.kr/portfolio/yammy)에서도 JUCE를 사용해 신호 처리·parameter·상태 저장·UI를 다룹니다. DAW host별 호환성과 청취 결과는 build target과 별도로 확인합니다.

[AAF Trans](https://p1zza.kr/portfolio/aaf-trans)에서는 Python·pyaaf2로 타임라인과 PCM 메타데이터를 검사합니다. 파일을 변환할 때 복제본을 사용하고, 구조와 오디오 지문을 비교합니다.

## AI 기능과 개발 도구

LMML의 공연 정보 추출에는 DeepSeek API를, circlr의 로컬 도구 연결에는 Python MCP를 사용합니다. AI가 만든 정보에도 원본을 확인하고 사람이 수정할 수 있는 경로를 둡니다.

개발 과정에서도 AI로 조사·구현·검토를 진행합니다. ECC 기반 workflow 확장의 범위와 변경 검토 방식은 [개발·검증 방식](engineering.md)에 설명했습니다.

## 검사와 운영 도구

Git·GitHub PR로 변경을 검토하고 버전·변경 기록을 관리합니다. 프로젝트에 맞춰 TypeScript 검사, Vitest·pytest·Swift test·CTest 등을 사용합니다. 웹 화면은 브라우저에서 입력·저장·재조회와 한국어 줄바꿈을, native 앱은 창·편집·파일 흐름을 확인합니다.

배포 환경에는 Docker·Docker Compose·Caddy를 사용합니다. 공유 환경에서는 변경 대상과 보존할 서비스를 먼저 정하고, 배포한 버전과 실제 화면의 결과를 확인합니다.
