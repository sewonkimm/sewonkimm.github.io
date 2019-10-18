---
layout: post
title: 프로그래머스:숫자의 표현
date: 2019-09-15 11:57:00
author: "SeWonKim"
categories: [algorithm]
tags: [jekyll, algorithm, Programmers]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[숫자의 표현](https://programmers.co.kr/learn/courses/30/lessons/12924)

---

## Idea

1부터 n까지 2중 for문을 돌면서 값을 더해나간다.  
더한 값이 k가 나오는 게 있으면 카운트해주고, k를 넘으면 다음 for문으로 넘어간다.

---

## Code

```cpp
#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    int answer = 0;

    for(int i=1; i<n; i++){

        int sum = 0;
        for(int j=i; j<=n; j++){
            sum += j;

            if(sum == n){
                answer++;
                break;
            }
            else if(sum > n){
                break;
            }
        }
    }
    return answer+1;
}
```

## Review

처음 생각한 것은 투포인터를 사용한 방법이었는데 n이 최대 10,000 이므로 시간 복잡도 O(N^2)으로 그리디로도 풀이가 가능하다.  
sum이 n 값을 초과할 때 break를 걸어주지 않으면 효율성 테스트를 통과하지 못한다.
