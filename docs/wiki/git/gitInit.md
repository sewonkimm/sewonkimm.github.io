---
sidebar_position: 1
tags: ["git"]
last_update:
  date: 6/17/2024
  author: sewonkimm
---

# 프로젝트 시작하기

## 내가 만든 프로젝트를 git remote에 등록하기

### git init

:::note
[git book 링크](https://git-scm.com/docs/git-init/en)
:::

```git
git init
```

이 명령어를 사용하면 `.git` 파일이 생긴다. 이 파일에는 git 버전 관리를 위한 메타 정보가 담겨있다.

### git remote

:::note
[git book 링크](https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-%EB%A6%AC%EB%AA%A8%ED%8A%B8-%EC%A0%80%EC%9E%A5%EC%86%8C)
:::

로컬에서 작업한 내역을 리모트 저장소에 push하기 위해서는 먼저 리모트 저장소를 등록해야 한다.

```git
git remote add <단축이름> <remote repository URL>
```

단축이름 같은 경우는 보통 `origin`을 사용하고, remote repository URL은 github에서 생성한 repository 주소를 넣어주면 된다.

```git
git remote -v
```

v옵션으로 현재 등록된 리모트 저장소를 확인할 수 있다.

## 이미 remote에 등록된 프로젝트를 로컬로 가져오기

### git clone

```git
git clone <remote repository URL>
```

이 명령어를 사용하면 remote repository에 있는 파일들을 로컬로 가져올 수 있다.
