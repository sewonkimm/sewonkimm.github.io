---
layout: post
title: 👥props와 state의 차이점은 무엇인가요?
date: 2020-10-06 22:13:00
author: "SeWonKim"
categories: [WEB, React]
tags: [React, props, state]
comments: true
description: React 자습서
---

## props

- 컴포넌트에 _매개변수처럼_ 전달된다.
- immutable 하다. 값이 변하지 않음.

---

## state

- 함수 내에 선언된 변수처럼 _컴포넌트 안에서_ 관리된다.
- 값을 변화시킬 때 사용된다. 이벤트 처리를 할 때...

```
정적 버전을 만들기 위해 state를 사용하지 마세요.
state는 오직 상호작용을 위해, 즉 시간이 지남에 따라 데이터가 바뀌는 것에 사용합니다.
```

> [React 공식문서 中...](https://ko.reactjs.org/docs/thinking-in-react.html)

---

## 공통점

- JS 객체
- props와 state 값이 바뀌면 render update 된다.
- Both props and state are deterministic. If your Component generates different outputs for the same combination of props and state then you're doing something wrong.

---

## 어떤 것이 state가 되어야 하는가?

1. 부모로부터 props를 통해 전달됩니까? 👉 state가 아닙니다.
2. 시간이 지나도 변하지 않나요? 👉 state가 아닙니다.
3. 컴포넌트 안의 다른 state나 props를 가지고 계산 가능한가요? 👉 state가 아닙니다.
