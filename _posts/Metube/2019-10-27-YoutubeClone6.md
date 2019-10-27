---
layout: post
title: YCC📄DB - MongoDB
date: 2019-10-27 19:21:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders, DB, MongoDB]
fullview: false
comments: true
description: DB에 관하여
---

## DB 작업
1. Install MongoDB > mongod으로 설치 확인
2. mongoose - JS에서 MongoDB를 사용할 수 있게하는 adapter
3. Connect JS to MongoDB
4. Model 작성
5. Import model.js file to controller.js file (async& await)
6. Create / Update / Delete 기능 구현

---

# 1. Install MongoDB

**MongoDB is a NoSQL Database.**

Mongo DB는 더 적은 규칙과 더 적은 절차로 유연하게 작업이 가능하다.
생성이 빠르고 엄격하지 않기 때문에 채팅 프로그램에서 사용하기 적합하다.
사용하기 쉽고, 직관적으로 작동하기 때문에 많은 기업에서 사용한다.
(같은 서버에서 다양한 종류의 데이터베이스를 사용할 수 있다! 꼭 한가지 데이터베이스만 사용해야하는건 아니다.)

### Istall 과정
1. MongoDB community server를 [다운](https://www.mongodb.com/download-center/community)
2. 환경변수에 MongoDB설치paht/bin 등록
3. Console에서 mongod을 입력하고 작동하는지 확인

---

# 2. Mongoose

**mongoose is a package to talk to MongoDB. It makes JS communicate with MongoDB.**

MongoDB를 NodeJS에서 사용하려면 Adapter가 필요하다.
이 Adapter역할을 해주는 것이 바로 [mongoose](https://mongoosejs.com/)이다.

1. `npm install mongoose` 명령어로 설치
2. db.js 파일에 `import mongoose` 후 connect
3. import db.js 파일
4. model 작성

---

# 3. Schema 작성

MongoDB에 Data들이 어떤 Shape를 가졌는지(어떤 식으로 생겼는지) 알려줘야한다. 아무거나 생성할 수 없다.    
👉 Shape에 대한 정보를 📂models 폴더에 파일로 작성

1. model : Document name, actual data  
    A model is what creates a document on the database with the shape of the schema
2. schema : The shape of the Data on the DB


<< 작성 예시 >>
```javascript
import mongoose from "mongoose";

const VideoSchema = new mongoose.Schema({
  fileUrl: {
    type: String,
    required: "File URL is required"
  },
  title: {
    type: String,
    required: "Title is required"
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

### 작성해야할 Model
1. Video - fileURL / title / description / views / creator / comments
2. Comment - text / creator
3. User - name / email / profileURL / facebookID / githubID / comments / videos

### Video와 Comment를 연결하는 2가지 방법

1. Video에 모든 Comment ID가 담긴 array를 추가하기

```javascript
comments: [
  {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Comment"
  }
];
```

2. Comment에 Video ID를 추가하기

```javascript
video: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"Video"
}
```
---

# 4. Upload file

비디오를 업로드 할 때 DB에 file 자체를 업로드 하지 않는다. **저장하는건 file의 location**

Upload Video 버튼 클릭 >> middleware 'multer' >> url을 DB에 저장

## multer
[multer github](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)

multer는 file의 url을 반환시켜주는 미들웨어이다. Video file을 업로드 해주고 path를 반환한다.

---

## 그리고 알아야 할 내용들
- [dotenv](https://sewonkimm.github.io/youtube%20clone%20coding/2019/08/05/dotenv.html)
- [Async & Await](https://sewonkimm.github.io/youtube%20clone%20coding/2019/08/06/asyncawait.html)



