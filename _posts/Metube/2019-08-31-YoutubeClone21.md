---
layout: post
title: Change password
date: 2019-08-31 19:07:00
author: "SeWonKim"
categories: [Youtube Clone Coding]
tags:
  [jekyll, Youtube Clone Coding, Clone Coding, Nomadcoders, Passport, password]
fullview: false
comments: true
description: How to change password?
---

## Change password page 구성

1. 현재 password
2. 새 password
3. password 확인

**비밀번호는 절대 텍스트 그대로 저장되지 않는다.**  
항상 encrypted(암호화) 되서 저장된다.

## 'passport-lcoal-mongoose' change password

**changePassword(oldPassword, newPassword, callback)**  
Changes a user's password hash and salt, resets the user's number of failed password attempts and saves the user object (everything only if oldPassword is correct). If no callback cb is provided a Promise is returned. If oldPassword does not match the user's old password, an IncorrectPasswordError is passed to cb or the Promise is rejected.
