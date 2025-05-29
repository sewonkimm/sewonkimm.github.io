---
sidebar_position: 2
tags: ['react', '리액트 컴포넌트 패턴']
last_update:
  date: 5/9/2023
  author: sewonkimm
---

# Hooks Pattern 

리액트 16.8 버전에서 도입된 Hooks. 이전에 사용되던 패턴 중 많은 부분을 Hooks로 대체할 수 있다.

### Class component 

```jsx
class MyComponent extends React.Component {
  /* Adding state and binding custom methods */
  constructor() {
    super()
    this.state = { ... }
 
    this.customMethodOne = this.customMethodOne.bind(this)
    this.customMethodTwo = this.customMethodTwo.bind(this)
  }
 
  /* Lifecycle Methods */
  componentDidMount() { ...}
  componentWillUnmount() { ... }
 
  /* Custom methods */
  customMethodOne() { ... }
  customMethodTwo() { ... }
 
  render() { return { ... }}
}
```

클래스 컴포넌트의 state 선언이나 라이프사이클을 모두 hook으로 대체할 수 있다.



