# 기술 스택

[README](../README.md) · [모든 기술의 프로젝트 역색인](technology-index.md) · [근거 기준](evidence.md)

기준일: 2026-10-27. 기술명을 많이 나열하기보다 **어떤 작업에서 어떻게 사용했는지**를 중심으로 정리했습니다.

## 확인 수준

| 구분 | 의미 |
| --- | --- |
| 구현 교차 확인 | 공개 소개와 실제 manifest·선별 구현의 연결을 확인했습니다. 전체 코드 감사나 실행 검증은 아닙니다. |
| 공개 소개 기준 | 공개 프로젝트에 기재된 기술입니다. 이번 작성에서 구현을 별도로 검증하지 않았습니다. |
| 개발·운영 절차 | 실제 작업에서 사용하는 방식입니다. 가용성·성능·인증 획득 같은 수치 성과를 주장하지 않습니다. |

## 언어와 실행 환경

| 기술 | 적용 맥락 | 확인 수준 |
| --- | --- | --- |
| TypeScript·JavaScript | React 화면, Next.js 서버, API 계약, 브라우저 도구 | 구현 교차 확인 |
| Swift | macOS 앱, 오디오 편집, 프로젝트 파일 분석 | 구현 교차 확인 |
| C++ | JUCE 기반 오디오 앱·플러그인, 신호 처리 | 구현 교차 확인 |
| Python | AAF 검사·변환, API·작업자, 로컬 도구 연결 | 구현 교차 확인 |
| SQL | PostgreSQL·SQLite 모델과 ORM을 통한 영속성 관리 | 구현 교차 확인 |
| HTML·CSS·Sass | 반응형 화면, 콘텐츠 사이트, 컴포넌트 스타일 | 구현 교차 확인 |
| Ruby / Go / Rust / Flutter | Rails 채팅, 게임 서버, Rust 웹, 모바일 관련 프로젝트에 기재 | 공개 소개 기준. Flutter는 언어가 아닌 UI toolkit이며 Dart 숙련도를 별도로 주장하지 않음 |

## Frontend

| 기술 | 실제 적용 예 | 확인 수준 |
| --- | --- | --- |
| React·Next.js | [LMML](https://p1zza.kr/portfolio/lmml)의 공개·관리자·다국어 화면 | 구현 교차 확인 |
| Vite | [p1zza.kr](https://p1zza.kr)의 웹 앱, 브라우저 기반 도구 | 구현 교차 확인 |
| Tailwind CSS·Sass | 정보 밀도가 높은 관리 화면과 스튜디오 콘텐츠 화면 | 구현 교차 확인 |
| next-intl | LMML의 한국어·영어 콘텐츠와 탐색 | 구현 교차 확인 |
| Zustand·TanStack Query·React Router | 화면 상태, 데이터 조회, 클라이언트 라우팅 | 공개 소개 기준. 해당 프로젝트는 기술 역색인 참조 |
| Radix UI·shadcn/ui·Lucide | 공통 UI와 아이콘 | 공개 소개 기준 |
| Framer Motion·GSAP·dnd-kit | 모션과 drag-and-drop 인터랙션 | 공개 소개 기준 |
| Canvas·Web Audio·FFmpeg.wasm | 브라우저 오디오·미디어 처리 | 오디오 변환 구현 교차 확인, 나머지는 공개 소개 기준 |

## Backend·데이터

| 기술 | 적용 맥락 | 확인 수준 |
| --- | --- | --- |
| Node.js·Express | 포트폴리오 공개 API·인증·관리 기능의 서버 구성 | 구현 교차 확인 |
| Next.js Route Handlers | LMML의 공연 저장·조회와 관리자 API | 구현 교차 확인 |
| FastAPI·SQLAlchemy | [WP Manager](https://p1zza.kr/portfolio/wp-manager)의 API·데이터 계층 | 구현 교차 확인 |
| Celery·Redis | WP Manager의 비동기 작업자 연결 | 구현 교차 확인. 모든 작업의 성공을 보증하지 않음 |
| PostgreSQL·SQLite·libSQL | 웹 서비스 데이터와 경량 운영 데이터 저장 | 구현 교차 확인 |
| Drizzle ORM·Prisma | 타입 기반 데이터 계층, 스키마와 업무 모델 | 구현 교차 확인 |
| Payload CMS·Lexical | [갈릭톤 스튜디오](https://p1zza.kr/portfolio/garlicton)의 콘텐츠 관리 | 구현 교차 확인 |
| Fastify·NestJS·TypeORM·BullMQ | 업무 API·관리 도구·작업 큐 | 공개 소개 기준. NestJS·TypeORM은 별도 비공개 구현에서도 사용 흔적 확인 |
| Ruby on Rails·ActionCable·PeerJS·WebRTC | [Anonymo.live](https://p1zza.kr/portfolio/anonymo-live)의 채팅·연결 | manifest와 연결 코드 확인. 모든 네트워크에서의 통신 성공은 미검증 |
| Supabase·Turso·PostGIS·Hono·Axum | 공개 목록의 데이터 서비스·공간 데이터·웹 서버 기술 | 공개 소개 기준 |

## 인증·저장소·외부 서비스

- **Google OAuth, 세션·JWT:** 관리자 접근과 사용자 인증의 경계를 구성합니다. provider 설정과 실제 로그인 성공은 별도 검증 항목으로 다룹니다.
- **Auth.js, NextAuth.js, Kakao OAuth:** 공개 프로젝트에 기재된 인증 기술입니다. 모든 provider의 현재 운영 상태를 의미하지 않습니다.
- **Cloudflare R2·S3 API·Cloudinary:** 포스터·미디어 업로드와 공개 조회를 연결합니다. 저장소 키·계정·내부 경로는 공개하지 않습니다.
- **문서·미디어 도구:** 공개 목록에는 PDF.js, Mammoth.js, jsPDF, xlsx, JSZip, FFmpeg 등이 포함됩니다. 각 사용 프로젝트는 [역색인](technology-index.md)에서 확인할 수 있습니다.

## AI·개발 도구 연동

| 영역 | 사용하는 기술·방식 | 경계 |
| --- | --- | --- |
| 제품 기능 | DeepSeek API, OpenAI API, Gemini API | 정보 추출·생성 기능 연동 경험이며 foundation model 학습 실적이 아님 |
| 로컬 음악 도구 | MCP와 Python을 통한 앱·도구 연결 | 로컬 연결 구현이며 외부 플랫폼 인증·보안 보증이 아님 |
| 개발 워크플로 | 역할별 작업 범위, 구현·리뷰 분리, 검증 결과와 handoff 기록 | AI 결과를 자동 승인하거나 배포하지 않음 |
| upstream 기반 확장 | [Everything Claude Code / ECC](https://github.com/affaan-m/ECC) 기반 도구별 adapter·규칙·검증 절차 확장 | 원본 아이디어·코드를 독자 창작으로 주장하지 않음 |

AI SDK 사용과 모델 연구·GPU serving·분산 학습은 다른 경험입니다. 확인하지 않은 ML infrastructure 경력은 포함하지 않았습니다.

## Native·오디오

| 기술 | 적용 예 | 구현의 초점 |
| --- | --- | --- |
| SwiftUI·AppKit | circlr, MixManifest | native 창과 편집 인터랙션, 파일 기반 작업 |
| AVFAudio·AVFoundation·AudioToolbox·CoreMIDI | circlr | 오디오 재생·렌더링과 MIDI 처리 |
| Foundation·CryptoKit | MixManifest | 프로젝트 구조 읽기, 결과 기록과 지문 처리 |
| C++·JUCE·CMake | Drum Editor, Realtime Restore, YAMMY | 오디오 처리와 플러그인·standalone build target |
| Python·pyaaf2 | AAF Trans | 타임라인·타임코드·PCM 메타데이터 검사와 정규화 |
| NumPy·SciPy·SoundFile·Gradio | [Drum Quanta](https://p1zza.kr/portfolio/drum-quanta) | 공개 소개에 기재된 분석·오디오 처리 환경 |

AU·VST3 target의 존재를 모든 DAW 호환·판매·음질 검증으로 확대하지 않습니다. 파일 포맷 분석도 해석 가능한 필드 범위로 한정합니다.

## 품질·운영

- Git·GitHub PR로 변경을 검토하고, 작업 버전·변경 기록을 관리합니다.
- Docker·Docker Compose·Caddy를 사용한 배포 환경을 다룹니다. 공유 환경에서는 대상 서비스와 보존 대상을 구분합니다.
- TypeScript 검사·ESLint·Node test runner·Vitest·pytest·Ruff·Swift test·CTest 등을 프로젝트에 맞게 사용합니다. 모든 프로젝트가 모든 도구를 쓰는 것은 아닙니다.
- 브라우저에서 저장·재조회와 반응형 화면을 확인하고, SEO의 canonical·언어별 링크·구조화된 데이터를 살핍니다.
- 의존성 보안 권고를 확인할 때 패치 출시·권고 철회·예외·실제 설치 상태를 구분합니다.

이 절차 자체를 보안 무결성·무중단·대규모 트래픽 처리의 실적으로 표현하지 않습니다. [개발·검증 방식](engineering.md)
