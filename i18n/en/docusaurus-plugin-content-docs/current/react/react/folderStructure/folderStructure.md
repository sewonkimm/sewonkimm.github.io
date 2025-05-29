---
sidebar_position: 1
tags: ['react', 'folderStructure', '설계', 'Wiki']
last_update:
  date: 2/17/2024
  author: sewonkimm
---

# 폴더 구조

프로젝트의 폴더 구조는 프로젝트의 규모와 팀의 규모에 따라 달라진다. 궁극의 폴더 구조는 없으며 상황에 맞게 적절한 폴더 구조를 선택하는 것이 중요하다.

:::tip 참고

- [Evolution of a React folder structure and why to group by features right away](https://profy.dev/article/react-folder-structure#world-domination-colocation)
- [How to structure your React projects](https://joyofcode.xyz/react-project-structure#use-path-aliases)
- [Delightful React file / Directory structure](https://www.joshwcomeau.com/react/file-structure/)
:::

## 1. 파일 타입 중심의 폴더 구조

```
.
└── src
    ├── components  // 컴포넌트
    │   ├── button
    │   ├── input
    │   └── footer
    ├── pages       // 컴포넌트를 배치하는 페이지
    ├── assets      // 이미지, 폰트 등의 데이터
    ├── utils       // 범용적으로 사용 가능한 유틸 함수
    ├── helpers     // 프로젝트에서만 사용 가능한 유틸 함수
    ├── hooks       // 커스텀 hook
    ├── store       // 전역 상태 관리
    ├── types       // 타입 지정
    ├── tests       // 테스트 코드
    └── consts      // 상수
```

### 장점

- 각 파일의 구분이 명확하다. 어디에 위치시켜야할지 고민할 필요가 없이 단순하다.
- 작은 프로젝트에서 효율적이다.

### 단점

컴포넌트가 많아지면 관리가 어려워진다.

```
.
└── src
    ├── components  // 컴포넌트
    │   ├── button
    │   ├── input
    │   ├── modal
    │   ├── featureButton/
    │   ├── featureInput/
    │   ├── featureModal/
    │   └── footer
    ├── pages       // 컴포넌트를 배치하는 페이지
    ├── assets      // 이미지, 폰트 등의 데이터
    ├── utils       // 범용적으로 사용 가능한 유틸 함수
    ├── helpers     // 프로젝트에서만 사용 가능한 유틸 함수
    ├── hooks       // 커스텀 hook
    │   ├── useModal.js
    │   ├── useInput.js
    │   ├── useFeatureButton.js
    │   ├── useFeatureInput.js
    │   └── useFeatureModal.js  // 특정 feature에만 사용하는 hook
    ├── store       // 전역 상태 관리
    ├── types       // 타입 지정
    ├── tests       // 테스트 코드
    └── consts      // 상수
```

- 폴더 하위 항목이 많아져 검색이 어렵다.
- 검색을 위해 유니크한 파일명을 만들어야하는데 각 파일을 네이밍하는 것도 고민스러워진다.
- 작업을 함에 있어서 응집도가 낮아진다.
- 각 폴더 하위에 특정 feature에만 사용하는 파일과 공통으로 사용되는 파일이 많아지면 한 눈에 프로젝트를 파악하기 어려워진다.

<br />

## 2. 컴포넌트 중심 폴더 구조
```
.
├── src
│   └── components  // 컴포넌트
│       ├── button
│       │   ├── index.js
│       │   ├── Button.js
│       │   ├── useButton.js
│       │   ├── button.test.js
│       │   ├── button.helper.js
│       │   └── button.type.js
│       ├── input
│       ├── modal
│       ├── featureButton
│       ├── featureInput
│       ├── featureModal
│       └── footer
├── pages       // 컴포넌트를 배치하는 페이지
├── assets      // 이미지, 폰트 등의 데이터
├── utils       // 범용적으로 사용 가능한 유틸 함수
└── consts      // 상수
```

컴포넌트 하위에 컴포넌트에 관련된 파일을 모두 위치시킨다.

### 장점
- 응집도가 높아진다. 관련된 파일을 한 폴더에 모아두어서 작업이 편해진다.

### 단점
- 특정 로직은 여러 컴포넌트에서 동시에 사용하는 경우도 있다. 이런 경우에는 중복되는 파일이 생기고, 나중에 로직이 수정되거나 리팩토링 해야할 때 관리 포인트가 된다. 이럴 때에는 공통 로직을 src 루트에 따로 위치시킨다.
- 컴포넌트가 많아서 폴더 하위에서 검색이 어려운 문제는 여전히 존재한다.


<br />

## 3. 기능 중심 폴더 구조
```
.
├── src
│   ├── features
│   │   └── users
│   │       ├── index.js
│   │       ├── signUp    // users 기능
│   │       ├── logIn     // users 기능
│   │       ├── userInfo  // users 기능
│   │       ├── hooks
│   │       ├── helpers
│   │       ├── types
│   │       └── tests
│   └── components  // 재사용되는 컴포넌트
│       ├── button
│       ├── input
│       ├── modal
│       └── footer
├── pages       // 컴포넌트를 배치하는 페이지
├── assets      // 이미지, 폰트 등의 데이터
├── utils       // 범용적으로 사용 가능한 유틸 함수
└── consts      // 상수
```

공통으로 사용되는 컴포넌트와 기능별로 사용되는 컴포넌트를 분리한다. 공통으로 사용되는 컴포넌트는 components 폴더에 위치시키고, 기능별로 사용되는 컴포넌트는 features 폴더에 위치시킨다.

### 장점
- components 폴더가 너무 복잡해지는 것을 방지한다.
- 기능별로 사용되는 컴포넌트를 한 폴더에 모아두어서 프로젝트 구조를 파악하기 쉬워진다.
