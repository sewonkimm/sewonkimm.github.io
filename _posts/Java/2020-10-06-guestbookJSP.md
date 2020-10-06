---
layout: post
title: 🎭java web - JSP 방명록
date: 2020-10-06 10:57:00
author: 'SeWonKim'
categories: [Java]
tags: [jekyll, TIL, Java, web, jsp]
fullview: false
comments: true
description: JSP를 사용한 방명록 만들기
---

## 구현 화면

[servlet 방명록](https://sewonkimm.github.io/java/2020/10/06/guestbookServlet.html)과 동일

---

## 폴더 구조

```markdown
.
└── WebContent   
    ├── guestbook
    │   ├── write.html
    │   ├── write.jsp (DB에 데이터 삽입)
    │   ├── writeSuccess.html
    │   ├── writeFail.html       
    │   └── list.jsp (DB에서 데이터 불러와서 뿌려주기)
    └── index.html
```



DB연동 코드가 있는 Servlet 파일들을 jsp파일로 변경했다.      
java 코드를 사용하지 않는 파일은 굳이 jsp로 작성하지 않았다.

---

## Servlet과 다른 점

### out.println()을 사용하지 않는다.

html 안에 java 코드를 작성하기 때문에 response 페이지를 그려줄 때 훨씬 편하다.

### 목록을 뿌려주는 While문 

```xml
<table class="table table-active">
	<tbody>
<%
while(rs.next()) {
%>
			<tr class="table-info">
				<td>작성자 : <%= rs.getString("username")%></td>
				<td>작성일 : <%= rs.getString("regtime")%></td>
			</tr>
			<tr>
				<td colspan="2" class="table-danger"><strong><%= rs.getInt("articleno")%>.<%= rs.getString("subject")%></strong></td>
			</tr>
			<tr>
				<td colspan="2"><%= rs.getString("content")%></td>
			</tr>
<%
	}	// end while
%>
<%
	} catch (SQLException e) {
		e.printStackTrace();
	} finally {
		try {
			if(rs != null)
				rs.close();
			if(pstmt != null)
				pstmt.close();
			if(conn != null)
				conn.close();
		} catch (SQLException e) {
			e.printStackTrace();
		}
	}
%>
	</tbody>
</table>
```
코드 중간에 while문을 작성한다.

java코드와 html 코드가 섞여서 헷갈린다🤢


---


## JSP 기본 문법

### jsp 파일 상단부

```xml
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" import="java.sql.*"%>
```

### <%! ... %>

전역변수, 함수를 선언하는 선언부

```xml
<%!
public void init() {
	try {
		Class.forName("com.mysql.cj.jdbc.Driver");
	} catch(ClassNotFoundException e) {
		e.printStackTrace();
	}
}
%>
```

### <% ... %>

java 코드 작성

### <%= ... %>

변수, 문자열, 함수 return 값 출력

### <%-- ... --%>

주석