---
title: "백준 1260:DFS & BFS"
date: 2019-07-17 10:06:00 -0400
author: "SeWon Kim"
categories: jekyll 백준 Algorithm TIL
---

[Baekjoon 1260](https://www.acmicpc.net/problem/1260)

## Problem
  1. DFS 탐색결과와 BFS 탐색결과 출력

## Input
  1. 정점 Node의 개수 N (1~1000)
  2. 간선 Edge의 개수 M (1~10000)
  3. 시작할 정점의 번호 V
  4. 간선이 연결하는 두 정점의 번호 (M개)

## Output
  1. DFS 수행 결과
  2. BFS 수행 결과


---

## DFS
  * [Depth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search)

### IDEA
  1. 인접리스트 vector<int> arr[1001]
  2. 방문 체크 배열 bool check[1001]
  3. dfs(int node) 함수 실행
  
    1. 현재 정점에 방문 체크
    2. 현재 정점 출력
    3. 현재 정점 인접 리스트 검사
    4. 방문하지 않은 곳 dfs 수행
  
  

## BFS
  * [Breadth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/breadth-first-search)\
  Queue 사용(FIFO 구조). C++ STL queue를 사용해 구현.\
  queue를 사용하기 위해 <queue> 헤더파일을 include 해야한다.\
  방문 할 수 있는 정점을 queue에 넣고, 동시에 방문 체크한다.
  
### IDEA
  1. 인접리스트 vector<int> arr[1001]
  2. 방문 체크 배열 bool check[1001]
  3. 큐 queue<int> q
  4. bfs(int node) 함수 실행
  
    1. 현재 정점 큐에 입력 & 방문 체크
    2. 현재 정점 출력
    3. x =queue.pop()
    4. x의 인접리스트 검사
    5. 방문하지 않은 곳 큐에 push
    6. 큐가 empty 상태가 될 때까지 3~5과정 반복
 


---


## Code
```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <algorithm>
using namespace std;

vector<int> arr[1001];
bool checkDFS[1001];
bool checkBFS[1001];

void dfs(int node) {

	checkDFS[node] = 1;
	cout << node << " ";

	for (int i = 0; i < arr[node].size(); i++) {
		int next = arr[node][i];
		if (checkDFS[next] == 0) {
			dfs(next);
		}
	}

}

void bfs(int node) {
	queue<int> q;
	q.push(node);
	checkBFS[node] = 1;
	
	while (!q.empty()) {
		int v = q.front();
		cout << v << " ";
		q.pop();
		
		for (int i = 0; i < arr[v].size(); i++) {
			int next = arr[v][i];
			if (checkBFS[next] == 0) {
				checkBFS[next] = true;
				q.push(next);
			}
		}

	}

}

int main() {
	int n, m, start;
	cin >> n >> m >> start;

	int a, b;
	for(int i=0; i<m; i++){
		cin >> a >> b;

		//양 방향 인접리스트 
		arr[a].push_back(b);
		arr[b].push_back(a);
	}

	for (int i = 1; i <= n; i++) {
		//정점 번호가 더 작은 것을 먼저 방문하기 위해 sort
		sort(arr[i].begin(), arr[i].end());
	}

	dfs(start);
	cout << "\n";

	bfs(start);
	cout << "\n";

	return 0;
}
```


## Review
BFS 함수는 재귀를 이용하는 것이 아니라 queue를 이용하는 것이다.\
방문 체크 배열은 DFS용과 BFS용 2개를 만들어서 사용했다. 만약 하나만 만든다면 BFS 시작 전 초기화 시켜줘야한다.
