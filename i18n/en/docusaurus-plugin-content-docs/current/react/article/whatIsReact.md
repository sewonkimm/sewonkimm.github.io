---
sidebar_position: 3
tags: ['react', '번역']
last_update:
  date: 7/11/2024
  author: sewonkimm
---


# React란 무엇인가?

:::info

Kent C. Dodds의 아티클 [What is React?](https://www.epicreact.dev/what-is-react?ck_subscriber_id=1994202936)을 번역한 글 입니다.

:::


React는 UI를 만들고 사용자 상호작용을 관리하기 위한 자바스크립트 라이브러리입니다. React는 주로 브라우저에서 웹 애플리케이션을 구축하는 데 사용됩니다. 하지만 강력한 컴포넌트 모델로 네이티브 모바일 및 데스크톱 애플리케이션, 이미지, PDF, 터미널 애플리케이션 등을 만드는 데도 사용할 수 있습니다.

컴포넌트 기반 인터페이스 구성 모델에 대한 React의 성공으로 인해 다른 많은 UI 라이브러리와 프레임워크들도 이 접근 방식을 채택했는데요. 그러나 React는 수년 동안 UI를 구축하는 데 있어 압도적으로 지배적인 방식이었으며, 여러분이나 제가 웹에서 소프트웨어를 계속 개발하는 한 이 방식은 계속 유지될 것입니다.

조금 더 깊이 들어가서 React를 구성하는 요소들을 살펴봅시다.

## React의 핵심 빌딩 블록

React로 구축된 UI의 기본 구성 요소는 Element입니다:

```javascript
import { createElement } from 'react'

const element = createElement('button', { onClick: () => console.log('clicked!') }, 'Click me!')
```

React가 생성한 요소를 검사하면 다음과 같이 보입니다:
```javascript
{
  "$$typeof": Symbol(react.element),
  "type": "button",
  "key": null,
  "ref": null,
  "props": {
    "onClick": () => console.log('clicked!'),
    "children": "Click me!"
  },
  "_owner": null,
  "_store": {}
}
```

저는 "UI 설명자"라고 부르는 이 객체는 렌더링되는 환경에 고유한 UI를 생성하는 데 사용됩니다. 우리의 경우, 브라우저용 UI를 생성하고 싶기 때문에 이 UI를 브라우저가 이해할 수 있는 DOM 노드로 변환하기 위해 React DOM 패키지를 사용합니다.

이렇게 React 엘리먼트와 DOM 엘리먼트를 분리하는 것은 브라우저 이외의 환경에서도 React 지식(혹은 코드)을 이식할 수 있게 해주는 요소 중 하나입니다.

## JSX

createElement API를 직접 사용하는 것은 인체공학적이지 않기 때문에 React가 처음 발표되었을 때 자바스크립트에 특별한 경량 구문을 추가하여 element를 더 쉽게 만들 수 있도록 했습니다. 이 구문을 사용하면 동일한 버튼을 만들 수 있습니다.


```jsx
const element = <button onClick={() => console.log('clicked!')}>Click me!</button>
```

이 문법은 브라우저가 기본적으로 실행하지 않는 추가 문법이므로 브라우저가 해석할 수 읽기(interpret) 전에 코드를 컴파일해야 합니다. 기술적으로는 브라우저에서 바로 이 작업을 수행할 수 있지만, 최적의 방법은 아닙니다.

어쨌든 대부분의 앱에서는 자바스크립트를 변환하는 도구를 사용하게 됩니다. 최소한 네트워크를 통해 전송하는 텍스트의 양을 줄이기 위한 축소기(minifier)나 브라우저에서 로드해야 하는 파일 수를 줄이기 위한 번들러가 필요할 것입니다. 또한, 특히 중요한 작업에서는 JSX를 기본적으로 지원하는 타입스크립트를 사용하고 싶을 것입니다. 

이런 방식으로 UI를 작성하는 것은 즐거운 일입니다. 대부분의 개발자는 몇 시간만 공부하고 연습하면 JSX가 일반 자바스크립트로 변환되는 방식을 이해할 수 있으며, 기본적으로 자바스크립트이기 때문에 매우 효과적으로 작업할 수 있습니다.

## 재사용 가능한 요소: 컴포넌트

React는 자바스크립트로 작성되었습니다. 그러므로 React Element를 반환하는 매개변수화된 함수를 만들 수 있습니다. React는 이를 컴포넌트라는 이름으로 공식화했으며, 이를 통해 사용자 정의 React Element를 만들 수 있습니다. 또한 컴포넌트가 "props"라는 객체를 수신하여 이러한 컴포넌트를 매개변수화할 수 있습니다:

```jsx
function ClickMeButton(props) {
  return <button onClick={props.onClick}>Click me!</button>
}
```

그런 다음 다른 element와 마찬가지로 아래 element를 만들 수 있습니다:

```jsx
const element = <ClickMeButton onClick={() => console.log('clicked!')} />
```

이 element 객체의 모습은 다음과 같습니다:

```javascript
{
  "$$typeof": Symbol(react.element),
  "type": ClickMeButton,
  "key": null,
  "ref": null,
  "props": {
    "onClick": () => console.log('clicked!')
  },
  "_owner": null,
  "_store": {}
}
```

React가 이 UI를 렌더링할 준비가 되면 프로퍼티와 함께 함수를 호출하여 렌더링에 필요한 다른 요소를 검색합니다.

이 API는 React 컴포넌트를 아름답고 강력한 방식으로 함께 구성할 수 있게하고, 10년이 지난 지금도 우리는 그 혜택을 누리고 있습니다. 이를 통해 재사용 가능한 추상화를 구축할 수 있습니다. 예를 들어, 탭 UI에 대한 모든 접근성 요구 사항을 함께 작동하는 몇 가지 컴포넌트로 패키징하여 다음과 같은 것을 제공할 수 있습니다:

```jsx
<Tabs defaultValue="account">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Make changes to your account here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>
```
UI를 생성하는 서버 전용 코드와 UI를 인터랙티브하게 만드는 클라이언트 측 코드 사이에서도 컴포지션은 React의 이름입니다. UI를 인터랙티브하게 만드는 것에 대해 말하자면...

## React로 UI 업데이트하기

React는 초기 UI를 생성하는 데 도움이 될 뿐만 아니라 시간이 지남에 따라 해당 UI의 변경 사항을 관리하는 데도 도움이 됩니다. 사용자를 위한 대화형 경험을 구축하든, 백그라운드에서 업데이트되는 대시보드를 구축하든, React는 UI를 최신 상태로 유지하도록 도와줍니다.

데이터는 UI를 생성하는 데 사용됩니다. 시간이 지남에 따라 변경될 수 있는 데이터는 상태(state)라고 합니다. React에서는 다양한 방법으로 이 상태를 관리할 수 있지만, 주요 메커니즘은 useState 라는 함수를 통해 이루어집니다. 이 함수는 커스텀 컴포넌트 내에서만 사용할 수 있으므로 React는 상태가 변경될 때 어떤 UI를 업데이트할지 알 수 있습니다:

```jsx
function Counter() {
  const [count, setCount] = useState(0)
  const increment = () => setCount((c) => c + 1)
  return <button onClick={increment}>Current Count: {count}</button>
}
```
사용자가 버튼을 클릭할 때마다 state 값이 변경되어야 함을 React에 알리고 React는 새로운 값을 기반으로 새 element를 검색해야 한다는 것을 알리는 setCount가 호출됩니다.

앞서 언급했듯이 React에 내장된 상태를 관리하는 방법에는 여러 가지가 있지만 기본적인 아이디어는 항상 동일합니다. 업데이트가 발생하고, React는 업데이트된 값으로 컴포넌트를 다시 호출하고, React는 이번에 반환한 값과 지난번에 반환한 값을 비교하고 그에 따라 DOM을 업데이트합니다. 위 코드에서는 버튼을 클릭할 때마다 버튼의 textContent가 업데이트됩니다.

## 그래서 React란 무엇일까요?

글의 서두에 말한 것 처럼 React는 사용자 인터페이스를 생성하고 사용자 상호작용을 관리하기 위한 자바스크립트 라이브러리입니다. 물론 가장 큰 생태계와 함께 비즈니스에서 가장 널리 사용되는 도구로 웹 애플리케이션을 구축하는 데 관해서는 더 많은 이야기를 할 수 있지만 오늘은 여기까지만 설명하겠습니다.

앞으로 이러한 측면과 다른 측면에 대해 더 깊이 파고드는 많은 글을 게시할 예정이니 구독을 신청하여 알림을 받아보세요!

React는 처음 출시된 이후 지난 10년 이상 발전해 왔지만, 컴포저빌리티라는 핵심 개념은 그대로 유지되고 있으며 수년에 걸쳐 더욱 발전해 왔습니다. 저는 React로 애플리케이션을 구축하는 것이 그 어느 때보다 신나고, 더 좋아지고 있습니다. 이 여정에 함께 해주셔서 감사합니다!
