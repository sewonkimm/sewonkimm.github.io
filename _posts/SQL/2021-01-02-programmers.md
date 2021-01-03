---
layout: post
title: 🤓프로그래머스 SQL 고득점 kit
date: 2021-01-01 18:10:00
author: "SeWonKim"
categories: [SQL]
tags: [jekyll, etc, Programmers, SQL]
fullview: false
comments: true
description: 문제풀이
---

# SELECT 

<details>
<summary>모든 레코드 조회하기</summary>
<div markdown="1">

```sql
SELECT *
FROM ANIMAL_INS
ORDER BY ANIMAL_ID ASC
```

</div>
</details>

<details>
<summary>역순 정렬하기</summary>
<div markdown="1">

```sql
SELECT NAME, DATETIME
FROM ANIMAL_INS
ORDER BY ANIMAL_ID DESC
```

</div>
</details>

<details>
<summary>아픈 동물 찾기</summary>
<div markdown="1">

```sql
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKEN_CONDITION = "Sick"
ORDER BY ANIMAL_ID ASC
```

</div>
</details>

<details>
<summary>어린 동물 찾기</summary>
<div markdown="1">

```sql
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
WHERE INTAKEN_CONDITION != "Aged"
ORDER BY ANIMAL_ID ASC
```

</div>
</details>

<details>
<summary>동물의 아이디와 이름</summary>
<div markdown="1">

```sql
SELECT ANIMAL_ID, NAME
FROM ANIMAL_INS
ORDER BY ANIMAL_ID ASC
```

</div>
</details>

<details>
<summary>여러 기준으로 정렬하기</summary>
<div markdown="1">

```sql
SELECT ANIMAL_ID, NAME, DATETIME
FROM ANIMAL_INS
ORDER BY NAME ASC, DATETIME DESC
```

</div>
</details>

<details>
<summary>상위 n개 레코드</summary>
<div markdown="1">

```sql
SELECT NAME
FROM ANIMAL_INS
ORDER BY DATETIME ASC
LIMIT 1
```

</div>
</details>

---

