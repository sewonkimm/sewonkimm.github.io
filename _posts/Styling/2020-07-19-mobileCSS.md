---
layout: post
title: 모바일 웹 font-size 단위
date: 2020-07-19 20:39:00
author: "SeWonKim"
categories: [Styling]
tags: [jekyll, Styling, css, post, web, moblie]
fullview: false
comments: true
description: 모바일 웹 font-size 단위는 어떤 걸로 해야할까?
---

## 결론

기존 웹의 마크업 방식과 크게 다르지 않다.
 　 
  　 

---
 　 
  　 
## 텍스트 크기 설정

모바일에서는 상위 요소 크기에 영향을 받는 `px, em, ex, %` 등의 속성을 사용해야한다.

- px : pixel 기준. 기기의 해상도에 따라 상대적
- ex : x-height. 해당 폰트의 소문자 x의 높이를 기준으로 값을 가짐
- em : 해당폰트의 대문자 M의 너비를 기준으로 값을 가짐
- rem : root em. 최상위 요소의 크기에 대해 상대적
- % : 기본글꼴의 크기에 대해 상대적


PC에서는 브라우저 호환성을 위해 px 단위의 사용을 권장한다.     
모바일에서는 유동적 레이아웃 구현을 위해 em, % 단위의 사용을 권장한다.