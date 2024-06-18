---
tags: ["git"]
last_update:
  date: 6/18/2024
  author: sewonkimm
---

# Git alias

:::note
[git book - git alias](https://git-scm.com/book/ko/v2/Git%EC%9D%98-%EA%B8%B0%EC%B4%88-Git-Alias)
:::

자주 사용하는 git 명령어를 alias로 등록하여 사용하면 편리하다.

### 현재 설정된 alias 확인하기

```git
git config --global --get-regexp alias
```

### alias 설정하기

```
git config --global alias.co checkout
```

### alias 삭제하기

```
git config --global --unset alias.co
```

## 내가 설정한 alias

개인적으로 설정해 놓은 alias는 다음과 같다.

```git
alias.br=branch
alias.co=checkout
alias.aa=add .
alias.cm=commit -m
alias.pm=push origin master
alias.pl=pull origin master
alias.re=reset --soft HEAD~
alias.lg=log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit
```

주로 2글자로 줄여서 설정해두었다.
