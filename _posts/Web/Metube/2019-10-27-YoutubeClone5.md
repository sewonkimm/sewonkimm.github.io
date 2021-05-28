---
layout: post
title: YCC📄Frontend - Pug / scss
date: 2019-10-27 00:50:00
author: "SeWonKim"
categories: [Youtube Clone Coding, Web]
tags: [Nomadcoders, pug, scss, webpack]
comments: true
description: Frontend 작업
---

## Frontend 작업
1. Install pug
2. Create page & connect route
3. scss
4. webpack

### 만들어야 할 페이지들
- Home
- Join
- Login
- Search
- Video detail
- Upload video
- Edit video
- User detail
- Edit profile
- Change password

---

# 1. Pug🐶

[![Pug Docs](https://hackernoon.com/hn-images/1*PmL3-GUNxYP26qTSlVrmzw.png)](https://pugjs.org/api/getting-started.html)

Pug는 Express is view engine

## Pug 사용 이유
1. 코드의 간소화
2. 코드의 재사용

### 코드의 간소화
```html
<p> Hello world </p>
```
html에서 이렇게 써야하는 것을 
```html
p Hello world
```
이렇게 간단하게 작성해 코드를 간소화 할 수 있다.

### 코드의 재사용
html은 프로그래밍 언어가 아니기 때문에 논리적인 작업들을 할 수 없고, copy&paste를 피할 수 없다. pug와 같은 template engine으로 작업을 하면 파일에 필요한 것들을 작성하느라 copy&paste 하는 것을 피할 수 있다.

- layout
- partials : Partials is portion of page that can extract. Partials allow us to re-use blocks of HTML. 
- mixins : 웹사이트에서 계속 반복되는 코드를 copy&paste 하지 않고 재활용하는 방법을 Mixin이라고 한다. 다른 정보를 가지지만 같은 구조를 사용하는 경우에 사용한다.  


## Setting Express view engine
[🔗How to Express View engine setting](https://expressjs.com/ko/api.html#app.set)     

Pug과 Express에는 view 파일들의 위치에 관한 default 설정이 있어서 views 디렉토리에 html 파일을 저장해야한다.    
확장자는 .html 대신 .pug로 쓰고, 파일은 pug 문법에 맞춰서 작성하면 된다.

템플릿을 웹사이트에서 보기 위해서는 controller에서 res.send 대신 res.render를 사용한다.     
render함수 인자로 템플릿 파일의 이름을 입력하면 이 함수가 view폴더에서 파일명.pug 파일을 찾아서 렌더링 할 것이다. 


## Pug tempelate에 variable 전달하기

1. render 할 때 값을 전달한다.     
`res.render("home", { VariableName: "Variable" })`

2. res.locals
To give 'pug' a local variable, I have to Add it to res.locals. [Express Docs about res.locals](https://expressjs.com/ko/api.html#res.locals)

* LocalsMiddleware를 만들고 res.locals를 추가해준다.
* 미들웨어에 `res.locals.siteName = "MeTube"`를 작성한 뒤 템플릿에서 `#{siteName}` 형식으로 간단하게 사용가능하다.

---

# 2. scss
**SEXY CSS💋**

가독성이 높고, 코드의 재사용에 유리한 CSS extension.    
`npm install -g node-sass`     
.sass 파일에 내용 작성

---

# 3. webpack

## What is webpack?

![Webpack](https://poiemaweb.com/img/webpack.png)

Webpack is module bundler  
👉 js, sass 파일들을 webpack에게 주면 그것들을 브라우저와 완전 호환되는 static파일로 변환해준다.    
ex) Sass를 css 파일로 변환, ES6를 nomal javascript로 변환

## install webpack

1. `npm intsall webpack webpack-cli`

- webpack: 파일에서 webpack을 사용하기 위해 설치
- webpack-cli: 터미널에서 webpack을 쓰기 위해 설치

2. 📄webpack.config.js 파일을 생성해줘야한다.  

webpack은 자동적으로 webpack.config.js 파일을 찾아서 실행한다.  
webpack.config.js는 100% client code이고 그말은 즉, babel이 적용되지 않아서 *old javascirpt를 사용해 작성해야한다*는 뜻이다.

## How webpack works ?

webpack이 파일을 처리하는 과정을 이해하는 것이 중요하다.

```javascript
module: {
  rules: [
    {
      test: /\.(scss)$/,
      use: ExtractCSS.extract([
        {
          loader: "css-loader"
        },
        {
          loader: "postcss-loader",
          options: {
            plugin() {
              return [autoprefixer({ browsers: "cover 99.5%" })];
            }
          }
        },
        {
          loader: "sass-loader"
        }
      ])
    }
  ];
}
```

webpack은 config 파일을 아래에서부터 위로 읽는다.  
먼저 scss-loader는 SASS를 CSS로 옮겨주고, postcss-loader는 특정 plugin들을 CSS에 대해 실행시켜주고,
css-loader는 CSS를 가져오고 ExtractCSS로 그 부분만 추출해준다.

이 과정을 거치면 scss파일이 css파일로 변환되는 것!

### Point of webpack

1. Entry
2. Mode = development mode & production mode
3. rules
4. loader
5. output 👉 static 폴더의 main.js파일과 style.css 파일
