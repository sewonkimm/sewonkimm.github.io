---
layout: post
title: Pug
date: 2019-08-01 22:56:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags: [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders, Express, Pug]
fullview: false
comments: true
description: What is Pug(Jade)?
---

[![Pug Docs](https://hackernoon.com/hn-images/1*PmL3-GUNxYP26qTSlVrmzw.png)](https://pugjs.org/api/getting-started.html)


## Tempelate engine, View engine
Pug는 Express의 View engine이다.     
html 파일들을 간편하게 사용할 수 있다.

예를들어
```html
<p> Hello world </p>
```
html에서 이렇게 써야하는 것을 
```html
p Hello world
```
이렇게 간단하게 작성하면 자동으로 형식을 바꿔준다.     
Pug를 사용하면 코드를 간소화 할 수 있다. 대신 문법을 익혀야 한다.



## How to use Pug?
[🔗How to Express View engine setting](https://expressjs.com/ko/api.html#app.set)     

Pug과 Express에는 view 파일들의 위치에 관한 default 설정이 있어서 views 디렉토리에 html 파일을 저장해야한다.    
확장자는 .html 대신 .pug로 쓰고, 파일은 pug 문법에 맞춰서 작성하면 된다.

템플릿을 웹사이트에서 보기 위해서는 controller에서 res.send 대신 res.render를 사용한다.     
render함수 인자로 템플릿 파일의 이름을 입력하면 이 함수가 view폴더에서 파일명.pug 파일을 찾아서 렌더링 할 것이다. 


## Layouts with Pug
html은 프로그래밍 언어가 아니기 때문에 논리적인 작업들을 할 수 없고, copy&paste를 피할 수 없다.      
pug와 같은 template engine으로 작업을 하면 파일에 필요한 것들을 작성하느라 copy&paste 하는 것을 피할 수 있다.

```
doctype html
html
    head
        title Metube
    body
        main
            block content
        footer
            span &copy; Metube
```
위 코드는 태그들을 매번 복사 붙여넣기 하지 않기 위해서 만든 레이아웃이다.     
이 템플릿을 extends 하면 main 내부의 ```block content``` 안에 원하는 내용을 채울 수 있다.
