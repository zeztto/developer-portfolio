# 개발·검증 방식

[README](../README.md) · [대표 사례](case-studies.md) · [자료와 공개 범위](evidence.md)

## 저장한 결과를 다시 읽습니다

저장 요청이 성공한 뒤에도 편집 화면에 다시 들어가 값이 남아 있는지 확인합니다. LMML의 다국어 라인업처럼 항목을 추가·삭제하거나 순서를 바꿀 수 있는 화면은 편집 상태, 저장된 데이터, 공개 화면을 함께 살핍니다. 작은 화면에서는 같은 흐름을 따라가며 한국어 줄바꿈과 가로 넘침도 확인합니다.

배포 뒤에는 반영한 버전과 실제 화면을 확인합니다. 외부 연동이 있는 작업은 API의 접수 응답 이후 결과도 살핍니다. 예를 들어 게시 예약 생성과 실제 게시, 메일 발송 접수와 수신함 도착은 각각 확인할 일이 남습니다.

## 원본 파일을 보존합니다

프로젝트 파일을 분석하거나 오디오를 변환할 때는 원본과 결과를 따로 둡니다. MixManifest는 저장된 프로젝트를 읽고, AAF Trans는 복제본에 변환을 적용한 뒤 구조·길이·메타데이터와 오디오 지문을 비교합니다. 파일 검사 이후 DAW 재열기와 청취도 따로 살핍니다.

기존 로컬 변경과 관련 없는 서비스·데이터도 같은 방식으로 보존합니다. 변경 전에 대상을 좁히고 되돌릴 방법을 준비합니다.

## AI가 바꾼 내용도 직접 검토합니다

AI를 조사·구현·검토에 사용합니다. 작업을 맡길 때 목표와 수정할 파일, 보존할 항목, 검증 방법을 정합니다. 결과를 받은 뒤 diff를 읽고, 변경한 동작에 맞는 테스트와 실제 화면·파일 확인을 진행합니다. 실패하거나 아직 확인하지 못한 내용도 기록에 남깁니다.

개발 workflow는 [Everything Claude Code / ECC](https://github.com/affaan-m/ECC)를 기반으로 도구별 adapter·역할·규칙·설치 및 검증 절차를 확장했습니다. 이 작업에서 더한 부분과 upstream의 원본을 구별해 소개합니다.

## 이 저장소의 유지관리

Markdown·JSON 문서 저장소이므로 Node.js의 built-in API로 검사합니다.

```sh
node scripts/catalog.mjs --check
node scripts/public-code.mjs --check
node scripts/check-docs.mjs
```

이 검사는 상대 링크, 데이터 스키마, 색인과 스냅샷의 일치, 버전과 기본 공개 안전성을 확인합니다.

공개 코드 목록의 metadata만 바꾼 뒤에는 `node scripts/public-code.mjs --generate`로 문서를 다시 만듭니다. 저장된 자료를 사용하므로 네트워크에 연결하지 않습니다.

GitHub의 현재 공개 여부·default branch head·동일 head의 성공 CI와 권리 고지 파일을 확인할 때는 아래 명령을 수동 실행합니다. `gh` CLI의 읽기 권한을 사용하며 metadata나 원격 저장소를 변경하지 않습니다.

```sh
node scripts/public-code.mjs --verify-public
```

저장된 스냅샷에서 색인만 다시 만들 때는 다음 명령을 사용합니다. 네트워크를 사용하지 않습니다.

```sh
node scripts/catalog.mjs --generate
```

공개 목록을 새로 수집할 때만 아래 명령을 실행하고, 결과 diff와 공개 범위를 검토합니다.

```sh
node scripts/catalog.mjs --refresh
```
