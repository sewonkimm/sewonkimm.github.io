---
layout: post
title: YCC📄Function2 - Login (Local / Facebook / Github)
date: 2019-10-27 19:50:00
author: "SeWonKim"
categories: [Youtube Clone Coding, Web]
tags:
  [Nomadcoders, Passport]
comments: true
description: Login - Local / Facebook / Github
---

## Login 기능 구현
1. Import passport
2. `passport.authenticate('local')`
3. 실패 시 login화면으로 / 성공 시 home으로 redirect

## Github Login 기능 구현
### Github 인증 과정
1. github website (auth 진행)
2. 승인을 받으면 github website에서 /auth/github/callback으로 정보 전달
3. githubLoginCallback 함수 실행
4. 유저를 못찾은 경우 cb(error) -> failureRedirect 경로로 보내버림
5. 사용자를 찾은 경우 cb(null, user) -> cookie 만들고, 브라우저로 보낸 뒤 redirect

## Facebook Loigin 기능 구현
Github과 인증 과정 flow는 같다. Kakao, twitter도 마찬가지... 

---

# 1. Passport authenticate

`passport.authenticate()`은 username과 password를 찾아보도록 설정되어있다. (stratagy에 작성)

# 2. res.locals.user = req.user

passport는 user 정보가 담긴 object를 request에 올려준다. 이렇게 만들어놓으면 template들이 user에 접근 가능한다.     
app.js 파일에 passport를 import하고, `app.use(passport.session())`을 작성한다. 이렇게 하면 password가 쿠키를 들여다보고 그 쿠기정보에 해당하는 사용자를 찾아 req.user로 만들어준다.


### express-session 설치하기

`npm install express-session`

cookie를 암호화 해주기 위해서 [express-session](https://github.com/expressjs/session)을 설치한다. secret 값으로 encrypt 해주면 cookie가 암호화 되어서 쉽게 읽을 수 없다.  
sceret 값을 .env 파일에 저장해놓으면 노출되지 않는다. (랜덤한 key 값은 [random keygen](https://randomkeygen.com/)에서 아무거나 사용)


---

# Recup

서버를 호출 할 때마다 passport는 deserialize를 통해 내가 어느 사용자인지 식별할 수 있게 된다.

1. Cookie는 Express로 보내진다.
2. Express는 session을 이용해서 Cookie를 가지게 된다.
3. `passport.session()` 즉, session이 가진 쿠키를 이용한다.
4. 그 passport로 deserialize를 진행한다.
5. 사용자를 식별한다.
6. 5에서 찾은 그 사용자를 middleware나 routes의 request object에 할당한다.
7. **어느 route에서든지 로그인 한 사용자가 누구인지 확인 할 수 있다.**

서버가 재시작되면 session도 없어지는 문제 👉 monogoDB를 사용해서 session 저장!

### connect-mongo

[connect-mongo](https://www.npmjs.com/package/connect-mongo)를 사용하면 서버가 재시작 되더라도 Cookie를 계속 유지하고, 로그인 상태를 유지할 수 있다.    
Cookie 저장소를 만들어서 session을 저장해준다. mongoose.connection으로 이 저장소를 mongoDB와 연결해야한다.

---

## security

로그인 정보를 사용해서 로그인이 되어있는 사람만 route를 접속할 수 있게 할 수 있다. ( edit, delete 페이지 같은 부분... )      
req.user가 존재하는지 확인 후 존재할 경우 / 존재하지 않을 경우를 나누어 작성한다.

게시물 보안의 첫 걸음 👣👣👣
