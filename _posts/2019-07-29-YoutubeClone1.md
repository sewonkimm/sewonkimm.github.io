---
layout: post
title: New Challenge 'Youtube Clone Coding'
date: 2019-07-29 17:07:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders]
fullview: false
comments: true
description: 💪LEGGO~
---


## New Challenge for August
벌써 7월의 마지막 주가 시작되었다. [🎙월요일좋아~](https://www.youtube.com/watch?v=5BV85WRsIyo)          
6월 마지막 주부터 지금까지 노마드코더에서            
바닐라JS > ReactJS > ReactNative > React, Redux 
이 순서대로 4개의 강의를 수강했다.    


3월부터 6월까지 3개월간 인턴십을 진행했던 회사에서 React, Redux를 사용했지만 복습하는 마음으로, 또 노마드코더 강의가 어떤지 한 번 들어보는 마음으로 수강해보았다.
결론은 초급풀스택 과정인 '유튜브 클론코딩' 강의 결제...! 

다른 코딩 강의를 들어본 적은 없지만, 니콜라스 쓰앵님 어렵지 않게 쉬운 비유로 개념 설명을 잘 해주신다. 
또 강의 하나당 시간이 10분 내외라서 짧게짧게 집중이 잘된다. (겸사겸사 영어듣기공부도...?)


회사에서 서버, DB에 대한 것은 거의 만져보지 못했고, 혼자서 서비스를 배포해 본 경험도 전무하니 모든 것을 커버해주는 유튜브 클론코딩 과정을 들어보는게 좋을 것 같다고 생각해 결제했다.
디자인, 프론트엔드, 백앤드, 배포 등 모든 과정을 경험해볼 수 있고, 포트폴리오도 남길 수 있는 기회라고 생각한다.





## What is Clone Coding  
클론 코딩이란 기존의 서비스를 그대로 만들어 보는 과정이다.       
서비스 개발의 모든 과정을 경험해보며 개발 공부를 할 수 있다.


## Why I choose this?
이제 졸업을 한 학기 앞두고 있는데 인턴십을 진행하면서 웹 개발자로 진로를 결정했기 때문에 준비된 포트폴리오가 많이 없다고 생각한다.
지금 이 개발 블로그도 7월에 친구와 알고리즘 스터디를 시작하면서 시작한 것이라 알고리즘 문제 푼 것 말고는 별 내용이 없다. 
클론 코딩 강의를 수강하면서 블로그에 내용 정리를 해보면 개발 공부도 하고, 매일 커밋하면서 내 github을 관리할 수도 있을 것 같다.



개발 공부에 대해 참고할 만한 좋은 글[🔗링크](https://jbee.io/essay/how_do_i_study_2/?source=post_page---------------------------)


## So what can I learn through this?
Node Js, Express JS, Mongo DB, Webpack, Styling, Recording Video with JavaScript, API+AJAX... lots of things!          

이 과정을 수강하고 나서 만들고 싶은 서비스를 혼자서도 만들 수 있는 능력치를 업그레이드 할 수 있기를 기대한다.



---

## Construction of Project
```
📂 Metube        
    📄 app.js
    📄 init.js
    📄 routes.js
    📂 routers
        📄 globalRouter.js
        📄 userRouter.js
        📄 videoRouter.js
    📂 controllers
        📄 userController.js
        📄 videoController.js
    📂 views
        📂 layouts
            📄main.pug
        📄home.pug
        
    📄 package.json
    📄 .babelrc
```    

⚠ 프로젝트를 막 만들어 나갈 때
1. npm init으로 **package.json**을 생성해준다.
2. npm install 모듈명 으로 필요한 npm 모듈을 설치한다.

모듈을 설치하면 package.json에 dependencies 항목에 자동으로 기록된다.       
또 node_modules 폴더가 자동으로 생기는데 여기에는 npm을 통해 다운로드 받은 모든 모듈들이 들어있다.       

package.json은 협업할 때 아주아주아주 유용하다. npm install 명령어만 치면 자동으로 package.json에 적혀있는 필요한 모든 모듈들을 설치할 수 있다.