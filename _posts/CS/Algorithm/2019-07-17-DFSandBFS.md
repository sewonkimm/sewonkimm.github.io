---
layout: post
title: 백준 1260:DFS & BFS
date: 2019-07-17 10:06:00
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘, BOJ]
comments: true
---

> [Baekjoon 1260](https://www.acmicpc.net/problem/1260)

DFS와 BFS 연습문제

## DFS
  * [Depth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search)

### DFS == 재귀
  
  

## BFS
  * [Breadth-First Search](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/breadth-first-search)\
  Queue 사용(FIFO 구조). C++ STL queue를 사용해 구현.\
  queue를 사용하기 위해 <queue> 헤더파일을 include 해야한다.\
  방문 할 수 있는 정점을 queue에 넣고, 동시에 방문 체크한다.
  
### BFS == 큐

<details>
<summary>code - c++</summary>
<div markdown="1">

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

</div>
</details>

<details>
<summary>code - java</summary>
<div markdown="1">

```java
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.LinkedList;
import java.util.Queue;
import java.util.StringTokenizer;

public class Main {
	static int N, M, V;
	static boolean[][] graph;
	static boolean[] dfsVisit;
	public static void main(String[] args) throws Exception {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(br.readLine(), " ");
		N = Integer.parseInt(st.nextToken());	// 정점의 개수
		M = Integer.parseInt(st.nextToken());	// 간선의 개수
		V = Integer.parseInt(st.nextToken());	// 탐색을 시작할 정점의 번호
		
		graph = new boolean[N+1][N+1];
		dfsVisit = new boolean[N+1];
		for(int i=0; i<M; i++) {
			st = new StringTokenizer(br.readLine(), " ");
			int node1 = Integer.parseInt(st.nextToken());
			int node2 = Integer.parseInt(st.nextToken());
			graph[node1][node2] = true;
			graph[node2][node1] = true;
		}
		
		dfsVisit[V] = true;
		DFS(V);
		
		System.out.println();
		BFS(V);
	}
	
	private static void DFS(int v) {
		// 재귀
		System.out.print(v + " ");
		
		for(int i=1; i<=N; i++) {
			if(graph[v][i] && !dfsVisit[i]) {
				dfsVisit[i] = true;
				DFS(i);
			}
		}
	}
	
	private static void BFS(int v) {
		// 큐
		Queue<Integer> q = new LinkedList<Integer>();
		boolean[] visit = new boolean[N+1];
		
		q.add(v);
		
		while(!q.isEmpty()) {
			int node = q.poll();
			visit[node] = true;
			System.out.print(node + " ");
			
			for(int i=1; i<=N; i++) {
				if(graph[node][i] && !visit[i]) {
					q.add(i);
					visit[i] = true;
				}
			}
		}
	}
	
}
```

</div>
</details>

# Review

DFS = 재귀, BFS = 큐 임을 기억하자! 이것동 오랜만에 푸니까 빨리 빨리 안풀리네...
