---
layout: post
title: Mac OS에서 서버 접속하는 방법!
date: 2021-04-27 20:13:00
author: 'SeWonKim'
categories: [Devlog, ETC]
comments: true
---

&nbsp;
&nbsp;

SSAFY에서는 프로젝트를 할 때 서버를 지급해준다. 윈도우에서는 mobaXterm이라는 소프트웨어를 사용해서 접속했는데 맥북을 산 뒤에는 그냥 터미널로도 접속이 가능하다고 해서 한 번 해봤다. 실제로 너무 쉬워서... 이래서 서버개발자들이 맥북 쓰는 거구나... 라는 생각이 들었다.


&nbsp;

---



1. 접속 가능한 pem키를 저장한다.
2. pem키가 저장되어있는 폴더에서 터미널을 연다.
3. 명령어 입력 `sudo chmod 400 [pem키 명]` => 최초 한 번만 실행해주면 된다.
4. 명령어 입력 `ssh -i [pem키 명] [호스트]`
   
<img width="1002" alt="Screen Shot 2021-04-05 at 12 30 33 AM" src="https://user-images.githubusercontent.com/30452963/116232579-497fa580-a795-11eb-9aae-ee7eb3346f27.png">


&nbsp;
&nbsp;

### 더 간단하게! 바로가기 만들기! 

iterm에서 **cmd + ,** 를 눌러서 preferences 창을 열어서 다음과 같이 설정해준다.

<img width="1030" alt="Screen Shot 2021-04-05 at 12 41 07 AM" src="https://user-images.githubusercontent.com/30452963/116232574-484e7880-a795-11eb-9fba-ed83fadac4b1.png">

name, shortcut key, command, working directory를 설정해주면 터미널에서 설정한 shortcut key를 눌렀을 때 바로 서버를 열 수 있다.

&nbsp;
&nbsp;
