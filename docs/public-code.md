# 공개 코드

[소개](../README.md) · [작업 사례](case-studies.md) · [자료와 공개 범위](evidence.md)

기준일: **2026-10-28 KST**. **20개 코드 프로젝트**를 공개 저장소에서 확인했습니다. [서비스 소개 아카이브](project-index.md)와 별도로 집계하며, 문서 저장소인 developer-portfolio는 이 수에 포함하지 않습니다.

각 링크는 확인한 main source와 같은 head에서 성공한 GitHub Actions를 연결합니다. 검사 수는 서로 다른 suite의 단위입니다. 실제 배포·장치·host 검증 범위와 외부 코드·자산의 권리는 각 저장소의 문서와 고지를 따릅니다.

## macOS 앱

### [circlr](https://github.com/zeztto/circlr-app)

원형 타임라인에서 곡의 구조와 MIDI·오디오를 편집하는 macOS 음악 작업 앱입니다.

[main 5848470](https://github.com/zeztto/circlr-app/tree/5848470cf710c289638fe2e6c4bd324820edd045) · [CI 통과](https://github.com/zeztto/circlr-app/actions/runs/40527232242) · [권리 고지](https://github.com/zeztto/circlr-app/blob/5848470cf710c289638fe2e6c4bd324820edd045/THIRD_PARTY_NOTICES.md)

CI 범위: Core 736개 · MCP contract 39개 · server 34개. 코드는 MIT이며 동봉 음악·CC0 녹음·Public Domain 원본·브랜드 자산에는 각각의 고지가 적용됩니다.

### [MixManifest](https://github.com/zeztto/mixmanifest)

Logic Pro 프로젝트에서 트랙·채널·해석 가능한 플러그인 기록을 읽고 JSON·텍스트로 내보냅니다.

[main c6192b5](https://github.com/zeztto/mixmanifest/tree/c6192b532ab6ab3d879f436c64313dd6498ff0a7) · [CI 통과](https://github.com/zeztto/mixmanifest/actions/runs/40512045989) · [권리 고지](https://github.com/zeztto/mixmanifest/blob/c6192b532ab6ab3d879f436c64313dd6498ff0a7/THIRD_PARTY_NOTICES.md)

CI 범위: Core 검사 12개. logicxkit의 포맷 정보와 일부 parsing logic을 참고·이식했습니다. Mike Farr의 Apache-2.0 고지와 Swift 범위 검사·진단·UI의 추가 구현을 구별합니다.

## CLI

### [AAF Trans CLI](https://github.com/zeztto/aaf-trans-cli)

AAF 타임라인과 내장 PCM 메타데이터를 검사하고 복제본에서 정규화하는 Python CLI입니다.

[main 08452aa](https://github.com/zeztto/aaf-trans-cli/tree/08452aac0aae7f7205f09d0de06ace35f3cdc8ca) · [CI 통과](https://github.com/zeztto/aaf-trans-cli/actions/runs/40537138549) · [권리 고지](https://github.com/zeztto/aaf-trans-cli/blob/08452aac0aae7f7205f09d0de06ace35f3cdc8ca/THIRD_PARTY_NOTICES.md)

CI 범위: synthetic 회귀 54개. AAF 읽기·쓰기는 외부 라이브러리 pyaaf2를 사용하며 원저작권과 MIT 고지를 유지합니다.

## 브라우저 확장

### [ㄹㄹ필터](https://github.com/zeztto/ruliweb-filter)

게시판·탭·제목 말머리 기준으로 루리웹 목록의 행을 숨기는 Chrome 확장입니다.

[main 846cf50](https://github.com/zeztto/ruliweb-filter/tree/846cf501237747806011630ae668259b4c0d4cf5) · [CI 통과](https://github.com/zeztto/ruliweb-filter/actions/runs/40535649751) · [권리 고지](https://github.com/zeztto/ruliweb-filter/blob/846cf501237747806011630ae668259b4c0d4cf5/LICENSE)

CI 범위: 자동 검사 16개. Chrome Web Store 배포본 없이 source를 직접 로드합니다. 루리웹의 공식 제품이나 제휴 프로젝트가 아닙니다.

## 브라우저 게임

### [Tetrix](https://github.com/zeztto/tetrix-web)

충돌·회전·홀드·점수와 키보드·화면 버튼을 다루는 브라우저 낙하 블록 게임입니다.

[main 57f80fa](https://github.com/zeztto/tetrix-web/tree/57f80fa966499e585b9d6b4262f1e775599876a8) · [CI 통과](https://github.com/zeztto/tetrix-web/actions/runs/40512057789) · [권리 고지](https://github.com/zeztto/tetrix-web/blob/57f80fa966499e585b9d6b4262f1e775599876a8/THIRD_PARTY_NOTICES.md)

CI 범위: 회귀 검사 175개. shadcn UI·아이콘·라이브러리의 원저작권 고지와 라이선스 원문을 함께 제공합니다.

### [카드 짝 맞추기](https://github.com/zeztto/memory-match-web)

난이도와 테마를 골라 카드의 짝을 맞추고 완료 시간·시도 횟수를 이 브라우저에 저장합니다.

[main fce3287](https://github.com/zeztto/memory-match-web/tree/fce32879f33966d2a90f6c97b69c9465cc4536bd) · [CI 통과](https://github.com/zeztto/memory-match-web/actions/runs/40550536897) · [권리 고지](https://github.com/zeztto/memory-match-web/blob/fce32879f33966d2a90f6c97b69c9465cc4536bd/THIRD_PARTY_NOTICES.md)

CI 범위: 자동 검사 11개. shadcn/ui·라이브러리·SVG·Unicode 문자의 권리 고지를 유지합니다. 서버 랭킹·계정 동기화 없이 개인 기록을 저장합니다.

### [스도쿠](https://github.com/zeztto/sudoku-web)

네 난이도의 9×9 퍼즐에서 숫자 입력·메모·힌트를 사용하고 완료 기록을 이 브라우저에 저장합니다.

[main 818f8fa](https://github.com/zeztto/sudoku-web/tree/818f8fa65b4eeb2951fdceb06f350d75f078e7da) · [CI 통과](https://github.com/zeztto/sudoku-web/actions/runs/40553037181) · [권리 고지](https://github.com/zeztto/sudoku-web/blob/818f8fa65b4eeb2951fdceb06f350d75f078e7da/THIRD_PARTY_NOTICES.md)

CI 범위: 회귀 검사 7개. sudoku-gen의 seed 퍼즐·배치 변환을 사용하며 라이브러리·UI 코드의 원고지를 유지합니다. 기록은 브라우저 안에 저장합니다.

### [노노그램](https://github.com/zeztto/nonogram-web)

로켓·하트·고양이 세 가지 10×10 퍼즐에서 행·열 힌트를 읽고 칸을 채우는 브라우저 게임입니다.

[main 06c09cb](https://github.com/zeztto/nonogram-web/tree/06c09cb62b7a91fd74f02963b03d0bc3eeaa90db) · [CI 통과](https://github.com/zeztto/nonogram-web/actions/runs/40556561530) · [권리 고지](https://github.com/zeztto/nonogram-web/blob/06c09cb62b7a91fd74f02963b03d0bc3eeaa90db/ATTRIBUTIONS.md)

CI 범위: 회귀 검사 3개. 작성자 코드·퍼즐의 MIT와 의존성의 원고지를 유지합니다. 진행 상태는 현재 page에만 있으며 새로고침하면 초기화됩니다.

## 브라우저 도구

### [다기능 계산기](https://github.com/zeztto/calculator-workbench)

네 계산 모드에서 기본 연산과 삼각함수·통계·행렬 수식을 입력하는 React 웹 도구입니다.

[main 8305cae](https://github.com/zeztto/calculator-workbench/tree/8305cae61fefb3fa7e5dadbd3ee4632d9e5e2ad1) · [CI 통과](https://github.com/zeztto/calculator-workbench/actions/runs/40537468329) · [권리 고지](https://github.com/zeztto/calculator-workbench/blob/8305cae61fefb3fa7e5dadbd3ee4632d9e5e2ad1/ATTRIBUTIONS.md)

CI 범위: 자동 검사 93개. 포함된 shadcn UI 코드의 원래 MIT 고지와 외부 라이브러리의 권리를 유지합니다.

### [단위 변환기](https://github.com/zeztto/unit-converter-web)

길이·무게·온도·부피를 양방향 입력과 단위 교환으로 변환하는 브라우저 도구입니다.

[main 8aaea20](https://github.com/zeztto/unit-converter-web/tree/8aaea202ef807a4c0e3f3275157cd7ac73228fcb) · [CI 통과](https://github.com/zeztto/unit-converter-web/actions/runs/40539279397) · [권리 고지](https://github.com/zeztto/unit-converter-web/blob/8aaea202ef807a4c0e3f3275157cd7ac73228fcb/THIRD_PARTY_NOTICES.md)

CI 범위: 자동 검사 5개. 자체 코드의 MIT와 포함 의존성의 권리 고지를 유지합니다.

### [비밀번호 생성기](https://github.com/zeztto/password-generator-web)

Web Crypto 난수와 선택한 문자 구성으로 비밀번호를 생성하고 복사·TXT로 내보냅니다.

[main 267f16a](https://github.com/zeztto/password-generator-web/tree/267f16a837280eccf8478e8ecb33933d49ed73f1) · [CI 통과](https://github.com/zeztto/password-generator-web/actions/runs/40539299685) · [권리 고지](https://github.com/zeztto/password-generator-web/blob/267f16a837280eccf8478e8ecb33933d49ed73f1/THIRD_PARTY_NOTICES.md)

CI 범위: 자동 검사 6개. 자체 코드의 MIT와 포함 의존성의 권리 고지를 유지합니다.

### [색상 팔레트](https://github.com/zeztto/color-palette-web)

그레이스케일·색조에서 색을 골라 HEX·RGB·HSL·CMYK 값을 확인하고 복사합니다.

[main b955c34](https://github.com/zeztto/color-palette-web/tree/b955c349deca3efc732c75dc39540203812302ce) · [CI 통과](https://github.com/zeztto/color-palette-web/actions/runs/40540978602) · [권리 고지](https://github.com/zeztto/color-palette-web/blob/b955c349deca3efc732c75dc39540203812302ce/ATTRIBUTIONS.md)

CI 범위: 자동 검사 6개. 포함된 UI 코드와 외부 의존성의 원저작권 고지를 유지합니다.

### [메모모미](https://github.com/zeztto/memomome-web)

이 브라우저의 localStorage에 메모를 저장하고 다시 열어 편집하는 한국어 메모장입니다.

[main 4c5814f](https://github.com/zeztto/memomome-web/tree/4c5814f30bc41df46a870b64edd39c33e16cd4a8) · [CI 통과](https://github.com/zeztto/memomome-web/actions/runs/40541274836) · [권리 고지](https://github.com/zeztto/memomome-web/blob/4c5814f30bc41df46a870b64edd39c33e16cd4a8/ATTRIBUTIONS.md)

CI 범위: 자동 검사 15개. 포함된 UI 코드와 외부 의존성의 원저작권 고지를 유지합니다.

### [텍스트 분석기](https://github.com/zeztto/text-inspector-web)

입력한 텍스트와 TXT·Markdown·PDF·DOCX에서 글자·단어·문장과 빈도를 브라우저 안에서 분석합니다.

[main f2a887a](https://github.com/zeztto/text-inspector-web/tree/f2a887aed5b5ef81bc0091d592e3dd6e460bf217) · [CI 통과](https://github.com/zeztto/text-inspector-web/actions/runs/40550509703) · [권리 고지](https://github.com/zeztto/text-inspector-web/blob/f2a887aed5b5ef81bc0091d592e3dd6e460bf217/THIRD_PARTY_NOTICES.md)

CI 범위: 자동 검사 5개. shadcn/ui·PDF.js·Mammoth의 원저작권과 license 고지를 유지합니다. PDF는 텍스트 layer를 읽으며 OCR·legacy .doc는 지원하지 않습니다.

### [큐알잉](https://github.com/zeztto/qr-builder-web)

URL·텍스트·연락처·이메일·전화·문자·WiFi 정보를 입력해 QR PNG로 저장하는 웹 앱입니다.

[main 73d3679](https://github.com/zeztto/qr-builder-web/tree/73d3679c2b58282f09c2b867067ef218228369a7) · [CI 통과](https://github.com/zeztto/qr-builder-web/actions/runs/40550522007) · [권리 고지](https://github.com/zeztto/qr-builder-web/blob/73d3679c2b58282f09c2b867067ef218228369a7/THIRD_PARTY_NOTICES.md)

CI 범위: 자동 검사 14개. shadcn/ui·node-qrcode의 원고지를 보존합니다. 기기의 연락처 등록·앱 연결·WiFi 연결은 별도 확인 대상입니다.

### [다국어 텍스트 생성기](https://github.com/zeztto/multilingual-text-generator)

11개 언어의 제한 어휘를 조합해 산문·행과 연·짧은 카피·리드 형식의 레이아웃 확인용 텍스트를 만듭니다.

[main e179dc1](https://github.com/zeztto/multilingual-text-generator/tree/e179dc1ebc3100fd6238c43e1dc6a35a1eba670e) · [CI 통과](https://github.com/zeztto/multilingual-text-generator/actions/runs/40553023426) · [권리 고지](https://github.com/zeztto/multilingual-text-generator/blob/e179dc1ebc3100fd6238c43e1dc6a35a1eba670e/THIRD_PARTY_NOTICES.md)

CI 범위: 회귀 검사 46개 · Linux/macOS. 자체 어휘의 조합 범위를 문서화하고 shadcn/ui·Lucide/Feather의 원고지를 유지합니다.

### [이모지 모음](https://github.com/zeztto/emoji-finder-web)

이모지 문자와 카테고리 단어로 목록을 찾아 복사하고 즐겨찾기·최근 기록을 이 브라우저에 저장합니다.

[main 3075bbf](https://github.com/zeztto/emoji-finder-web/tree/3075bbf5b1f3f7417d289dba51df7daaed575a93) · [CI 통과](https://github.com/zeztto/emoji-finder-web/actions/runs/40553010374) · [권리 고지](https://github.com/zeztto/emoji-finder-web/blob/3075bbf5b1f3f7417d289dba51df7daaed575a93/ATTRIBUTIONS.md)

CI 범위: 회귀 검사 18개. shadcn/ui·Lucide의 원고지를 유지합니다. 이모지 그림·font를 배포하지 않고 기기의 기본 글꼴로 문자를 표시합니다.

### [포픽](https://github.com/zeztto/phopic-editor)

Canvas에서 이미지를 자르고 크기·색상·필터를 조정해 PNG·JPG·WebP로 저장합니다.

[main 268cb48](https://github.com/zeztto/phopic-editor/tree/268cb482aa2e34349d3aff1683a4cfc87f786358) · [CI 통과](https://github.com/zeztto/phopic-editor/actions/runs/40559099143) · [권리 고지](https://github.com/zeztto/phopic-editor/blob/268cb482aa2e34349d3aff1683a4cfc87f786358/ATTRIBUTIONS.md)

CI 범위: 회귀 검사 47개. shadcn/ui의 원 MIT 고지를 보존합니다. 영역 선택은 마우스·트랙패드로 조작하며 GIF 애니메이션 출력은 지원하지 않습니다.

## 브라우저 추첨

### [룰렛 추첨](https://github.com/zeztto/random-draw-web)

번호 개수와 당첨자 수를 정해 Web Crypto 난수로 순차·동시·자동 연속 추첨을 실행합니다.

[main ea89efe](https://github.com/zeztto/random-draw-web/tree/ea89efee03343ecbc02b0c11ea46272bd675d562) · [CI 통과](https://github.com/zeztto/random-draw-web/actions/runs/40553110587) · [권리 고지](https://github.com/zeztto/random-draw-web/blob/ea89efee03343ecbc02b0c11ea46272bd675d562/ATTRIBUTIONS.md)

CI 범위: 회귀 검사 85개. shadcn/ui·Lucide 등 외부 코드의 원고지를 보존합니다. 난수 구현 검사는 독립적인 공정성 인증과 구별합니다.

## 데스크톱 게임

### [AFK HERO Desktop](https://github.com/zeztto/afk-hero-desktop)

React·Electron으로 자동 전투·장비 성장·오프라인 보상과 저장 복구·내보내기를 구현한 로컬 idle RPG입니다.

[main 3e50546](https://github.com/zeztto/afk-hero-desktop/tree/3e50546f363e5ec8cb4d589cb7829de47feb1560) · [CI 통과](https://github.com/zeztto/afk-hero-desktop/actions/runs/40554325601) · [권리 고지](https://github.com/zeztto/afk-hero-desktop/blob/3e50546f363e5ec8cb4d589cb7829de47feb1560/THIRD_PARTY_NOTICES.md)

CI 범위: unit 110개/13파일 · canonical fixture preflight 16개 · Linux/macOS. first-party 코드·artwork는 MIT이며 Electron·Chromium의 고지와 생성 artwork 출처를 보존합니다. local packaging은 Developer ID signing·notarization을 수행하지 않습니다.
