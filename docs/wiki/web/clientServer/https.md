---
sidebar_position: 3
tags: ['Wiki', 'Web', 'Client-Server', 'http', 'https']
last_update:
  date: 1/10/2022
  author: sewonkimm
---

# HTTP와 HTTPS

## HTTP

HTTP의 P는 Protocol로 통신 규약이다. 웹 브라우저가 서버로부터 문서를 전송 받거나, 서버로 폼을 전송할 때, 클라이언트의 요청을 전달할 때 HTTP 규약에 맞게 주고받는다. 

보통 JS의 Window 객체의 location 프로퍼티가 설정되거나 submit() 메서드가 호출 될 때 HTTP 요청이 초기화되며 새 페이지를 불러오는데 Ajax를 사용하면 페이지 전체를 새로 불러오지 않고도 HTTP 요청을 보내 화면의 일부를 업데이트 할 수 있다. Ajax는 HTTP를 조작하는 데 특화된 웹 애플리케이션 설계 방식을 말한다.

:::note HTTP 요청 메서드

[HTTP 요청 메서드](https://developer.mozilla.org/ko/docs/Web/HTTP/Methods)로 자주 쓰이는 것들에는 GET, POST, PUT, DELETE 와 같은 것들이 있다. GET은 가장 일반적인 요청 방식이고, POST는 폼에서 주로 사용된다. 보통은 서버의 api 명세에 맞게 요청하면 된다. CONNECT, TRACE, TRACK 메서드의 경우에는 보안상 위험이 있어 잘 사용되지 않는다.

:::
