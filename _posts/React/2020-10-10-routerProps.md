---
layout: post
title: 👛 React-router에서 props 전달하는 방법
date: 2020-10-10 02:05:00
author: "SeWonKim"
categories: [React]
tags: [jekyll, React, router, props]
fullview: false
comments: true
description: 그냥 props 전달하면 전달이 안될 때
---

### <Route path='/' component={board} />

일반적으로 이런 식으로 컴포넌트를 렌더링 한다.

이때 컴포넌트에 props를 전달하고 싶다면?

### <Route path='/' component={board} props={data}/>

이렇게 전달하면 된다고 생각하겠지만... 그것은 경기도 오산...  
board 컴포넌트에서 확인해보면 props를 받아오지 못한다😥

그럴땐 **Render Props**를 사용해 값을 전달해야 한다.

`<Route path='/' render{()=> <board props={data} />} />`

자세한 것은 링크 참조!

> [1. Render Props - React Docs](https://ko.reactjs.org/docs/render-props.html)

> [2. Using the Route render prop in React](https://dev.to/cesareferrari/using-the-route-render-prop-in-react-k5a)

> [3. Pass props to a component rendered by React Router v4](https://ui.dev/react-router-v4-pass-props-to-components/)

---

이 때 컴포넌트명을 대문자로 시작하지 않으면 렌더링이 안된다...!

**사용자 정의 컴포넌트는 반드시 대문자로 시작해야합니다** 라는 항목이 [React 공식문서](https://ko.reactjs.org/docs/jsx-in-depth.html#user-defined-components-must-be-capitalized)에 있었다.  
이걸 모르고 한참 헤맸네...^^;
