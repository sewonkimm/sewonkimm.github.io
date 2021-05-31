---
layout: post
title: Cookie와 Session
date: 2020-10-25 20:36:00
author: 'SeWonKim'
categories: [WEB, Java]
tags: [Java, web, cookie, session]
comments: true
---

&nbsp;

> coockie는 client, session은 server

&nbsp;

### http protocol은 stateless 하다!

즉,  요청에 대한 처리를 한 후, 연결을 끊어버린다.

👉 client와 sever가 연결상태를 유지해야하는 경우 👉 cookie 혹은 session을 사용

## Cookie 

  - 서버에서 **사용자 컴퓨터에** 저장하는 정보파일 `C-C: Cookie는 Client에 저장` 
  - 브라우저가 다르면 다른 사용자로 인식한다.
  - ID 저장, 다시보지 않기, 최근 검색한 상품을 광고에 추천... 에 사용
  - 클라이언트에 300개까지 저장 가능, 도메인 당 20개 저장 가능


### Create Cookie
```java
Cookie cookie = new Cookie("이름", "내용");     // 쿠키 객체 생성
cookie.setMaxAge(3600);                         //쿠키 유효 시간 (초 단위)
response.addCookie(cookie);                     // response 객체에 전달
```

### Read Cookie

cookie의 배열로 얻어온다.

```java
Cookie[] cookies = reqeust.getCookies();    // 쿠키 꺼내기

if(cookies != null){
    for(Cookie cookie : cookies){
        if(cookie.getName().equals("이름")){
            // 쿠키 값을 읽어서 로직 처리
        }
    }
}
```

### Modify Cookie

- 쿠키 값을 수정하려면 같은 이름으로 쿠키 객체를 새로 생성해서 덮어씌운다.
- 쿠키는 클라이언트에 저장되어 있기 때문에 삭제는 클라이언트에서...!
- but, setMaxAge를 0으로 설정하고 덮어씌우면 쿠키값을 무효화 할 수 있다.

---

## Session

  - WAS의 메모리에 Object형태로 저장 `S-S: Session은 Server에 저장`
  - 브라우저를 닫거나, 서버에서 세션을 삭제 했을 때 삭제된다.
  - 클라이언트가 요청을 보낼 때 구분할 수 있도록 sessionID를 받는다. sessionID는 쿠키에 저장되어있고, 클라이언트가 재접속 할 때 해당 쿠키를 이용해 sessionID 값을 서버에 전달한다. **브라우저 구분 가능!**
 
### Create Session

현재 생성 된 세션 정보는 request 객체에서 꺼내서 사용할 수 있다.
```java
HttpSession session = request.getSession();
out.println("sessionID : " + session.getId());
```

### Session에 값 저장, 삭제

```java
// 내용 저장 : 객체도 저장 가능하다
HttpSession session = request.getSession();
session.setAttribute("이름", "내용");

// 내용 읽어오기
String sessionValue = (String) session.getAttribute("이름");

// 특정 이름의 속성 제거
session.removeAttribute("이름");
```

- getCreationTime(), getLastAccessedTime() 을 활용해 접속시간을 계산할 수 있다.
- 세션 만료시간은 web.xml에서 설정


