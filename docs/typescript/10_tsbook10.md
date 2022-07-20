---
sidebar_position: 11
---

# Modules


## 모듈이란

top-level에 `import`나 `export`지시자를 포함하고 있는 것이 모듈이다. 모듈은 전역 스코프가 아닌 모듈 레벨 스코프를 가진다. 즉, 모듈에서 선언된 변수, 함수, 클래스 등은 export하여 명시적으로 내보내지 않는 한 모듈 외부에서 사용할 수 없다.

### JS에서 모듈을 정의하는 방법

:::note

앱의 크기가 커지면 언젠간 파일을 여러 개로 분리해야 한다(모듈화). 초기에는 js로 만든 스크립트의 크기도 작고 기능도 단순했기 때문에 오랫동안 모듈 관련 표준 문법이 없었지만 현대에는 여러 모듈 시스템들(AMD, CommonJS, UMD 등...)이 있다. 

참고 - [모던 js 튜토리얼; 모듈](https://ko.javascript.info/modules-intro)
:::

JS에서의 코드를 모듈화하는 방법은 다양하지만 2020년 이후로는 `import/export` 문법으로 알려진 ES6 모듈이 가장 널리 사용되고 있다. ts는 `import`나 `export`지시자를 포함하지 않는 파일을 지시자로 간주하지 않는다.


## ES Module syntax

ts는 기본적으로 js의 module syntax를 따른다.
### export default

```ts
// @path: hello.ts
export default function helloWorld() {
    //...
}

import helloWorld form './hello.ts';
```

### export without default

다수의 변수와 함수를 `export` 할 때는 다음과 같이 사용한다.

```ts
// @path: hello.ts
export const pi = 3.14;
export const name = 'hi';
export function helloWorld() {
    //...
}

import { pi, name, helloWorld } form './hello.ts';
```

`export default`와 섞어서 사용할 수도 있다.

```ts
// @path: hello.ts
export const pi = 3.14;
export const name = 'hi';
export default function helloWorld() {
    //...
}

import helloWorld, { pi, name } form './hello.ts';
```
### rename import

```ts
import { name as userName } from './hello.ts';
```

기본적으로는 위 방식으로 rename이 가능하고, import한 모든 변수를 `* as ...` 방식으로 하나의 namespace에 넣는 것도 가능하다. 
