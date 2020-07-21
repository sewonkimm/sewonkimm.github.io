---
layout: post
title: 🕐git rebase로 commit 합치기
date: 2020-04-21 17:20:00
author: "SeWonKim"
categories: [Git]
tags: [jekyll, Git, Github, rebase, commit]
fullview: false
comments: true
description: git rebase -i HEAD^
---

## 문제 발생

![문제](https://user-images.githubusercontent.com/30452963/88030995-ec582300-cb76-11ea-9b35-442c360b9a96.png)

PR을 날렸는데 다른 branch들이 merge 될 때마다 pull 해서 썼더니  
중간중간 merge commit들이 섞여서 지저분하게 되어버렸다.

## 해결 방법

`git rebase -i HEAD~(숫자)`

git rebase을 사용하면 commit을 하나로 정리할 수 있다.

### 1. git status, git log로 상태 확인

현재 branch의 commit 상태를 확인한다.

### 2. git rebase -i HEAD~(숫자)

명령어를 입력하면 HEAD 포함 (숫자)개의 commit을 수정할 수 있다.

pick은 유지할 commit, squash는 이전 commit에 합치겠다는 의미다.  
에디터에서 내용을 수정하고 저장후 닫아주면 rebase가 진행된다.

### 3. conflict 발생

rebase 진행중 conflict는 꼭꼭 발생하게 되는데  
conflict를 해결한 뒤 새로 commit 해주고 `git rebase --continue`를 통해 rebase를 다시 진행해준다.

commit 열댓개를 한꺼번에 rebase 하지 않으면 conflict를 줄여줄 수 있다.  
중간중간 꼭 rebase를 해주자!

### 4. remote에 push

rebase가 완료되고나면 git log를 통해서 commit이 합쳐진 것을 볼 수 있다.
이미 PR을 날린상태에서 rebase를 진행한거라 git push를 진행하면 에러가 뜬다.  
`git push --force origin` 이렇게 --force 옵션을 추가해 push하면 해결!
