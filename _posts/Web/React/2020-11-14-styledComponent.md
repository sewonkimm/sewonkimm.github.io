---
layout: post
title: 🎨 React + Typescript + Styled Component
date: 2020-11-14 17:34:00
author: 'SeWonKim'
categories: [WEB, React]
tags: [React, css]
comments: true
---

> [React Styling and CSS](https://ko.reactjs.org/docs/faq-styling.html)

# 목차

- React에서의 styling 방법
- React + typescript 환경에서 styled-component 설치
- basic code
- props 활용하기
- Animations

&nbsp;  
&nbsp;  
&nbsp;

---

## React에서의 styling 방법

> [😇관련 게시글](https://sewonkimm.github.io/react/2020/10/09/ReactStyling.html)

1. className에 직접 적용 - className attribute 사용
2. inline style - style attribute를 사용하기

&nbsp;  
&nbsp;

---

&nbsp;  
&nbsp;

## ⚾styled component

> [styled component DOCS](https://styled-components.com/)

- CSS in JS 관련 리액트 라이브러리
- 스타일 정의를 CSS 파일이 아닌 JavaScript로 작성된 컴포넌트에 바로 삽입하는 스타일 기법 -> html과 css도 js로 작성이 가능하게 됩니다.

&nbsp;  
&nbsp;

## 🏀설치

```
npm i styled-components
npm install @types/styled-components
```

&nbsp;  
&nbsp;

## ⚽적용

```javascript
// Create a Title component that'll render an <h1> tag with some styles
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

// Create a Wrapper component that'll render a <section> tag with some styles
const Wrapper = styled.section`
  padding: 4em;
  background: papayawhip;
`;

// Use Title and Wrapper like any other React component – except they're styled!
render(
  <Wrapper>
    <Title>Hello World!</Title>
  </Wrapper>
);
```

stlyed component를 선언해서 tag name으로 사용하면 됩니다! 간단~

&nbsp;  
&nbsp;

## 🧶props

```javascript
const Button = styled.button`
  background: ${(props) => (props.primary ? 'palevioletred' : 'white')};
  color: ${(props) => (props.primary ? 'white' : 'palevioletred')};
`;

render(
  <div>
    <Button>Normal</Button>
    <Button primary>Primary</Button>
  </div>
);
```

### 단일 props 사용 시

`styled.div< {props명 : type} >`

```javascript
const Container =
  styled.div <
  { age: number } >
  `
  color: ${(props) => (props.age > 20 ? 'red' : 'gray')};
`;
```

이런식으로 사용 할 수있습니다.

### 다수 props 사용 시: interface 작성

```javascript
interface Container extends 상속타입 {
  isActive: boolean;
  age: number;
}

// styled-components에 interface type 지정
const Container =
  styled.div <
  Container >
  `
  color: ${(props) => (props.age > 20 ? 'red' : 'gray')};
  background-color: ${(props) => (props.isActive ? 'red' : 'gray')};
`;
```

&nbsp;  
&nbsp;

## 🎳Extending Styles (상속)

```javascript
const Button = styled.button`
  color: palevioletred;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

//Button 스타일에 조금 더 추가한 컴포넌트 스타일이 된다!
const TomatoButton = styled(Button)`
  color: tomato;
  border-color: tomato;
`;

render(
  <div>
    <Button>Normal Button</Button>
    <TomatoButton>Tomato Button</TomatoButton>
  </div>
);
```

&nbsp;  
&nbsp;

## 🏉Animations

```javascript
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 2s linear infinite;
  padding: 2rem 1rem;
  font-size: 1.2rem;
`;

render(<Rotate>&lt; 💅🏾 &gt;</Rotate>);
```

1. keyframe 생성후
2. animation 속성 값 설정

```javascript
// ✅ This will work as intended
const styles = css`
  animation: ${rotate} 2s linear infinite;
`;
```

keyframe이 주입되는 속도가 매우 느리기때문에 [css helper](https://styled-components.com/docs/api#css)를 사용하는 것을 권장.

&nbsp;  
&nbsp;
