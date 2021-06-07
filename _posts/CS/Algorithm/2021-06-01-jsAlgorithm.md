---
layout: post
title: JS로 알고리즘 풀기
date: 2021-06-01 23:22:00
author: 'SeWonKim'
categories: [CS, Algorithm]
tags: [알고리즘, javascript]
comments: true
---

## 목차

1. [서론](#서론) - JS로 알고리즘을 풀기로 마음먹은 이유
2. [본론](#본론) - JS와 친해지기 위해 준비해야할 것
3. [결론](#결론) 

&nbsp;
&nbsp;

# 서론

프론트엔드 개발자로 개발&취업준비를 하면서 느낀 것은 **처음부터 끝까지 JS!!!**라는 것이었습니다. 사실 그냥 개발만 하다보면 기본적인 map 함수도 잘 모르는 사람이 많아요. 그래서 저는 JS라는 언어와 친해지고자 알고리즘을 JS로 풀어보기로 마음먹었습니다.

&nbsp;
&nbsp;

# 본론

## JS와 친해지기 위해 준비해야할 것

> 누군가 만들어 놓았습니다. [JS 알고리즘 훈련 사이트!](https://github.com/Team-ZeroHouse/js-algorithm-training-webapp)
> 입출력도 해놓을 수 있도록 해주셨고 기본적인 연산자도 연습해볼 수 있습니다. 아직 문제는 업데이트 되지 않았지만 맛보기에 좋은 것 같습니다.

### 1. IDE

JS는 컴파일 언어가 아니기때문에 따로 테스트하기가 그렇습니다... 출력은 console.log()로 하면 되지만 모듈을 import하지 않으면 따로 입력할 길이 없습니다. 

- 그냥 Index.html 파일하나 만들어서 입력을 미리 변수로 지정하거나 하는 방법이 있겠습니다! 
- 아니면 [프로그래머스](https://programmers.co.kr/) 사이트에서 JS로 문제를 풀면 입출력 걱정은 없을 것 같네요.

### 2. 기본적인 문법

- 자료형(const 와 let)
  
  ```markdown
  아주 기본적인 사항입니다.
  JS는 변수 선언시 타입을 미리 선언할 필요가 없는 아주 loose하고 동적인 언어인데요.

  var와 let, const의 차이에 대해서는 면접에서도 자주 나오는 질문이니만큼 확실히 알아두셔야합니다.
  ES6이전에는 var로 인해 고통받았던 개발자가 매우 많았습니다. (호이스팅을 공부해보세요!)
  이 단점들을 해결한 것이 let과 const 인데요. 간단히 설명하면 let에는 변수를, const에는 상수를 선언하면 됩니다. 

  **그리고 js는 자료형을 따로 명시하지 않는다고해서 자료형이 없는것은 아닙니다!
  Number, String, Boolean, Undefined, Null, Array, Object 등 엄연히 자료형이 있습니다.
  ```

- 문자열 다루기
  
  ```markdown
  자료형을 선언하지 않는 문제때문에 문자열과 숫자를 다룰 때 다소 혼란스러울 수 있습니다.

  1. 
  문자열은 문자로 이루어진 array입니다. (JS에는 char형이 없습니다!)
  특정 문자로 접근하기 위해서는 charAt()메서드를 사용하거나 인덱스로 접근할 수 있습니다.

  2. 
  length 속성으로 문자열 길이를 확인할 수 있습니다.

  3.
  자동형변환에 대해서도 잘 알아두어야합니다. 덧셈은 문자로, 곱셈은 숫자로 만들어줍니다.
  숫자 + 문자 = 문자
  문자 * 숫자 = 숫자
  물론 Number(), String(), parseInt() 등을 통해 형변환을 하는 방법도 있습니다.

  4.
  이것 외에도 문자열을 다루는 String 내장객체의 메소드는 무궁무진한데요.
  slice, substring, concat, split 등 문제를 풀어가며 천천히 알아가보겠습니다.
  ```

- 연산하기
  
  ```markdown
  수학적인 상수와 함수를 위한 내장 객체 Math를 알아야합니다.

  Math.min(a, b, c)
  Math.max(a, b, c)
  Math.pow(a, b)
  Math.abs(a) 
  Math.sqrt(a)
  Math.floor(a) : 내림
  Math.ceil(a) : 올림
  Math.round(a) : 반올림
  Math.random()
  ```

- 조건문
  
  ```markdown
  기본적인 if-else 문과 switch문을 통해 조건문을 구현할 수 있습니다.
  3항 연산자도 알아놓으면 유용합니다.
  ```

- 반복문

  
  ```markdown
  for, forEach, while, map, reduce, filter 등을 활용할 수 있겠습니다.
  특히 map과 reduce, filter는 많이 사용하기도 하고, 실제 개발에서도 활용도가 높기 때문에 공부해두면 좋습니다.
  ```




&nbsp;
&nbsp;

# 결론

> 그래서 결론은 연습🙂

이외에도 자주 사용되는 테크닉들은 문제를 풀면서 정리해나가도록 하겠습니다!

&nbsp;
&nbsp;
