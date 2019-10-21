---
layout: post
title: 프로그래머스:단어 변환
date: 2019-09-10 11:35:00
author: "SeWonKim"
categories: [algorithm]
tags: [jekyll, algorithm, Programmers, BFS]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[단어 변환](https://programmers.co.kr/learn/courses/30/lessons/43163)

---

## Idea

노드의 갯수가 적당하고(3이상 50이하), 최소 거리를 구하는 문제 👉 BFS

1. 바꿀 수 있는 단어를 찾아서 큐에 넣는다. isDiff 함수를 만들어서 한 글자만 다른 단어를 찾았다.
2. BFS 시작
3. 바꿀 수 있는 단어 && 아직 방문하지 않은 노드일 때 큐에 넣고, 거리+1을 해준다.
4. 탐색이 다 끝나면 타겟 단어에 저장된 거리 값을 출력해준다.

---

## Code

```cpp
#include <string>
#include <vector>
#include <queue>

using namespace std;

// 최소 거리 구하기
// BFS

int d[51];

// 한 글자만 다른지 확인
bool isDiff(string a, string b){
    int count = 0;
    for(int i=0; i<a.length(); i++){
        if(a[i] == b[i]){
            count++;
        }
    }

    if(a.size() - count != 1){
        return false;
    }
    else return true;
}


int solution(string begin, string target, vector<string> words) {
    int answer = 0;

    // words 안에 target이 없으면 프로그램 종료
    bool wordsCheck = false;
    for(int i=0; i<words.size(); i++){
        if(words[i] == target){
            wordsCheck = true;
        }
    }
    if(!wordsCheck){
        return 0;
    }

    // BFS
    queue <int> q;
    for(int i=0; i<words.size(); i++){
        if(isDiff(begin, words[i])){
            q.push(i);
            d[i] = 1;
        }
    }

    while(!q.empty()){
        int now = q.front();
        q.pop();

        for(int i=0; i<words.size(); i++){
            if(isDiff(words[now], words[i])){
                if(d[i]==0){
                    q.push(i);
                    d[i] = d[now]+1;
                }
            }
        }
    }

    for(int i=0; i<words.size(); i++){
        if(words[i] == target){
            answer = d[i];
            break;
        }
    }

    return answer;
}
```

## Review

'한 번에 한 개의 알파벳만 바꿀 수 있다'는 조건을 검사할 수 있는 함수만 만들면 BFS로 별로 복잡하지 않게 풀 수 있는 문제인 것 같다.
