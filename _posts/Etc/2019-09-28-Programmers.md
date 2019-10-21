---
layout: post
title: 프로그래머스 잡페어 코딩테스트
date: 2019-09-28 20:25:00
author: "SeWonKim"
categories: [etc]
tags: [jekyll, etc]
fullview: false
comments: true
description: 프로그래머스 2019 웹개발자 잡페어 코딩테스트
---

프로그래머스 2019 웹개발자 잡페어 코딩테스트를 봤다.  
나는 평소에 알고리즘을 C++로 푸는데 테스트 언어에 C++이 없어서 당황스러웠다.  
Javascript로 풀었는데 그래도 3문제 다 풀어서 통과했다🥳🥳🥳  
30분정도 남기고 다 풀었다 보통 한문제 푸는데 30분 정도 걸리는 것 같다.

### 1번

n 개의 상품을 k개의 상자에 담아 포장하는 문제

상품 배열과 상자 배열을 sort한 뒤 while문을 돌려서 풀었다.  
javascript에도 sort 기능이 있는데 사전순으로 sort 한다는 사실을 뒤늦게 알아서 이거 푸는데 시간이 좀 걸렸다.

```js
goods.sort(function(a, b) {
  return a - b;
});
boxes.sort(function(a, b) {
  return a - b;
});
```

이런식으로 정렬해줘야 숫자 순서대로 정렬가능하다.

### 2번 8-Queen 문제

이거!!! 3주차 때 풀었던 N-Queen 문제!!!  
백준에서 강의 들었을 때에는 이해를 못했었는데 나중에 책 보면서 이해를 했다.  
대각선 채우는 부분을 이해해놔서 풀 수 있었다.

맨 처음 남은 자리 64개에서

```js
for (var i = 0; i < 8; i++) {
  for (var j = 0; j < 8; j++) {
    if (d1[i + j] == 1 || d2[j - i + 7] == 1) {
      answer--;
    }
  }
}
```

대각선 배열이 1인 경우에 answer를 빼는 방식으로 구현했다.

### 3번

옛날에 이런 문제 한 번 풀어본 것 같은데... 아무튼 쉬운 문제였다. DP로 풀었다.

점화식 D[i] = i번째 스티커를 선택할 때 최대 점수  
i번째를 선택하는 경우 `D[i-2]+sticker[i]`  
i번째를 선택하지 않는 경우 `D[i-1]`  
**D[i] = max(D[i-2]+sticker[i], D[i-1])**

---

## 느낀점

라인보다는 쉬웠다. 2차 과제가 관건이겠지만...  
아무튼 코딩테스트 통과한 적은 처음이라 기분이 좋다 ^^! I CAN DO IT~
