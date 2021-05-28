---
layout: post
title: 🔦 공공데이터포털 SERVICE KEY IS NOT REGISTERED ERROR
date: 2020-11-21 10:43:00
author: 'SeWonKim'
categories: [Devlog, ETC]
comments: true
description: SERVICE KEY IS NOT REGISTERED ERROR 해결법~!
---

![image](https://user-images.githubusercontent.com/30452963/99864426-8c39c200-2be6-11eb-9d15-4750e6793248.png)

RESTful service인 경우 파라미터를 UTF-8로 인코딩해서 넘기라고해서 공공데이터 포털에서 받은 키를 [encodeURIComponent](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)로 인코딩을 해주었건만... **SERVICE KEY IS NOT REGISTERED ERROR** 에러가 난다면...?

&nbsp;  
&nbsp;

### 공공데이터 포털에서 받은 key 는 이미 인코딩 된 상태이다!

그래서 encodeURIComponent의 반대 **decodeURIComponent**를 해서 서비스키로 보냈더니 문제 해결😆

&nbsp;  
&nbsp;
