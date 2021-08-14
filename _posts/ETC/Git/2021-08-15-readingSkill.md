---
layout: post
title: 개발자가 git 프로젝트를 읽는 방법(Reading skill)
date: 2021-08-15 04:00:00
author: "SeWonKim"
categories: [ETC, Git]
tags: [Git, Github]
comments: true
---

&nbsp;
&nbsp;

오픈소스 프로젝틀 제일 clone하고나서 몇 가지 명령어로 프로젝트를 파악해볼 수 있다.

&nbsp;
&nbsp;

# 개발에 많이 기여한 사람 찾기

```shell
# 순위 표시
git shortlog -sn | nl

# 커밋 개수
git shortlog -s
```

&nbsp;

# 커밋 내역 읽기

```shell
git log --oneline
git log --oneline | wc -l

# 오래된 것부터 확인
git log --reverse

# 특정 커밋 확인
git show [commit number]
git show [commit number] | grep "diff --git"

# 특정 커밋 하나가 수정한 소스파일의 개수
git show [commit number] | grep "diff --git" | wc -l

# 특정 폴더 기준으로 커밋 리스트 확인
git log --oneline -- [file path]

# 특정 날짜 기준 커밋 리스트 확인
git log --oneline --after=2020-07-07 --before=2021-06-09
```

wc -l 옵션을 주면 개수 확인 가능


&nbsp;

# 소스파일 수정 내역 자세히 보기

```shell
git log -p
```
