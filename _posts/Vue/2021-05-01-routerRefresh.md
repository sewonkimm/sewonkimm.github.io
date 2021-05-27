---
layout: post
title: 🔁 vue router 새로고침
date: 2021-05-01 16:50:00
author: 'SeWonKim'
categories: [Web, Vue]
tags: [vue, web]
fullview: false
comments: true
description: vue router 인스턴스 메소드를 사용해 네비게이션 하기
---

&nbsp;
&nbsp;

> [Vue router 공식 문서](https://router.vuejs.org/kr/)

&nbsp;

## 🤖 사전지식: 프로그래밍 방식 네비게이션

<router-link>를 사용해 선언적 네비게이션을 사용하는 방법도 있지만 router.push() 등의 메소드를 사용해 프로그래밍 방식으로 네비게이션을 구현하는 것도 가능합니다. 

- 선언적 방식 = `<router-link :to="...">`
- 프로그래밍 방식 = `router.push(...)`


### router.push()

선언 방식은 다음과 같습니다.

```javascript

// 리터럴 string
router.push('home')

// object
router.push({ path: 'home' })

// 이름을 가지는 라우트
router.push({ name: 'user', params: { userId: 123 }})

// 쿼리와 함께 사용, 결과는 /register?plan=private 입니다.
router.push({ path: 'register', query: { plan: 'private' }})

```

&nbsp;

### router.replace()

router.push와 router.replace로 네비게이션이 가능한데요. 둘의 차이는 push는 히스토리에 추가하는 것이고, replace는 히스토리에 추가하지 않는다는 것입니다.

&nbsp;

### router.go()

router.go는 히스토리 스택을 사용해 이동합니다.

```javascript

// 한 단계 앞으로 갑니다. history.forward()와 같습니다. history.forward()와 같습니다.
router.go(1)

// 한 단계 뒤로 갑니다. history.back()와 같습니다.
router.go(-1)

// 3 단계 앞으로 갑니다.
router.go(3)

```

&nbsp;
&nbsp;

## 🛫 내가 하려던 것 === 새로고침(router reload)

어떤 작업을 하고, 새로고침을 해야할 때 단순하게 현재 라우터로 router.push()를 해버리면 에러가 발생합니다.

### 해결법 1. router.go(0)

히스토리 스택에서 현재 히스토리로 이동한다.

### 해결법 2. router.go(router.currentRoute)

router.currentRoute 필드를 router.go의 매개변수로 넣어준다.       
프로젝트 진행 할 때에는 이 방법으로 잘 구현했다.

&nbsp;
&nbsp;
