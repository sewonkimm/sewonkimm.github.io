---
tags: ['Wiki']
last_update:
  date: 9/3/2022
  author: sewonkimm
---

# Homebrew

- MacOS의 **패키지**  매니저
- CLI로 소프트웨어를 설치 및 제거


### Install

```shell
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

**버전 확인**
```shell
brew -v
```

**버전 업데이트** 
```shell
brew update
```

### Usage

**패키지 설치**
```shell
brew install [package]
```
  
**패키지 업데이트**
```shell
brew upgrade [package]
```

**패키지 목록 표시**
```shell
brew list
```
  
**패키지 검색**
```shell
brew search [package]
```

**패키지 삭제**
```shell
brew uninstall [package]
```

<br />
<br />
<br />



## Cask

- GUI기반의 앱은 Cask를 통해 설치해야한다.<br />
  `ex) brew cask install google-chrome`
- git이나 node는 brew로 설치, chrome은 cask로 설치하는 식

### Install

```shell
brew install cask
```

### Usage
  
**앱 설치**
```shell
brew install --cask [application]
```
