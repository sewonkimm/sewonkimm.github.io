---
sidebar_position: 3
---

# 기본 타입

ts는 기본적으로 js의 원시타입들을 다음과 같이 표기한다.

```ts
let boolType: boolean = true;
let numberType: number = 10;
let stringType: string = "hello";
let backtick: string = `hello ${ name }`;
```

### Array

배열은 두가지 방법으로 표기가 가능하다.

```ts
let list: number[] = [ 1, 2, 3 ];
```
위의 방법과 제네릭을 사용하는 방법이 있다.

```ts
let list: Array<number> = [ 1, 2, 3 ];
```

### Tuple

튜플 타입은 **타입과 개수가 고정된 배열**을 표현할 수 있다.

```ts
let staticList: [string, number] = [ 'age', 20 ];

console.log(staticList[4]);    // index 4가 없어 에러가 발생한다.
console.log(staticList[1].substring(1));    // number type에는 substring 메소드가 없어 에러가 발생한다.
```

### Enum

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

### Any

타입을 알 수 없는 경우나 동적으로 받아오는 값들에 대한 타입을 표현할 때, 타입 검사를 하지 않고 컴파일 하기를 원하면 any를 사용할 수 있다. 

### Void

어떤 타입도 존재할 수 없음을 나타내며 null과 undefined만 할당할 수 있다. 보통 함수에서 리턴 타입이 없을 때, 이를 표현하기 위해 void 타입을 사용한다.

```ts
function printer(message: string): void {
    console.log(`Print: ${ message }`);
}
```

### Null & Undefined

null과 undefined 타입은 그 자체 외에는 할당 할 수 있는 값들이 없다.

### Never

절대 발생할 수 없는 타입을 나타낸다. 절대 발생할 수 없다는 의미는 항상 오류를 발생시키거나 절대 리턴되지 않는 리턴타입을 의미한다.

```ts
// error 함수는 함수의 마지막에 도달할 수 없다.
function error(message: string): never {
    throw new Error(message);
}

// infiniteLoop 함수는 함수의 마지막에 도달할 수 없다.
function infiniteLoop(): never {
    while(true) {}
}
```

### Object

원시타입이 아닌 나머지를 object 타입이라고 한다. object 타입을 쓰면 API가 더 잘 드러난다.

### 타입 단언(Type assertions)

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



