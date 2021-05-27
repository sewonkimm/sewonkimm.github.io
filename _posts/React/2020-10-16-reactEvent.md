---
layout: post
title: 🎅 React 이벤트 처리
date: 2020-10-16 23:21:00
author: "SeWonKim"
categories: [Web, React]
tags: [React, Eventlistener]
fullview: false
comments: true
description: Eventlistener
---

> [React Docs](https://ko.reactjs.org/docs/handling-events.html)

- JSX 사용 👉 함수로 이벤트 핸들러 전달 (문자열 X)
- camelCase 사용

```javascript
<button onClick={goSubmit}> submit </button> 👉 react

<button onclick="goSubmit()"> submit </button> 👉 js
```

## addEventListener를 호출할 필요가 없다.

이벤트 핸들러를 메서드로 만들어서 처음 렌더링 될 때 onClick 리스너를 제공한다.

```javascript
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggleOn: true };

    // this 바인딩!!!
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      isToggleOn: !state.isToggleOn,
    }));
  }

  // counstructor에서 this 바인딩하지 않으면 여기에서 this값은 undefined를 가리킨다.
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? "ON" : "OFF"}
      </button>
    );
  }
}
```
