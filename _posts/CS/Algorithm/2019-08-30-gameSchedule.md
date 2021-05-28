---
layout: post
title: 프로그래머스:예상 대진표
date: 2019-08-30 10:55:00
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘, Programmers]
comments: true
description: Programmers skill check lv.2
---

[예상 대진표](https://programmers.co.kr/learn/courses/30/lessons/12985)

## Problem

N명이 참가하는 대회  
1~2, 3~4, ..., N-1~N 이런 순서로 참가자끼리 게임을 진행하고
다음 라운드에는 1부터 N/2번까지 차례대로 배정받아 또 게임을 진행  
게임은 최종 한 명이 남을 때까지 계속됨

이 때 A와 B 가 몇 번째 라운드에서 만나게 될 지 구하기

## Input

N, A, B

## Output

A와 B가 몇 번째 라운드에서 만나는지 return

---

## Idea

참가자 2명씩 그룹을 만들게 되면
(a+1)/2, (b+1)/2 값이 다음 라운드에서 a와 b의 그룹이다.

a와 b의 그룹이 같아지면 반복문을 종료하고, 카운트 값을 반환한다.

---

## Code

```cpp
#include <iostream>

using namespace std;

int solution(int n, int a, int b)
{
    int cnt = 0;
    while( a != b ) {
        a = (a+1)/2;
        b = (b+1)/2;

        cnt++;
    }

    return cnt;
}
```

## Review

테스트 2개 실패로 통과하지 못한 답안😢
n/2로 그룹을 나누고, a와 b의 차이가 1이면 반복문을 종료하고,,, 조건을 이것저것 썼는데 정답은 이 조건문들을 다 빼고 심플하게 구할 수 있었다. 허탈...

```cpp
#include <iostream>
#include <stdlib.h>

using namespace std;

int solution(int n, int a, int b)
{
    int cnt = 0;
    while( n > 2 ) {
        bool group = false;
        if(a <= n/2 && b <= n/2)    group = true;
        else if(a > n/2 && b > n/2)     group =true;

        if(abs(b-a) == 1 && group)  break;

        a = (a+1)/2;
        b = (b+1)/2;

        cnt++;
        n /= 2;
    }

    return cnt+1;
}
```
