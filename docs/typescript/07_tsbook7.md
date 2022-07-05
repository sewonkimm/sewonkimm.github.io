---
sidebar_position: 8
---

# Functions

## Function 타입 표현하기

화살표 함수와 비슷한 문법으로 표현할 수 있다.

```ts
function greeter(fn: (a: string) => void) {
    fn('Hello world!');
}

function print(s: string) {
    console.log(s);
}

greeter(print);
```

타입을 따로 명시해주지 않으면 암묵적으로 any가 지정된다.


## Signatures

### Call signatures

js 에서는 function 내부에 호출가능한 프로퍼티가 있을 수 있다. 이를 위한 표현은 다음과 같다. 

```ts
type DescribableFunction = {
    description: string;
    (arg: number): boolean;
}

function Foo(fn: DescribableFunction) {
    console.log(fn.description);
    console.log(fn(6));
}
```

function 내부에 프로퍼티를 할당해서 쓰는 경우가 많지 않았어서 생소하게 느껴졌다.


### Construct signatures

call signature 앞에 `new` 키워드를 붙여 객체를 생성하는 것을 말한다.

```ts
type SomeConstructor = {
    new (s: string): SomeObject;
}

function Foo(ctor: SomeConstructor) {
    return new ctor("hello");
}
```

js로 class를 짜본 경험이 많이 없어서 이것 또한 생소한 문법이었다.



## Generics

```ts
function Foo<Type>(arr: Type[]): Type | undefined {
    return arr[0];
}

const s = Foo(["a", "b", "c"]); // Type === string
const n = Foo([1, 2, 3]);       // Type === number
const u = Foo([]);
```

Type 이라는 generic 으로 여러가지 타입을 커버할 수 있다. generic에 `extends`라는 키워드를 사용해 타입을 제한하는 것도 가능하다.

```ts
function Foo<Type extends { length: number }>(a: Type, b: Type) {
    if(a.length >= b.length) {
        return a;
    } else {
        return b;
    }
}

const arr = Foo([1, 2], [1, 2, 3]);
const str = Foo("hello", "world");
const ng = Foo(1, 10);  // length 프로퍼티가 없기에 에러 발생
```

extends 키워드 뒤에 붙은 타입을 type constraint 라고 표현한다. 설정해주면 `{ length : number }` 프로퍼티를 가지고 있지 않은 객체는 받지 않는다. 


### Type arguments를 구체화하기

`<Type>`으로 표현할 것을 `<string | number>`와 같이 의도한 type으로 표현하는 방법이 있다.

```ts
function Foo<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
}

Foo([1, 2, 3], ["a", "b", "c"]);    // mismatched arrays 에러
Foo<string | number>([1, 2, 3], ["a", "b", "c"])    // 다음과 같이 구체화 할 수 있다.
```


## Optional parameter

필수적으로 받아오지 않는 파라미터는 `?`를 더해서 optional 하게 표현한다. 이 때 파라미터에 undefined를 넣어도 항상 통과한다.

파라미터가 optional하게 들어올 때 default 값을 설정해줄 수 도 있다. 

```ts

function Foo(x?: number) { ... }

Foo();      // OK
Foo(10);    // OK


function Foo(x = 10) { ... }
Foo();  // Foo(10)과 동일한 결과
```



## Parameter destructuring

```ts
type ABC = { a: number, b: number, c: nuber };
function sum({ a, b, c }: ABC) { ... }
```

위와 같이 type을 선언해서 깔끔하게 + destructuring 해서 표현할 수 있다.

