---
layout: post
title: GET & POST
date: 2019-07-30 19:10:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders, Express]
fullview: false
comments: true
description: How the http works?
---

![Alt text](https://i.stack.imgur.com/gNMR2.png)

Express 서버를 만들고 localhost:4000에 접속했을 때 볼 수 있는 화면      
이때 GET은 무엇일까?


## GET & POST
**GET**      
: 웹사이트에 접속하면 GET method를 이용해 서버에 request를 보내고 페이지를 받아온다.

**POST**    
: 로그인을 할 때, POST method가 브라우저에서 웹사이트로 로그인 정보를 전달해준다.


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

