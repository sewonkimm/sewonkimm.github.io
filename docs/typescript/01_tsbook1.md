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


:::info interface를 우선적으로 사용하는 이유는 무엇일까?


더 구체적인 오류 메세지를 확인할 수 있기 때문에 interface를 사용하는 것을 권장

[참조 문서](https://www.typescriptlang.org/play?ssl=42&ssc=4&pln=46&pc=55&e=83#code/PTAEBUAsFMCdtAQ3qALgdwPagLaIJYB2ammANgM4mgAm0AxmcgqjKBZIgA4KYBmSQgFgAUCFCYARgCsGqAFygiqOH0T1oVRIRpoAnjyRl8iCpoB0okFbBRoepCgBucBxXw58TWABpBuvkxYNDYcTApUUHpMHDDielNNGyR6SNYECkQcaEsRUVQDBAAhfFgacELQAF5QAG9RUFB0IgBzCkUAJgBuUQBfHryRZVV1YtKaAElCFVg1DTqGptb20G6+0VFowgjQSXGARkUSsorDGtqlwjbO0H7NzG3IvbKOo-GpmbmEc8vr1duBskigxEABXMwQQoAZXosHwXEi+C07FQsFBqVBsEQZH0hgoegi0BwPmS+FQAHIqFxwu5JGQWNhhrBPAAPELQUqgcEMzC5e6PXbjADMbzKHxG8xqzxo+0BYlsMAckkwrHYoK41NgkWgLJUOlaEnSwSZXy0OlxFmSpwQ2JMZioNGwrCRoCcJiU0zgZlS+AeFoofnQkC80FJntmoyonBcSFAAGt7FgynyRAVDAB5dA4n6ETAY2CEbGKVGghC9UAAMlAx3KhQGaYQACUpERqnVQLn84WyIo1JQy5Xq+9w185SbRqAAArQdR5uOgHV6mhUGvWhYiRrRMiYTF8UE9tBo6ADRp8YyaXvYswDXqicfzADCwfoCeIi+gOhXw8+E-qG6i5A7rM+6Xv2J6gGe+AXhBV7Husgz0pEmBZoombZu2zRXCsHR+J2qCYt2xZHgCoiIVEz6vooT74C+H5thcmF-DhAHbruIEwf2fiQdBfYQncgziFAiCRJk+A0IGCDwNEsQfroeg7lyEL3poEguMEDbJLaiQUOYoBQjw9D4HwNHYmQeh+JIILcqA8mgksZA4i00BPM5MwLrAsBBMk2QUJkTk6aAEwCLZoCQJgamqXA7IQeQ26Me5nmwAGNkKQkwjyuw0AIGF6CQjwMJwgiUTaKAXCeW6dBoF6UXaLoYQoIE9DcjQ3maH5KlBnRSZxgazSqspVDGAmoDUbRhApsh6H0BRH4DNNNGvm2k1yuI6aEAgeDSEEtBGXwcAfvMlkYFlxANkYdoqU4VADZpKCsMJHo-hoWgoJgPDELVFrndpjgIIw4TQDQuSCcGVDZNoVAhWlC66rJgiPRKCCSA4dCMMgBpkppmVbLoqAeDkGxDCOE4ANJknq66NFwmJJYoyrkDOhA3oTymgGTqAU3+m6AZiigRHCVzMwJYBTNFKowMECQQogX1pbmLnkdoTm6DuqDuJV-CkmrtAMN4wm+uNhNnZO6pcA45yLFuQR86irQ3nKxum+blMkASiiEKCOCWbA9uE+IAAi0DvTQBp+rZwQtJgV5+M6Dq7fthDzNE+66JZSDJNS7h4zG20y+tLT6y4ukABLIdAEWBME1N0jRZkw5ngPJA2yVkpSsZHW5CQOdQeDDekODw8pKaretEgCOkuyaJE8AUEBz0xcEZgclcRg4vw0WA05yRSypyA7uazeutdxPPTHoMouo87haocVN5A8CILoLoy5HmC6FwTDzKg2ARMgCh+2ASAHMuDtBAL-F819ZhxXMNJYAABHUsEQDYUGAEKAA7B0IU6ChQAFZgDN1hPCVAABaAaxCrrEObsAHBHQABsAAODoTCAAMABiGhDCmEdGYaIIAA)
:::

:::info '특정 기능'은 어떤 기능일까?

- interface와 type의 주요한 차이점 중 하나는 interface는 열려있고, type은 닫혀있다는 점이다.
- 공개적으로 확장되어야 하는 성격의 변수는 interface로, 폐쇄적으로 관리되어야하는 변수는 type으로 선언
```ts
// interface는 두번째 선언시, 할당한 값이 추가되지만
interface Kitten {
  purrs: boolean;
}

interface Kitten {
  colour: string;
}

// type은 두번 선언이 불가능 
type Puppy = {
  color: string;
};

type Puppy = {  // 👈  에러가 발생한다
  toys: number;
};

```

:::

:::info 그 외에 interface와 type의 차이점

1. 둘 다 객체를 표현하고, extend가 가능하지만 문법적인 표현이 살짝 다름
2. type은 primitive, union, tuple 과 같은 타입도 표현 가능
   
[참조 문서](https://stackoverflow.com/questions/37233735/interfaces-vs-types-in-typescript/52682220#52682220)
:::

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
