---
layout: post
title: 💾java에서 txt파일 입력받는 법
date: 2020-08-05 13:00:00
author: "SeWonKim"
categories: [Web, Java]
tags: [TIL, Java]
comments: true
description: 알고리즘 케이스들 노가다로 안쳐도 된다구욧!
---

알고리즘 풀 때 제일 귀찮은 것 = _테스트 케이스 일일이 입력해넣기😕_

## FileInputStream을 사용하자!

test case들이 적혀있는 텍스트 파일을 생성해 java work space에 집어넣어놓고  
`System.setIn(new FileInputStream("input.txt"))`을 추가해주면 끝!

직접 테스트 케이스를 입력하고 싶을 땐 해당 코드를 주석처리하고 컴파일 하면 된다.
