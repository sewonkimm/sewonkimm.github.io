---
layout: post
title: Babel
date: 2019-07-30 20:33:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders, Babel, ES6]
fullview: false
comments: true
description: What is Babel?
---


## What is Babel?
[Babel](https://babeljs.io/)

**Babel is a JavaScript compiler**     
간단히 말하면 최신 자바스크립트(ES6) 소스를 옛날 버전(Standard normal code로)의 소스로 바꿔주는 것이다.

Babel을 사용하면     
```javascript
const express = require('express')     >>>     import express from 'express' 
```
이렇게 쓸 수 도 있고, [arrow function expression](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/%EC%95%A0%EB%A1%9C%EC%9A%B0_%ED%8E%91%EC%85%98)도 사용할 수 있다.


## Install Babel
1. Babel은 사용할 수 있는 preset이 많은데 이번 프로젝트는 NodeJS에서 Babel을 사용하는 것이므로 @babel/node를 설치한다.
2. Babel에는 여러가지의 stage가 있는데 [preset-env](https://babeljs.io/docs/en/babel-preset-env)를 사용할 것이다.
3. .babelrc 파일에 preset을 작성해준다. (Babel 홈페이지의 Docs참조)     
Babel에게 무슨 preset을 쓸 것인지 알려주는 것이다. 컴퓨터는 여기 써 있는 preset에 맞춰서 코드를 변환 해 줄 것이다.

