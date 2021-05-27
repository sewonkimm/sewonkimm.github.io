---
layout: post
title: 👏remote branch 가져오기
date: 2020-07-22 16:41:00
author: "SeWonKim"
categories: [Git, ETC]
tags: [Git, Github, checkout, remote]
fullview: false
comments: true
description: git checkout -t origin/branchName
---

### git clone으로 repository를 가져왔는데...

원격으로 작업하던 브랜치를 가져와야할 때...!       
`git checkout -t origin/branchName` 명령어로 원하는 브랜치를 가져올 수 있다.

---

### 참고! 어떤 branch가 있었더라...? 생각이 안날 땐

1. local branch : `git branch`
2. romote branch : `git branch -r`
3. local+remote branch : `git branch -a`

