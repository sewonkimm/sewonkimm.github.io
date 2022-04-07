---
sidebar_position: 2
---


# 무조건 useState를 사용하면 안되는 이유

:::info

Abdo Amin의 아티클 [Why you shouldn’t always use “useState”](https://javascript.plainenglish.io/why-you-shouldnt-always-use-usestate-658994693018)을 번역한 글 입니다.

:::



![useSate useRef](/img/react_1/image1.jpeg)

## TL;DR;

> `useState`는 비동기식 hook이고, state를 즉시 바꾸지 않아서 컴포넌트가 리렌더 될 때까지 기다려야합니다.
> 
> `useRef`는 state의 상태를 즉시 업데이트하는 동기식 hook이고, 컴포넌트 라이프사이클 동안에 값을 유지합니다. 하지만 리렌더링의 트리거는 되지 않습니다.


---


최근 동료와 페어프로그래밍을 하다가 "이상한 버그"를 발견했습니다.

**버그가 아니라 useState의 오용이었습니다.*



```jsx
import React, { useState } from 'react';

const InputStateExample = () => {
    const [name, setName] = useState('');
    const handleChange = (e) => {
        setName(e.target.value);
        console.log({ name }, { value: e.target.value});
        // 'hello world'를 타이핑 했을 때
        // 예상 : { name: "hello world" }, { value: "hello world" }
    }

    return <input type="text" value={name} onChange={handleChange} />;
}
```

제 동료는 왜 이 코드가 예상한 대로 동작하지 않는지 혼란스러워 했고, 저는 `useState` 대신 `일반 변수`를 사용할 것을 제안했습니다.



## 나는 왜 useRef를 사랑하는가?

왜 항상 `useRef` 또는 `일반 변수`에 의지하며 안되는지, 왜 저는 때때로 `useState`를 사용하는 지 공유합니다.

### 1 - useState

```jsx
import React, { useState } from 'react';

const StateExample = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [userToken, setUserToken] = useState('');

    const generateToken = () => {
        setUserToken('--generate token--');
    }

    const handleLogin = (e) => {
        e.preventDefault();
        generateToken();
        fetch('--API--', {
            method: 'POST',
            body: {
                username,
                password,
                // highlight-next-line
                userToken,  // 빈 string이 들어간다
            }
        });
    }

    return (
        <form onSubmit={handleLogin}>
            <label>Username:</label>
            <input name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <label>Password:</label>
            <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    );
}
```

앞으로 어떤 일이 벌어질지 예상이 가시나요?

`useState`는 비동기 훅입니다. 컴포넌트 라이프사이클, 리렌더, 그리고 state가 업데이트 될 때까지 기다릴거에요. 그러므로 `userToken`에는 빈 string이 들어가게 됩니다.


### 2 - useRef

즉시 어떤 것이 필요할 때, 그리고 그것이 코드 흐름에 필요할 때, 주로 `useRef`를 사용합니다... 왜냐하면 `useRef`는 `useState`가 가진 영속성과 같은 힘을 가지고 있기 때문이죠.

`useRef`는 컴포넌트 라이프사이클 동안 값을 유지합니다. 그러나 더 멋진 점은 동기식으로 동작한다는 겁니다!

위의 예시 코드를 다시 써보겠습니다.

```jsx
import React, { useState } from 'react';

const StateExample = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // highlight-next-line
    const userToken = useRef('');

    const generateToken = () => {
        userToken.current = '--generate token--';
    }

    const handleLogin = (e) => {
        e.preventDefault();
        generateToken();
        fetch('--API--', {
            method: 'POST',
            body: {
                username,
                password,
                // highlight-next-line
                userToken: userToken.current,
            }
        });
    }

    return (
        <form onSubmit={handleLogin}>
            <label>Username:</label>
            <input name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <label>Password:</label>
            <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    );
}
```

컴포넌트의 생명주기 동안 같은 값을 유지하고, 컴포넌트를 아무리 리렌더링 해도 초기화 되지 않습니다.

`useRef`는 state를 유지하고 동기적으로 업데이트하지만 리렌더링을 유발하지는 않습니다. 그러니 `useState`를 전부 `useRef`로 교체하지는 마세요.


### 3 - 일반 변수

제 경우에는 `userToken`이 오직 한 번만 쓰이기 때문에 값을 유지할 필요가 없었습니다. 그래서 저는 이것을 `useRef`에서 일반 변수로 변경했습니다.

```jsx
import React, { useState } from 'react';

const StateExample = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const generateToken = () => {
        const result = '--generate token--';
        return result;
    }

    const handleLogin = (e) => {
        e.preventDefault();
        // highlight-next-line
        const userToken = generateToken();
        fetch('--API--', {
            method: 'POST',
            body: {
                username,
                password,
                userToken,
            }
        });
    }

    return (
        <form onSubmit={handleLogin}>
            <label>Username:</label>
            <input name="username" type="text" onChange={(e) => setUsername(e.target.value)} />
            <label>Password:</label>
            <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <button>Login</button>
        </form>
    );
}
```



## useState의 동작 원리

useState hook이 어떻게 동작하는지에 대한 일러스트입니다.

만약 당신이 클로져에 대해 들어본 적이 있다면 더 이해가 쉬울 거에요.


![useSate](/img/react_1/image2.png)

> '클로져'는 함수가 외부에서 실행되었더라도 처음 생성됐을 때의 scope에 접근할 수 있다는 것을 의미합니다.

이 경우에는, `state`와 `setState`가 scope 바깥에서 실행되는 함수입니다. 하지만 이들은 여전히 처음 선언된 곳 안의 scope에 접근할 수 있습니다.

보시다시피 `setState`는 비동기적으로 동작하고, 컴포넌트 리렌더링을 위한 큐에 들어가 기다렸다가 순서가 되면 state를 업데이트 합니다.

어떻게 컴포넌트 리렌더링 동안에 state값을 유지할 수 있을까요? 클로져 덕분입니다.

클로져는 지속되는 '메모리'를 가진 함수를 만들어 줍니다. 즉, 함수를 다시 실행하면 이전 실행을 참조합니다.

```js
const playGame = () => {
  let counter = 0;
  const increment = () => {
    if(counter  === 9){
      console.log("Don't you have something better to do?");
      return;
    }
    counter+=1;
    console.log(counter);
  }
  return increment;
};

const onClick = playGame();

onClick();
onClick();
onClick();
onClick();
onClick();
onClick();
onClick();
onClick();
onClick();
onClick();
```

이 코드에서 무슨 일이 일어날지 예상이 가나요?


정확히 말하면, 클로져는 함수가 외부에서 실행되어도 접근할 수 있는 함수 범위의 '캐시' 또는 '메모리'를 유지합니다.


