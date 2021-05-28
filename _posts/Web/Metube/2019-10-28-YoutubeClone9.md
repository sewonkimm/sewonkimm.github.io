---
layout: post
title: YCC📄Function3 - Upload and recording video
date: 2019-10-29 19:32:00
author: "SeWonKim"
categories: [Youtube Clone Coding, Web]
tags: [Nomadcoders]
comments: true
description: Upload video & recording function
---

# 1. Upload 

비디오를 업로드 할 때 DB에 file 자체를 업로드 하지 않는다. **저장하는건 file의 location**이다.

1. Upload Video 버튼 클릭
2. file을 upload하고 URL을 반환하는 middleware 'multer'
3. url을 DB에 저장

Test 할 때에는 이 과정을 따라서 multer로 업로드하고, [AWS S3](https://sewonkimm.github.io/youtube%20clone%20coding/2019/10/28/AWSS3.html)에 업로드하는 것으로 변경

# 2. Recording 

1. Record Button Click
2. Get stream from camera. [MediaDevices](https://developer.mozilla.org/ko/docs/Web/API/MediaDevices) 활용
3. Permission을 받으면 `getUserMedia()` 시작하고 Stop event로 바꾸기, 못 받으면 'can't record' 표시
4. Stop Button Click
5. mediaStream download link 생성
6. Download link를 fake click해서 파일을 다운로드
7. 다운받은 파일을 업로드

