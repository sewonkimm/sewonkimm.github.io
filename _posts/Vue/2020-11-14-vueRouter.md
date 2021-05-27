---
layout: post
title: Vue router
date: 2020-11-14 14:09:00
author: 'SeWonKim'
categories: [Web, Vue]
tags: [vue, web]
fullview: false
comments: true
description: vue-router로 라우팅하기
---

> [vue router docs](https://kr.vuejs.org/v2/guide/routing.html)

## 설치

코드에 다음 cdn 을 추가하거나

```html
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
```

`npm i vue-router` 를 사용해 설치하면 사용할 수 있습니다.

&nbsp;  
&nbsp;

## 기본 사용법

```html
<body>
  <div id="app"><nav-header></nav-header> // 컴포넌트 <router-view></router-view> // 라우터 뷰</div>

  // html script tag 내에서 import를 사용하려면
  <script type="module">
    로 꼭 명시해줘야한다.
      <script type="module">

    // 컴포넌트를 import 해서
        import NavHeader from './components/navHeader.js';
        import Main from './components/main.js';
        import Login from './components/login.js';

    // router에 path와 component를 등록
        var router = new VueRouter({    // url 에 따라 사용할 수 있는 컴포넌트들
          routes: [
                    {
                        path: '/',
                        component: Main,
                    },
                    {
                        path: '/login',
                        component: Login,
                    },
                    {
                        path: '/main',
                        component: Main,
                    }
                ],
        });

        var app = new Vue({
          router,
          components: { // url에 상관없이 사용하는 컴포넌트
            NavHeader
          }
        }).$mount("#app");
  </script>
</body>
```

- router는 route의 집합
- ★`route = path + component`★
- <router-view>에는 component가 있음

&nbsp;  
&nbsp;
