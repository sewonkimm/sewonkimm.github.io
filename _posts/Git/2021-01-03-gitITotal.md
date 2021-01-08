---
layout: post
title: 📢Git 자주 쓰는 명령어 총정리
date: 2021-01-02 20:45:00
author: "SeWonKim"
categories: [Git]
tags: [jekyll, Git, Github]
fullview: false
comments: true
description: git 명령어들
---

![github](https://steemitimages.com/640x0/https://www.aha.io/assets/github.7433692cabbfa132f34adb034e7909fa.png)

&nbsp;

> 모든 이미지[git with D3](https://onlywei.github.io/explain-git-with-d3)

# 1. local과 remote 연결

```vim
$ git init
$ git clone <remote>
```

&nbsp;

# 2. 작업

## branch

```vim
$ git branch <branch>
$ git branch -D <branch>    (branch 삭제)
$ git checkout <branch>
$ git checkout -b <branch>  (branch 생성 후 이동)
$ git checkout -t <remote/branch>   (remote의 branch를 local로 가져오기)
```

## 작업 내용 추가

```vim
$ git add .
$ git commit -m "커밋메시지"
$ git commit -am "커밋 메시지"   (add와 commit을 동시에)
$ git push <remote> <branch>
$ git pull <remote> <branch>
```

## 병합

![image](https://user-images.githubusercontent.com/30452963/103888140-8ca30380-5127-11eb-8dfb-088d3edad953.png)

```vim
$ git merge <branch>    (다른 branch를 현재 branch에 병합)
$ git merge --abort     (conflict 발생 시, merge 취소)
```

## 되돌리기

![image](https://user-images.githubusercontent.com/30452963/103888238-c70ca080-5127-11eb-91cd-4568382ce295.png)

```vim
$ git reset --soft <commit> (commit만 취소하고, 변경 내용은 그대로)
$ git reset --hard <commit> (commit 취소 후, 변경 내역도 삭제)
```

## 수정

```vim
$ git rebase -i <commit>  (수정할 commit을 pick에서 edit으로 변경하여 저장)
$ git commit --amend        (commit 내용 수정)
$ git rebase --continue     (수정 마무리)
```

&nbsp;

# 3. Release

```vim
$ git tag <version>
```

&nbsp;
