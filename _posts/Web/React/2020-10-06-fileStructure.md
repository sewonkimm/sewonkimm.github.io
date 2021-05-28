---
layout: post
title: 🗃 React의 프로젝트 구조
date: 2020-10-06 22:49:00
author: "SeWonKim"
categories: [Web, React]
tags: [React]
comments: true
description: React 자습서
---

> [React 공식문서 - 파일구조](https://ko.reactjs.org/docs/faq-structure.html)

## React 프로젝트 구조 설계

### 1. 파일 기능 or 라우트에 의한 분류

css, js, test file을 한 폴더에 분류

### 2. 파일 유형에 의한 분류

비슷한 파일끼리 분류  
api는 api끼리... component는 component끼리...  
아토믹 디자인 방법론을 활용

### 3. 너무 많이 중첨되지 않도록 분류

import를 줄이는 것이 좋지 않을까?

---

파일 구조에 정답은 없다.  
일단 하나의 폴더에 모두 묶어놓고, 하나씩 분리시키는 것도 방법.
