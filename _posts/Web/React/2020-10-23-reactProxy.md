---
layout: post
title: React에서 Proxy 사용해 CORS 문제 해결
date: 2020-10-23 01:00:00
author: "SeWonKim"
categories: [WEB, React]
tags: [React, ajax, CORS]
comments: true
---

체크해방 개발 중 CORS 문제에 직면했다!...

[CORS 해결법](https://sewonkimm.github.io/git/2020/10/23/CORS.html) 중에서 내가 할 수 있는 방법은 proxy를 사용하는 방법 뿐...!     
근데 생각보다 쉽게 해결되었다...?!


## 1. pakage.json 설정

```javascript
"proxy": "https://xxx"
```

pakage.json 파일에 딱 이 한줄 추가하고, 요청했더니 성공...!    
뭐야...? 기분 좋네?
