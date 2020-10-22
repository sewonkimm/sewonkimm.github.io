---
layout: post
title: 🤖 React AJAX와 APIs
date: 2020-10-22 23:16:00
author: "SeWonKim"
categories: [React]
tags: [jekyll, React, ajax, api]
fullview: false
comments: true
description: ajax 호출
---

> [react 공식문서](https://ko.reactjs.org/docs/faq-ajax.html#how-can-i-make-an-ajax-call)

- 브라우저 내장 window.fetch
- Axios
- jQuery AJAX

### class component에서의 AJAX 호출

componentDidMount 내부에서 호출해야 한다.
```javascript
componentDidMount() {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items
          });
        },
        
        // 주의: 컴포넌트의 실제 버그에서 발생하는 예외사항들을 넘기지 않도록 
        // 에러를 catch() 블록(block)에서 처리하기보다는 이 부분에서 처리
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }
```

### functional component에서의 AJAX 호출

useEffect는 componentDidMount()와 비슷한 역할
```javascript

  useEffect(() => {
    fetch("https://api.example.com/items")
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.items);
        },
        
        // 에러 처리
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return ( 
        // 화면 출력
    );
  }
}
```

---

## [axios](https://github.com/axios/axios) 라이브러리 사용

1. 라이브러리 설치

`npm install --save axios`


### GET request
```javascript
axios.get('/user?ID=12345')
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });


axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // always executed
  });  
```

### POST request
```javascript
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```
