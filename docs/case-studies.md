# 대표 사례

[README](../README.md) · [기술 스택](stack.md) · [근거 기준](evidence.md)

문제와 구현 선택이 드러나는 사례를 골랐습니다. 공개 소개와 선별 코드 확인에 근거한 설명이며, 이번 문서 작성이 제품 전체의 새 인수 테스트는 아닙니다.

## 1. LMML: 공연 정보의 표현과 편집

[공개 소개](https://p1zza.kr/portfolio/lmml) · [서비스](https://lmml.kr)

**문제:** 공연은 한 날짜·한 장소·단일 가격만으로 표현되지 않습니다. 여러 날짜와 장소, 언어별 밴드명, 조건부 요금, 별도 예매 상품을 구분해야 합니다.

**설계 선택:** 날짜별 회차와 장소별 정보를 구분하고, 묶음 페이지와 개별 회차의 책임을 나눕니다. 사람이 수정한 표시명과 밴드의 동일성을 같은 값으로 취급하지 않습니다. 소셜 공지에서 추출한 정보도 원본 확인과 수동 수정 경로를 거칩니다.

**구현 범위:** Next.js·React·TypeScript 화면, Drizzle·SQLite 데이터 계층, 한국어·영어 콘텐츠, DeepSeek 기반 정보 추출, R2 포스터 저장, 공연 정보와 SEO 표현을 연결합니다.

**확인 방식:** 저장 응답만 보는 대신 수정 화면 재진입·영속 데이터 재조회·공개 화면을 각각 확인합니다. 다국어 배열의 추가·삭제·순서 변경처럼 동일성에 영향을 주는 수정은 회귀 시나리오로 나눕니다.

**경계:** 확인되지 않은 공연 정보는 추정하지 않습니다. 로컬 수정·PR 통과·운영 배포는 별개입니다. Google 색인 요청 접수도 최종 색인 완료와 다릅니다. 이 문서가 특정 최신 수정의 운영 배포를 보증하지는 않습니다.

## 2. circlr: 전체 곡 구조와 세부 편집의 연결

[공개 소개](https://p1zza.kr/portfolio/circlr)

**문제:** 곡의 큰 구조를 살펴보는 작업과 개별 MIDI·오디오 구간을 편집하는 작업을 이어야 합니다.

**설계 선택:** 앨범·곡·섹션을 원형 타임라인으로 표현하고, native 화면과 핵심 모델·오디오 처리를 분리합니다. 프로젝트 저장과 내보내기를 편집 흐름에 연결합니다.

**구현 범위:** Swift Package Manager의 core·audio·app target, SwiftUI·AppKit 화면, AVFAudio·AudioToolbox·CoreMIDI 기반 처리, Python MCP 연결을 확인했습니다.

**확인 방식:** 모델 테스트와 파일 읽기·쓰기, 실제 native 앱 화면·오디오 장치 확인을 서로 다른 검증으로 취급합니다.

**경계:** 앱에 오디오 코드가 있다는 사실만으로 모든 장치의 녹음·호스트·외부 플러그인 호환성을 보증하지 않습니다. 상용 DAW를 대체하는 완성도나 실시간 성능 수치를 주장하지 않습니다.

## 3. MixManifest·AAF Trans: 원본을 보존하는 파일 도구

[MixManifest](https://p1zza.kr/portfolio/mixmanifest) · [AAF Trans](https://p1zza.kr/portfolio/aaf-trans)

**문제:** 프로젝트나 교환 파일을 읽고 정리하더라도, 원본을 잃거나 불확실한 해석을 확정 정보로 제시해서는 안 됩니다.

**설계 선택:** 읽어낸 정보의 출처를 남기고, 변환은 복제본에 적용한 뒤 구조와 오디오 지문을 확인합니다. 해석하지 못한 필드는 지원 범위 밖으로 명시합니다.

**구현 범위:** MixManifest는 Swift·Foundation·CryptoKit으로 저장된 `.logicx` 패키지를 분석하고 JSON·텍스트로 결과를 내보냅니다. AAF Trans는 Python·pyaaf2 CLI로 타임라인 길이·타임코드·트랙명·PCM 메타데이터를 검사·정규화합니다.

**구현의 출발점:** MixManifest의 read-only parser는 [logicxkit](https://github.com/phierceweb/logicxkit/tree/75b58fbf597a2ea1296b68323c09c7e3bed84ff6)의 binary field knowledge와 일부 parsing logic을 참고·이식한 Swift adaptation입니다. 원저작자 Mike Farr의 Apache-2.0 작업과, native Swift의 범위 검사·진단·manifest 내보내기·macOS UI를 구분합니다. 독자적으로 전체 포맷을 규명했다고 주장하지 않습니다.

**확인 방식:** 입력과 출력의 구조·길이·메타데이터를 비교합니다. 파일 파싱 성공과 실제 DAW에서의 재열기는 별도로 확인해야 합니다.

**경계:** Logic Pro의 전체 내부 포맷이나 모든 AAF 구현의 호환성을 주장하지 않습니다. 외부 parser·라이브러리와 참고 구현의 저작권·attribution을 존중합니다.

## 4. Drum Editor·오디오 플러그인: 공통 편집과 처리 경계

[Drum Editor](https://p1zza.kr/portfolio/drum-editor) · [Realtime Restore](https://p1zza.kr/portfolio/realtime-restore) · [YAMMY](https://p1zza.kr/portfolio/yammy)

**문제:** 멀티마이크 드럼은 트랙마다 임의로 편집하면 마이크 간 시간 관계가 달라질 수 있습니다. 실시간 이펙트는 편집 UI와 신호 처리, 상태 저장을 함께 다뤄야 합니다.

**설계 선택:** Drum Editor는 기준 타격의 공통 편집을 여러 마이크에 적용하고 원본을 보존합니다. 플러그인은 DSP·parameter·상태 저장·UI를 구분해 구성합니다.

**구현 범위:** C++·JUCE·CMake 기반의 편집·렌더링, WAV/BWF 파일, pitch shifting과 오디오 복원 처리, AU·VST3·standalone target을 확인했습니다.

**확인 방식:** DSP·파일 테스트, native build, standalone 실행, DAW host 검증과 청취를 별도 단계로 봅니다.

**경계:** 일부 플러그인은 개발 단계입니다. build target이나 처리 코드가 존재한다고 상용 제품의 성숙도·무결점 음질·모든 host 지원이 검증된 것은 아닙니다.

## 5. CMS·비동기 작업: 사용자 화면 밖의 관리 기능

[갈릭톤 스튜디오](https://p1zza.kr/portfolio/garlicton) · [WP Manager](https://p1zza.kr/portfolio/wp-manager)

**문제:** 공개 화면만으로는 콘텐츠의 수정·게시·예약·실패 처리를 관리하기 어렵습니다.

**설계 선택:** 공개 조회와 관리자 변경의 권한을 나누고, 콘텐츠 모델과 미디어·문의 연동을 관리 화면에 연결합니다. 오래 걸리는 게시 작업은 API와 작업자로 나눕니다.

**구현 범위:** Next.js·Payload CMS·SQLite를 통한 콘텐츠 관리, FastAPI·SQLAlchemy·Celery·Redis·PostgreSQL을 통한 작업 관리 구성을 확인했습니다.

**확인 방식:** 화면 동작, 저장 결과, 작업 실행, 외부 서비스의 접수와 최종 결과를 구분해 기록합니다.

**경계:** 메일 API 접수가 수신함 도착을 의미하지 않고, 예약 생성이 실제 실행을 뜻하지 않습니다. 모든 외부 게시·복구 경로를 이번 문서 작업에서 재실행하지 않았습니다.
