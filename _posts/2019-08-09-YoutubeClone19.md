---
layout: post
title: Webpack
date: 2019-08-09 16:41:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders, Webpack]
fullview: false
comments: true
description: What is webpack?
---

It's finally starting Front-end part!🎉🎉🎉

## What is webpack?

![Webpack](https://poiemaweb.com/img/webpack.png)

Webpack is module bundler  
👉 우리가 많은 파일을 가져와서 webpack에게 주면 webpack은 그것들을 브라우저와 완전 호환되는 static파일로 변환해준다.  
ex) Sass를 css 파일로 변환, ES6를 nomal javascript로 변환

## install webpack

`npm intsall webpack webpack-cli`

- webpack: 파일에서 webpack을 사용하기 위해 설치
- webpack-cli: 터미널에서 webpack을 쓰기 위해 설치

설치 후 📄webpack.config.js 파일을 생성해줘야한다.  
webpack은 자동적으로 webpack.config.js 파일을 찾아서 실행한다.  
webpack.config.js는 100% client code이고, 그말은 즉슨 babel이 적용되지 않아서 old javascirpt를 사용해 작성해야한다는 뜻이다.
