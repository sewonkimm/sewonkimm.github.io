---
layout: post
title: 프로그래머스:소수 만들기
date: 2019-12-04 01:02:00
author: "SeWonKim"
categories: [algorithm]
tags: [jekyll, algorithm, Programmers]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[소수 만들기](https://www.welcomekakao.com/learn/courses/30/lessons/12977)

---

## Idea

1. n개중 3개 고르기
2. 고른 수의 합이 소수가 되는지 확인

n개중 3개 고르는 것은 조합(Combination)!       
최악의 경우 50C3 = 19,600 가지의 조합이 나오기 때문에 충분히 브루트포스로 해봐도 된다고 생각했다.

소수인지 아닌지 확인하는 법은 2~(n-1)까지 나눠서 나누어 떨어지면 false를 반환하도록 하는 함수를 만들어서 검사했다.


---

## Code
```cpp
#include <vector>
#include <algorithm>

using namespace std;

bool isPrime(int num){
    for(int i=2; i<num; i++){
        if(num % i == 0){
            return false;
        }
    }
    return true;
}

int solution(vector<int> nums) {
    
    vector<int> d(nums.size(), 0);
    
    d[0] = 1;
    d[1] = 1;
    d[2] = 1;
    sort(d.begin(), d.end());
    
    int answer = 0;
    
    do{            
        int sum = 0;
        int cnt = 0;
        for(int i=0; i<nums.size(); i++){
            
            if(cnt == 3){
                break;
            }
            
            if(d[i] == 1){
                sum += nums[i];
                cnt++;
            }
        }
        
        if(isPrime(sum)){
            answer++;
        }
        
    }while(next_permutation(d.begin(), d.end()));
    
    return answer;
}
```
