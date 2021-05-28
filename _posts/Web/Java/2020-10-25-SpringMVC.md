---
layout: post
title: 🔮Spring MVC
date: 2020-10-25 23:40:00
author: 'SeWonKim'
categories: [Web, Java]
tags: [TIL, Java, web, spring, mvc]
comments: true
description: Spring web MVC
---

# 목차

- Spring Web Application 실행순서
- Spring MVC 구조
- 실습

&nbsp;  
&nbsp;  
&nbsp;

---

Front Controller 패턴에 DI를 이용해서 관리

## Spring Web Application 실행순서

application 실행 👉 Tomcat(WAS)에 의해 **web.xml** 로딩 👉 web.xml에 등록되어있는 ContextLoaderListner 생성 👉 ContextLoaderListner가 **root-context.xml** 로딩 👉 root-context.xml에 등록된 Spring Container가 구동 👉 객체들이 생성된다. 👉 ... 👉 Client Request 👉 **DispatcherServlet** 생성 & **servlet-context.xml** 로딩 👉 controller 작업 👉 ...

&nbsp;  
&nbsp;  
&nbsp;

## Spring MVC 구조

1. Dispatcher Servlet : Handler Mapping에게 뭐해야하냐고 물어본다.
2. Handler Mapping : 어떤 Controller로 가라고 알려준다.
3. View Resolver : Controller 실행 결과 model, view를 바탕으로 어떤 파일을 응답해야할지 알려준다.

이 일련의 과정들이 잘 실행되도록 하기 위해서 xml 설정을 열심히 해야하는 것...!  
설정이 너무 많아 헷갈린다 @,@

&nbsp;  
&nbsp;  
&nbsp;

## SpringMVC 프로젝트 생성

### 👕spring legacy project - spring mvc project 생성

- pakage명 com.mycom.myapp에서 myapp이 context root가 된다.
- src/main/java에는 java파일
- src/main/resources에는 context.xml 같은 설정파일
- src/main/webapp/WEB-INF/views에는 html, jsp 파일 (기존의 webContent 폴더 = webapp 폴더)
- views 폴더의 파일은 직접 접근할 수 없다. 항상 controller를 거쳐 링크를 거쳐서 접근!

&nbsp;  
&nbsp;  
&nbsp;

### 🩳web.xml

- DispatcherServlet 설정

```xml
<servlet>
	<servlet-name>appServlet</servlet-name>
	<servlet-class>org.springframework.web.servlet.DispatcherServlet</servlet-class>    // DispatcherServlet 깡통에
	<init-param>
		<param-name>contextConfigLocation</param-name>
		<param-value>/WEB-INF/spring/appServlet/servlet-context.xml</param-value>       // servlet-context.xml 정보 담기
	</init-param>
	<load-on-startup>1</load-on-startup>
</servlet>

<servlet-mapping>
	<servlet-name>appServlet</servlet-name>
	<url-pattern>/</url-pattern>
</servlet-mapping>
```

&nbsp;  
&nbsp;  
&nbsp;

### 🧦Controller

- `@Controller`
- `@RequestMapping`(value = "/") / @RequestMapping("/")
- @RequestMapping(value = "/", method = RequestMethod.GET) / `@GetMapping`("/")
- @RequestMapping(value = "/", method = RequestMethod.POST) / `@PostMaaping`("/")

&nbsp;  
&nbsp;  
&nbsp;

### parameter 받아오는 방법

1. 그냥 변수명과 일치하도록 설정
2. @ReqeustParam 설정
3. Dto에 바로 받아오기

&nbsp;  
&nbsp;  
&nbsp;

### parameter 한글 깨질 때

web.xml 파일에 filter 설정

```xml
<!-- 한글 처리 -->
<filter>
    <filter-name>encodingFilter</filter-name>
    <filter-class>org.springframework.web.filter.CharacterEncodingFilter
    </filter-class>
    <init-param>
        <param-name>encoding</param-name>
        <param-value>UTF-8</param-value>
    </init-param>
</filter>

<filter-mapping>
    <filter-name>encodingFilter</filter-name>
    <url-pattern>/*</url-pattern>
</filter-mapping>
```
