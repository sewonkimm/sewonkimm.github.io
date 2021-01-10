---
layout: post
title: 짧은 시간에 높은 품질의 디자인을 뽑는 법
date: 2021-01-10 20:08:00
author: 'SeWonKim'
categories: [Devlog]
tags: [jekyll, Devlog, post]
fullview: false
comments: true
description: 디자인 시스템에 관하여
---

저는 현재 SSAFY 과정을 이수 중입니다. 

SSAFY에서는 7주동안 하나의 프로젝트를 진행하는데요. 
이 글을 쓰고 있는 이 시점...은 바로! 어떤 서비스를 만들지 **아이디어를 생각하고, 기획하는 단계**입니다.


서비스를 기획할 때에는 프로토타입을 만드는데요.
전체적인 실행 순서까지 고려해야하니까 어쨌든 디자인에 대해 신경을 쓰지 않을 수가 없습니다.
디자인 전공자는 아니지만 디자인에 관심이 많아야하는 프론트엔드 개발자이기 때문에 이번에 제대로 공부해보자는 마음이 들어 구글의 Material 디자인 공식 문서를 introduction부터 쭈욱 정독했습니다.

> [Material desgin 공식 문서](https://material.io/design/introduction#components)

&nbsp;
&nbsp;

## 디자인시스템

구글의 Material 디자인은 웹, 모바일에 걸쳐 활용이 가능한 디자인 시스템입니다.

디자인 시스템이 구축되어 있으면 개발자와 디자이너의 의사소통에 도움이 되고, 전체적인 디자인에 통일감을 줄 수 있을 뿐아니라 디자인과 개발 효율을 크게 높일 수 있습니다(서비스가 커질 수록 진가를 발휘). 한국 기업에서는 토스의 TDS(Toss Design System)이 잘 되어있는 것으로 알고 있습니다. TDS에 관한 문서도 찾아보고 싶었는데 공식 문서는 공개되어 있지 않은 것 같았습니다. 

![bpl](https://blog.banksalad.com/32964daa2d22101cf61c90a6e9e53427/Template.gif)
뱅크샐러드의 BPL(Banksalad Product Language) 

&nbsp;

뱅크샐러드는 디자인시스템에서 더 나아가 Product Language를 구축했는데요. [블로그](https://blog.banksalad.com/tech/banksalad-product-language-ios/)에 잘 정리되어 있어 디자인시스템을 구축하는 것이 왜 개발 효율을 높일 수 있는지 이해하기 쉬웠습니다.

&nbsp;
&nbsp;

### 7주안에 디자인시스템 구축까지는 힘들고...😓

이미 잘 되있고, 프로젝트해 활용할 수 있는 유명한 디자인시스템이 바로 Material 디자인이었습니다. 

특히나 Material 디자인을 활용해 구축한 서비스 7가지를 스터디 케이스로 제공해 '이런식으로 서비스를 개발해야겠다'는 인사이트를 주어서 단기간에 공부와 프로젝트를 동시에 진행해야하는 학생의 입장에서 최고의 공식문서가 아닐까 생각합니다.

&nbsp;

---

&nbsp;

## 개발 시작 전 Check List !

1. 브랜드 
2. product architecture
3. layout
4. color
5. typography
6. icongraphy
7. shape
8. component
9. motion

&nbsp;
&nbsp;

### 1. 브랜드

프로덕트의 기능은 무엇인지, 브랜드 컨셉은 무엇인지 먼저 서비스에 대한 깊은 이해를 바탕이 있어야 프로토타입을 만들 수 있습니다.

&nbsp;

### 2. product architecture

공식 문서를 읽다가 처음 보는 용어들이 많았는데요.

- catalog structure
- flow structure
- hub and spoke structure

![catalog](https://lh3.googleusercontent.com/NRdy-qhyVVebO-4j82AElVaQ6ApAi5TgbNAZiRTZLtIUO--fQgvpyuwdboVccNHRenHBcQ7aoMDS2tZTrVNIeHyLVQRyCVTOyA7rOy4=w1064-v0)

이런 식으로 카테고라이즈해서 페이지를 구성하는 것이 catalog structure입니다. 그 밖에도 여러 구조가 많습니다.
구조에 맞게 데스크탑, 태블릿, 모바일에서 어떻게 화면 레이아웃을 배치할지 정하게됩니다. 

구조를 먼저 생각하니 어떤식으로 기능을 개발할지 한결 정리가 쉬워졌습니다.

&nbsp;

### 3. layout

Grid system을 사용해 화면에 콘텐츠를 어떻게 배치할지 정합니다.

또 계층구조를 어떻게 표현할 것인지도 생각해보아야 합니다.

### 4. color

![image](https://user-images.githubusercontent.com/30452963/104121334-a1c69f00-5380-11eb-9422-0028b4c01486.png)


primary color와 secondary 컬러를 선택합니다. Material 디자인에서 제공하는 [color tool](https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=00a8ff)을 사용하면 한 눈에 컬러 조합을 확인해볼 수 있습니다. 컬러를 뽑아서 UI에 적용해 주기 때문에 개인적으로 어울리는 컬러 조합을 뽑아주는 사이트보다 훨씬 낫다고 생각합니다. 그리고 primary color와 secondary color를 선정한다고 해도 적재적소에 사용하기가 쉽지않은 것이 보통 개발자의 미적감각인데 이 color tool은 그런 부분을 완벽하게 커버해줍니다. (무려 6가지 경우에 적용한 화면을 미리 볼 수 있습니다!)

&nbsp;


### 5. typography

![typo](https://lh3.googleusercontent.com/q4lcEm8f3pR_Fm-w1JxZBuaYYzgLm2nSZfsOZ2KI-eYg1CI5mucD-4m7WJkrkkf1fSvajcnGu4o_yKT5WDHlHbmZdIuWSG_imga7kw=w1064-v0)

폰트와 상황에 따른 폰트크기, 굵기 등을 미리 정해놓으면 컴포넌트 개발에 활용이 가능합니다.

&nbsp;

### 6. icongraphy

![icon](https://lh3.googleusercontent.com/5xtAyTkQ3yNuY3teubPaKC49MnLEnezTSwuw4NzM7-tkpa7_kVntjQmjNuKyZg8H2Q6keIg4h5NT5-U4sHDVgNNPVN0MvExCxI-_8Q=w1064-v0)

사용될 아이콘들을 모아서 정리해보면 좋을 것 같습니다. 모든 아이콘을 원형으로 감싼다거나, 직선보다는 곡선느낌의 아이콘을 사용한다거나하는 방식으로 디자인에 통일감을 줄 수 있습니다.

&nbsp;

### 7. shape

![shape](https://lh3.googleusercontent.com/gJ2_OPPHwVSIFMZhkswsctMmE7mj9HxCoJNsb88otlU5oz53C1zQ9ommZDEG-E8qHZQqVjd2ESLd5TTRkqbyZONHfUlNcksUpm39Sg=w1064-v0)

사용되는 모든 컴포넌트들의 사이즈와 radius를 정합니다. 이런 디테일을 통일시켜주면 완성도가 더 높아집니다.

&nbsp;

### 8. component

![component](https://lh3.googleusercontent.com/E5vkIiBtT6bOouTsOci2cNDLM1IovqLkLPrFHyVqCojAs4fiR7iR89ToJJNIa_Y4-odyI6Ojyr5zk9XGmLGeXkH2C-AJwxqtC7XKyQ=w1064-v0)

List는 어떤 식으로 표현할지, Bottom sheet, Tab, Stepper, divider 등 작은 단위의 컴포넌트들의 배치와 작동 방식을 고민합니다. 공식문서를 보다가 masonry pattern에 대해 배웠습니다. 위의 이미지처럼 카드가의 높이가 다양하도록 배치한 패턴이었습니다. 이런 공식적인 용어를 배울 수 있기 때문에 앞으로 더 공식문서를 세세히 읽어봐야겠다는 생각이 들었습니다.

&nbsp;

### 9. motion

애니메이션 방식을 생각합니다. 런치 화면의 애니메이션은 어떻게 할지, hover 했을 때의 반응, click 시 화면으로 이동하는 애니메이션 등... 애니메이션 방식에 따라 효과적인 UX 디자인이 가능해집니다.

&nbsp;


---

&nbsp;


## 단기간에 기획부터 구현까지 해내야 한다면...

디자이너 없이 개발자로만 이루어진 집단에서 단기간에 프로젝트를 끝내야한다면 이런 디자인 시스템을 적극 활용해보면 좋을 것 같습니다. 

특히 이런 스터디케이스에 대한 정보가 자세히 나와있어서 그래도 최소한의 예의를 갖춘 UI 완성이 가능할 것이라고 생각합니다.

&nbsp;
