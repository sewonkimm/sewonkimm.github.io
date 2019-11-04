---
layout: post
title: 프로그래머스:숫자 야구
date: 2019-11-04 22:01:00
author: "SeWonKim"
categories: [algorithm]
tags: [jekyll, algorithm, Programmers]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[숫자 야구](https://programmers.co.kr/learn/courses/30/lessons/42841)

---

## Idea

* 같은 숫자를 중복해서 사용할 수 없고, 0을 사용할 수 없다.
* 따라서 만들 수 있는 숫자의 최소값은 123, 최댓값은 987이다. 

1. 123부터 987까지 모든 수를 검사
2. baseball 수열의 값과 현재 탐색하고 있는 숫자를 비교
3. strike 값과 ball 값을 구해서 모든 baseball 수열의 strike, ball 값과 일치하면 count

---

## Code
```cpp
#include <string>
#include <vector>

using namespace std;

int solution(vector<vector<int>> baseball) {
    string num;
    string inputNum;
    
    int answer = 0;
    
    for(int i=123; i<=987; i++){
        num = to_string(i);
        
        // 같은 숫자 중복되는 경우, 0 쓰는 경우 제외
        if(num[0] == num[1] || num[0] == num[2] || num[1] == num[2]){
            continue;
        }
        if(num[0] == '0' || num[1] == '0' || num[2] == '0'){
            continue;
        }
        
        // 탐색 시작
        bool flag = true;
        for(int j=0; j<baseball.size(); j++){
            inputNum = to_string(baseball[j][0]);
            int strike = 0;
            int ball = 0;
            
            // 탐색 숫자와 baseball 배열 숫자 비교
            for(int x= 0; x<3; x++){
                for(int y=0; y<3; y++){
                    if(num[x] == inputNum[y]){
                        if(x == y){
                            strike++;
                        }
                        else if(x != y){
                            ball++;
                        }
                    }
                }
            }
            
            // strike와 ball 갯수가 일치하는지 확인
            if(strike != baseball[j][1] || ball != baseball[j][2]){
                flag = false;
                break;
            }
        }
        
        // 모든 배열을 검사하고 살아남으면 카운트
        if(flag){
            answer++;
        }
        
    }
    return answer;
}
```

---

## Review

몇 달 전에 도전했을 때 도저히 방법이 생각이 안나서 포기했는데 이번에는 풀어내서 정말 다행이다!      
문제를 읽고, 조건을 잘 생각해보고 알고리즘적으로 풀 수 있는 방법을 찾는게 중요한 것 같다.