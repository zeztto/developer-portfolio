# 참고한 오픈소스 문서

[README](../README.md)

유명 오픈소스의 **정보 구조**를 참고했습니다. 코드·문구·로고·배지를 복제하거나 해당 프로젝트의 기여자·소속이라고 표현하지 않습니다. 링크는 조사 시 확인한 commit에 고정했습니다. 확인일: 2026-10-27.

| 공식 출처 | 참고한 구조 | 이 저장소의 적용 |
| --- | --- | --- |
| [VS Code README](https://github.com/microsoft/vscode/blob/07d17622fddd3b3e6ff518a74cf98debd42634de/README.md) | 저장소와 배포 제품의 구분, 개발·기여 문서 연결 | 문서 저장소와 실제 제품·운영 상태 구분, 상세 문서 분리 |
| [Next.js README](https://github.com/vercel/next.js/blob/6be1a0e9654ed6c3758c772584eaf257d42665b7/packages/next/README.md) | 짧은 진입점과 주제별 문서 경로 | README에서 소개·대표작·스택·근거로 이동 |
| [FastAPI README](https://github.com/fastapi/fastapi/blob/5bebde9c30bab8c071a563f2058c2d7504cdeeea/README.md) | 기능과 실제 사용 흐름의 연결, 의존성·라이선스 구분 | 기술 이름보다 문제·설계·구현·확인 경계 중심의 사례 |
| [Awesome README](https://github.com/sindresorhus/awesome/blob/bc98e517ddca672f55f9857d714fc3ea3c3540b2/readme.md) | 분류별 탐색과 설명이 붙은 링크 | 전체 프로젝트 색인과 기술별 역색인 |
| [GitHub README 안내](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-readmes) | 저장소의 목적·이용 경로·유지관리 정보 | 상대 링크, 읽기 순서, 갱신 기준과 정정 절차 |

참고한 저장소는 포트폴리오 템플릿으로 그대로 적용한 것이 아닙니다. 이 개발자의 프로젝트와 확인 가능한 이력에 맞춰 내용을 새로 작성했습니다.

## 구현 출처 구분

다음은 문서 구조 참고가 아니라 **대표 경험의 upstream 출처**입니다.

- [logicxkit](https://github.com/phierceweb/logicxkit/tree/75b58fbf597a2ea1296b68323c09c7e3bed84ff6): MixManifest parser가 참고·이식한 포맷 정보와 일부 parsing logic. Mike Farr, Apache-2.0. 해당 원본의 역할과 Swift adaptation을 구분합니다.
- [Everything Claude Code / ECC](https://github.com/affaan-m/ECC): AI 개발 workflow 확장의 기반. 원본과 도구별 adapter·규칙·검증 절차의 확장을 구분합니다.
