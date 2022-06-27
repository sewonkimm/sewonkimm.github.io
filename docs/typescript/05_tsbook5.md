---
sidebar_position: 6
---

# Typescript의 타입 시스템

## 유니언 타입

타입들을 조합하여 새로운 타입을 만들어 내는 방식

```ts
const id: number | string = 101;    // '101'도 할당할 수 있다
```

### 유니언 좁히기 기법

typeof 연산을 사용하거나, isArray와 같은 메소드를 사용할 수 있다.

```ts
function printId(id: number | string) {
    // 타입별로 분기
  if (typeof id === "string") {
    // 이 분기에서 id는 'string' 타입을 가진다
    ...
  } else {
    // 여기에서 id는 'number' 타입을 가진다
    ...
  }
}

function welcomePeople(x: string[] | string) {
  if (Array.isArray(x)) {
    // 여기에서 'x'는 'string[]' 타입
    ...
  } else {
    // 여기에서 'x'는 'string' 타입
    ...
  }
}
```

유니언의 모든 멤버가 공통점을 가지고 있다면 굳이 분기하지 않아도 사용할 수 있다.


## 타입 별칭(Type aliases)

똑같은 타입을 한 번 이상 재사용 할 때, 별칭을 부여할 수 있다. 주의할 점은 별칭을 만든다고 각각의 타입이 구별되는 것은 아니라는 것이다.

```ts
type ID = number | string;

function getID(id: ID) {
    return id;
}

// 그냥 number | string을 ID라고 줄여 쓴 것에 불과하다
```

type과 interface는 유사하게 객체 타입을 표현할 수 있는데 이를 '구조적 타입 시스템'이라고 한다. 타입이 가지는 구조가 유사하면 타입이든 인터페이스든 허용적임을 의미한다. 

:::info duck typing 이라는 용어를 아시나요?

_'만약 어떤 새가 오리처럼 걷고, 헤엄치고, 꽥꽥거리는 소리를 낸다면 나는 그 새를 오리라고 부를 것이다.'_

구조적으로 유사하면 동일한 type으로 보는 것. js나 파이썬과 같은 동적 타입 언어가 덕 타이핑 하고 있다고 볼 수 있다.

:::


## 타입 단언(Type assertions)

타입 단언은 컴파일러에게 개발자가 더 구체적인 타입을 알려주는 것이다. 런타임에는 영향을 미치지 않는다. 두 가지 형태로 타입 단언을 할 수 있는데 angle-bracket 문법과 as 문법이다.

```ts
// 1. angle-bracket
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;

// 2. as
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;
```

선호에 따라 두 문법 중 하나를 선택하지만 JSX와 함께 사용할 때에는 as 스타일의 단언만 허용된다.


## 리터럴 타입

구체적인 문자열과 숫자를 타입에서 지정 해 줄 수 있다. 유니언하는 방식으로 유용하게 정보를 표현할 수 있다.

```ts
let alignment: "left" | "right" | "center";
let mode: -1 | 0 | 1;
```

### as const

리터럴 타입 추론을 위해 as const를 사용한다. 객체 전체를 리터럴 타입으로 변환할 때 사용한다.

```ts
const req = { url: "https://example.com", method: "GET" };
handleRequest(req.url, req.method);

// ts는 req.method를 string으로 추론한다.
// 만약 "GET" | " POST" 라는 리터럴 타입으로 추론하려고 한다면 ?

declare function handleRequest(url: string, method: "GET" | "POST"): void;
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);
```



## Enum // 따로 페이지를 할애할 예정

enum을 활용하면 값들의 집합에 더 나은 이름을 붙여줄 수 있다. 

```ts
enum Color { Red, Green, Blue }
let c: Color = Color.Green;    // 1
```

Red, Green, Blue에는 순서대로 0, 1, 2의 값이 할당된다. 원한다면 수동으로 번호를 매길 수도 있다.

```ts
enum Color { Red = 4, Green, Blue = 2, Black }
let c: Color = Color.Green;    // 5
let c2: Color = Color.Black;   // 3
```

enum의 index로 접근하면 해당 번호의 이름과 매칭된다.

```ts
enum Color {Red = 1, Green, Blue}
let colorName: string = Color[2];

console.log(colorName); // 값이 2인 'Green'이 출력
```
