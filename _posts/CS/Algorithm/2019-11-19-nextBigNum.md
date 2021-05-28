---
layout: post
title: 프로그래머스:다음 큰 숫자
date: 2019-11-19 11:13:00
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘, Programmers]
comments: true
description: Programmers Coding Test
---

## Problem

[다음 큰 숫자](https://programmers.co.kr/learn/courses/30/lessons/12911)

---

## Idea

1. 조건 2를 검사하기 위해서 2진수로 변환했을 때 1의 갯수를 구하는 함수 `getone()`작성
2. 입력받은 n 다음 수 n+1부터 2진수로 변환했을 때 1의 갯수를 검사해 조건1, 2를 모두 만족하는 숫자를 구함

조건 1 만족: n+1부터 검사를 시작하기 때문에 자동으로 조건 1을 만족한다.    
조건 2 만족: `getone(n)`의 갯수와 `getone(n+1)`을 비교해서 같은 값이 나오면 조건 2를 만족한다.

---

## Code
```cpp
#include <string>
#include <vector>

using namespace std;

int getone(int n){
    int cnt=1;
    while(n > 2){
        if(n % 2 == 1){
            cnt++;
        }
        n = n/2;
    }
    
    return cnt;
}

int solution(int n) {
    
    int one = getone(n);
    
    int answer = 0;
    int i = n+1;
    while(1) {
        if(getone(i) == one){
            answer = i;
            break;
        }
        else {
            i++;
        }
    }
    
    return answer;
}
```

---

## Review
구현 개념은 상당히 간단했는데 왠지 getone 함수 구현할 때 오래걸렸다...!
