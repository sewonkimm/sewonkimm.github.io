---
layout: post
title: Vue Directives
date: 2020-11-12 10:20:00
author: 'SeWonKim'
categories: [WEB, Vue]
tags: [vue, web]
comments: true
description: vue directive 익히기
---

> [Vue Doc](https://kr.vuejs.org/v2/guide/index.html)

# Directives

- directive는 `v-` 접두어가 있는 특수 속성
- 속성값은 js 표현식이 된다.

### 종류

- v-text, v-html
- v-bind
- v-once
- v-model
- v-if, v-else-if, v-else
- v-for
- v-on
- v-show : display 스타일을 변경
- v-cloack

&nbsp;  
&nbsp;

<details>
<summary>v-bind</summary>
<div markdown="1">

```html
<div id="app">
  <input type="text" v-bind:value="message" />
</div>

<script>
  var app2 = new Vue({
    el: '#app',
    data: {
      message: '이 페이지는 ' + new Date() + ' 에 로드 되었습니다',
    },
  });
</script>
```

- DOM과 vue를 연결. input의 value attribute에 data를 바인딩한다.
- 보통 element의 attribute에 data를 바인딩한다.
- : 는 v-bind의 약어. `v-bind:value`를 `:value` 이런식으로 쓸 수 있다.

</div>
</details>

&nbsp;  
&nbsp;

<details>
<summary>v-if</summary>
<div markdown="1">

```html
<div id="app-3">
  <p v-if="seen">이제 나를 볼 수 있어요</p>
</div>

<script>
  var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: true,
    },
  });
</script>
```

- if 값이 false이면 아예 element를 만들지 않는다. (v-show는 element를 만드는데 보여주지는 않음)

</div>
</details>

&nbsp;  
&nbsp;

<details>
<summary>v-for</summary>
<div markdown="1">

```html
<div id="app-4">
  <ol>
    <li v-for="todo in todos">{{ todo.text }}</li>
  </ol>
</div>

<script>
  var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'JavaScript 배우기' },
        { text: 'Vue 배우기' },
        { text: '무언가 멋진 것을 만들기' },
      ],
    },
  });
</script>
```

- v-for를 사용해 동적으로 데이터 바인딩이 가능하다.

</div>
</details>

&nbsp;  
&nbsp;

<details>
<summary>v-on</summary>
<div markdown="1">

```html
<div id="app-5">
  <p>{{ message }}</p>
  <button v-on:click="reverseMessage">메시지 뒤집기</button>
</div>

<script>
  var app5 = new Vue({
    el: '#app-5',
    data: {
      message: '안녕하세요! Vue.js!',
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('');
      },
    },
  });
</script>
```

- v-on으로 event handling 가능
- v-on과 methods 사용법 익숙해지기!
- @는 v-on의 약어. `v-on:click`을 `@click` 이런식으로 쓸 수 있다.

</div>
</details>

&nbsp;  
&nbsp;

<details>
<summary>v-model</summary>
<div markdown="1">

```html
<div id="app-6">
  <p>{{ message }}</p>
  <input v-model="message" />
</div>

<script>
  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: '안녕하세요 Vue!',
    },
  });
</script>
```

- `v-model = v-bind + v-on` : Data binding이 양방향으로 된다.
- input, textarea, checkbox, select, style 요소의 class에서만 사용 가능
- v-model.lazy : 입력할 때마다 업데이트 하지 않고, 입력이 다 끝나고 한 번에 업데이트 될 수 있게 해준다.
- v-model.number : 받은 값을 자동으로 number 자료형으로 바꿔준다.
- v-model.trim : 받은 값에 만약 공백이 여러칸 있다면, 한 칸으로 바꿔준다.
</div>
</details>
