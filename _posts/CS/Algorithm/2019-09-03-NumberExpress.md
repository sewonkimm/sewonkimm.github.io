---
layout: post
title: 프로그래머스:숫자의 표현
date: 2019-09-03 13:29:00
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘, Programmers]
comments: true
description: Programmers Coding Test
---

## Problem

[숫자의 표현](https://programmers.co.kr/learn/courses/30/lessons/12924)

---

## Idea

투 포인터를 사용해서 1부터 n까지 검사해보는 방법을 생각해보았다.

1. 반복문을 돌 때 오른쪽 포인터의 첫 시작은 무조건 맨 끝
2. 왼쪽부터 오른쪽의 합이 n보다 크면 오른쪽 포인터 -1
3. 합이 n이면 왼쪽 포인터 +1, 오른쪽 포인터 = n, 정답 카운트 +1
4. 합이 n보다 작으면 정답인 경우가 없다는 소리이므로 왼쪽 포인터 +1, 오른쪽 포인터 = n

---

## Code

1. 테스트는 통과했지만 효율성테스트에서 시간초과로 모두 실패한 코드

```cpp
#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    int left = 1;
    int right = n;

    int answer = 0;

    while(left <= n) {
        int sum=0;
        for(int i=left; i<=right; i++){
            sum+=i;
        }
        if(sum > n){
            right --;
        }
        else if(sum <n){
            left++;
            right = n;
        }
        else if(sum == n){
            left++;
            right = n;
            answer++;
        }
    }
    return answer;
}
```

n이 10,000일 경우 시간복잡도 1억 이하이므로 통과할 수 있지 않을까 생각해봤는데... 안됐당😔

2. 효율성 테스트까지 통과한 코드

```cpp
#include <string>
#include <vector>

using namespace std;

int solution(int n) {
    int left = 1;
    int right = 1;

    int answer = 0;

    while(left <= n) {
        int sum=0;
        for(int i=left; i<=right; i++){
            sum+=i;
        }
        if(sum < n){
            right ++;
        }
        else if(sum > n){
            left++;
            right = left;
        }
        else if(sum == n){
            left++;
            right = left;
            answer++;
        }
    }
    return answer;
}
```

오른쪽 포인터를 맨 끝에서 하나씩 빼나가는게 아니라 왼쪽포인터와 같은 지점부터 시작해서 하나씩 더해나가는 방식으로 고쳤다.

## Review

테스트케이스는 다 통과했는데 효율성 테스트를 통과하지 못했을 때가 제일 힘든 것 같다.  
그래도 이번 문제는 간단히 해결해서 다행😛
