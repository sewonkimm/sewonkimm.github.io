---
layout: post
title: 🪐 Redux-saga 개념과 용어
date: 2021-09-04 13:14:00
author: "SeWonKim"
categories: [WEB, React]
tags: [React, redux, saga]
comments: true
---

# Redux

Redux는 상태관리를 전역적으로 할 수 있도록 store를 제공해주는 라이브러리이다. 대략적인 개념과 용어는 [이 포스팅](https://sewonkimm.github.io/web/react/2020/10/23/redux.html)에 정리했다.

## 간단 개념 정리

- Store에는  state값이 immutable하게 저장되어있다.
- Component는 store에서 action을 dispatch함으로써 store state 값을 변경할 수 있다.
- state는 순수함수인 리듀서에의해 변경된다.

&nbsp;
&nbsp;

# Redux-saga

> [Redux saga concept](https://mskims.github.io/redux-saga-in-korean/)

redux-saga는 redux의 미들웨어이다. 데이터 fetching이나 브라우저 캐시에 접근하는 순수한 비동기 동작들을 담당하는 별도의 쓰레드와 같다. Side-effect들을 처리한다는 표현이 많았다. 예를 들어 Ajax call, 비동기 타이머, 콜백, 쓰로틀링, 디바운싱 등을 말한다. 본래 액션말고도 그 액션에 따라 파생되는 이벤트를 의미한다. saga를 사용하면 이것들을 단순하게 풀어낼 수 있다. **react component와 action을 모두 순수하게 유지하면서 비동기처리 비즈니스로직만 별도로 관리하게 된 것! saga 의 도입으로 각 함수들이 자신만의 일에 집중하는 구조가 되고, 실행 시점을 아는 게 쉬워진다.** 



![saga](https://user-images.githubusercontent.com/30452963/132082527-b9e1c472-a163-4ecb-b9bc-f3908cf1cf1d.gif)

Action이 dispatch되면 saga가 실행되어 비동기적 처리를 하는 방식이다. saga를 실행하기 위해서는 redux-saga 미들웨어를 store에 연결해야한다.

```javascript
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from './reducers'
import mySaga from './sagas'

// saga 미들웨어를 생성합니다.
const sagaMiddleware = createSagaMiddleware()

// 스토어에 mount 합니다.
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

// 그리고 saga를 실행합니다.
sagaMiddleware.run(mySaga)
```

`createSagaMiddleware()`로 saga 미들웨어를 생성하고, `applyMiddleware()`로 store에 미들웨어를 mount한다.

&nbsp;
&nbsp;


## ❤️Watcher와 Worker

watcher는 action을 구독하고, worker는 실제 작업을 수행한다. 

```javascript
const addCount = function* ({ value }) {
    try {
        const counter = yield call(value);
        put({type: 'END_ADD_COUNT', payload: counter });
    }
    catch(error) {
        yield put({type: 'FAIL_ADD_COUNT', payload: error });
    }
}

const counterWatcher = function* () {
    yield takeEvery('ADD_COUNT', addCount);     // ADD_COUNT가 dispatch 될 경우 addCount saga가 실행
}
```

&nbsp;

## 🧡Effects

헬퍼 함수로는 `takeEvery, takeLatest, put, fork, delay, call, all` 등이 있다.

> 이 외에도 다양한 [Effect creators docs](https://redux-saga.js.org/docs/api/#effect-creators)들이 있다.

### take 

takeEvery, takeLatest 처럼 take가 붙은 헬퍼함수는 특정 액션들을 감시한다.

```javascript
function* watchOrderRequest() {
    const action = yield take('REQUEST_ORDER');
    const result = yield call(Api.requestOrder, action.orderId);
    // ... process ...
}
```

REQUEST_ORDER 액션이 dispatch 되면 Api.requestOrder를 호출한다.

### takeEvery

```javascript
import { takeEvery } from `redux-saga/effects`

function* fetchUser(action) {
  ...
}

function* watchFetchUser() {
  yield takeEvery('USER_REQUESTED', fetchUser)
}
```

takeEvery는 USER_REQUESTED 액션이 dispatch 되면 fetchUser 함수를 실행한다. 

### takeLatest

```javascript
import { takeLatest } from `redux-saga/effects`

function* fetchUser(action) {
  ...
}

function* watchLastFetchUser() {
  yield takeLatest('USER_REQUESTED', fetchUser)
}
```

takeEvery는 USER_REQUESTED 액션이 dispatch 되면 fetchUser 함수를 실행한다. 기존에 pending 된 작업들을 모두 취소해준다.


### put

특정 액션을 dispatch하는 함수이다. redux의 dispatch와 동일하다.

### fork 

새로운 하위 saga task를 생성한다. 호출자가 부모 task가 되고, 부모 task가 취소되면 자식 task도 취소된다.

```javascript
function* parentTask() {
    const task1 = yield fork(childTask1)
    const task2 = yield fork(childTask2)
 
    // 명시적으로 특정 task만 취소시키는 방법
    if(task2 && task2.isRunning()) {
        task2.cancel()
    }
}
```

### delay

설정된 시간 이후에 resolve하는 promise 객체를 반환한다.

```javascript
import { delay } from 'redux-saga/effects'

function* fetchData() {
    yield delay(1000)               // 1초후에 resolve 된다.
    yield put({ type: "FETCH" })
}
```

### call 

block되는 fork라고 보면된다. 보통 promise의 실행에 쓰이며 promise가 resolve될 때까지 block된다. call의 첫번째 파라미터는 함수, 두번째 파라미터는 첫번째 파라미터에 넣은 함수에 넣을 파라미터이다.

```javascript
import { call, put } from 'redux-saga/effects'

export function* fetchData(action) {
   try {
      const data = yield call(Api.fetchUser, action.payload.url)
      yield put({type: "FETCH_SUCCEEDED", data})
   } catch (error) {
      yield put({type: "FETCH_FAILED", error})
   }
}
```

### all

saga들을 배열 형태로 all의 파라미터로 넣어주면 saga들이 병렬로 동시에 실행된다. 전부 resolve 될 때까지 기다린다.

&nbsp;

## 💛Generator function

saga들은 [Generator function](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Statements/function*)을 사용해 구현된다. 

```javascript
function* watchFetchProducts() {
  yield takeEvery("PRODUCTS_REQUESTED", fetchProducts)
}
```

이런식으로 `function*`과 `yield`를 사용하는 것이 특징이다.
