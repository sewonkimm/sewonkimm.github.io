---
layout: post
title: 🎭java web - 방명록에 MVC 패턴 적용1
date: 2020-10-06 14:17:00
author: 'SeWonKim'
categories: [Java]
tags: [jekyll, TIL, Java, web, mvc]
fullview: false
comments: true
description: Login, Logout 구현
---

> [JSP 방명록](https://sewonkimm.github.io/java/2020/10/06/guestbookJSP.html)

## 기존 방명록에서 추가 작업

- 로그인, 로그아웃 기능 추가
- DB에 member 테이블을 만들어서 데이터 추가

## 폴더 구조

client > controller > service > dao

- client : 사용자가 보는 view 부분
- controller : client의 request를 전달받아 service 호출
- service : 비즈니스 로직 처리, dao를 호출하여 DB값을 처리
- dao : DB에 액세스해서 CURD 실행
- dto / vo / beens : dao에서 가져온 데이터를 담은 객체

---

# Login

## 첫 화면 분리 - session 활용

### index.jsp

1. session 확인 => memberDto 객체에 정보를 넣어놓는다.
2. memberDto == null 이면 비로그인 상태 => 로그인 화면 보여주기
3. memberDto != null 이면 로그인 상태 => welcome 화면 보여주기

## 아이디 저장 - cookie🍪 활용

### login.jsp

1. cookie 확인
2. cookie != null : 아이디 저장을 체크한 상태
3. id input에 cookie 값 저장해주기 & check box 표시해주기

## 로그인

### login.jsp

1. index.jsp 에서 id, pw 입력
2. submit 버튼을 누르면 Controlloer(Login Servlet)에서 login 실행

### backend(LoginServlet -> LoginService -> LoginDao)

1. Controller에서 login servie 호출
2. login servie -> login dao 호출

```java
@Override
	public MemberDto login(String userid, String userpwd) throws Exception {
		LoginDao loginDao = new LoginDaoImpl();

		if(userid == null || userpwd == null)
			return null;
		return loginDao.login(userid, userpwd);
	}
```

3. login dao에서 DB에 접속해 member정보를 받아 memberDto에 저장

sql문 실행

```java
sql.append("select username, userid, email \n");
sql.append("from ssafy_member \n");
sql.append("where userid = ? and userpwd = ?");
```

4. 다시 controller(login Servlet)으로 돌아와서 `memberDto != null`이라면, 즉 로그인에 성공했을 경우
5. check box가 체크여부에 따라 쿠키🍪 관리

```java
if("saveok".equals(idsave)) {	// 아이디 저장을 체크 했다면.
	Cookie cookie = new Cookie("ssafy_id", userid);
	cookie.setPath(request.getContextPath());
	cookie.setMaxAge(60 * 60 * 24 * 365 * 40);	// 40년간 저장.
	response.addCookie(cookie);
} else {	//아이디 저장을 해제 했다면.
	Cookie cookies[] = request.getCookies();
		if(cookies != null) {
			for(Cookie cookie : cookies) {
				if("ssafy_id".equals(cookie.getName())) {
					cookie.setMaxAge(0);
					response.addCookie(cookie);
					break;
				}
			}
		}
}
```

6. index.jsp로 화면 이동

## + 추가) Ajax 사용해서 비동기로 처리

```javascript
var httpRequest;

function login() {
  if (validate()) {
    // 유효성 체크 통과 했을 때만 로그인
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = loginResult;

    var userid = document.getElementById('userid').value;
    var userpwd = document.getElementById('userpwd').value;

    httpRequest.open('POST', '<%= root %>/login', true);
    httpRequest.setRequestHeader(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    httpRequest.send('userid=' + userid + '&userpwd=' + userpwd);
  }
}

function loginResult() {
  if (httpRequest.readyState === XMLHttpRequest.DONE) {
    if (httpRequest.status === 200) {
      // Before Learn JSON
      // var result = httpRequest.responseText;

      // After Learn JSON
      var data = JSON.parse(httpRequest.responseText);
      if (data.result == 'success') {
        window.location.href = '<%= root %>/index.jsp';
      } else if (data.result == 'fail') {
        alert('아이디 또는 비밀번호가 올바르지 않습니다.');
      }
    } else {
      alert('서버에 문제가 발생했습니다.');
    }
  }
}
```

순수 js를 사용한 ajax 로그인  
로그인에 성공하면 index.jsp 화면으로 이동한다.

Gson.jar를 [WEB-INF] - [lib] 폴더에 그냥 복붙해 넣으면 Gson 사용이 가능한데 그걸 몰라서 살짝 헤맸다.

---

# Logout

## 로그아웃하면서 session 삭제

### LogoutServlet.java

1. 로그아웃 버튼 누르면 controller 실행
2. session 삭제 후 index.jsp 페이지로 이동

```java
protected void logout(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
	// session 삭제
	HttpSession session = request.getSession();
	session.removeAttribute("userinfo");
	session.invalidate();

	// index.jsp 페이지로 이동
	response.sendRedirect(request.getContextPath());
}
```

---

MVC 패턴을 적용하니 2~3번씩 호출해야하고 상당히 헷갈린다 @.@
