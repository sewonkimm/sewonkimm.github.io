---
layout: post
title: Passport
date: 2019-08-22 15:30:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags:
  [
    jekyll,
    Youtube Clone Coding,
    Clone Coding,
    Nomadcoders,
    Passport,
    Authentication,
  ]
fullview: false
comments: true
description: What is Passport?
---

# User Authentication

## What is Passport?

[Passport](http://www.passportjs.org/)

Passport is authentication(사용자 인증) middleware for Node.js.

🍎passport.authenticate() : username과 password를 찾아본다.  
🍊passport.register() : 주어진 password를 가지고 인스턴스를 만든다. username과, password를 DB에 저장해준다.

## What is authentication?

If we set the cookies on the browser, with the cookies we're gonna get the userID.
Passport automatically get the cookies from the brwoser, he will give you user object in your controllers.

## Prior knowledge for passport

**Cookies : cookies are something that can save on the browser.**

서버에 뭔가 요청(Request)할 때마다 브라우저가 자동으로 쿠키들을 서버에 전송해준다.

```
Passport가 하는 일

1. Create a cookie
2. Put it on the browser
3. Everytime give that cookie to user
```

Cookie have to be small, and shouldn't have sensitive information.

## passport stratagy

**Stratagy is ways of log in**  
local, facebook, github ...

[passport-lcoal-mongoose](https://github.com/saintedlama/passport-local-mongoose) 를 사용해서 stratagy를 간단하게 생성할 수 있다.

## serialization

**Serialization is 'what information are we going to give the cookie'**  
ex) Cookie에 user.id 만 넣도록 serialization 할 수 있다.
