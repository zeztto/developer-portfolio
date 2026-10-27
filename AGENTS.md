# 문서 유지관리

- 한국어를 기본으로 하고 기술명·code identifier는 English로 유지합니다.
- 제품 소스가 아닌 공개 포트폴리오 문서 저장소입니다. 개인·고객 데이터, 비공개 저장소명·URL, 로컬 절대 경로, 운영 로그·DB·자격 증명을 추가하지 않습니다.
- 경력 연차·직함·재직 기간·수치 성과·운영 상태를 추정하지 않습니다. 공개 소개, 구현 확인, 실행 검증을 구분합니다.
- fork·upstream·의존 라이브러리를 독자 창작이나 기여 실적으로 표현하지 않습니다.
- 변경은 task branch와 PR로 전달합니다. main에 직접 push하지 않고 명시적 승인 없이 merge하지 않습니다.
- task branch push 전마다 VERSION과 README.md·CHANGELOG.md의 버전을 함께 올립니다.
- `node scripts/check-docs.mjs`로 문서·링크·공개 데이터 일관성을 확인합니다.
- `node scripts/catalog.mjs --refresh`는 공개 목록을 새로 수집하는 명시적 갱신 작업입니다. 자동 실행하지 않습니다.
- 문서 검사는 제품 기능·배포 검증을 대신하지 않습니다.
