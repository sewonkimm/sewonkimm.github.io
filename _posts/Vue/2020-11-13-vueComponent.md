---
layout: post
title: Vue component 시스템
date: 2020-11-13 12:57:00
author: 'SeWonKim'
categories: [Vue]
tags: [jekyll, vue, web]
fullview: false
comments: true
description: component
---

## Component = Vue instance

```javascript
new Vue({
    data: ...
})
```

여기에서 data를 사용하는 것과

```javascript
Vue.component('컴포넌트 명', {
        data () {
        return {
            ...
        };
    }
});
```

컴포넌트를 사용해서 data를 사용하는 것의 큰 차이는 data를 `객체가 아니라 함수로 설정` 한다는 것!

&nbsp;  
&nbsp;

### 전역 등록

```javascript
<div id="app">
  <component-a></component-a>
</div>

<script>
    Vue.component('component-a', {
        template: '<li>할일 항목 하나입니다.</li>'
    });

    new Vue({ el: '#app' });
</script>
```

이렇게 등록하면 app 내에서 컴포넌트를 사용할 수 있습니다.

&nbsp;  
&nbsp;

### 지역등록

```javascript
new Vue({
  el: '#app',
  components: {
    'component-a': ComponentA,
    'component-b': ComponentB,
  },
});
```

instance에 componets 옵션을 통해 컴포넌트를 등록해주면 지역 컴포넌트로 등록할 수 있습니다.

&nbsp;  
&nbsp;

## Data 전달 : props와 emit

- 부모에서 자식으로 data 전달시에는 props를, 자식에서 부모로 전달시에는 emit을 사용합니다!
- v:bind로 자식 component에 data를 전달 (instance에서는 camel case를 사용하고, tag 내에서는 kebab case)
- v:on으로 자식 component가 보낸 event를 듣고, event가 발생하면 instance의 methods 옵션에 등록되어있는 함수를 실행

<details>
<summary>장바구니 예제</summary>
<div markdown="1">

```html
<body>
  <div id="app">
    <product-list
      v-bind:discount-rate="discountRateValue"
      v-on:update-cart-list="updateCartList"
    ></product-list>
    <cart-list></cart-list>
  </div>

  <template id="product-list">
    <table>
      <thead>
        <th>제품</th>
        <th>가격</th>
        <th>할인가격</th>
        <th>처리</th>
      </thead>
      <tbody>
        <tr v-for="product in productList">
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.price - discountRate*product.price}}</td>
          <td><button v-on:click="addCart(product)">show</button></td>
        </tr>
      </tbody>
    </table>
  </template>

  <template id="cart-list">
    <table>
      <thead>
        <th>제품</th>
        <th>판매가격</th>
        <th>개수</th>
        <th>처리</th>
      </thead>
      <tbody>
        <tr v-for="(product, index) in cartList" v-bind:data-key="index">
          <td>{{product.name}}</td>
          <td>{{product.price}}</td>
          <td>{{product.count}}</td>
          <td><button v-on:click="removeCart(index)">removeCart</button></td>
        </tr>
      </tbody>
    </table>
  </template>

  <script>
    let productList = [
      { name: 'Tent', price: 400000 },
      { name: 'Tarp', price: 70000 },
      { name: 'Table', price: 50000 },
    ];

    let cartList = [];

    // 컴포넌트 1
    Vue.component('product-list', {
      props: ['discountRate'], // props option
      template: '#product-list',
      data: function () {
        return {
          productList: productList,
        };
      },
      methods: {
        addCart: function (product) {
          console.log(product);
          this.$emit('update-cart-list', product);
        },
      },
    });

    // 컴포넌트 2
    Vue.component('cart-list', {
      template: '#cart-list',
      data: function () {
        return {
          cartList: cartList,
        };
      },
      methods: {
        removeCart: function (index) {
          cartList.splice(index, 1);
        },
      },
    });

    new Vue({
      el: '#app',
      data: {
        discountRateValue: 0.2,
      },
      methods: {
        updateCartList: function (product) {
          // upate-cart-list 이벤트가 발생했을 때 호출

          for (item of cartList) {
            if (item.name === product.name) {
              item.count++;
              return;
            }
          }
          cartList.push({
            name: product.name,
            price: product.price,
            count: 1,
          });
        },
      },
    });
  </script>
</body>
```

</div>
</details>

&nbsp;  
&nbsp;
