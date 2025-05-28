---
sidebar_position: 2
tags: ["git"]
last_update:
  date: 6/19/2024
  author: sewonkimm
---

# git을 활용한 프로젝트 협업 워크플로우

## git branch

작업 전, 브랜치를 생성한다.

```git
git branch <new branch name>
```

브랜치 삭제는 d옵션을 사용한다.

```git
git branch -d <branch name>
```

브랜치를 삭제하려면 -d 또는 -D 옵션을 사용할 수 있다. -d 옵션은 브랜치가 병합된 경우에만 삭제되며, -D 옵션은 강제로 삭제한다.

## git checkout

생성한 브랜치로 이동하여 작업을 시작한다.

```git
git checkout <branch name>
```

주로 브랜치 생성과 이동을 동시에 하기 때문에 git branch와 git checkout 명령어를 따로따로 치기 보다는 아래와 같이 한 줄로 작성하는 경우가 많다.

```git
git checkout -b <new branch name>
```

:::tip
최신 Git 버전에서는 git switch 명령어를 사용할 수도 있다.

```git
git switch <branch name>  # 브랜치로 전환
git switch -c <new branch name>  # 브랜치를 생성하고 전환
```

:::

## git commit

작업 후 커밋을 한다. 주로 아래와 같이 사용한다.

```git
git add .
git commit -m "commit message"
```

수정된 파일을 staged 상태로 변경해야하기 때문에 add 명령어를 사용한다.
이를 생략하려면 a옵션을 추가하면 된다.

```git
git commit -a -m "commit message"
```

:::note
[git의 파일 라이프사이클](https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EC%88%98%EC%A0%95%ED%95%98%EA%B3%A0-%EC%A0%80%EC%9E%A5%EC%86%8C%EC%97%90-%EC%A0%80%EC%9E%A5%ED%95%98%EA%B8%B0)
설명이 잘 되어있다.
:::

### 커밋 메세지를 수정하고 싶을 때

```git
git commit --amend
```

amend 옵션을 사용하면 가장 최근 커밋 메세지를 수정할 수 있다. 만약 가장 최근 커밋이 아닌 특정 커밋 메세지를 수정하고 싶다면 rebase를 진행한다.

```git
git rebase -i HEAD~<number of commit>
```

해당 명령어로 rebase할 커밋의 범위를 고르고 pick을 edit으로 변경한다. 그리고 `git commit --amend` 명령어로 커밋 메세지를 수정하고 `git rebase --continue` 명령어로 rebase를 완료한다.

### 커밋을 취소하고 싶을 때

특정 커밋을 취소하고 싶은 경우에도 rebase를 사용한다. 취소하고 싶은 커밋의 pick을 drop으로 변경하여 rebase를 진행하면 된다.

:::note
[git reset](https://git-scm.com/book/ko/v2/Git-%EB%8F%84%EA%B5%AC-Reset-%EB%AA%85%ED%99%95%ED%9E%88-%EC%95%8C%EA%B3%A0-%EA%B0%80%EA%B8%B0#_git_reset)을 활용할 수도 있다.
:::

## git diff

1. git diff

아무 옵션 없이 `git diff` 명령어를 치면 현재 working directory와 staged 상태의 파일을 비교한다.

2. git diff --staged

`git diff --staged` 명령어를 치면 staged 상태와 최신 커밋을 비교한다.

3. git diff HEAD

`git diff HEAD` 명령어를 치면 working directory와 최신 커밋을 비교한다.

## git pull

원격 저장소의 변경사항을 가져와서 로컬 저장소에 반영한다.

```git
git pull origin <branch name>
```

### git fetch와의 차이점

fetch는 원격 저장소에 변경사항이 있는지 확인만 하는 반면, pull은 변경사항을 가져와서 로컬 저장소에 반영한다. git pull은 fetch를 수행한 후 자동으로 git merge를 수행하여, 원격 저장소의 변경 사항을 로컬 작업 브랜치에 병합한다. 로컬에 변경사항이 있느냐 없느냐의 차이.

## git push

작업 내역을 push하여 원격 저장소에 올린다.

```git
git push origin <branch name>
```

f옵션을 사용하면 로컬 저장소와 원격 저장소의 내용이 다를 때, 로컬 저장소의 내용으로 덮어쓰기 할 수 있다. 한 번 force push 하면 원격 저장소의 작업 내역을 되돌릴 수 없기 때문에 신중히 사용해야한다.
