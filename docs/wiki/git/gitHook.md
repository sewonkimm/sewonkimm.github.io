---
sidebar_position: 4
tags: ["git"]
last_update:
  date: 5/21/2025
  author: sewonkimm
---

# Git Hook
> 공식 문서 : [git hooks](https://git-scm.com/book/ko/v2/Git%EB%A7%9E%EC%B6%A4-Git-Hooks)


## 정의

Git Hook은 Git이 특정 이벤트를 실행할 때 자동으로 작동하는 스크립트. 특정 이벤트는 커밋, 푸시, 머지 등과 같은 작업을 의미한다.

## 종류


```bash
cd .git/hooks
```
위 명령어로 이동하면 다음과 같은 파일들이 있는데, 여기 있는 것들이 모두 hook이다.
- applypatch-msg.sample
- fsmonitor-watchman.sample
- pre-applypatch.sample
- pre-merge-commit.sample
- pre-push.sample
- pre-receive.sample
- sendemail-validate.sample
- commit-msg.sample
- post-update.sample
- pre-commit.sample
- prepare-commit-msg.sample
- pre-rebase.sample
- push-to-checkout.sample
- update.sample

그 중 자주 사용하는 Hook들은 다음과 같다.


| 이벤트      | 설명                     | 용도                                          |
| ----------- | ------------------------ | --------------------------------------------- |
| pre-commit  | 커밋 전에 실행           | Lint/Formatting 검사, 테스트 실행 등          |
| commit-msg  | 커밋 메시지 작성 후 실행 | 커밋 메시지 포맷 검사 등                      |
| post-commit | 커밋 후 실행             | 커밋 후 알림, 로그 기록 등                    |
| pre-push    | 푸시 전에 실행           | 푸시할 브랜치 검사, 테스트 실행, 코드 빌드 등 |

## 사용법

`.git/hooks/` 디렉토리 안에 스크립트를 작성한다. 
파일의 `.sample` 확장자를 제거하면 적용된다.

### Git Hook 관리 도구 : Husky

> 공식 문서 : [Husky](https://github.com/typicode/husky)

Git Hook은 로컬 저장소에만 적용되기 때문에 협업 시, 통일된 Hook 설정이 어렵다.
따라서 Husky와 같은 도구를 사용하여 Git Hook을 관리하는 것이 좋다.

```bash
npm install --save-dev husky
npx husky init
```

위 명령어로 Husky를 설치하고 초기화하면 `.husky` 디렉토리가 생성되고, commit하면 실행되는 `pre-commit` 스크립트 파일이 생성된다.

`.husky` 디렉토리를 Git에 추가하면 팀원들과 같은 Git Hook을 사용할 수 있다.
