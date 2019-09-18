---
layout: post
title: 프로그래머스:폰켓몬
date: 2019-09-18 23:59:00
author: "SeWonKim"
categories: [algorithm]
tags: [jekyll, algorithm, Programmers]
fullview: false
comments: true
description: Programmers Coding Test
---

## Problem

[폰켓몬](https://programmers.co.kr/learn/courses/30/lessons/1845)

---

## Idea

n개 중 n/2개를 뽑는 문제 👉 조합 nC(n/2)

1. n개 중 n/2개를 뽑는 경우의 수를 모두 구한다.
2. n/2개만큼 폰켓몬을 넣으면서 폰켓몬 종류를 카운트하는데 이 때 이미 존재하는 폰켓몬 종류는 카운트하지 않는다.
3. 모든 경우의 수 중 최대 카운트 값을 구한다.

👉 이 방법이 맞는 것 같은데 테스트 케이스7번부터는 시간초과가 난다.

### 효율성 개선

---

## Code

1. 첫번째 시도: 시간복잡도 O(n^2)

```cpp
#include <vector>
#include <algorithm>

using namespace std;

int solution(vector<int> nums)
{
	int answer = 0;

    // n마리 중 n/2마리 고르기(조합)
    int n = nums.size();
    int k = n/2;

    vector<int> index;

    for(int i=0; i<k; i++){
        index.push_back(1);
    }
    for(int i=0; i<(n-k); i++){
        index.push_back(0);
    }
    sort(index.begin(), index.end());

    do{
        vector<int> mon;
        int count = 0;

        for(int i=0; i<index.size(); i++) {

            if(index[i] == 1){
                // 중복 제거
                bool isExist = false;
                for(int j=0; j<mon.size(); j++){
                    if(mon[j] == nums[i]){
                        isExist = true;
                    }
                }

                if(!isExist) {
                    mon.push_back(nums[i]);
                    count++;
                }
            }
        }

        // 최댓값 저장
        if(answer < count){
            answer = count;
        }
    } while(next_permutation(index.begin(), index.end()));

	return answer;
}
```

2. 효율성을 개선한 코드

```cpp

```

---

## Review
