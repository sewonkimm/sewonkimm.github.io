---
layout: post
title: 프로그래머스:라면공장
date: 2019-09-12 18:26:00
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘, Programmers]
comments: true
---

## Problem

[라면공장](https://programmers.co.kr/learn/courses/30/lessons/42629)

---

## Idea

1. 1~k일까지 순차적으로 돌면서 stock을 1씩 줄여나간다.
2. j는 supplies의 index를 가리킨다.
3. i일이 밀가루를 공급받는 날이면 우선순위 큐에 담는다. 공급하는 양이 많은 순서로 저장된다.
4. stock이 0이 되면 공급할 수 있는 밀가루 양 중에 가장 큰 양을 공급받는다. 그래야 최소로 공급 받을 수 있다.

---

## Code

```cpp
#include <string>
#include <vector>
#include <queue>

using namespace std;

int solution(int stock, vector<int> dates, vector<int> supplies, int k) {

    priority_queue <int, vector<int>, less<int>> q;

    int answer = 0;
    int j = 0;
    for(int i=0; i<k; i++) {

        // 밀가루를 공급 받을 수 있는 날
        if(dates[j] == i){
            // 큐에 공급 받을 수 있는 양을 추가
            q.push(supplies[j]);

            // 배열의 다음 인덱스 가리키기
            if(j != supplies.size() - 1){
                j++;
            }
        }

        // 밀가루가 다 떨어지면 공급량이 제일 큰 값을 추가
        if(stock == 0){
            stock += q.top();
            q.pop();
            answer++;
        }

        // 하루 지날 때마다 밀가루 양 감소
        stock--;
    }
    return answer;
}
```

## Review

우선순위 큐를 처음 사용해보았다. 이게 힙이구만...!  
소스코드는 어렵지 않은데 이 개념을 과연 문제만 보고 생각해 낼 수 있을까...?
