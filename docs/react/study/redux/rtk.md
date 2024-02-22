---
tags: ['react', 'Wiki', 'redux', '상태관리', 'RTK']
last_update:
  date: 2/22/2024
  author: sewonkimm
---

# Redux Toolkit

> [Redux Toolkit 공식 문서](https://redux-toolkit.js.org/)를 참고하여 작성하였습니다.

## 정의

Redux 로직을 작성하는 표준을 위한 패키지

## 목적

Redux에 대한 세 가지 문제점을 해결하기 위해 만들어졌다.

1. Redux store 설정이 너무 복잡함
2. Redux를 잘 사용하려면 패키지를 많이 추가해야함
3. 보일러 플레이트 코드가 많이 필요함

## 구성

### 1. configureStore

단 한 번의 함수 호출로 combine reducer, 미들웨어 추가, Redux DevTools 통합 설정을 해준다.

### 2. createSlice

Immer 라이브러리를 사용하여 immutable한 state 업데이트가 가능하다. 각 reducer에 대한 action creator와, reducer명을 기반으로 한 action type string을 자동으로 생성해준다. TypeScript와 호환도 잘 된다.

기존에 이렇게 작성했던 코드를

```javascript
// action type string
const ADD_TODO = 'ADD_TODO'

// action creator
export const addTodo = (text) => ({
  type: ADD_TODO,
  payload: { text, id: nanoid() },
})

// reducer
export const todosReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return state.concat({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      })
    default:
      return state
  }
}
```

다음과 같이 줄일 수 있다. reducer만 작성하면 action type string, action creator 생성하는 코드를 작성하지 않아도 된다. 코드가 더 짧고, 읽기 쉬워졌다. 그리고, 코드를 action, reducer 파일 등으로 분리해서 작성하지 않고, 하나의 파일에 작성할 수 있게 되었다.

```javascript
import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    todoAdded(state, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false,
      })
    },
  },
})

export const { todoAdded } = todosSlice.actions // action을 사용하기 위해 export
export default todosSlice.reducer
```

코드를 간소화해주고, 실수를 줄여주는 효과가 있어서 공식적으로 RTK 사용을 추천하고 있다.
