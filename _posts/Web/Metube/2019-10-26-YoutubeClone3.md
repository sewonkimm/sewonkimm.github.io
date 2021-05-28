---
layout: post
title: YCC📄Server - Install Node.js / ExpressJS
date: 2019-10-26 23:19:00
author: "SeWonKim"
categories: [Youtube Clone Coding, Web]
tags: [Nomadcoders, Server, NodeJS, Express, Middleware]
comments: true
description: Server에 관하여
---

## What is server
**Server is computer**

1. Hardware : 늘 켜져있는 컴퓨터
2. Sorftware : 인터넷에 연결 된 내 접속 요청에 응답하는 컴퓨터

👉접속을 받아주는 무언가

## Server 구축 순서
1. Install NodeJS
2. Install Express.js
3. Setting Routers
4. Install Middlewares

---

# 1. NodeJS
## What is NodeJS
**Javascript outside of the browser**

이 한 문장이 그 어떤 설명보다 NodeJS 개념을 잘 설명한 것 같다.       
이전에는 브라우저 밖에서 자바스크립트로 할 수 있는 일이 별로 없었지만 NodeJS를 사용하면 JS로 브라우저와 별도로 동작하는 프로그램을 만들 수 있다.

*🎊front에서 back까지 JS로 대통합🎊*


## When should I use NodeJS 
**When you have to deal with a lot of data** 

1. NodeJS는 데이터 추가, 삭제, 수정 등등 많은 Data를 다뤄야 할 때 쓰는 것이 좋다. 
2. Data를 Realtime으로 활용할 때, JS기반 API를 활용할 때 등등... (ex.채팅 프로그램을 개발할 때 완전 적합하다.)
3. 거의 모든 것을 customize할 수 있을 만큼 자유롭기 때문에 백지에서 시작하는 것을 좋아하는 스타일이라면 사용하기 좋다.      

Django(Pthyon 프레임워크), Laravel(PHP 프레임워크)는 JS를 사용하기 싫다거나, 하드웨어적인 것을 다뤄야할 때, 이미 만들어져 있는 것을 활용하는 것을 좋아하는 사람에게 좋다.      
인스타그램처럼 이미지를 crop하고, filter를 적용하고 등등 서버의 램, 하드웨어를 사용해야하는 하드코어 프로세싱에 Node JS는 부적합하다. 

👉Nomad Coders Youtube about [Node JS vs Django](https://www.youtube.com/watch?v=PnhmeFakkXg)


## Usage of NodeJS
* Paypal
* Uber
* Netfilx
* ... and so on

모두 데이터를 다루기 때문에 NodeJS를 사용한다. 그리고 웹사이트를 만들 때 꼭 한가지 언어로만 백엔드를 만들 필요는 없다.
필요에 따라 다양한 언어로 만들 수 도 있다는 것!

---

# 2. Express.js
## What is Express.js
**Express js is Framework which is working on NodeJS**      

### Framework ??!
Framework is **pre-code** that makes development convienient.     
**NodeJS는 Framework가 아니다.** NodeJS is just Javascript on the backend. It is a runtime.

* Django : Framework for Python
* Rails : Framework for Ruby
* Laravel : Framework for PHP

👉이 모든 Framework들은 유저의 개발을 도와준다.    
서버를 개발하는 과정은 대부분 동일하고 반복적이기 때문에 모두 다른 방식이지만 하는 일(Make Server)은 같다.


## Express로 할 수 있는 것

코드 몇 줄로 서버 만들기


## Install Express

`npm install express`

본격적으로 express를 사용하려면 프로젝트에서 
```
const express = require('express');
const app = express();
``` 
를 작성해서 express를 가져온다.

[자세한 사항은 Express Guide 참고](https://expressjs.com/ko/starter/hello-world.html)



## Start my first Express server!

```javascript
app.listen(4000);
``` 
을 작성하고,

```console
node index.js
``` 
를 실행하면 4000번 포트가 열린다.     
브라우저에서 http://localhost:4000 로 들어가 보면 접속됨을 확인 할 수 있다.


### package.json script
```javascript
"scripts": {
    "start": "node index.js"
  }
``` 
📄package.json 에 이렇게 작성해놓으면 node index.js 대신 npm start라는 명령어로 위의 과정을 실행할 수 있다.

---

# 3. Router

![Alt text](https://i.stack.imgur.com/gNMR2.png)

<< Express 서버를 만들고 localhost:4000에 접속했을 때 볼 수 있는 화면 >>   

이때 GET은?

### GET & POST
**GET** : 웹사이트에 접속하면 GET method를 이용해 서버에 request를 보내고 페이지를 받아온다.      
**POST** : 로그인을 할 때, POST method가 브라우저에서 웹사이트로 로그인 정보를 전달해준다.

[🔗GET과 POST의 비교](https://preamtree.tistory.com/12)


## Request & Response
```javascript
function handleHome(req, res) {
    res.send('Hi from home');
}

function handleProfile(req, res) {
    res.send("You are on my profile");
}

app.get("/", handleHome);

app.get("/profile", handleProfile);
```

GET method는 request와 response를 작성해줘야한다.       
/ 로 GET request를 보내면 handleHome 함수의 response를 받아 화면에서 확인할 수 있다.


---

# 4. Middlewares

## What is Middleware in Express?

Middleware란 request와 response 사이에 존재하는 것이다. Something between request and response.

## How it works
```javascript
const handleHome = (req, res) => {
    res.send('Hi from home');
}

const betweenHome = (req, res, next) => {
    console.log("I am between");
    next();
}

app.get("/", betweenHome, handleHome);

```
위 코드는 요청과 응답 사이에 betweenHome 이라는 미들웨어를 실행할 것이다. 미들웨어는 실행한 뒤 next()를 이용해 다음 미들웨어를 호출한다. next()말고, res.send()를 쓰면 중간에 연결을 끊을수도 있다.       
request와 response사이의 middleware는 원하는 만큼 사용할 수 있고, `app.use(betweenHome);` 이런식으로 사용하게 되면 betweenHome 미들웨어가 모든 route에서 사용될 것이다. (전역적으로 사용 가능)       
접속이 있으면 코드는 위에서 아래로 실행되기 때문에 미들웨어를 작성하는 순서가 중요하다. application은 사용하는 미들웨어들을 확인하고 맨 마지막에 route를 확인한다.


## Middlewares that we uses at Metube project
1. [Morgan](https://github.com/expressjs/morgan)     
   👉HTTP request logger middleware for node.js
2. [Helmet](https://github.com/helmetjs/helmet)    
   👉Help secure Express apps     
   보안에 관한 거니까 습관처럼 설치해놓으면 좋겠지...
3. [Cookie Parser](https://github.com/expressjs/cookie-parser)    
   👉Parse HTTP request cookies
4. [Body Parser](https://github.com/expressjs/body-parser)     
   👉Node.js body parsing middleware      
   아직 cookie-parser와 body-parser의 역할에 대해서는 정확히 이해하지 못했다.
   
`npm install`로 설치하고 import한 뒤 사용하면 끝이다. *Very Simple!*


---

# 5. Package that we uses at Metube project

- [Babel](https://sewonkimm.github.io/youtube%20clone%20coding/2019/07/30/babel.html)
- [Nodemen](https://sewonkimm.github.io/youtube%20clone%20coding/2019/07/30/nodemon.html)
