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

---

## What MongoDB is good for
is to saving documents like JSON file

먼저 MongoDB에 Data들이 어떤 Shape를 가졌는지(어떤 식으로 생겼는지) 알려줘야한다. 아무거나 생성할 수 없다.    
👉 Shape에 대한 정보를 📂models 폴더에 저장

```javascript
import mongoose from 'mongoose';

const VideoSchema = new mongoose.Schema({
    fileUrl: {
        type: String,
        required: 'File URL is required'
    },
    title: {
        type: String,
        required: 'Title is required'
    },
    description: String,
    views: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: Date.now
    }

});

const model = mongoose.model("Video", VideoSchema);
export default model;
```
1. model : Document name, actuall data
2. schema : Shape

### Video와 Comment를 연결하는 2가지 방법
1. Video에 모든 Comment ID가 담긴 array를 추가하기 
```javascript
comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Comment"
}]
```
2. Comment에 Video ID를 추가하기 
```javascript
video: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Video"
}
```


---


## How do I use these models?
model은 Data element를 받는 통로이지 element 그 자체는 아니다.    
element ≠ model