# 전성운 | h4ppy p1zza

공연 정보를 정리하는 웹 서비스와 macOS 음악 작업 도구를 만듭니다. LMML에서는 공연 일정과 라인업·예매 정보를, circlr에서는 곡의 구조와 MIDI·오디오를 다룹니다.

[프로젝트 포트폴리오 보기](https://p1zza.kr/portfolio)

## 대표 작업

### [LMML](https://p1zza.kr/portfolio/lmml)

한국 메탈·하드코어·록 공연의 일정과 라인업, 공연장과 예매 정보를 모아 보여주는 서비스입니다. Next.js·TypeScript로 공개·관리자 화면을 만들고, Drizzle·SQLite로 공연 정보를 저장합니다. 한국어·영어 콘텐츠와 DeepSeek를 이용한 정보 추출을 함께 다룹니다.

### [circlr](https://p1zza.kr/portfolio/circlr)

원형 타임라인으로 곡의 구조를 살펴보고 MIDI·오디오를 편집하는 macOS 앱입니다. SwiftUI·AppKit 화면과 핵심 모델·오디오 처리를 나누어 구현했습니다. 곡 전체를 보는 화면에서 세부 편집과 프로젝트 저장·내보내기로 이어지는 흐름을 만듭니다.

### [MixManifest](https://p1zza.kr/portfolio/mixmanifest)

저장된 Logic Pro 프로젝트에서 트랙과 채널 정보를 읽고 JSON·텍스트로 기록하는 macOS 앱입니다. logicxkit을 참고·이식한 parser에 Swift 범위 검사와 진단, 내보내기와 UI를 더했습니다. 해석하는 필드와 원본 구현의 출처는 [사례 문서](docs/case-studies.md)에 적었습니다.

### [Drum Editor](https://p1zza.kr/portfolio/drum-editor)

멀티마이크 드럼 녹음에 같은 편집을 적용해 타이밍을 정리하는 macOS 앱입니다. 마이크마다 따로 편집할 때 생기는 시간 관계의 변화를 줄이는 데 초점을 두고, C++·JUCE로 원본을 보존하는 편집과 WAV/BWF 내보내기를 구현했습니다.

## 배경과 작업 방식

기자·콘텐츠 제작·마케팅·금융 분야의 일을 거쳐 개발을 하고 있습니다. 정보를 이해하고 정리하는 경험은 웹 서비스에, 음악 작업에서 생기는 필요는 파일·오디오 도구에 연결하고 있습니다. [프로필 더 읽기](https://p1zza.kr/profile)

웹에서는 저장한 값을 다시 열어 확인하고, 파일 도구에서는 원본과 결과를 함께 살핍니다. AI도 구현과 조사·검토에 사용하며, 변경 내용과 실제 동작을 직접 확인합니다.

## 더 읽기

- [대표 사례](docs/case-studies.md): 각 작업의 문제와 구현 선택
- [사용한 기술](docs/stack.md) · [개발·검증 방식](docs/engineering.md)
- [프로젝트 아카이브](docs/project-index.md) · [기술별 프로젝트](docs/technology-index.md)
- [자료와 공개 범위](docs/evidence.md) · [참고와 출처](docs/references.md) · [변경 기록](CHANGELOG.md)

## 연락

작업에 관한 이야기는 [문의 페이지](https://p1zza.kr/inquiry)로 보내주세요. 공개 활동은 [GitHub](https://github.com/zeztto)에서도 볼 수 있습니다.

공개 자료 기준: **2026-10-27** · 문서 버전: **1.0.2**.
