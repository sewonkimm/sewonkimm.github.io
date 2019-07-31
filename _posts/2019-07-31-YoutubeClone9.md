---
layout: post
title: Middelware
date: 2019-07-31 15:08:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders]
fullview: false
comments: true
description: Middelware in Express
---


## What is Middleware in Express?
Express 작동 방식은 다음과 같다.
```
1. 브라우저에서 웹사이트에 접속 (connection) 
2. index.js 파일 실행
3. application이 route를 찾아봄    
   route는 유저의 request라고 볼 수 있다.
4. function을 실행
5. function이 response를 보낸다.
```
이 과정에서 request와 response 사이의 something을 middleware라고 한다.


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
위 코드는 요청과 응답 사이에 betweenHome 이라는 미들웨어를 실행할 것이다.      
미들웨어는 실행한 뒤 next()를 이용해 다음 미들웨어를 호출한다.      
next()말고, res.send()를 쓰면 중간에 연결을 끊을수도 있다.


request와 response사이의 middleware는 원하는 만큼 사용할 수 있고,      
`app.use(betweenHome);`     
이런식으로 사용하게 되면 betweenHome 미들웨어가 모든 route에서 사용될 것이다. (전역적으로 사용 가능)



접속이 있으면 코드는 위에서 아래로 실행되기 때문에 미들웨어를 작성하는 순서가 중요하다.      
application은 사용하는 미들웨어들을 확인하고 맨 마지막에 route를 확인한다.


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
   

사용할 미들웨어들은 `npm install`로 설치하고 import한 뒤 사용하면 끝이다. *Very Simple!*