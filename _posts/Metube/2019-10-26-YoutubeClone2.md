---
layout: post
title: YCC📄init project & push to Github
date: 2019-10-26 23:01:00
author: "SeWonKim"
categories: [Youtube Clone Coding, Web]
tags: [Nomadcoders]
fullview: false
comments: true
description: The way to create my own project.
---

# init project
1. Install Node.js [(🔗download link)](https://nodejs.org/ko/download/)
2. Create a project 
3. [Connect with github](https://sewonkimm.github.io/youtube%20clone%20coding/2019/07/30/gothub.html)

## ⚠ How to Create a project ⚠

1. npm init 명령어 >> **package.json**을 생성
2. `npm install [모듈명]` 으로 필요한 npm 모듈을 설치한다.

### what is package.json?
모듈을 설치하면 package.json의 dependencies 항목에 자동으로 기록된다.  
또 node_modules 폴더가 자동으로 생기는데 여기에는 npm을 통해 다운로드 받은 모든 모듈들이 들어있다.

package.json은 협업할 때 아주아주아주 유용하다.       
npm install 명령어만 치면 자동으로 package.json에 적혀있는 필요한 모든 모듈들을 설치할 수 있다.
