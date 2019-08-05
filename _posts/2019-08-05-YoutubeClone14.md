---
layout: post
title: MongoDB
date: 2019-08-05 14:02:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders, DB, MongoDB, mongoose]
fullview: false
comments: true
description: Database part! 
---

## Install MongoDB
MongoDB is NoSQL database program.   
NoSQL DB는 더 적은 규칙과 더 적은 절차로 유연하게 작업이 가능한 데이터베이스이다.
생성이 빠르고 엄격하지 않기 때문에 채팅 프로그램에서 사용하기 적합한 데이터베이스이다.
사용하기 쉽고, 직관적으로 작동하기 때문에 많은 기업에서 사용한다. 
(같은 서버에서 다양한 종류의 데이터베이스를 사용할 수 있다! 꼭 한가지 데이터베이스만 사용해야하는건 아니다.)


1. MongoDB 홈페이지에서 MongoDB community server를 다운받고 설치
2. 환경변수에 MongoDB설치paht/bin 등록
3. Console에서 mongod을 입력하고 작동하는지 확인
4. mongod을 입력하면 local url을 알 수 있다. `mongodb://127.0.0.1:27017/[DB이름]`


## Communicate MongoDB and Javascript
MongoDB를 NodeJS에서 사용하려면 Adapter가 필요하다. 
이 Adapter역할을 해주는 것이 바로 [mongoose](https://mongoosejs.com/)이다.


## Recap
데이터베이스를 이용하기 위해 필요한 것
1. MongoDB
2. mongoose