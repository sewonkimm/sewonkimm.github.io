---
sidebar_position: 7
---


# Narrowing; 좁히기

if, typeof, instanceof 등을 사용해 타입 에러를 일으키는 요소들을 줄여가는 기법을 narrowing이라고 표현한다. 


## 타입 가드 typeof

`if(typeof value  === 'object') { ... }` 와 같이 typeof 연산자는 변수의 타입을 반환한다. 주의할 점은 null인 상황을 캐치하지는 못한다. `typeof null`의 반환값은 object 이다.


```ts
function printAll(strs: string | string[] | null) {
  if (typeof strs === "object") {
    for (const s of strs) { // strs가 string[]일 수도 있지만 null일 수도 있다.
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } else {
   // ...
  }
}
```
첫번째 if문이 동작할 때, strs가 null인 경우를 걸러내지 못한다. null은 iterable하지 않기 때문에 에러가 발생될 수 있다. 이런 경우는 truthiness narrowing 기법을 적용해 볼 수 있다.


## Truthiness narrowing

&&, ||, if문, ! 등의 연산자를 사용하여 항상 타입을 boolean 형으로 변환하는 방법이 있다. 

- 0
- NaN
- 빈 문자열
- null
- undefined
  
위에서 언급한 것들은 falsy한 값들로 무조건 false형으로 반환되고, 그 외의 것들은 true로 반환된다. 타입가드에서 거르지 못한 null 값을 다음과 같은 형태로 걸러내볼 수 있다.

```ts
function printAll(strs: string | string[] | null) {
  if (strs && typeof strs === "object") {   
    for (const s of strs) { // strs가 null이 될 수 없다
      console.log(s);
    }
  } else if (typeof strs === "string") {
    console.log(strs);
  } 
}
```


## Equality narrowing


switch문, ===, !==, ==, != 연산자 등을 사용해 타입을 좁혀보는 방법도 있다. 

```ts
function printAll(strs: string | string[] | null) {
    if(strs !== null) {
        if (typeof strs === "object") {   
            for (const s of strs) { // strs가 null이 될 수 없다
            console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
```



## in operator narrowing

`"value" in x` 에서 value는 문자열, x는 유니언타입이다. "value" 프로퍼티를 가지고 있는 x변수가 narrowing 된다.

```ts
type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird | Human) {
  if ("swim" in animal) {
    animal;  // animal: Fish | Human
  } else {
    animal; // animal: Bird | Human
  }
}
```

in 연산자는 개발하면서 거의 사용해보지 않은 것 같아서 생소한 개념이었다.

## instanceof narrowing

instanceof 도 일종의 타입가드이다. `x instanceof Foo`는 x의 프로퍼티 체인에 Foo가 존재하는지 검사 한다.

```ts
if (x instanceof Date) {
    console.log(x.toUTCString()); // x: Date
  } else {
    console.log(x.toUpperCase()); // x: string
  }
```

## 엄격한 검사


```ts
type Shape = Square | Rectangle | Circle | Triangle;
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
    }
    // 여기서 오류 발생 - "triangle"의 케이스를 처리하지 않음
}
```

위 코드처럼 Shape의 유니언 타입이 추가될 때, 하나하나 걸러주기가 힘든데 이런 경우에 never를 사용해 검사할 수 있다.


```ts
type Shape = Square | Rectangle | Circle | Triangle;
function area(s: Shape) {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.height * s.width;
        case "circle": return Math.PI * s.radius ** 2;
        default:
              const _exhaustiveCheck: never = shape;
              return _exhaustiveCheck;
    }
}
```

