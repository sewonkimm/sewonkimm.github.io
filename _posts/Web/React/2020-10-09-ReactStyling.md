---
layout: post
title: 🎨 React Styling and CSS
date: 2020-10-09 21:26:00
author: "SeWonKim"
categories: [Web, React]
tags: [React, css]
comments: true
description: React에서의 스타일링
---

> [React Styling and CSS](https://ko.reactjs.org/docs/faq-styling.html)

## 👚className에 직접 적용하기 : className attribute를 사용하기

js 에서는 class 라고 하지만 react에서는 className 이라고 명시해준다.

```javascript
render() {
  let className = 'menu';
  if (this.props.isActive) {
    className += ' menu-active';
  }
  return <span className={className}>Menu</span>
}
```

props나 state로 css를 conditional하게 조정해 주는 것도 가능하다.  
이때 [classnames](https://www.npmjs.com/package/classnames#usage-with-reactjs) 라이브러리를 사용하면 더 편리하게 관리할 수 있다.

```javascript
var classNames = require("classnames");

var Button = React.createClass({
  render() {
    var btnClass = classNames({
      btn: true,
      "btn-pressed": this.state.isPressed,
      "btn-over": !this.state.isPressed && this.state.isHovered,
    });
    return <button className={btnClass}>{this.props.label}</button>;
  },
});
```

## 👓inline style : style attribute를 사용하기

```javascript
const divStyle = {
  color: "blue",
  backgroundImage: "url(" + imgUrl + ")",
};

function HelloWorldComponent() {
  return <div style={divStyle}>Hello World!</div>;
}
```

- camel case로 작성해주어야한다. (background-image 가 아니라 backgroundImage)
- px 접미사를 자동으로 추가해준다.

### stlye attribute보다는 css class 사용하기를 권장

> [inline 스타일보다는 css class를 사용하는 것이 좋다](https://ko.reactjs.org/docs/dom-elements.html#style)

style attribute는 보통 React 애플리케이션에서 렌더링 시점에 동적으로 계산된 스타일을 추가하기 위해 사용된다.
