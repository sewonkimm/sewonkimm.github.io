---
layout: post
title: 프로그래머스:위장
date: 2020-04-13 16:08:00
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘, Programmers, hash, map]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[위장](https://programmers.co.kr/learn/courses/30/lessons/42578#)

---

## Idea

1. map 으로 동일 카테고리의 의상 갯수 count
2. 가능한 조합 계산 [Q&A 참고](https://programmers.co.kr/learn/questions/3685)

---

## Code 실패
```cpp
#include <string>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

int solution(vector<vector<string>> clothes) {
    
    // cloth count
    map<string, int> m;
    for(int i=0; i<clothes.size(); i++){
        m[clothes[i][1]]++;
    }
    
    vector<int> list;
    for(auto iter=m.begin(); iter!=m.end(); iter++){
        list.push_back(iter->second);
    }
    
    // 의상 n개일 때 조합 count
    int answer = 0;
    for(int n=1; n<=list.size(); n++){
        
        // 조합
        vector<int> com (list.size(), 0);
        for(int i=0; i<n; i++){
            com[i] = 1;
        }
        sort(com.begin(), com.end());
        
        do{
            int total = 1;
            
            for(int c=0; c<com.size(); c++){
                if(com[c]){
                    total *= list[c];
                }
            }
            
            answer += total;
        }while(next_permutation(com.begin(), com.end()));
        
    }
    return answer;
}
```
👉 테스트케이스 1번 시간초과


굳이 모든 경우의 수를 탐색하지 않아도 된다. [Q&A 참고](https://programmers.co.kr/learn/questions/3685)


## 성공 Code
```cpp
#include <string>
#include <vector>
#include <map>

using namespace std;

int solution(vector<vector<string>> clothes) {
    
    // cloth count
    map<string, int> m;
    for(int i=0; i<clothes.size(); i++){
        m[clothes[i][1]]++;
    }
    
    vector<int> list;
    for(auto iter=m.begin(); iter!=m.end(); iter++){
        list.push_back(iter->second);
    }
    
    // 모든 경우의 수
    int answer = 1;
    for(int x: list){
        answer *= (x+1);
    }
    return answer-1;
}
```
---

## Review

🕒풀이시간 30분🕒 

map 연습...!
굳이 조합 코드를 구구절절 구현 할 필요가 없는 문제였다. 나란 인간... 효율성을 높일 필요가 있다...
