---
layout: post
title: java web - Servlet 방명록
date: 2020-10-06 02:00:00
author: 'SeWonKim'
categories: [WEB, Java]
tags: [Java, web, servlet]
comments: true
---

## 구현 화면

### 1. index.html

![index](https://user-images.githubusercontent.com/30452963/95109563-b7bc3680-0777-11eb-913c-1c44f728057f.png)

### 2. 글쓰기 화면 - write.html

![image](https://user-images.githubusercontent.com/30452963/95109665-dfab9a00-0777-11eb-9011-c64427bf5aa1.png)

- 이름, 제목, 내용이 비어있으면 alert으로 알림
- 글작성 버튼을 누르면 DB에 정보 등록

![image](https://user-images.githubusercontent.com/30452963/95109913-3618d880-0778-11eb-81ed-c49904b47c30.png)

DB에 성공적으로 등록한 화면

### 3. 글목록 화면 - list.html

![image](https://user-images.githubusercontent.com/30452963/95110001-56489780-0778-11eb-844a-8f53817ed3d3.png)

DB에서 데이터를 가져와 뿌려주기

---

## 폴더 구조

```markdown
.
├── src (servlet: DB와 연결되어 로직을 처리하는 부분)
│   ├── GuestBookWrite.java
│   └── GuestBookList.java
└── WebContent
    ├── guestbook
    │   ├── write.html
    │   └── list.html
    └── index.html
```

---

## DB에 정보 넣기

### 1. request.getParameter
```java
request.setCharacterEncoding("utf-8");
String name = request.getParameter("name");
String subject = request.getParameter("title");
String content = request.getParameter("content");
```

### 2. DB와 연결 
Connection 생성 및 연결
```java

Connection conn = null;

try {
	conn = DriverManager.getConnection("jdbc:mysql://127.0.0.1:3306/ssafyweb?serverTimezone=UTC&useUniCode=yes&characterEncoding=UTF-8", "ssafy", "ssafy");

...
```

### 3. PreparedStatement으로 SQL 작성 및 실행

- StringBuilder에 SQL문 작성
- `pstmt = conn.prepareStatement(insertMember.toString());`으로 연결
- `pstmt.setString()`으로 데이터 집어넣기
- `pstmt.executeUpdate();`로 SQL문 실행

### 4. response

글 작성 성공 html 띄우기
