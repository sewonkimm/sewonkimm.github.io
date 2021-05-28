---
layout: post
title: 프로그래머스:베스트앨범
date: 2020-04-13 17:00:00
author: "SeWonKim"
categories: [CS, Algorithm]
tags: [알고리즘, Programmers, hash, map]
comments: true
description: Programmers Coding Test
---

## Problem

[베스트앨범](https://programmers.co.kr/learn/courses/30/lessons/42579)

---

## Idea

1. map 으로 장르별 재생 횟수를 계산
2. 장르별 재생 횟수 내림차순으로 정렬 후 탐색
3. 탐색 중인 장르에 해당하는 노래 재생 수 내림차순으로 정렬
4. 2개 뽑아 answer 배열에 추가 (1개 밖에 없을 경우에는 1개만 추가)

---

## Code 
```cpp
#include <string>
#include <vector>
#include <map>
#include <algorithm>

using namespace std;

bool cmp(pair<int, int> a, pair<int, int> b)
{
    if (a.first == b.first)
    {
        return a.second < b.second;
    }
    return a.first > b.first;
}

vector<int> solution(vector<string> genres, vector<int> plays)
{

    // 1. 장르별 재생 횟수
    map<string, int> songs;
    for (int i = 0; i < genres.size(); i++)
    {
        songs[genres[i]] += plays[i];
    }

    // 정렬
    vector<pair<int, string>> sortedArr;
    for (auto it = songs.begin(); it != songs.end(); it++)
    {
        sortedArr.push_back(make_pair(it->second, it->first));
    }
    sort(sortedArr.begin(), sortedArr.end(), greater<pair<int, string>>());

    // 2개씩 앨범에 수록
    // 2. 장르 내에서 많이 재생된 횟수
    vector<int> answer;
    for (int i = 0; i < sortedArr.size(); i++)
    {
        string now = sortedArr[i].second;

        vector<pair<int, int>> playCount;
        for (int j = 0; j < genres.size(); j++)
        {
            if (genres[j] == now)
            {
                playCount.push_back(make_pair(plays[j], j));
            }
        }
        sort(playCount.begin(), playCount.end(), cmp);

        if (playCount.size() == 1)
        {
            answer.push_back(playCount[0].second);
        }
        else
        {
            answer.push_back(playCount[0].second);
            answer.push_back(playCount[1].second);
        }
    }

    return answer;
}
```
---

## Review

🕒풀이시간 23분🕒 

map 연습! map 이제 🍅잡아쓰
