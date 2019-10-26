---
layout: post
title: init project & push to Github
date: 2019-10-26 23:01:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders, Website, Webapp]
fullview: false
comments: true
description: What's difference between Website and Webapp?
---

# init project
1. Install Node.js [(🔗download link)](https://nodejs.org/ko/download/)
2. Create a project 
3. git init 하고, intial commit을 push!

## ⚠ How to Create a project ⚠

1. npm init 명령어 >> **package.json**을 생성
2. `npm install [모듈명]` 으로 필요한 npm 모듈을 설치한다.

### what is package.json?
모듈을 설치하면 package.json의 dependencies 항목에 자동으로 기록된다.  
또 node_modules 폴더가 자동으로 생기는데 여기에는 npm을 통해 다운로드 받은 모든 모듈들이 들어있다.

package.json은 협업할 때 아주아주아주 유용하다.       
npm install 명령어만 치면 자동으로 package.json에 적혀있는 필요한 모든 모듈들을 설치할 수 있다.
