---
layout: post
title: YCC📄Function4 - Update profile
date: 2019-10-28 19:06:00
author: "SeWonKim"
categories: [Youtube Clone Coding, Web]
tags: [Nomadcoders]
comments: true
description: User profile page 구현 과정
---

# User profile workflow
1. Styling
2. url에서 받은 id와 cookie에 저장된 id를 비교해서 내 프로필과 다른 유저 프로필 구분
3. postEditProfile function으로 DB update (post router 작성해야함)
4. change password 기능 구현 - passport-local-mongoose plugin 사용

---

## Profile photo upload

1. Test 할 때에는 multer로 사진 파일 업로드하는 걸로 설정
2. [AWS S3](https://sewonkimm.github.io/youtube%20clone%20coding/2019/10/28/AWSS3.html)에 업로드하는 것으로 변경

### DB update 

findByIdAndUpdate를 사용해 id로 DB data를 찾고 update한다.     
이 때 업데이트 된 파일이 없다면 기존 파일 path를 넣어주는 조건을 작성해주는 것을 잊지 말 것


---

## Change password 

1. 현재 password
2. 새 password
3. password 확인

**비밀번호는 절대 텍스트 그대로 저장되지 않는다.** 항상 encrypted(암호화) 되서 저장된다.     
중간에 가로채면 노출될 수 있기 때문에!

### 'passport-lcoal-mongoose' change password

**changePassword(oldPassword, newPassword, callback)**  
Changes a user's password hash and salt, resets the user's number of failed password attempts and saves the user object (everything only if oldPassword is correct). If no callback cb is provided a Promise is returned. If oldPassword does not match the user's old password, an IncorrectPasswordError is passed to cb or the Promise is rejected.
