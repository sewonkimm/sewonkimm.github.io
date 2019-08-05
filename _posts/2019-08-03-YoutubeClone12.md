---
layout: post
title: HTML form tag
date: 2019-08-03 22:05:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders, HTML, GET, POST, query]
fullview: false
comments: true
description: About form tag
---

## HTML form tag
`<form action = "", name= "", method="" ></form>`

## How form tag works?
1. form tag안의 모든 데이터를 웹 서버로 보낸다.
2. 웹 서버는 처리된 결과를 브라우저에 보내준다.

* action: form을 전송할 서버
* name: form이름을 식별하기 위한 이름
* method: form을 서버에 전송할 http method (GET 또는 POST)   
          GET은 url에서 데이터를 확인할 수 있지만 POST는 확인 할 수 없다. 
          GET은 보안에 취약하며 보안이 필요할 때(로그인 등)는 주로 POST를 사용한다.


```javascript
form(action=routes.join, method="post")
    input(type="text", name="name", placeholder="Full Name")
```


## Query
`http://localhost:4000/search?term=android`    
이렇게 url을 작성했을 때 req.query.term 값을 출력하면 android가 출력된다.     
파일에서 query에 접근하려면 method가 GET방식이어야 한다.