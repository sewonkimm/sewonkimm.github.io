---
layout: post
title: Async & Await
date: 2019-08-06 16:57:00
author: "SeWonKim"
categories: [Youtube Clone Coding, Web]
tags: [Nomadcoders]
fullview: false
comments: true
description: Async & Await 
---

## What is Async & Await
**async, await is something that waits for you**

javascript는 싱글 스레드 프로그래밍 언어이기 때문에 여러가지 일을 동시에 처리한다.(비동기)   
이때 async, await은 한 작업이 끝나기를 기다린 다음 다음 작업을 진행할 수 있도록한다.

포인트는 작업의 결과(성공 or 실패)가 아니라 **작업이 끝이 났는지** 이다.

## Apply async to project
```javascript
export const home = async(req, res) => {
    try {
        const videos = await Video.find({});
        res.render("home", { pageTitle: "Home", videos });
    } catch(error){
        console.log(error);
        res.render("home", { pageTitle: "Home", videos: [] });
    }
    
};
```
"/" 라우터에 접근하면 이 function이 실행된다.     
여기에서 async, await은 DB에서 find({})를 마칠때까지 기다렸다가 작업이 끝나면 res.render()진행한다.

try, catch문을 사용하면 error가 발생했을 때 무슨 error가 발생했는지 볼 수 있고,
이 코드에서는 설령 error가 발생했더라도 video 목록이 아무것도 없는 home을 render한다.
