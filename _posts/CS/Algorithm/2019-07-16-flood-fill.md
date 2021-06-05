---
layout: post
title: 백준 2667:단지번호 붙이기 (Flood-fill)
date: 2019-07-16 10:09:28
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘,  BOJ]
comments: true
description: 
---


> [Baekjoon 2667](https://www.acmicpc.net/problem/2667)

## Problem
  1. 단지: 상하좌우로 연결된 집들의 모임

## Input
  1. 지도의 크기 N (5~25)
  2. N*N 크기 지도 (0 또는 1)

## Output
  1. 총 단지의 갯수
  2. 각 단지내 집의 수(오름차순 출력)


---

## Idea
### Flood-fill : 모든 정점에서 DFS를 이용해 연결요소가 몇 개인지 파악하는 알고리즘
1. 지도 배열 : arr[26][26]

2. 방문했는지 안했는지 체크하는 배열 : check[26][26]

3. 배열 arr 전체를 검사하여 값이 1이면 DFS 시작

   arr[i][j]==1 && check[i][j]==0 (집이 있는데 방문하지 않은 경우)
   
4. DFS 인접한 배열(상하좌우) 탐색

   dx[4] = {1, -1, 0, 0} , dy[4] = {0, 0, 1, -1}
   
   **방향성**
   ```
   (1, 0) ⬇
   (-1, 0) ⬆
   (0, 1) ➡
   (0, -1) ⬅
   ```
   
   arr[dx][dy]==1 && check[dx][dy]==0 (집이 있는데 방문하지 않은 경우)
 
 5. 탐색 결과(집의 갯수)를 배열 ans에 저장
 
 6. ans를 오름차순 정렬
 
 
## Code
```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <stdio.h>
using namespace std;

int n;
int arr[26][26];
int check[26][26];
int dx[4] = { 1,-1,0,0 };
int dy[4] = { 0,0,1,-1 };

int dfs(int x, int y, int cnt) {

	check[x][y] = 1;

	for (int k = 1; k <= 4; k++) {
		int nx, ny;
		nx = x + dx[k-1];
		ny = y + dy[k-1];
		if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
			if (arr[nx][ny] == 1 && check[nx][ny] == 0) {
				cnt = dfs(nx, ny, cnt + 1);
			}
		}
	}
	return cnt;
}

int main() {
	scanf("%d", &n);

	//n*n 지도 입력
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			scanf("%1d", &arr[i][j]);
		}
	}

	vector<int> ans;
	//모든 요소를 돌며 1인 곳에서부터 DFS 시작
	for (int i = 0; i < n; i++) {
		for (int j = 0; j < n; j++) {
			if (arr[i][j] == 1 && check[i][j] == 0) {
				ans.push_back(dfs(i, j, 1));
			}
		}
	}

	//ans 오름차순 정리
	sort(ans.begin(), ans.end());

	cout << ans.size() << "\n";
	for (int x : ans) {
		cout << x << "\n";
	}

	return 0;
}

```

## Review
입력시 공백 없이 입력받기 때문에 cin >> arr[i][j] 를 이용해 입력받았을 때, 오답처리되었다.

이것을 **scanf("%1d", &arr[i][j])** 로 수정하고 나서야 정답처리를 받을 수 있었다. 

