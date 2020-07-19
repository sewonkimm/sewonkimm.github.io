---
layout: post
title: 반응형 웹 & Media query
date: 2020-07-19 20:48:00
author: "SeWonKim"
categories: [Styling]
tags: [jekyll, Styling, css, post, web, moblie, responsive]
fullview: false
comments: true
description: Responsive Web Design(RWD)
---

>[참고 블로그](https://webclub.tistory.com/494?category=541913)
 　 
  　 
   　 

# Responsive web? 

브라우저 창의 폭에 따라 레이아웃을 바꿀 수 있도록 하는 기술
 　 
  　 
   　 
RWD의 3가지 개념     
- 레이아웃에 flexible grid를 사용; flexible grid를 사용하면 고정폭을 사용하지 않는다.
- 이미지와 비디오에 flexible media를 사용; 큰 모니터에는 크게 출력, 작은 모니터에는 작게 출력한다는 소리다.
- 화면 너비에 맞는 스타일을 만드는 부분은 CSS media query를 통해 해결
 　 
  　 
   　 

## Media query?

브라우저에 보내는 스타일을 현재 상태에 따라 달리 할 수 있는 CSS 테크닉이다.

```CSS
// 기본 문법
@media [only 또는 not] [미디어유형] [and 또는 ,콤마] (조건문) {실행문}


// 기기 종류가 screen이고, max-width가 786px이하면 스타일 적용
@media only screen and (max-width:786px){
    width: 100%;
}
```


```CSS
/* Smartphones (portrait and landscape) ----------- */ 
@media only screen and (min-device-width : 320px) and (max-device-width : 480px) { 
    /* Styles */ 
} 

/* Smartphones (landscape) ----------- */
@media only screen and (min-width : 321px) { 
    /* Styles */ 
} 

/* Smartphones (portrait) ----------- */ 
@media only screen and (max-width : 320px) { 
    /* Styles */ 
} 

/* iPads (portrait and landscape) ----------- */ 
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) { 
    /* Styles */ 
} 
    
/* iPads (landscape) ----------- */
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : landscape) { 
    /* Styles */ 
} 

/* iPads (portrait) ----------- */ 
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (orientation : portrait) { 
    /* Styles */ 
} 

/* Desktops and laptops ----------- */ 
@media only screen and (min-width : 1224px) { 
    /* Styles */ 
} 

/* Large screens ----------- */ 
@media only screen and (min-width : 1824px) { 
    /* Styles */ 
} 

/* iPhone 4 ----------- */ 
@media only screen and (-webkit-min-device-pixel-ratio : 1.5), only screen and (min-device-pixel-ratio : 1.5) { 
    /* Styles */ 
}

// 출처: https://webclub.tistory.com/494?category=541913 [Web Club]
```