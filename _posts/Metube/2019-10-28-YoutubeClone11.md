---
layout: post
title: YCC📄Function5 - Video view, add comments
date: 2019-10-28 19:31:00
author: "SeWonKim"
categories: [Youtube Clone Coding, Web]
tags: [Nomadcoders]
fullview: false
comments: true
description: Creating video player & comment function
---

# 1. Protecting video routes
내가 upload한 video만 edit할 수 있게 하려면 creator와 cookie의 id와 비교한다.     
/edit url로 바로 접속 했을 때 일치하면, edit 가능, 불일치하면 edit 불가능하다.

edit, delete에 적용

# 2. Creating video player


1. Create video player mixin
2. Play & pause button
3. Voulme button
4. Full screen button
5. Video time

[video tag](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Video)

[javascript MDN](https://developer.mozilla.org/ko/docs/Web/API/HTMLMediaElement) 내용을 기반으로 기능 구현

# 3. Comment function

1. DB에서 comment를 가져와서 화면에 댓글을 추가해준다.
2. 새로운 comment를 submit하면 DB에 새로운 comment를 push하고, 화면에 fake comment를 추가해준다. (AJAX 이용)
3. Delete 기능 추가해보기 (내 comment이면 delete button 표시하고, AJAX로 DB에서 삭제하고, 화면에서 comment 지우기)

### AJAX 
웹사이트에서 동작, 브라우저를 reload하지 않고 서버에 request하는 것. ex) Youtube

### API
API는 server와 통신하기 위한 url     
이 url에는 어떤것도 render 할 수 없다.     
누군가 API url에 접속하면 DB를 변경하는 방식으로 사용한다.

### axios
`npm install axios`

일반적으로 `fetch([url])` 로 데이터를 요청하는데 axios를 사용하면 더 간단하게 HTTP 요청을 할 수 있다. 

```javascript
axios({
  url: `/api/${videoId}/comment`,
  method: 'POST',
  data: {
    comment
  }
});
```
이런 식으로 request를 작성해줄 수 있다.
