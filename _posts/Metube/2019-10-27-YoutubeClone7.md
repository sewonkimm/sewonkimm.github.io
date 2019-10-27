---
layout: post
title: YCC📄Function1 - Join (Local / Facebook / Github)
date: 2019-10-27 19:29:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags:
  [
    jekyll,
    Youtube Clone Coding,
    Clone Coding,
    Nomadcoders,
    Passport
  ]
fullview: false
comments: true
description: Join - Local / Facebook / Github
---

## Join 기능 구현
1. Install passport
2. passport.js 파일 작성 - strategy 작성
3. join controller 작성

---

# 1. Passport & User Authentication

## What is Passport?

**[Passport](http://www.passportjs.org/) is authentication(사용자 인증) middleware for Node.js.**

username과 password를 찾고, 주어진 password를 가지고 인스턴스를 만들어 DB에 저장해주는 기능들을 passport로 할 수 있다.

## What is authentication?

If we set the cookies on the browser, with the cookies we're gonna get the userID.
Passport automatically get the cookies from the brwoser, he will give you user object in your controllers.

### Prior knowledge for passport - Cookies 

cookies are something that can save on the browser. 
Cookie have to be small, and shouldn't have sensitive information. 
서버에 뭔가 요청(Request)할 때마다 브라우저가 자동으로 쿠키들을 서버에 전송해준다.

Serialization을 통해서 cookie에 어떤 정보만 넣을 지 골라 줄 수 있다.     
ex) Cookie에 user.id 만 넣도록 serialization 


```
Passport가 하는 일

1. Create a cookie
2. Put it on the browser
3. Everytime give that cookie to user
```

---

# 2. passport strategy

**Stratagy is ways of log in** like local, facebook, github ...

[passport-lcoal-mongoose](https://github.com/saintedlama/passport-local-mongoose)를 사용해서 stratagy를 간단하게 생성할 수 있다.

---

# 3. Controller 작성

- postJoin
  1. 비밀번호 2개가 동일한지 확인
  2. User.create로 데이터베이스에 User를 생성
  3. User.register(user, password, callback)
  4. Login 화면으로 보내기 or 자동으로 로그인 시켜주기(postLogin)      
  
  *middleware는 정보를 다음것으로 넘겨준다*

- getJoin : /join page render

---

# Github Join
1. Install passport-gitub 
2. Configure passport strategy
3. Register application on github - 승인 받으면 사용자의 정보를 callback URL로 보내준다.     
(주의! github client id와 client secret은 절대 다른 사람과 공유하면 안된다. .env에 저장!)
4. 사용자가 gitub에서 정보를 가져온 다음 실행되는 function 작성 - githubLoginCallback function
5. github을 위한 route 만들기 (github login으로 접속하면 인증 시작👉인증완료되면 callback URL 접속👉`passport.authenticate('github')`👉postGithubLogin Function 실행-사용자를 home으로 보내는 기능)
6. github에서 보내준 data로 DB등록 
  - 이미 User가 존재하는 경우, 사용자 정보 Update & Login 
  - 새로 User를 등록하는 경우, Create


# Facebook Join
1. Install passport-facebook
2. Application 등록 at [Facebook for developers](https://developers.facebook.com/)
3. Create new app & App id와 secret .env에 등록
4. Configure passport strategy
5. Facebook을 위한 route 만들기 (/auth/facebook, /auth/facebook/callback)
6. facebookCallback function 작성(User가 이미 존재하는 경우와 새로 User를 등록하는 경우 2가지 작성)
7. postFacebookLogin function 작성(사용자를 home으로 보내는 기능)

Facebook은 https로 만들어야 로그인을 진행할 수 있다. localtunnel를 사용해서 local server를 https url로 만들어 테스트 할 수 있다.
이걸 Facebook developers 사이트 setting에 url을 넣어서 설정해줘야한다.