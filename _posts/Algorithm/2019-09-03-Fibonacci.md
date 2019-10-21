---
layout: post
title: 프로그래머스:피보나치 수
date: 2019-09-03 12:51:00
author: "SeWonKim"
categories: [algorithm]
tags: [jekyll, algorithm, Programmers, Dynamic]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[피보나치 수](https://programmers.co.kr/learn/courses/30/lessons/12945)

---

## Idea

**점화식 D[i] = D[i-1] + D[i-2]**

D[0] = 0, D[1] = 1 이다.

---

## Code

```cpp
#include <stdio.h>
#include <stdbool.h>
#include <stdlib.h>

long long int d[100001];
long long int MOD = 1234567;

int go (int i) {
    if(d[i] > 0) {
        return d[i] % MOD;
    }

    if(i < 2){
        return i;
    }

    d[i] = go(i-1) + go(i-2);
    return d[i] % MOD;
}

int solution(int n) {
    int answer = go(n);
    return answer;
}
```

## Review

대표적인 DP 문제! 빠르게 풀었다😋  
구현은 빠르게 했으나 테스트케이스 13, 14번을 실패해서 고민했다.  
MOD로 나눈 나머지를 return 해야하는데 memoization하는 부분에서 return 할 때에도 MOD로 나눈 나머지를 return해야 모든 케이스를 통과할 수 있다.
