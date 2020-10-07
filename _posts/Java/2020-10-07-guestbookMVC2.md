---
layout: post
title: 🎭java web - 방명록 기능 구현
date: 2020-10-07 23:32:00
author: 'SeWonKim'
categories: [Java]
tags: [jekyll, TIL, Java, web, mvc]
fullview: false
comments: true
description: 글쓰기, 삭제, 게시글 목록 보기, 특정 게시글 보기, 검색 구현
---

> [前 시리즈 : 로그인, 로그아웃, 회원가입 기능 구현](https://sewonkimm.github.io/java/2020/10/06/guestbookMVC1.html)

## 게시판 관련 기능 구현

- 글쓰기 insert
- 삭제 delete
- 목록 보기 list
- 특정 게시글 보기 detail
- 검색 search

## 추가 구현해야 할 것

- 수정 update
- 조회수

---


## 🎇MVC pattern🎇

`client > controller > service > dao`     
받고 `비동기 처리`도 !


## 폴더구조 (게시글 관련만)
      
```markdown
.
├── src (server)
│   ├── dto
│   │   ├── GuestBookDto.java
│   │   └── MemberDto.java
│   ├── dao
│   │   └── GuestBookDao.java  (interface와 class)
│   ├── service
│   │   └── GuestBookService.java  (interface와 class)
│   └── controller (servelt)
│       └── GuestBookController.java 
└── WebContent   
    ├── book
    │   ├── list.jsp
    │   └── write.jsp
    └── index.jsp
```         
   
      

---
   
      
       
## write.jsp 

1. UI 구현
2. 글쓰기 버튼 누르면 ajax 통신으로 글쓰기 요청

```javascript
function writeGuestBook() {
		if(validate()){
			$.ajax({
				type: 'post',
				url: '/guestbook/write',
				dataType: 'json',
				data: {
					userId: "<%= userId %>",
					subject: $("#subject").val(),
					content: $("#content").val(),
				},
				success: function(data, status, xhr) {
					console.log(data.result);
					if(data.result == "success") {
						alertify.alert('welcome!', '글쓰기 성공!', function(){
							window.location.href = "<%= root %>/book/list.jsp";
						});
					}
					else {
						alertify.notify('글쓰기에 실패했습니다.', 'error', 3, function(){
							console.log(xhr.responseText);
						});
					}
				},
				error: function(jqXHR, textStatus, errorThrown) {
					alertify.notify('글쓰기에 실패했습니다.', 'error', 3, function(){
						console.log(jqXHR.responseText);
					});
				}
			});
		}
	}
```
ID와 제목, 내용을 Controller에 POST로 넘겨준다.
    
     
      
       
         
          
## 🎆GuestBookController.java🎆 - 중요

`@WebServlet("/guestbook/*")` 과 swith-case 문으로 로직을 분리해서 처리할 수 있도록 한다.

```java
protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/html; charset=utf-8");
		
		String contextPath =  request.getContextPath();
		String path = request.getRequestURI().substring(contextPath.length());
		
		switch(path){
			case "/guestbook/guestbookMain": guestbookMain(request, response); break;
			case "/guestbook/list": list(request, response); break;
			case "/guestbook/write": write(request, response); break;
			case "/guestbook/update": update(request, response); break;
			case "/guestbook/deleteArticle": deleteArticle(request, response); break;
			case "/guestbook/detail" : detail(request, response); break;
			default : notVaildUrl();
		}
	}
```
기존 예제에서 url parameter 값으로 받아서 if-else로 처리했는데 그것보다 더 나은 방법인 것 같다.


list 는 목록 불러오기       
write 는 삽입    
update 는 수정    
deleteArticle 은 삭제    
detail 은 특정 게시글 보기   
notVaildUrl 은 404 페이지 띄우기    

`String path = request.getRequestURI().substring(contextPath.length());` 이 부분에 getRequestUR*L*이 아니라 getRequestUR*I*임에 주의한다

   
      
         
          
## login 구현

로직 구현은 다      
`controller에서 service 호출` - `service에서 dao 호출` - `DB접근해서 로직 처리`    
이런 식으로 진행된다.

그래서 중요한 부분은     
*Dao의 SQL 문을 잘 작성하는 것*     
그리고 jsp파일에서의 *ajax 통신*


### 글 삽입 SQL

``` java
String sql = "INSERT INTO guestbook "+
			"(userseq, subject, content, regtime) "+
			"VALUES (?, ?, ?, now())";

pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, guestBookDto.getUserseq());
pstmt.setString(2, guestBookDto.getSubject());
pstmt.setString(3, guestBookDto.getContent());
```

            
### 글 삭제 SQL

``` java
String sql = "DELETE FROM guestbook "+
			"WHERE guestbook.articleno = ? ";

pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, articleno);
```


### 글 목록보기 SQL

``` java
String sql = "SELECT g.articleno, g.subject, g.content, g.regtime, m.username "+
			"FROM guestbook g, ssafy_member m "+
			"WHERE g.userseq = m.userseq " +
			"ORDER BY articleno DESC "+
			"LIMIT ? OFFSET ? ";
			
pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, limit);
pstmt.setInt(2, offset);
```

### 특정 글 보기 SQL

``` java
String sql = "SELECT g.articleno, g.userseq, m.username, g.subject, g.content, g.regtime "+
			"FROM guestbook g, ssafy_member m " +
			"WHERE g.articleno = ? " + 
			"AND g.userseq = m.userseq "+
			"ORDER BY g.articleno DESC ";
        
pstmt = conn.prepareStatement(sql);
pstmt.setInt(1, articleno);
```


### 검색 SQL

아이디로 검색, 글 번호로 검색, 제목으로 검색 종류별로 SQL문을 다르게 작성해야 해서 StringBuilder를 사용했다.

``` java
StringBuilder sql = new StringBuilder();
sql.append("SELECT g.articleno, g.subject, g.content, g.regtime, m.username \n");
sql.append("FROM guestbook g, ssafy_member m \n");
sql.append("WHERE g.userseq = m.userseq \n");
			
if("userid".equals(type)) {
	sql.append("AND m.userid LIKE ? \n");
}
else if("articleno".equals(type)) {
	sql.append("AND g.articleno LIKE ? \n");
}
else if("subject".equals(type)) {
	sql.append("AND g.subject LIKE ? \n");
}

sql.append("ORDER BY articleno DESC \n");
sql.append("LIMIT ? OFFSET ?");

pstmt = conn.prepareStatement(sql.toString());
pstmt.setString(1, "%"+ searchWord +"%");
pstmt.setInt(2, limit);
pstmt.setInt(3, offset);
```
