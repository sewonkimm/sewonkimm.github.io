---
sidebar_position: 2
tags: ['Wiki', 'Web', 'Client-Server']
last_update:
  date: 9/18/2022
  author: sewonkimm
---

# Request

![request](./request.png)

서버에 요청하는 방법을 알아보자!

### 전통적인 방법

초기 웹에서는 HTTP 요청 후, 페이지를 다시 불러와서 페이지를 갱신했다. 처음 웹 개발을 배우기 시작했을 때부터 데이터를 비동기적으로 받아오는 방법으로 해왔기 때문에 오히려 구현하자니 바로 떠오르지 않는다. 예를 들어 버튼을 누르면 DB에 저장된 숫자 데이터에 1을 더하고 그 값을 표시하는 페이지를 구현한다고 하면

1. 버튼을 누른다.
2. 서버에 요청을 보낸다.
3. 서버는 DB값을 업데이트한다. (아직 클라이언트는 변화가 없다)
4. 클라이언트를 새로고침한다. (변경된 DB 값을 표시한다)

이런 경우에 유저의 인터랙션이 있을 때마다 화면이 깜빡거리게 되고 편의성이 떨어진다. Ajax 방식으로 이런 문제가 개선되었다.

### Ajax

Ajax는 서버와 브라우저가 비동기적으로 데이터를 교환할 수 있도록 하는 방식이다. 페이지를 다시 불러오지 않고도 데이터를 교체할 수 있고, Lazy loading을 가능하게 하므로 초기 로딩 시간을 줄일 수 있다. Ajax 전송 기법을 사용할 땐 보통 서버 response를 JSON 형태로 받아서 처리한다.

:::warning

동기 요청 방식은 되도록이면 사용하지 않는 것이 좋다. 클라이언트 측 JS는 싱글 스레드이므로 동기 요청을 보내면 브라우저 UI가 freeze 되기 때문에 서버 응답 속도에 따라서 UX가 크게 저하될 수 있다.

:::
### XMLHttpRequest(XHR)

브라우저에서 HTTP를 조작하기 위해 정의된 API이다. 데이터 전송 할 때 XHR객체를 사용한다.

```js

const request = new XMLHttpRequest(); // XHR 객체 생성

// 요청
request.open('GET', url); // HTTP GET 방식으로 url의 내용을 가져온다.

// 전송
request.send(); // 요청을 보낸다.

```

POST 요청을 보낼 때에는 MIME 타입으로 `Content-Type` 헤더를 지정해줄 필요가 있다. 클라이언트가 서버에게 어떤 유형의 데이터를 전송했는지 알려주는 역할을 한다.

```js
request.setRequestHeader('Content-Type', 'application/json'); // json 형식으로 데이터를 보낸다.
```

완료된 HTTP 응답에는 상태 코드와 응답 헤더, 본문이 있는데 이를 XHR 객체의 프로퍼티와 메서드로 접근해 사용한다. MDN의 [XHR객체 사용 예시](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/send)를 보면 다음과 같다.

```js
const xhr = new XMLHttpRequest();
xhr.open("POST", "/server", true);  // 세번째 인자는 sync 여부이다. true면 비동기, false면 동기.

xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

xhr.onreadystatechange = () => {
  // state 값이 변경 될 때마다 호출된다.
  if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
    callback(); // 응답 처리
  }
};

xhr.send("foo=bar&lorem=ipsum");  // 요청에 데이터를 담아 보낸다.

```

state 프로퍼티는 XHR 객체의 상태를 나타내며, `UNSENT`, `OPENED`, `HEADERS_RECEIVED`, `LOADING`, `DONE` 의 다섯 가지 값이 있다. `DONE`이 상태는 응답이 완료되었다는 뜻이고 이 때 `status` 프로퍼티를 통해 HTTP 응답 상태 코드를 확인할 수 있다. 

:::tip HTTP status 상태 코드

상태 코드는 200~500대 까지 다 의미가 있다. [HTTP Status Code cheatsheet](https://quickref.me/http-status-code) 에서 확인할 수 있다. 

지금까지는 개발하며 200, 400, 401, 404, 500을 자주 봤다.

:::

### Fetch API

XHR과 비슷한 기능을 하지만 Fetch API를 사용하면 더 간결하게 코드를 작성할 수 있다. XHR과 다른 점은 Fetch API는 Promise를 반환한다는 것이다. 

```js
async function foo() {
  const response = await fetch(url);
  const data = await response.json();
}
```

[Response 객체](https://developer.mozilla.org/ko/docs/Web/API/Response)로 응답이 표현되며 XHR과 비교하면 가독성이 뛰어나다. React에서 Fetch API로 Ajax 호출하는 방법은 [공식문서](https://ko.legacy.reactjs.org/docs/faq-ajax.html)에 잘 설명되어 있다.


### Axios

내장 객체를 사용하여 HTTP통신이 가능하지만 써드파티 라이브러리인 [Axios](https://axios-http.com/kr/docs/intro)도 널리 쓰인다(프로젝트 하면서 서버 통신에 Axios를 사용하지 않은 적이 없었다). 공식 문서가 잘 되어있고, 인터셉터를 사용하여 요청과 응답을 가로챌 수 있도록 하는 처리도 가능하다.

