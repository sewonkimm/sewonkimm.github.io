---
sidebar_position: 10
---

# Type으로 Type표현하기

## Generics

### 사용법

C#이나 Java같은 언어에서 컴포넌트의 재사용을 위해 generics를 많이 사용한다. 

```ts
function identity(arg: any): any {
  return arg;
}

// any를 사용해도 arg에 다양한 타입을 넣을 수 있지만 return 값에 대한 정보를 얻을 수 없다.


function identity<Type>(arg: Type): Type {
  return arg;
}

// Generic type을 활용함으로써 return type을 capturing할 수 있다.
```

Generic type을 사용해서 `let output = identity<string>("myString");`, `let output = identity<number>(31);` 와 같이 함수를 재사용 할 수 있다.

### Generic Types

Generic을 Type parameter로 사용할 때

```ts
function identity<Type>(arg: Type): Type {
  return arg;
}
 
// #1
let myIdentity: <Type>(arg: Type) => Type = identity;

// #2
let myIdentity: { <Type>(arg: Type): Type } = identity;

// #3
interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}

// #4
interface GenericIdentityFn<Type> {
  (arg: Type): Type;
}
```

### Generic classes

Generic interface와 classes도 만들 수 있다. (enum과 namespace는 만들 수 없다.) Generic class는 interface와 비슷한 모양새다. 

```ts
class GenericNumber<NumType> {
  zeroValue: NumType;
  add: (x: NumType, y: NumType) => NumType;
}
 
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

### 제약조건

Generic을 사용한 parameter에 `.length`와 같은 프로퍼티에 접근하려고 하면, 어떤 type은 해당 프로퍼티를 가지고 있지 않기 때문에 컴파일러가 에러를 내준다. 그래서 이런 경우에 `extends` 키워드를 사용하여 사용할 type을 좀 더 좁힐 수 있는 방법이 있다.

```ts
interface Lengthwise {
  length: number;
}
 
function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
  console.log(arg.length); // 이제 모든 Type에는 .length 프로퍼티가 있다.
  return arg;
}

loggingIdentity(3); // number type에는 length가 없기 때문에 이런 식으로 사용이 불가능하다.
loggingIdentity({ length: 10, value: 3 }); // 대신 이런식으로 사용할 수 있다.
```


## Keyof 

해당 연산자는 객체 타입을 받아서 string 혹은 numeric한 리터럴 union을 만들어준다.

```ts
type Point = { x: number; y: number };
type P = keyof Point; // "x" | "y"


type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;  // number

type Mapish = { [k: string]: boolean };
type M = keyof Mapish;  // string | number
```

js는 모든 객체 key 타입이 string이 되도록 강제한다. 따라서 obj[0]은 항상 obj["0"]과 같아지므로 예시의 M이 "string | number" 가 될 수 있다.


## Typeof

js는 원래 typeof 연산자를 가지고 있다. ts에서도 똑같은 동작을 한다. basic type에 사용하기에는 유용하지 않을 수 있으나 다음과 같은 패턴으로 사용 가능하다. 

```ts
let s = "hello";
let n: typeof s;

function f() {
  return { x: 10, y: 3 };
}
type P = ReturnType<typeof f>;
```

가독성을 위해 변수명이나 프로퍼티에만 사용하도록 되어있다.



## Conditional Types

`SomeType extends OtherType ? TrueType : FalseType;`와 같이 사용할 수 있다. 

```ts
// 기본적인 사용법
interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
 
type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;


// union type에 대해서도 사용될 수 있다.
type ToArray<Type> = Type extends any ? Type[] : never;
type StrArrOrNumArr = ToArray<string | number>; // string[] | number[]
```

### infer

아직 이해가 안된다.


## Mapped Types

모든 프로퍼티에 대해서 타입을 일일이 선언해 주지 않아도 된다.

```ts
// #1
type OnlyBoolsAndHorses = {
  [key: string]: boolean | Horse;
};
 
const conforms: OnlyBoolsAndHorses = {
  del: true,
  rodney: false,
};

// #2
type OnlyBoolsAndHorses<Type> = {
  [Property in keyof Type]: boolean | Horse;
};
```


## Template Literal Types
