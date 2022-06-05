---
sidebar_position: 2
---

# Typescript 개요

Javascript는 브라우저를 위한 스크립팅 언어였기 때문에 초기에는 짧은 코드들로 사용되었다. JS로 할 수 있는 일들이 늘어나면서(서버구성부터 프론트 개발, 심지어는 네이티브 앱 개발까지) 초기 JS의 장점이었던 간결함이 문제가 되었다. 

스크립팅 언어이기 때문에 컴파일하는 과정이 없지만 그것 때문에 코드의 오류를 검출하는 것이 힘들어지는 것이 대표적인 예이다. Typescript는 Javascript에 타입을 부여한 언어로 프로그램을 실행시키기 전 컴파일을 통해 **정적 타입 검사 과정을 거쳐 자잘한 오류들을 사전에 방지**해준다.


## Typescript로 하는 일

### 1. 타입 추론
 
 이미 존재하는 JS코드는 동시에 TS코드이기도 하다. 변수를 선언함과 동시에 특정 값에 할당하는 경우 TS는 그 값을 해당 변수의 타입으로 사용한다. 

 ```js
 let value = "Hello world!"
 // value가 string type으로 자동 할당
 ```

### 2. 타입 정의

- 원시 타입 : boolean, null, number, string, symbol, object, undefined
- TS에서 추가된 타입 : any, unknown, never, void
- 객체의 타입 명시 👉 `interface`
- interface를 우선적으로 사용하고, 특정 기능이 필요할 때 type 사용

### 3. 타입 구성

여러가지 타입을 이용해 새 타입을 작성할 수 있다. 가장 많이 사용되는 코드는 Union과 Generic.

- Union : 타입이 여러 타입 중 하나일 수 있음을 의미

```ts
type WindowStates = "open" | "closed" | "minimized";
type LabelTypes = 1 | 3 | 5 | 7 | 9;
```
다음과 같이 string, number의 리터럴 집합을 설명할 때 가장 많이 사용된다.


- Generic : 타입에 변수를 제공하는 방법

```ts
type StringArray = Array<string>;
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```
괄호 안에 타입을 함수의 인자처럼 전달하는 것을 말한다. 제네릭이 있는 배열은 배열 안의 값을 설명할 수 있다.
