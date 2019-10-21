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

조합을 전혀 사용하지 않아도 풀 수 있다. 😬

1. 배열 visit[i]를 만든다. 이 배열은 i번 폰켓몬이 선택되었는지 안되었는지 체크하는 배열이다.
2. 변수 count가 n/2가 될 때까지 반복문을 진행한다.
3. 배열 nums를 가리킬 index 변수도 만든다.
4. index가 0부터 (n-1)까지 탐색하면서 nums[index] 폰켓몬을 포함할지 안할지 체크한다.
5. 폰켓몬 종류가 처음 본 거라면 visit[i]에 체크하고, count를 1 늘린다.
6. 이미 포함한 폰켓몬이라면 index에 1을 더해 배열의 다음 원소를 탐색한다.

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
#include <vector>
using namespace std;

int visit[200001];
int solution(vector<int> nums)
{
    int n = nums.size();

    int count = 0;
    int index = 0;
    while(count < n/2 && index < n){
        if(visit[nums[index]] == 0){
            visit[nums[index]] =1;
            count++;
        }
        index++;
    }

	return count;
}
```

---

## Review

생각보다 간단...
n개중에 n/2개를 뽑는다는 생각에 갇혀서 조합에 집착했던 것 같다.
