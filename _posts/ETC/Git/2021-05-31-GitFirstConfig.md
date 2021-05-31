---
layout: post
title: push 할 때마다 매번 아이디, 비밀번호 치기 귀찮다면?
date: 2021-05-24 10:20:00
author: "SeWonKim"
categories: [ETC, Git]
tags: [Git, Github]
comments: true
---

&nbsp;

# git config 로 사용환경 설정하기!

```bash

git config --global user.name "유저이름"
git config --global user.email 메일주소

```

&nbsp;
&nbsp;

### 설정이 잘 되었는지 확인해보자!

```bash
git config --list
```

이 명령어를 치면 

```
user.email=swon962@gmail.com
user.name=sewonkimm
core.repositoryformatversion=0
core.filemode=false
core.bare=false
core.logallrefupdates=true
core.ignorecase=true
remote.origin.url=https://github.com/sewonkimm/sewonkimm.github.io.git
remote.origin.fetch=+refs/heads/*:refs/remotes/origin/*
branch.master.remote=origin
branch.master.merge=refs/heads/master
```

이렇게 설정값들을 한 눈에 확인해볼 수 있습니다. user.name과 같은 특정 설정값만 확인하고 싶다면 `--list` 대신에 `user.name`을 쳐서 확인해보세요!

&nbsp;
&nbsp;
