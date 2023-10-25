---
sidebar_position: 4
tags: ['Wiki', 'Web', 'CORS']
last_update:
  date: 1/10/2022
  author: sewonkimm
---

# CORS

회사에서 개발중인 프로젝트는 https 통신을 하지 않아서 CORS 에러를 마주칠 일은 많이 없지만 사이드 프로젝트나 클라우드에 배포하는 서비스 같은 경우에는 보안상 https 연결이 필수적이다보니 CORS 에러를 자주 마주하게 된다. 서버도 잘 되어있고, 클라이언트에서도 정확하게 전달했기 때문에 CORS 에러가 뜨면 굉장히 당황스럽다.

## CORS란?

CORS는 웹 브라우저에서 리소스가 자신의 출처와 동일하지 않은 경우(동일출처 정책에 위배되는 경우)에도 리소스를 공유할 수 있도록 해주는 것이다. CORS 에러라는 건 동일 출처 정책에 위배되었음을 알려주는 에러이다. 

만약 동일 출처 정책이 없다면 해커가 심어놓은 스크립트가 실행되는 경우에도 보안상 막을 방법이 없기에 브라우저가 사전에 막아주는 것이 좋다. 브라우저는 프로토콜, 호스트, 포트가 모두 같은 경우에만 동일 출처로 인정한다. 


###  CORS in action

CORS 에러를 눈으로 확인해보자. 

1. Chrome dev tools를 연다.
2. 콘솔에 다음 명령어를 쳐본다. `fetch('https://cors-demo.glitch.me/', {mode:'cors'})`

![CORS](./cors1.png)

CORS 에러를 확인할 수 있다. 


## 해결 방법

해결 방법은 간단하다. 서버에서 CORS를 허용해주면 된다. 서버에서 CORS를 허용하는 방법은 여러가지가 있지만 가장 간단한 방법은 서버 응답 헤더에 `Access-Control-Allow-Origin: *` 를 포함시켜주는 것이다. 다른 모든 도메인에서 접근 가능하도록 허용했기 때문에 CORS 에러가 발생하지 않는다. `*`이 아니라 `http://localhost:3000`처럼 허용하는 출처만 표기해주면 된다.


###  CORS in action

`fetch('https://cors-demo.glitch.me/allow-cors', {mode:'cors'})` 명령어를 쳐보면 CORS 에러가 발생하지 않는다. 




:::note 참고

- [Cross-Origin Resource Sharing (CORS)](https://web.dev/cross-origin-resource-sharing/)

:::
