---
layout: post
title: Firebase 호스팅하기
date: 2020-07-18 23:40:00
author: "SeWonKim"
categories: [ETC, Devlog]
tags: [  firebase, hosting]
comments: true
description: Firebase hosting
---


> [Firebase Documentation](https://firebase.google.com/docs/hosting/quickstart?hl=ko)

> [tutorial 영상 시리즈](https://www.youtube.com/watch?v=mmmaeHBCTOw)


### 1. Firebase console에서 App 생성하기

### 2. install firebase
`npm install -g firebase-tools`      
*npm 사용을 위해서는 node를 필수적으로 설치해야함*

### 3. 프로젝트에 firebase set up 
```shell
$firebase login
$firebase init
```
략
.firebaserc과 firebase.json 파일 생성됨.


firebase-tools를 설치했는데도 firebase 명령어를 사용할 수 없다면 
```sehll
$alias firebase="`npm config get prefix`/bin/firebase"
```
이 명령어를 치면 해결 된다...💨

### 4. deploy 
```shell
$firebase serve
```
는 로컬 서버 호스팅

```shell
$firebase deploy
```
는 release

console에 적힌 url로 deploy 된다.


---


생각보다 간단한걸...?!

> [예제 github](https://github.com/sewonkimm/firebase-demo)
