---
sidebar_position: 9
---

# Objects

객체는 JS에서 데이터를 그룹핑하고, 전달하는 가장 기본적인 방법이다.

## TS로 객체를 표현하는 방법 3가지

### 1. Anonymous

```ts
function foo(person: { name: string; age: number }) {
    ...
}
```

### 2. Interface


```ts
interface Person {
    name: string;
    age: number;
}

function foo(person: Person) {
    ...
}
```

### 3. Type alias


```ts
type Person = {
    name: string;
    age: number;
}

function foo(person: Person) {
    ...
}
```

### 두 객체 타입을 Combine하기

`extends` 키워드(extending)와 `&` 연산자(intersection)를 사용해 객체 타입을 상속하기도, 여러개의 객체 타입을 합칠 수도 있다. 




## Property 

객체의 프로퍼티에는 ts의 각 타입이 들어올 수 있고, 또 다른 객체형태가 들어오는 것도 가능하다.

### 2가지 modifier

- `?` optional modifier
- `readonly` modifier

optional modifier는 값이 들어오지 않았을 때, undefined가 할당되며 이 것을 처리하는 과정이 중요하다. optional한 프로퍼티에 default 값을 할당하여 undefined가 설정되지 않도록 할 수 있다.

readonly modifier는 개발자가 의도적으로 변수를 immutable하다고 암시하는 장치이다. 한번도 안써봤던 modifier인데 꼭 필요한 곳에 유용하게 사용할 수 있을 것 같다.

이 modifier들은 `-` prefix를 사용해서 제거하는 것도 가능하다.

```ts
// - prefix로 readonly를 제거
type CreateMutable<Type> = {
    -readonly [Property in keyof Type]: Type[Property];
}

type FooType = {
    readonly id: string;
    readonly name: string;
}

type NewFooType = CreateMutable<FooType>;
// {
//     id: string;
//     name: string;
// }
```

## Index signatures

:::note 

Index signatures를 더 이해하기 쉽게 설명한 [포스팅](https://soopdop.github.io/2020/12/01/index-signatures-in-typescript/)

### TLDR;

- TS에서는 string type의 index 접근을 허용하지 않는다.
- 객체를 배열처럼 접근할 때, index signature를 사용해 string으로 접근 할 수 있도록 해줄 수 있다.

:::



