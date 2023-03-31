---
title: 작은 것 챙기기 - 상수화
date:  2023-02-20T23:05
slug: /dev/refactoring
authors: [sewonkimm]
tags: [개발일지]
comments: true
---

# 매직 넘버와 매직 리터럴을 아시나요?

- 상수로 선언하지 않은
- 소스코드에 여러 번 등장하는
- 숫자, 문자열 자체로는 의미를 이해하기 어려운

숫자를 매직 넘버, 문자열을 매직 리터럴이라고 합니다.


요즘 <리팩터링>(마틴 파울러 저)이라는 책을 읽고 있는데 저자가 성능보다 더 강조하는 것은 바로 코드의 가독성이었습니다. 어떤 코드를 보고 책을 읽듯이 술술 읽힌다면 좋은 코드라는 것인데 그런 관점에서 보면 매직 넘버와 매직 리터럴은 코드의 가독성을 저해합니다.


## 예를 들어

```javascript

function foo(mode) {   
    if(mode === 0) return '안녕하세요';
    else if(mode === 1) return '안녕';
}

```
이 때, 위의 코드에서 0과 1이 무엇을 의미하는지 코드만 보고는 알 수가 없고, 이로인해 추후 유지보수가 어려워질 수 있습니다.

```javascript

const FORMAL = 0;
const INFORMAL = 1;

function foo(mode) {   
    if(mode === FORMAL) return '안녕하세요';
    else if(mode === INFORMAL) return '안녕';
}

```
이런 식으로 매직넘버를 상수화하면 훨씬 보기 좋은 코드가 됩니다.

회사에서 코드를 작성할 때에는 아래 코드와 같이 typescript의 enum을 주로 사용하곤하는데 상수를 카테고리화 하기에 좋습니다.

```typescript

enum SpeakMode {
    FORMAL,
    INFORMAL,
}
// 자동으로 0과 1이 할당된다.

function foo(mode) {   
    if(mode === SpeakMode.FORMAL) return '안녕하세요';
    else if(mode === SpeakMode.INFORMAL) return '안녕';
}

````

상수는 보통 모두 대문자로 표시하여 한 눈에 파악하기 쉽게 만들고, 불분명한 숫자나 문자열에 이름을 붙여줌으로써 어떤 역할을 하는 값인지 파악하기 쉬워져 코드 퀄리티가 올라갑니다. 그리고 값을 변경할 때에는 상수 값만 치환해주면 되어 관리도 편하고요. 작은 부분이지만 작은 디테일을 챙기면 더 좋은 코드를 만들 수 있어요!
