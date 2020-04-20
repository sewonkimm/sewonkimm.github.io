---
layout: post
title: 🖌README.md 멋지게 작성하기
date: 2019-11-19 10:14:00
author: "SeWonKim"
categories: [Git]
tags: [jekyll, Git, Github, post]
fullview: false
comments: true
description: github Readme.md 작성법
---

github에서 정리가 굉장히 잘 되어있는 프로젝트들을 보면서 내 프로젝트도 예쁘게 정리하고 싶은 생각이 들어 포스트에 정리해보려한다.
　

　


### 🔎List 

1. contents
2. decorations
3. readme-md-generator

　

---
　

　

## 무슨 내용을 써야 할까?

1. Project name
2. Introduction - 시연 gif나 이미지와 간단한 introduction
3. Table of Contents - 하이퍼 링크로 목차를 정리해 놓으면 훨씬 편리하다.
4. Quick start - 프로젝트 시작을 위한 tutorial 간단 요약
5. Getting started - 구체적인 설명
6. Built with
7. Contributing - contributing.md에 기여 방법 정리
8. Version
9. Authors
10. License


[참고할 만한 README-Template](https://gist.github.com/PurpleBooth/109311bb0361f32d87a2)


꼭 이 틀에만 맞춰서 작성할 필요는 없다. 상황에 따라 자유롭게 내용을 넣거나 빼서 작성한다.


　
　
## 좀 더 예쁘게 쓰기위한 tools
1. Emoji를 활용하면 조금 더 🌸아🌺기🌹자🌷기🌺하고 예쁘다! - 웨일 확장앱🐋 [모지모지 이모지](https://store.whale.naver.com/detail/ilglkcbgchmaadclmokfkcdmnanniakn)로 복붙해넣으면 편리하다💙
2. Badge를 달아서 간단하게 프로젝트를 소개할 수 있다. Badge를 만들수 있는 웹사이트-[Shields.io](https://shields.io/)        
바로 이렇게 👉 ![badge](https://img.shields.io/badge/like-this-ff96b4)      
사용법은 간단하다. Shields.io 사이트에 들어가서 미리 정해진 형식에 맞춰서 만들 수도 있고, 임의로 라벨과 컬러를 설정해 만들 수도 있다. badge image url을 생성해서 readme.md에 붙여넣기 하면 끝!


　
　
## readme-md-generator
명령어 한 줄로 예쁜 readme 파일을 만들어낼 수 있는 CLI인 [readme-me-generator](https://github.com/kefranabg/readme-md-generator)도 있다!     
실제로 `npx readme-md-generator -y` 명령어로 빠르게 readme.md 파일을 만들어봤는데 진짜 편리하다. 대단한 사람들이 많다...