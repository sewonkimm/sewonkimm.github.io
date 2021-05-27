---
layout: post
title: 🪞Repository 복사해오고 싶을 땐, Git mirror
date: 2021-05-24 10:20:00
author: "SeWonKim"
categories: [Git, ETC]
tags: [Git, Github]
fullview: false
comments: true
description: Git mirror 4줄이면 끝!
---

&nbsp;

Gitlab에서 진행한 SSAFY 프로젝트를 내 개인 Git에다 옮겨오려면 Git mirror 명령어를 사용하면 간단히 해결된다.     
그냥 기존 프로젝트를 clone 해서 push 해 넣으면 기존의 커밋내역이나 issue, PR 내용 등이 다 사라지게 되는데 mirror를 사용하면 모두 문제 해결👍

&nbsp;
&nbsp;

## 복사 방법

1. 새로운 레포지토리 생성

<img width="1178" alt="Screen Shot 2021-05-24 at 10 08 42 AM" src="https://user-images.githubusercontent.com/30452963/119284242-2f44c480-bc7a-11eb-968d-dd3a686c2145.png">

&nbsp;

2. 명령어 작성
   
```shell
$ git clone --mirror [복사할 레포지토리 주소]
$ cd [복사할 레포지토리 폴더명]
$ git remote set-url --push origin [새로 만든 레포지토리 주소]
$ git push --mirror
```

<img width="1042" alt="Screen Shot 2021-05-24 at 10 14 48 AM" src="https://user-images.githubusercontent.com/30452963/119284368-8480d600-bc7a-11eb-85ea-87914e5a89fe.png">
