---
layout: post
title: 프로그래머스 스킬체크 Lv3
date: 2019-11-29 18:00:00
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘, Programmers]
comments: true
description: Programmers skill check Lv3.
---

![image](https://user-images.githubusercontent.com/30452963/69855023-e783ed80-12cd-11ea-8606-6d1ffcf1af02.png)

드디어! 스킬체크 레벨3 통과! 

## Problem1

타일 장식물 - [블로그 작성 글](https://sewonkimm.github.io/cs/algorithm/2019/09/09/Tile.html)

이 문제는 9월에 풀었던 문제다...!     
그렇게 어렵지 않아서 금방 풀었다. 문제는 어디서 본 것 같았는데 풀이는 생각이 안나서 내가 생각한 대로 풀었고, 9월에 풀었던 코드와는 살짝 다르게 풀었다. 
 

### Idea

직사각형 둘레의 패턴이 있다. n번째 둘레는 n-1번째와 n-2번째 둘레를 더한 값과 같다.     
Dynamic Programming으로 구현했다.


### Code
```cpp
#include <string>
#include <vector>

using namespace std;

long long solution(int N) {
    
    
    vector<long long> red (N);
    red[0] = 4;
    red[1] = 6;
    
    for(int i=2; i<N; i++){
        red[i] = red[i-1]+red[i-2];
    }
    long long answer = red[N-1];    
    return answer;
}
```

red의 자료형을 int으로 했을 때 효율성테스트를 통과하지 못했는데 long long으로 바꿔주고나서 통과할 수 있었다.     
red 이름은 그냥 문제에서 둘레 이미지에 빨간색으로 테두리 쳐져있길래 red라고 한 건데 둘레라고 알 수 있게 네이밍 했으면 더 좋았겠다. 

[c++ 자료형](http://melonicedlatte.com/algorithm/2018/03/04/022437.html)

---

## Problem2

섬 연결하기 - [블로그 작성 글](https://sewonkimm.github.io/cs/algorithm/2019/09/09/ConnectIsland.html)

앗...! 이 문제도 9월에 풀었던 문제다...! 심지어 첫번째 문제 풀었던 날에 풀었네;;;      
그런데도 이렇게나 새롭다. 새삼 기록의 중요성을 느낀다.    
첫 문제를 10분안에 풀고, 나머지 시간은 다 이 문제 푸는데에 쏟았다. dfs 구현이 생각처럼 잘 안돼서 중간에 인터넷 검색해볼까 했으나 검색하지 않고도 잘 풀었다!     
9월에는 Kruskal 알고리즘을 적용해서 풀었는데 사실 잘 기억이 안나고ㅠ... 내 방식대로 풀었다. 이해하기는 더 쉬운 것 같다.


### Idea

1. 비용을 기준으로 오름차순 정렬
2. costs 배열을 돌면서 섬이 연결되어있는지 확인
    - 연결되어있다면 pass
    - 연결되어있지 않다면 연결후 비용 추가

섬이 연결되어있는지 확인하는 방법에 **DFS** 사용

1. 섬 방문을 확인하는 배열 d[n]
2. d[sp] (시작점)을 1로 체크하고 dfs 시작
3. 0~(n-1)까지 돌면서 탐색
    - 갈 수 있는 섬 中 `check[sp][i] = 1 인 곳`
    - 자기 자신이 아닌 곳 `sp != i 인 곳`
    - 아직 방문하지 않은 곳 `d[i] = 0 인 곳`
4. 방문 한 곳이 ep(도착점)이면 true를 return, 그렇지 않으면 방문체크하고 다시 dfs 시작


### Code
```cpp
#include <string>
#include <vector>
#include <algorithm>

using namespace std;

bool dfs(int sp, int ep, int n, vector<vector<int>> check, vector<int> d){
    for(int i=0; i<n; i++){
        if(check[sp][i] == 1 && sp != i && d[i] == 0){
            if(i == ep){
                return true;
            }
            else {
                d[i] = 1;
                if(dfs(i, ep, n, check, d)){
                    return true;
                }
            }
        }
    }
    return false;
}

bool cmp(const vector<int> &c1,  const vector<int> &c2){
    if(c1[2] == c2[2]){
        return (c1[0] > c2[0]);
    }
    
    return (c1[2] < c2[2]);
}

int solution(int n, vector<vector<int>> costs) {
    
    // 1. 비용을 기준으로 정렬
    sort(costs.begin(), costs.end(), cmp);
    
    vector<vector<int>> check (n, vector<int>(n, 0));
    for(int i=0; i<n; i++){
        check[i][i] = 1;
    }
    
    int answer = 0;
    for(int i=0; i<costs.size(); i++){
        
        // 2. 연결되어있는지 확인
        vector<int> d(n, 0);
        d[costs[i][0]] = 1;
        
        if(dfs(costs[i][0], costs[i][1], n, check, d)){
            continue;
        }
        else {
            // 3. 연결 후 비용 추가
            check[costs[i][0]][costs[i][1]] = 1;
            check[costs[i][1]][costs[i][0]] = 1;
            answer += costs[i][2];
        }
    }
    return answer;
}
```

이 문제의 어려웠던 포인트1. 배열의 n번째 요소를 기준으로 정렬하는 방법을 까먹었기 때문     
이건 매번 문제 풀 때마다 검색하는 것 같다...

이 문제의 어려웠던 포인트2. DFS 구현     
알듯말듯, 될듯말듯, 알쏭달쏭한 DFS... 조건 찬찬히 확인해서 침착하게 구현하면 된다!
