---
layout: post
title: 프로그래머스:우유와 요거트가 담긴 장바구니
date: 2019-12-2 13:38:00
author: "SeWonKim"
categories: [etc]
tags: [jekyll, etc, SQL]
fullview: false
comments: true
description: 프로그래머스 윈터코딩(2019) SQL 문제
---

[우유와 요거트가 담긴 장바구니](https://www.welcomekakao.com/learn/courses/30/lessons/62284)


## 풀이 코드
```sql
SELECT A.CART_ID
FROM CART_PRODUCTS AS A, 
     (SELECT CART_ID
      FROM CART_PRODUCTS 
      WHERE NAME = "우유") AS B
WHERE A.CART_ID = B.CART_ID AND A.NAME = "요거트"
```

장바구니 ID 를 그냥 ID로 보고 한참 헤맸다...!     
실제 윈터코딩 코딩테스트 때는 못 풀었었는데 이후에 SQL 다시 공부하고 풀어보니 그렇게 복잡하지많은 않은 것 같다.