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
이렇게 간단하게 작성하면 자동으로 html형식으로 바꿔준다.     
Pug를 사용하면 코드를 간소화 할 수 있다. 대신 문법을 익혀야 한다.



## How to use Pug?
[🔗How to Express View engine setting](https://expressjs.com/ko/api.html#app.set)     

Pug과 Express에는 view 파일들의 위치에 관한 default 설정이 있어서 views 디렉토리에 html 파일을 저장해야한다.    
확장자는 .html 대신 .pug로 쓰고, 파일은 pug 문법에 맞춰서 작성하면 된다.

템플릿을 웹사이트에서 보기 위해서는 controller에서 res.send 대신 res.render를 사용한다.     
render함수 인자로 템플릿 파일의 이름을 입력하면 이 함수가 view폴더에서 파일명.pug 파일을 찾아서 렌더링 할 것이다. 


## Layouts with Pug
Extending a layout allows us to re use the same structure multiple times.

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



## Partials with Pug
Partials is portion of page that can extract. 
Partials allow us to re-use blocks of HTML.

pug 문서를 작성하고 layout에 include 해주면된다.

✨**Divide and Conqure**✨    
웹사이트의 분리하고 싶은 부분을 분리해 줄 수 있다.



## Local Variables in Pug
To give 'pug' a local variable, I have to Add it to res.locals.   
[Express Docs about res.locals](https://expressjs.com/ko/api.html#res.locals)


**res.locals**
```
An object that contains response local variables scoped to the request, and therefore available only to the view(s) rendered during that request / response cycle (if any). Otherwise, this property is identical to app.locals.

This property is useful for exposing request-level information such as the request path name, authenticated user, user settings, and so on.

local 변수는 request를 포함하는 객체이다. ~~~
이 property는 request path name, authenticated user, user settings같은 정보를 exposing 하는데 유용하다. 
```

This property is useful for exposing request-level information such as the request path name, authenticated user, user settings, and so on.


모든 파일에서 📄 routes.js에 접근하기 위해서 LocalsMiddleware를 만들었다. (LocalsMiddleware는 📄middlewares.js에 정의했다.)    
이 미들웨어는 local변수를 global변수처럼 활용할 수 있게 해준다고 볼 수 있다. res.locals가 추가되면 이것을 어디서든 쓸 수 있다.    
미들웨어에 `res.locals.siteName = "MeTube"`를 작성한 뒤 템플릿에서 `#{siteName}` 형식으로 간단하게 사용가능하다.     


## Template Variables in Pug
템플릿에만 변수를 추가하려면 `res.render("home", { VariableName: "Variable" })` 이렇게 render할 때 값을 전달해 주면 된다.
