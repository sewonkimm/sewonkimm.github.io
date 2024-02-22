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
