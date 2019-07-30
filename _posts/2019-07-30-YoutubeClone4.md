---
layout: post
title: Express Server
date: 2019-07-30 18:40:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders]
fullview: false
comments: true
description: What is Express.js?
---


## What is server
Server is computer.

1. Hardware : 늘 켜져있는 컴퓨터
2. Sorftware : 인터넷에 연결 된 내 접속 요청에 응답하는 컴퓨터

👉접속을 받아주는 무언가


## What is Express.js
Express js is Framework which is working on NodeJS.      


Express로 할 수 있는 것      
: 코드 몇 줄로 서버 만들기


* Django : Framework for Python
* Rails : Framework for Ruby
* Laravel : Framework for PHP

👉이 모든 Framework들은 유저의 개발을 도와준다.    
서버를 개발하는 과정은 대부분 동일하고 반복적이기 때문에 모두 다른 방식이지만 하는 일(Make Server)은 같다.




## Install Express
NPM(Node Package Manager) 이용하기 <- NodeJS 설치하면 자동으로 설치되어 있음.

```
npm install express
```

express를 설치하면 package.json의 dependecy 목록에 자동으로 express가 기록된다.

본격적으로 express를 사용하려면 프로젝트에서 
```
const express = require('express');
const app = express();
``` 
를 작성해서 express를 가져온다.

require 은 폴더 안에서 해당 모듈을 가져오는 명령어이다.

[Express Guide](https://expressjs.com/ko/starter/hello-world.html)



## Start my first Express server!

```javascript
app.listen(4000);
``` 
📄Project/index.js에 다음 과 같이 작성하고 터미널에서


```console
node index.js
``` 
를 실행하면 4000번 포트가 열린다.    
브라우저에서 http://localhost:4000 로 들어가 보면 접속됨을 확인 할 수 있다.




```javascript
"scripts": {
    "start": "node index.js"
  }
``` 
📄Project/package.json 에 이렇게 작성해놓으면 node index.js 대신 npm start라는 명령어로 위의 과정을 실행할 수 있다.

