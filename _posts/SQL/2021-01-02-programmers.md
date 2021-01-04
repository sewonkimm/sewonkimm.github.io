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

# JOIN

<details>
<summary>없어진 기록 찾기</summary>
<div markdown="1">

입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물 찾기 👉 OUTS 기준 left join 
  
```sql
SELECT OUTS.ANIMAL_ID, OUTS.NAME
FROM ANIMAL_OUTS AS OUTS
LEFT JOIN ANIMAL_INS AS INS
ON INS.ANIMAL_ID = OUTS.ANIMAL_ID
WHERE INS.ANIMAL_ID IS NULL AND OUTS.ANIMAL_ID IS NOT NULL
ORDER BY OUTS.ANIMAL_ID
```

</div>
</details>

<details>
<summary>있었는데요 없었습니다.</summary>
<div markdown="1">

보호 시작일(INS)보다 입양일(OUTS)이 더 빠른 동물 
  
```sql
SELECT INS.ANIMAL_ID, INS.NAME
FROM ANIMAL_INS AS INS, ANIMAL_OUTS AS OUTS
WHERE INS.ANIMAL_ID = OUTS.ANIMAL_ID AND INS.DATETIME > OUTS.DATETIME
ORDER BY INS.DATETIME ASC
```

</div>
</details>

<details>
<summary>오랜 기간 보호한 동물(1)</summary>
<div markdown="1">

아직 입양을 못 간 동물 👉 INS에는 있는데 OUTS에는 없는 동물
  
```sql
SELECT NAME, DATETIME
FROM ANIMAL_INS
WHERE ANIMAL_ID NOT IN (SELECT ANIMAL_ID FROM ANIMAL_OUTS)
ORDER BY DATETIME ASC
LIMIT 3
```

</div>
</details>

<details>
<summary>보호소에서 중성화한 동물</summary>
<div markdown="1">

보호소에 들어올 당시에는 중성화1되지 않았지만, 보호소를 나갈 당시에는 중성화된 동물 👉 INS에는 중성화 X 인데,  OUTS에는 중성화 O 동물 
  
```sql
SELECT INS.ANIMAL_ID, INS.ANIMAL_TYPE, INS.NAME
FROM ANIMAL_INS AS INS INNER JOIN ANIMAL_OUTS AS OUTS
ON INS.ANIMAL_ID = OUTS.ANIMAL_ID
WHERE INS.SEX_UPON_INTAKE LIKE 'Intact%' AND (OUTS.SEX_UPON_OUTCOME LIKE 'Spayed%' OR OUTS.SEX_UPON_OUTCOME LIKE 'Neutered%')
ORDER BY ANIMAL_ID ASC
```

</div>
</details>
