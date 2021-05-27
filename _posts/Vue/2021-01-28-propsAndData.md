---
layout: post
title: 👶 vue props를 data로 전달하려면?
date: 2021-01-28 11:30:00
author: 'SeWonKim'
categories: [Web, Vue]
tags: [vue, web]
fullview: false
comments: true
description: 단방향데이터 흐름
---

# props로 받은 데이터를 data로 사용하려면?

> [vue docs 참고](https://kr.vuejs.org/v2/guide/components.html#%EB%8B%A8%EB%B0%A9%ED%96%A5-%EB%8D%B0%EC%9D%B4%ED%84%B0-%ED%9D%90%EB%A6%84)
> [blog 참고](https://kjwsx23.tistory.com/357)

## 조건

1. prop는 초기 값을 전달 하는데만 사용
2. prop는 primitive type으로 전달


이 경우 

```javascript
props: ['initialCounter'],
data: function () {
  return { counter: this.initialCounter }
}
```

이런식으로 할당해 줄 수있습니다.

&nbsp;
&nbsp;

### 근데 props 값이 primitive type이 아니라면?

boolean, number, string, null, undefined type이 아닌 값이라면 computed 속성을 사용하세요!

&nbsp;
&nbsp;
