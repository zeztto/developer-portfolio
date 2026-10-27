# 참고와 출처

[소개](../README.md) · [자료와 공개 범위](evidence.md)

## 포트폴리오 구성

2026년 10월 27일 아래 개인 사이트와 GitHub README를 직접 살펴봤습니다. 시각 장식보다 소개의 길이, 대표 작업의 선택, 다음 문서로 이어지는 순서를 참고했습니다.

- [Anthony Fu](https://antfu.me/) · [프로젝트 목록](https://antfu.me/projects): 대표 작업과 전체 목록을 분리하고, 프로젝트 이름에 자신의 역할을 붙이는 구성. 이 저장소도 README에는 네 작업을 고르고 전체 목록은 별도 문서에 뒀습니다.
- [Lee Robinson](https://leerob.com/): 짧은 자기소개 뒤에 글과 활동으로 이어지는 구성. 이력의 수식어보다 지금 만드는 것과 관심사를 먼저 설명하는 방식을 참고했습니다.
- [Sindre Sorhus의 GitHub README](https://github.com/sindresorhus/sindresorhus): 작업으로 곧바로 연결되는 짧은 링크를 참고했습니다. GIF·배지·장식 이미지는 이 문서의 읽기 흐름에 맞지 않아 가져오지 않았습니다.

다른 개발자의 문구·이력·이미지를 옮기지 않았습니다. GitHub의 기본 제목·문단·목록·링크만으로 내용을 읽을 수 있게 정리했습니다.

## 구현의 기반

아래는 포트폴리오 구성과 별개로, 소개한 작업에 사용된 외부 구현의 출처입니다.

- [logicxkit](https://github.com/phierceweb/logicxkit/tree/75b58fbf597a2ea1296b68323c09c7e3bed84ff6) — Mike Farr, Apache-2.0. MixManifest는 포맷 정보와 일부 parsing logic을 참고·이식한 Swift adaptation입니다. Swift의 범위 검사·진단·manifest 내보내기·macOS UI 작업과 원본 parser의 역할을 나눠 설명합니다.
- [Everything Claude Code / ECC](https://github.com/affaan-m/ECC) — AI 개발 워크플로 확장의 기반입니다. 도구별 adapter와 역할·규칙·설치 및 검증 절차를 확장한 작업이며, 원본 프레임워크 창작이나 upstream 기여 이력이 아닙니다.
