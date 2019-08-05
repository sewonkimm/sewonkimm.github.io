---
layout: post
title: Express - Routing
date: 2019-08-01 14:53:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders, Express, Route]
fullview: false
comments: true
description: What is routing?
---


[Express Docs](https://expressjs.com/ko/guide/routing.html)

## Routing
**Url의 정의, Url이 클라이언트의 request에 response하는 방식**

A router is in charge of mapping URLS with Controller Functions.    
And a controller's job is to get the data and render the page.


## Usage of Router
  Router is kinda class of Express, so when you use it you don't need to install router.

  The arguments of a Get Route is `get([URL], [Controller])`   
  The arguments of a Post Route is `post([URL], [Controller])`   




## Constructure
```
📂 Metube        
    📄 app.js
    📄 init.js
    📄 routes.js
    📂 routers
        📄 globalRouter.js
        📄 userRouter.js
        📄 videoRouter.js
    📂 controllers
        📄 userController.js
        📄 videoController.js
    📄 package.json
    📄 .babelrc
```    

1. 브라우저에서 웹 사이트 접속
2. init.js 실행
3. init.js는 app.js를 import 하고 있으므로 app.js 안의 미들웨어 실행 후, route 찾아감. app.js 안에 `app.use(routes.home, userRouter)` 명령어는 routes.home 주소로 들어가면 userRouter에 적혀있는 방식대로 응답한다.


## MVC pattern
  현재 폴더 구조를 기능별로 쪼개어 놓았는데 [MVC pattern](https://ko.wikipedia.org/wiki/%EB%AA%A8%EB%8D%B8-%EB%B7%B0-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC)에 맞춰서 쪼개놓았다. 

  M : Data    
  V : How does data look     
  C : Function that looks for the data 데이터를 보여주는 함수  
   

  📄 routes.js 에는 url이 정의되어있고,    
  📂 routers 안의 router에 어떤 url로 가면 어떤 controller가 실행될 것인지 적혀있다.     
  따라서 routes.js 의 url은 여러 파일에서 재사용 될 수 있고, 수정할 때에도 각각의 파일을 수정할 필요 없이 routes.js 파일만 수정하면 된다.

  📂 controllers 안의 controller에는 function이 정의되어 있다. 