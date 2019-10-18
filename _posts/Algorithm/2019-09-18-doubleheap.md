---
layout: post
title: 프로그래머스:이중우선순위큐
date: 2019-09-18 23:08:00
author: "SeWonKim"
categories: [algorithm]
tags: [jekyll, algorithm, Programmers]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[이중우선순위큐](https://programmers.co.kr/learn/courses/30/lessons/42628)

---

## Idea

priority queue로 구현하면 최솟값을 pop 해줄 때 어떻게 해야할지 몰라서 deque로 구현하는 방법을 생각해보았다.  
I명령을 받으면 deque에 값을 넣고 정렬해준 다음 D 명령어 종류에 따라서 맨 앞에것을 pop 할지, 맨 뒤에것을 pop할지 정한다.

---

## Code

```cpp
#include <string>
#include <vector>
#include <deque>
#include <algorithm>
#include <sstream>

using namespace std;

vector<int> solution(vector<string> operations) {
    vector<int> answer;

    deque<int> q;

    for(int i=0; i<operations.size(); i++) {
        stringstream ss(operations[i]);

        string command;
        string num;
        ss >> command >> num;

        if(command == "I"){
            q.push_back(stoi(num));
            sort(q.begin(), q.end(), greater<int>());
        }
        else if(command == "D" && !q.empty()){
            if(num == "1"){
                q.pop_front();
            }
            else if(num == "-1"){
                q.pop_back();
            }
        }
    }

    if(q.empty()){
        answer.push_back(0);
        answer.push_back(0);
    }
    else {
        answer.push_back(q.front());
        answer.push_back(q.back());
    }

    return answer;
}
```

## Review

문자열을 다루는 문제는 항상 인터넷 검색이 필요한 것 같다. 자주 까먹어서 ㅠㅠ...
좀 더 자주 문자열 다루는 문제를 풀어봐야할 것 같다.
