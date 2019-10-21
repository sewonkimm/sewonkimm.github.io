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
    Session,
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

---

## session

cookie를 암호화 해주기 위해서 [express-session](https://github.com/expressjs/session)을 설치한다.  
secret 값으로 encrypt 해주면 cookie가 암호화 되어서 쉽게 읽을 수 없다.  
sceret 값을 .env 파일에 저장해놓으면 노출되지 않는다. (랜덤한 key 값은 [random keygen](https://randomkeygen.com/)에서 아무거나 사용)

서버를 호출 할 때마다 passport는 deserialize를 통해 내가 어느 사용자인지 식별할 수 있게 된다.

1. Cookie는 Express로 보내진다.
2. Express는 session을 이용해서 Cookie를 가지게 된다.
3. `passport.session()` 즉 session이 가진 쿠키를 이용한다.
4. 그 passport로 deserialize를 진행한다.
5. 사용자를 식별한다.
6. 방금 찾은 그 사용자를 middleware나 routes의 request object에 할당한다.
7. **어느 route에서든지 로그인 한 사용자가 누구인지 확인 할 수 있다.**

서버가 재시작되면 session도 없어진다. 👉 monogoDB를 사용해서 session 저장!

## connect-mongo

[connect-mongo](https://www.npmjs.com/package/connect-mongo)

서버가 재시작 되더라도 Cookie를 계속 유지하고, 로그인 상태를 유지할 수 있다.

---

## security

로그인 정보를 사용해서 로그인이 되어있는 사람만 route를 접속할 수 있게 할 수 있다. ( edit, delete 페이지 같은 부분... )  
게시물 보안의 첫 걸음 👣👣👣
