---
layout: post
title: 프로그래머스:큰 수 만들기
date: 2019-08-18 16:41:00
author: "SeWonKim"
categories: [algorithm]
tags: [jekyll, algorithm, Programmers, Brute Force]
fullview: false
comments: true
description: Programmers skill check lv.2
---

[큰 수 만들기](https://programmers.co.kr/learn/courses/30/lessons/42883)

## Problem

어떤 숫자에서 k개를 제거했을 때 얻을 수 있는 가장 큰 숫자 구하기

## Input

1. number string
2. k

## Output

k개를 제거한 가장 큰 숫자

---

## Idea

1. 만들어야 하는 문자열의 길이 len = number.size() - k 개 이다.
2. len 자리 수를 만들기 위해서 len번 반복하는 for문을 시작한다.
3. index 0부터 number.size() - len 까지 중에 가장 큰 숫자를 answer string에 집어넣고, 다음 max값 비교는 가장 큰 숫자 index부터 시작한다.  
   len번째 자리수를 구했으니 다음은 len-1 번째 자리수를 구한다. 이 과정을 반복하면 정답을 구할 수 있다.

---

## Code

```cpp
#include <string>
#include <vector>

using namespace std;

string solution(string number, int k) {

    int len = number.size() - k;
    string answer= "";

    int start = 0;
    for(int i=len; i>0; i--){

        char max = number[start];

        for(int j=start+1; j<= number.size()-i; j++){
            if(max < number[j]){
                max = number[j];
                start = j;
            }
        }

        number.replace(start, 1, "0");
        answer += max;
    }

    return answer;
}
```

## Review

string을 다루는 것은 아직 어렵게 느껴지는 것 같다. 비교할 때 char를 int로 바꿔야 할 것만 같고... 삽질...

1. string[i] 의 자료형은 char이다.
2. char 끼리는 비교 연산이 가능하다.
3. [c++ string class 함수 정리](http://blog.naver.com/PostView.nhn?blogId=vosej_v&logNo=50176084445&redirect=Dlog&widgetTypeCall=true&directAccess=false)
