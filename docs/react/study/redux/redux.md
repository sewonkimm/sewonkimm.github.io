---
tags: ['react', 'Wiki', 'redux', '상태관리']
last_update:
  date: 2/22/2024
  author: sewonkimm
---

# Redux

> [Redux 공식 문서](https://redux.js.org/)를 참고하여 작성하였습니다.

## 용어

1. Redux: state container
2. Redux Toolkit(RTK): Redux 로직 작성을 위한 라이브러리, Redux에서 공식적으로 추천하는 방법
  - 장점으로는 Redux 코드 작성 단순화, 실수 방지가 있다.
3. Store: 애플리케이션의 state 저장소
4. Action: state를 변경하는 객체
5. Reducer: 상태트리를 어떻게 변경할지 명시한 함수

전체적으로 보면 이런 느낌이다.

![redux](./redux.png)

reducer가 store에 있는 state를 변경해주는 경비원 같은 느낌


## 왜 Redux를 사용해야할까?

- 전역 상태 관리를 위해서
- 상태가 언제, 어디에서, 왜, 어떻게 업데이트 되는지 예측 가능
- 테스트 작성 가능

## 언제 Redux를 사용해야할까?

- 여러 곳에서 사용되는 state가 대량으로 있는 경우
- 상태 업데이트 로직이 복잡한 경우
- 프로젝트 코드베이스가 크고, 협업하는 사람이 많은 경우

## 관련 라이브러리

Redux는 단독 js 라이브러리이지만 아래 3가지 라이브러리와 묶어서 패키지로 많이 사용된다.

1. [React redux](https://github.com/reduxjs/react-redux)
2. [Redux toolkit](./rtk.md)
3. [Redux devtools extension](https://github.com/reduxjs/redux-devtools/tree/main/extension)

---

## 부록

### Action

type과 payload 필드를 가진 자바스크립트 객체

```javascript
const addTodoAction = {
  type: 'todos/todoAdded',  // action 설명 : domain/eventName
  payload: 'Buy milk'       // 추가 정보
}
```

### Action creator

action을 생성하는 함수. action 객체를 반환한다.

```javascript
const addTodo = text => {
  return {
    type: 'todos/todoAdded',
    payload: text
  }
}
```

### Reducer

state와 action을 받아서 새로운 state를 반환하는 함수

```javascript
const initialState = {
  value: 0
}

function counterReducer(state = initialState, action) {
  if (action.type === 'counter/increment') {
    return {
      ...state,
      value: state.value + 1
    }
  }
  return state
}
```

이름이 reducer인 이유는 redux reducer function이 [Array.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce) 메서드와 동일한 원리로 동작하기 때문이다.

### Store

reducer를 전달하여 생성한다. getState() 메소드를 통해 현재 state 값을 읽을 수 있다.

```javascript
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: counterReducer })

console.log(store.getState())
// {value: 0}
```

### Dispatch

action을 store에 전달하는 메소드

```javascript
store.dispatch({ type: 'counter/increment' })

console.log(store.getState())
// {value: 1}
```

![redux](./redux.png)

위 그림에서 1번을 문장으로 표현하면 `action을 dispatch한다`고 표현할 수 있다.

### Selectors

state에서 특정 값을 가져오는 함수. 애플리케이션이 커서 state 값을 가져올 때 특정 로직이 반복되는 경우에 selector를 사용하면 편하다.

```javascript
const selectCounterValue = state => state.value

const currentValue = selectCounterValue(store.getState())
console.log(currentValue)
// 2
```
