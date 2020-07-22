---
layout: post
title: dependencies와 devDependencies의 차이
date: 2020-07-22 13:20:00
author: "SeWonKim"
categories: [Devlog]
tags: [jekyll, Devlog, post]
fullview: false
comments: true
description: 맨날 헷갈려!
---

### 🧼dependencies
진짜 기술스펙으로 사용되는 라이브러리들(어플리케이션에 실질적으로 필요한 것들)은 dependencies에 `npm install --save`

### 🧽devDependencies
개발자에게 필요한 라이브러리들(테스트 도구나, 웹팩, 바벨)은 devDependencies에 `npm install --save-dev`
