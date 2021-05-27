---
layout: post
title: 프로그래머스:서울에서 경산까지
date: 2019-09-16 14:36:00
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘, Programmers, Dynamic, DP]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[서울에서 경산까지](https://programmers.co.kr/learn/courses/30/lessons/42899)

---

## Idea

**점화식 D[i][j] = i번째 도시를 j시간에 방문했을 때 최대 모금액**

D[i][j] = max(D[i-1][j-도보시간] + 도보금액, D[i-1][j-자전거시간] + 자전거금액)

## Code

```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

int d[101][100001];

int solution(int K, vector<vector<int>> travel) {

    int answer = 0;

    // 방문해야 하는 도시의 수 city
    int city = travel.size();

    d[0][travel[0][0]] = travel[0][1];
    d[0][travel[0][2]] = travel[0][3];

    // bottom-up
    for(int i=1; i<city; i++) {
        for(int j=0; j<=K; j++){
            if(d[i-1][j] == 0)  continue;

            // 도보로 갈 경우
            if(j+travel[i][0] <= K){
                d[i][j+travel[i][0]] = d[i-1][j] + travel[i][1];
                answer = max(answer, d[i][j+travel[i][0]]);
            }
            // 자전거로 갈 경우
            if(j+travel[i][2] <= K){
                d[i][j+travel[i][2]] = max(d[i][j+travel[i][2]], d[i-1][j] + travel[i][3]);
                answer = max(answer, d[i][j+travel[i][2]]);
            }
        }
    }

    return answer;
}
```

## Review

문제를 푸는 아이디어는 감을 잡았는데 구현하는 과정에서 `d[i][j+travel[i][2]] = max(d[i][j+travel[i][2]], d[i-1][j] + travel[i][3])`의 의미를 생각하는 부분이 좀 어려웠다.  
이 부분은 도보로 i번째 도시에 도착했을 때 시간과 자전거로 i번째 도시에 도착했을 때 시간이 같을 경우를 대비해서 max 연산을 해 주는 것이다.
맨 처음 d[i]j+travel[i][0]]는 무조건 값이 0이기 때문에 최댓값 비교 없이 그냥 `d[i][j+travel[i][0]] = d[i-1][j] + travel[i][1]`를 넣어주고, 자전거로 갈 경우부터 최댓값을 비교해주면 된다.
