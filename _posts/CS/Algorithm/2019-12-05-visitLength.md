---
layout: post
title: 프로그래머스:방문 길이
date: 2019-12-05 20:14:00
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘, Programmers]
comments: true
description: Programmers Coding Test
---

## Problem

[방문 길이](https://www.welcomekakao.com/learn/courses/30/lessons/49994)

---

## Idea

1. 좌표 이동
    - 지정된 범위를 벗어나면 다음으로 이동하지 않고 그냥 pass
2. 새로 방문한 곳인지 확인
    - 새로 방문한 곳이면 conunt
    - 이미 방문했던 곳이면 pass
---

## Code
```cpp
#include <string>
#include <queue>

using namespace std;

int map[11][11];
int d[11][11][11][11];

int solution(string dirs)
{
	int answer = 0;
    
    queue<char> q;
    for(int i=0; i<dirs.length(); i++){
        q.push(dirs[i]);
    }
    
    // 현재 좌표 (5, 5) = (0, 0)
    int x = 5;
    int y = 5;
    
    while(!q.empty()){
        char cmd = q.front();
        q.pop();
        
        int nx = x;
        int ny = y;
        
        if(cmd == 'U'){
            ny += 1;
        }
        else if(cmd == 'D'){
            ny += -1;
        }
        else if(cmd == 'L'){
            nx += -1;
        }
        else if(cmd == 'R'){
            nx += 1;
        }
        
        // 범위를 벗어났을 때
        if(nx < 0 || nx > 10 || ny < 0 || ny > 10){
            continue;
        }
        
        // 가본적 없는 길일 때
        if(d[x][y][nx][ny] == 0){
            d[x][y][nx][ny] = 1;
            d[nx][ny][x][y] = 1;
            answer++;
        }
        
        x = nx;
        y = ny;
    }
    
	return answer;
}
```

---

## Review

이미 방문했던 곳을 어떻게 저장할까 고민했는데 4차원 배열로 생각보다 복잡스럽지 않게 구현할 수 있었다. 
이미 방문한 경로 구별... 같은 문제만 나오면 지레 겁을 먹게 되서 문제다 ㅠㅠ

그나저나 프로그래머스 url 주소가 왜 welcome kakao 일까...?!
