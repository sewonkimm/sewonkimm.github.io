---
layout: post
title: Vue - setTimeout() not working 
date: 2020-11-25 22:42:00
author: 'SeWonKim'
categories: [Web, Vue]
tags: [vue, web]
fullview: false
comments: true
description: Vue에서 setTimeout()이 적용이 안될 때
---

## 문제

setTimeout() 내부에서의 this는 보통 vue 컴포넌트에서 사용하는 this와 다르다.     

따라서

```javascript
setTimeout(this.methodName(), 1000); 
```

과 같은 형식으로 사용하면 메소드가 불러와 지지 않는다.

&nbsp;  
&nbsp;

## 해결

ES6를 사용한다면 arrow function을 사용해 해결할 수 있다.

```java
setTimeout(() => { this.methodName() } , 1000); 
```

&nbsp;  
&nbsp;
