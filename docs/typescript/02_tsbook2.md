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

## Array

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


## Any

타입을 알 수 없는 경우나 동적으로 받아오는 값들에 대한 타입을 표현할 때, 타입 검사를 하지 않고 컴파일 하기를 원하면 any를 사용한다. 

## Void

어떤 타입도 존재할 수 없음을 나타내며 null과 undefined만 할당할 수 있다. 보통 함수에서 리턴 타입이 없을 때, 이를 표현하기 위해 void 타입을 사용한다.

```ts
function printer(message: string): void {
    console.log(`Print: ${ message }`);
}
```

## Null & Undefined

null과 undefined 타입은 그 자체 외에는 할당 할 수 있는 값들이 없다.

## Never

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

## Function

- 매개변수 타입
- 반환 타입

을 표시한다.

반환 타입은 ts가 return문을 바탕으로 추론하기 때문에 표기하지 않아도 되는 것이 일반적이다.

## Object

원시타입이 아닌 나머지를 object 타입이라고 한다. object 타입을 쓰면 API가 더 잘 드러난다. 객체의 프로퍼티들과 각 프로퍼티의 타입을 나열하면 된다.

### Optional property

프로퍼티 이름 뒤에 `?`를 붙여서 선택적 타입으로 설정한다.

```ts
function printName(obj: { first: string, last?: string }) { ... }

printName({ first: 'Anna' });
printName({ first: 'Anna', last: 'Love' });
```

last는 옵셔널한 프로퍼티라서 2개의 printName 모두 문제가 없다. JS에서는 존재하지 않는 프로퍼티에 접근하면 undefined가 반환되므로 **옵셔널 프로퍼티를 읽으면 먼저 undefined인지 확인**해야한다.



## 그 외 자주 쓰이지 않는 원시형 타입

- bigint
- symbol 
