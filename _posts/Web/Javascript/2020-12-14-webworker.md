---
layout: post
title: Web worker 
date: 2020-12-14 19:58:00
author: 'SeWonKim'
categories: [WEB, Javascript]
tags: [web, javascript]
comments: true
---

# Web worker

> [Web Workers API](https://developer.mozilla.org/ko/docs/Web/API/Web_Workers_API)

&nbsp; 

### 웹 워커(Web worker)

> 스크립트 연산을 웹 어플리케이션의 주 실행 **스레드**와 분리된 별도의 백그라운드 스레드에서 실행할 수 있는 기술

&nbsp;

### 스레드(Thread)

> **프로세스(Process)** 내에서 실제로 작업을 수행하는 주체

&nbsp;  

### 프로세스(Process)

> 실행중인 프로그램. 프로그램에 사용되는 데이터, 메모리 등의 자원 + 스레드로 구성

&nbsp;

![js_single](https://miro.medium.com/max/700/1*FA9NGxNB6-v1oI2qGEtlRQ.png)

Javascript는 single thread로 동작하는 언어이다. 즉, 한번에 하나의 작업만 수행할 수 있다.        

Browser는 single thread로 동작하지 않는다. 웹 워커를 사용해서 메인 스레드의 멈춤이나 속도 저하 없이 다른 스레드를 실행할 수 있다. 

&nbsp;
&nbsp;

--- 

&nbsp;
&nbsp;

## 사용법

> [간단한 Demo](https://github.com/mdn/simple-web-worker)

1. worker js파일 생성
2. 메인 파일에서 Woker() 생성자를 사용해 워커 생성
3. postMessage와 onmessage를 사용해 데이터 송수신

- postMessage() : 워커와 메인스레드 간 데이터 전송
- omessage : 데이터 수신

