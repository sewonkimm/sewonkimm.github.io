---
layout: post
title: YCC📄MVC pattern
date: 2019-10-27 00:35:00
author: "SeWonKim"
categories: [Youtube Clone Coding, Web]
tags: [Nomadcoders, MVC]
fullview: false
comments: true
description: MVC pattern에 관하여
---

## Usage of Router
Router is kinda class of Express, so when you use it you don't need to install router.

The arguments of a Get Route is `get([URL], [Controller])`   
The arguments of a Post Route is `post([URL], [Controller])` 

👉URL에 접속하면 Controller가 실행되는 구조!

## MVC pattern
한 파일에 URL과 Controller method를 다 쓰는게 아니라 기능별로 쪼개어 놓는 것이 [MVC pattern](https://ko.wikipedia.org/wiki/%EB%AA%A8%EB%8D%B8-%EB%B7%B0-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC) 

이렇게 쪼개어 놓으면 여러 파일에서 재사용 될 수 있고, 수정할 때에도 파일 하나만 수정하면 모든 파일에 적용되어 간편하다.

**☀️One single source of truth☀️**

```
  M : Data
  V : How does data look 
  C : Function that looks for the data 데이터를 보여주는 함수
  ```

  📄 routes.js 에는 url이 정의되어있고,     
  📂 controllers 에는 function이 정의되어 있다. 
