---
layout: post
title: multer
date: 2019-08-06 17:21:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders, middleware, multer]
fullview: false
comments: true
description: Upload and multer middleware
---

## When somebody try to upload video
비디오를 업로드 할 때 DB에 file 자체를 업로드 하지 않는다. **저장하는건 file의 location**

Upload Video 버튼 클릭 >> middleware 'multer' >> url을 DB에 저장

## multer
[multer github](https://github.com/expressjs/multer/blob/master/doc/README-ko.md)

multer는 file의 url을 반환시켜주는 미들웨어이다. 
Video file을 업로드 해주고 path를 반환한다.
📂videos 폴더에 url을 저장하도록 설정해놓았다.