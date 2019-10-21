---
layout: post
title: 프로그래머스:점프와 순간 이동
date: 2019-09-17 12:19:00
author: "SeWonKim"
categories: [algorithm]
tags: [jekyll, algorithm, Programmers]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[점프와 순간 이동](https://programmers.co.kr/learn/courses/30/lessons/12980)

---

## Idea

n은 1이상 10억 이하의 자연수 => 그리디로 풀 수 없음

**DP로 접근**
점화식 D[i] = i번째 칸일 때 건전지 사용 최솟값

1. i가 짝수일 때  
   : D[i] = min(D[i/2], D[i-1]+1)
2. i가 홀수일 때
   : D[i] = D[i-1]+1

👉 Top-down으로 풀어도 Bottom-up으로 풀어도 절대 풀 수 없다... 시간 복잡도를 더 줄여야하는데...  
👉 사실 배열을 만들 필요도 없다.

1. n까지 가는 최대 건전지 사용량 = n
2. n이 0이 될 때까지 n을 줄여나가며 건전지 사용량을 구한다.
3. n이 짝수일 때 = n/2, 건전지 사용량 변화 없음
4. n이 홀수일 때 = n-1, 건전지 사용량 + 1

---

## Code

### 1. DP로 접근한 방법

```cpp
#include <vector>
#include <algorithm>

using namespace std;

int dp(int i, vector<int> d){
    if(i <= 2){
        return 1;
    }

    if(d[i] > 0){
        return d[i];
    }

    if(i%2 == 0){
        d[i] = min(dp(i/2, d), dp(i-1, d) +1 );
    }
    else {
        d[i] = dp(i-1, d) + 1;
    }

    return d[i];
}

int solution(int n)
{
    int ans = 0;

    vector<int> d(n+1, 0);
    ans = dp(n, d);


    return ans;
}
```

채점 결과  
정확성: 26.7  
효율성: 0.0  
합계: 26.7 / 100.0  
👉 N의 범위가 커지면 시간 초과된다.

### 2. Bottom-up 방식으로 구현

```cpp
#include <vector>
#include <algorithm>

using namespace std;

int solution(int n)
{
    int ans = 0;

    vector<int> d(n+1, 0);
    for(int i= 1; i<=n; i++){
        if(i <= 2){
            d[i] = 1;
            continue;
        }

        if(i%2 == 0) {
            d[i] = min(d[i/2], d[i-1]+1);
        }
        else {
            d[i] = d[i-1]+1;
        }
    }

    ans = d[n];
    return ans;
}
```

채점 결과  
정확성: 60.0  
효율성: 0.0  
합계: 60.0 / 100.0  
👉 효율성 테스트만 통과하면 되는데... 아무래도 최악의 경우 시간복잡도가 O(10억)까지 가기 때문에 이걸 줄여줄 수 있는 방법을 생각해야할 것 같다.

### 3. 사실 메모리도 필요 없다.

```cpp
using namespace std;

int solution(int n)
{
    int ans = 0;

    while(n != 0){
        if(n % 2 == 0){
            n = n/2;
        }
        else {
            n = n-1;
            ans++;
        }
    }
    return ans;
}
```

## Review

풀이가 간단한데 너무 복잡하게 생각했다.
