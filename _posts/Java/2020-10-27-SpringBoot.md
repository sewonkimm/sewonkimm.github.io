---
layout: post
title: 🍮Spring boot
date: 2020-10-27 02:48:00
author: 'SeWonKim'
categories: [Java]
tags: [jekyll, TIL, Java, web, spring, springboot]
fullview: false
comments: true
description: Spring boot 개념
---

# 목차

- Spring Boot
- Spring Boot Project

&nbsp;  
&nbsp;  
&nbsp;

---

## Spring Boot

> Spring은 사전작업이 너무 많아!!!

library 추가... dependency 설정... 여러가지 설정 파일...

- 자주 사용되는 library들이 미리 조합되어있고
- 내장 서버를 포함해서 tomcat 같은 WAS를 추가로 설치하지 않아도 되고
- WAS에 배포하지 않고도 실행 가능한 Jar 파일(War)로 Web application 개발 가능

🎆Framework와 WAS를 통합했다고 보면 된다! Dependecy 설정, 서버 실행 속도 면에서 엄청난 개선이 있다...!

&nbsp;  
&nbsp;  
&nbsp;

## Spring Boot Project

```markdown
.
├── src/main/java
├── src/main/resources
│ ├── static 폴더 : css, js, img 등의 정적 resource
│ └── application.properties : port 번호나 view resolver가 사용할 jsp path 등을 적어준다.
└── webapp/WEB-INF/views : jsp resource
```

Spring boot starter web에는 tomcat이 포함되어 있지만 jsp 엔진이 포함되어 있지 않기 때문에 jasper, jstl을 dependency에 추가해야 jsp 파일이 구동된다.

### 1. pom.xml 에 추가

```xml
<dependency>
    <groupId>org.apache.tomcat.embed</groupId> <artifactId>tomcat-embed-jasper</artifactId>
</dependency>

<dependency>
    <groupId>javax.servlet</groupId>
    <artifactId>jstl</artifactId>
</dependency>

```

### 2. webapp/WEB-INF/views 폴더 추가

이전 Spring Project들 처럼 `/src/main/webapp/WEB-INF/views` 경로를 추가하고 그 아래에 jsp 파일을 위치 시킨다.

### 3. application.properties에 prefix, suffix 추가

```
spring.mvc.view.prefix=/WEB-INF/jsp/
spring.mvc.view.suffix=.jsp
```

&nbsp;  
&nbsp;  
&nbsp;
