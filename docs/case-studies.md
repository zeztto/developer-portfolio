# 대표 사례

[README](../README.md) · [사용한 기술](stack.md) · [자료와 공개 범위](evidence.md)

## LMML: 공연 정보를 찾고 수정하는 일

[공개 소개](https://p1zza.kr/portfolio/lmml) · [서비스](https://lmml.kr)

LMML은 한국 메탈·하드코어·록 공연의 일정과 라인업, 공연장과 예매 정보를 모아 보여주는 서비스입니다. Next.js·React·TypeScript로 공개·관리자 화면을, Drizzle·SQLite로 데이터 계층을 구현했습니다. 한국어·영어 콘텐츠, DeepSeek 기반 정보 추출, R2 포스터 저장과 SEO 표현을 연결합니다.

공연 정보를 다룰 때는 날짜·장소·가격이 항상 하나씩 대응하지 않습니다. 여러 날짜의 회차와 장소, 묶음 페이지와 개별 회차, 조건부 요금과 별도 예매 상품을 어떻게 나눌지가 설계에서 다루는 문제입니다.

라인업 편집에서는 사람이 수정한 표시명과 밴드의 동일성을 함께 다뤄야 합니다. 언어별 목록의 추가·삭제·순서 변경을 살피고, 저장 뒤 편집 화면에 다시 들어갔을 때와 공개 화면에 표시되는 값을 확인합니다. 소셜 공지에서 추출한 정보에도 원본 확인과 수동 수정 경로를 둡니다.

## circlr: 곡 전체에서 세부 편집으로

[공개 소개](https://p1zza.kr/portfolio/circlr)

circlr는 곡의 구조를 원형 타임라인으로 보여주는 macOS 음악 작업 앱입니다. 앨범·곡·섹션의 큰 흐름을 살펴보는 일과 개별 MIDI·오디오 구간을 편집하는 일을 한 앱에서 다룹니다.

SwiftUI·AppKit으로 화면을 만들고, 핵심 모델과 오디오 처리는 Swift Package Manager의 core·audio·app target으로 나누었습니다. 화면의 편집 상태와 파일·오디오 처리를 따로 다루면서 프로젝트 저장과 내보내기를 편집 흐름에 연결합니다. 오디오·MIDI 처리에는 AVFAudio·AudioToolbox·CoreMIDI를, 로컬 도구 연결에는 Python MCP를 사용합니다.

모델과 파일 읽기·쓰기 테스트에 더해 native 화면과 오디오 장치를 살핍니다. 장치·외부 플러그인 host별 호환성과 실시간 성능은 각각 실행해 확인해야 하는 범위입니다.

## MixManifest: 저장된 Logic Pro 프로젝트를 기록으로

[공개 소개](https://p1zza.kr/portfolio/mixmanifest)

MixManifest는 저장된 `.logicx` 패키지에서 트랙과 채널 정보를 읽고 JSON·텍스트로 내보내는 macOS 앱입니다. 프로젝트를 수정하지 않고 읽어낸 정보와 그 출처를 남깁니다. Swift·Foundation·CryptoKit을 사용하며, 해석할 수 없는 필드는 지원 범위 밖으로 표시합니다.

read-only parser의 출발점은 Mike Farr의 Apache-2.0 프로젝트인 [logicxkit](https://github.com/phierceweb/logicxkit/tree/75b58fbf597a2ea1296b68323c09c7e3bed84ff6)입니다. 포맷 정보와 일부 parsing logic을 참고·이식한 Swift adaptation이며, 여기에 native Swift 범위 검사·진단·manifest 내보내기·macOS UI를 더했습니다.

입력에서 읽은 구조와 메타데이터를 출력 결과와 비교합니다. 지원 범위는 parser가 해석하는 필드이며, Logic Pro의 전체 내부 포맷을 독자적으로 규명한 도구는 아닙니다.

## Drum Editor: 여러 마이크에 같은 편집 적용하기

[공개 소개](https://p1zza.kr/portfolio/drum-editor)

멀티마이크 드럼 녹음은 같은 타격을 여러 마이크가 함께 담습니다. 트랙마다 따로 편집하면 마이크 사이의 시간 관계도 달라질 수 있어, Drum Editor에서는 기준 타격에 대한 공통 편집을 여러 트랙에 적용합니다.

C++·JUCE로 편집·렌더링을 구현하고 CMake로 build를 구성했습니다. 원본을 보존하면서 편집 결과를 WAV/BWF로 내보내는 흐름을 다룹니다. 파일 처리 테스트와 native 실행, DAW에서의 재열기·청취는 각각 살펴야 합니다. 모든 DAW의 호환성이나 음질 개선 수치를 제시하는 사례는 아닙니다.

## 함께 만든 도구

### AAF Trans

[AAF Trans](https://p1zza.kr/portfolio/aaf-trans)는 Python·pyaaf2 기반 CLI입니다. AAF 타임라인 길이·타임코드·트랙명·내장 PCM 메타데이터를 검사하고 정규화합니다. 변환은 복제본에 적용하며 구조와 오디오 지문을 비교합니다. 파일 검사 통과와 실제 DAW에서의 재열기는 별도 확인 항목입니다.

### 콘텐츠와 게시 작업 관리

[갈릭톤 스튜디오](https://p1zza.kr/portfolio/garlicton)에서는 Next.js·Payload CMS·SQLite로 음반·서비스·공간 콘텐츠와 한국어·영어 화면을 연결했습니다. [WP Manager](https://p1zza.kr/portfolio/wp-manager)에서는 FastAPI·SQLAlchemy로 API·데이터 계층을, Celery·Redis·PostgreSQL로 비동기 게시 작업 구성을 다룹니다. 예약을 만든 뒤 실제 작업이 실행됐는지, 문의가 접수된 뒤 메일이 도착했는지까지 따로 확인해야 합니다.

### 실시간 오디오 플러그인

[Realtime Restore](https://p1zza.kr/portfolio/realtime-restore)와 [YAMMY](https://p1zza.kr/portfolio/yammy)에서는 JUCE 기반 신호 처리와 parameter·상태 저장·UI를 다룹니다. AU·VST3·standalone target이 있으며, 개발 단계인 플러그인의 host 지원과 청취 결과는 개별 검증이 필요합니다.
