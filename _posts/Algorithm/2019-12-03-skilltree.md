---
layout: post
title: 프로그래머스:스킬트리
date: 2019-12-03 14:22:00
author: "SeWonKim"
categories: [algorithm]
tags: [jekyll, algorithm, Programmers]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[스킬트리](https://www.welcomekakao.com/learn/courses/30/lessons/49993)

---

## Idea

1. 먼저 문자가 스킬트리에 있는지 없는지 검사하기 위해서 isIn 함수를 이용 > 문자가 있으면 true를 반환, 없으면 false를 반환한다.
    - 스킬트리에 없는 문자는 pass
    - 스킬트리에 있는 문자는 순서대로 사용됐는지 check

2. 문자가 순서대로 사용됐는지 검사하기위해서 현재 선택된 문자가 스킬트리의 몇 번째 문자인지 알아내는 함수인 findK를 만들었다.
    - 사용한 스킬트리 문자의 index와 비교해서 같으면 통과, 다르면 검사를 종료한다.



---

## Code
```cpp
#include <string>
#include <vector>
#include <iostream>

using namespace std;

bool isIn(string skill, char ch){
    for(int i=0; i<skill.size(); i++){
        if(skill[i] == ch){
            return true;
        }
    }
    return false;
}

int findK(string skill, char ch){
    for(int i=0; i<skill.size(); i++){
        if(skill[i] == ch){
            return i;
        }
    }
}

int solution(string skill, vector<string> skill_trees) {
    int answer = 0;
    for(int i=0; i<skill_trees.size(); i++){
        int index = 0;
        bool ok= true;
        for(int j=0; j<skill_trees[i].size(); j++){
            if(isIn(skill, skill_trees[i][j])){
                int k = findK(skill, skill_trees[i][j]);
                if(index == k){
                    index++;
                }
                else {
                    ok = false;
                    break;
                }
            }  
        }
        if(ok){
            answer++;
        }
    }
    return answer;
}
```

---

## Review

함수로 기능을 쪼개니까 생각보다 복잡하지 않고 쉽게 풀었다.