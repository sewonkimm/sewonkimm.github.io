---
layout: post
title: 프로그래머스:타겟 넘버
date: 2019-09-16 14:20:00
author: "SeWonKim"
categories: [algorithm]
tags: [jekyll, algorithm, Programmers]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[타겟 넘버](https://programmers.co.kr/learn/courses/30/lessons/43165)

---

## Idea

맨 처음 숫자로 1과 -1을 만들 수 있다.  
두번째 숫자를 이용해 만들 수 있는 경우의 수는 1+1, 1-1, -1+1, -1-1로 4가지가 있다.  
세번째 숫자를 이용해 만들 수 있는 경우의 수는 1+1+1, 1+1-1, 1-1+1, 1-1-1, -1+1+1, -1+1-1, -1-1+1, -1-1-1로 8가지  
.  
.  
.  
이전 경우의 수에 1을 더하고 빼면서 다음 경우의 수를 만들어 나갈 수 있으므로 numbers 갯수만큼 경우의 수를 구한다.

그리고 맨 마지막에 구한 경우의 수에서 target과 같은 값인 경우의 갯수를 return 하면 된다.

---

## Code

```cpp
#include <string>
#include <vector>

using namespace std;

int solution(vector<int> numbers, int target) {

    vector<vector<int>> d (numbers.size(), vector<int>());

    d[0].push_back(numbers[0]);
    d[0].push_back(numbers[0]*(-1));

    for(int i=1; i<numbers.size(); i++){
        for(int j=0; j<d[i-1].size(); j++){
            d[i].push_back(d[i-1][j] + numbers[i]);
            d[i].push_back(d[i-1][j] - numbers[i]);
        }
    }

    // 정답 출력
    int answer = 0;
    int len = numbers.size();
    for(int i=0; i<d[len-1].size(); i++){
        if(d[len-1][i] == target){
            answer++;
        }
    }
    return answer;
}
```

## Review

numbers.size()가 최대 20이기 때문에 최악의 경우 2^20 개의 경우의 수가 나온다. 이 정도 범위는 그리디로 해결할 수 있는 문제이다.
