# 전성운 | h4ppy p1zza

공연 정보를 정리하는 웹 서비스와 macOS 음악 작업 도구를 만듭니다. LMML에서는 공연 일정과 라인업·예매 정보를, circlr에서는 곡의 구조와 MIDI·오디오를 다룹니다.

[공개 코드 20개](docs/public-code.md) · [프로젝트 포트폴리오](https://p1zza.kr/portfolio)

음악 작업 앱과 파일 도구, 브라우저 도구의 코드를 열어볼 수 있습니다.

## 공개한 코드

### 음악·파일 도구

- [circlr](https://github.com/zeztto/circlr-app): 원형 타임라인에서 곡 구조와 MIDI·오디오 편집
- [MixManifest](https://github.com/zeztto/mixmanifest): 저장된 Logic Pro 프로젝트의 트랙·채널 정보 기록
- [AAF Trans CLI](https://github.com/zeztto/aaf-trans-cli): AAF 타임라인·내장 PCM 메타데이터 검사와 정규화

### 브라우저 도구

- [다기능 계산기](https://github.com/zeztto/calculator-workbench): 네 계산 모드의 기본 연산·수식·행렬 계산
- [단위 변환기](https://github.com/zeztto/unit-converter-web): 길이·무게·온도·부피의 양방향 변환
- [비밀번호 생성기](https://github.com/zeztto/password-generator-web): 문자 구성을 선택한 난수 생성과 복사·TXT 내보내기
- [색상 팔레트](https://github.com/zeztto/color-palette-web): 색조 탐색과 HEX·RGB·HSL·CMYK 값 확인
- [메모모미](https://github.com/zeztto/memomome-web): 브라우저에 저장하고 다시 편집하는 메모장
- [텍스트 분석기](https://github.com/zeztto/text-inspector-web): 텍스트·문서의 글자·단어·문장과 빈도 분석
- [큐알잉](https://github.com/zeztto/qr-builder-web): 일곱 가지 정보의 QR PNG 생성
- [다국어 텍스트 생성기](https://github.com/zeztto/multilingual-text-generator): 11개 언어 어휘를 조합한 레이아웃 확인용 텍스트
- [이모지 모음](https://github.com/zeztto/emoji-finder-web): 이모지 탐색·복사와 즐겨찾기·최근 기록
- [포픽](https://github.com/zeztto/phopic-editor): 이미지 크롭·크기·색상 조정과 PNG·JPG·WebP 저장

### 게임·추첨

- [AFK HERO Desktop](https://github.com/zeztto/afk-hero-desktop): 자동 전투·장비 성장·오프라인 보상을 다루는 로컬 idle RPG
- [Tetrix](https://github.com/zeztto/tetrix-web): 키보드·화면 버튼으로 조작하는 낙하 블록 게임
- [카드 짝 맞추기](https://github.com/zeztto/memory-match-web): 난이도·테마를 고르고 브라우저에 개인 기록 저장
- [스도쿠](https://github.com/zeztto/sudoku-web): 네 난이도의 숫자 퍼즐과 메모·힌트·완료 기록
- [노노그램](https://github.com/zeztto/nonogram-web): 행·열 힌트로 푸는 세 가지 10×10 그림 퍼즐
- [룰렛 추첨](https://github.com/zeztto/random-draw-web): 중복 설정과 순차·동시·자동 연속 번호 추첨

### 확장 프로그램

- [ㄹㄹ필터](https://github.com/zeztto/ruliweb-filter): 게시판·탭·제목 말머리로 루리웹 목록을 거르는 Chrome 확장

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
- [공개 코드](docs/public-code.md): 공개 저장소와 검증한 main·CI
- [사용한 기술](docs/stack.md) · [개발·검증 방식](docs/engineering.md)
- [프로젝트 아카이브](docs/project-index.md) · [기술별 프로젝트](docs/technology-index.md)
- [자료와 공개 범위](docs/evidence.md) · [참고와 출처](docs/references.md) · [변경 기록](CHANGELOG.md)

## 연락

작업에 관한 이야기는 [문의 페이지](https://p1zza.kr/inquiry)로 보내주세요. 공개 활동은 [GitHub](https://github.com/zeztto)에서도 볼 수 있습니다.

문서 기준: **2026-10-28** · 문서 버전: **1.1.0**.
