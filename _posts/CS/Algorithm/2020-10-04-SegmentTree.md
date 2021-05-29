---
layout: post
title: 세그먼트 트리
date: 2020-10-04 18:10:00
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘, BOJ, 트리]
comments: true
---

num 배열의 `부분합을 구할 때` O(logN)의 속도로 구할 수 있도록 하는 알고리즘

> [참고 블로그](https://gintrie.tistory.com/31)


### 어려움 포인트💦

1. tree 배열의 길이 설정
2. init() => 초기 세그먼트 트리 구성
3. update() => 특정 인덱스 값을 변경 후 세그먼트 트리 업데이트
4. sum() => left~right 구간의 누적합 구하기(조건 3가지로 나누기)


### Code

```java
public class SegmentTree {

	static int[] num = { 1, 2, 3, 4, 5 }; 
	static int[] tree;

	public static void main(String[] args) {
		
		// num.length = 리프 노드의 갯수
		int h = (int) (Math.ceil(Math.log(num.length) / Math.log(2)));	// log2(N)
		tree = new int[(int) Math.pow(2, h+1) - 1];
		
		init(0, 0, num.length-1);

		update(0, 0, num.length-1, 2, 6-num[2]);	// num[2]를 3에서 6으로 변경

		System.out.println("1~3까지의 합: "+sum(0, 0, num.length-1, 1, 3));
	}

	private static int init(int node, int start, int end) {
		if(start == end) {
			return tree[node] = num[start];
		}
		
		int mid = (start+end)/2;	// 중간을 기준으로 좌, 우 노드 구간의 합을 구한다.	
		return tree[node] = init(node*2 + 1, start, mid) + init(node*2 + 2, mid+1, end);
	}
	
	private static void update(int node, int start, int end, int index, int diff) {
		if( start > index || end < index)	return;
		
		tree[node] += diff;
		if(start != end) {
			int mid = (start + end)/2;
			update(node*2+1, start, mid, index, diff);
			update(node*2+2, mid+1, end, index, diff);
		}
	}
	
	private static int sum(int node, int start, int end, int left, int right) {	
		System.out.println(node+"  "+start+"  "+end+"  "+left+"  "+right);		
		// left, right와 start, end가 겹치지 않는 경우 => 버림
		if(left > end || right < start) {
			return 0;
		}
		
		// start, end가 left, right에 포함되는 경우 => 더함
		if(left <= start && right >= end ) {
			return tree[node];
		}
		
		// left, right가 start, end에 완전히 포함되는 경우 => 하위 범위 탐색
		int mid = (start+end) / 2;
		return sum(node*2+1, start, mid, left, right) + sum(node*2+2, mid+1, end, left, right);
	}
}
```

