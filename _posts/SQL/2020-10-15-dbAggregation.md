---
layout: post
title: 🚁DB Aggregation
date: 2020-10-15 11:00:00
author: "SeWonKim"
categories: [CS, SQL]
tags: [etc, SQL]
fullview: false
comments: true
description: 집계함수
---

### sum, avg, count, max, min

- sum
```SQL
select sum(salary) from employees; 👈 급여의 총합(NULL을 제외하고 더한다)
```

- avg
```SQL
select round(avg(salary), 2) from employees; 👈 평균 급여를 소수 2째 자리까지
```

- count
```SQL
select count(employees_id) from employees; 👈 사원 수(NULL은 세지 않는다)
```
- max, min
```SQL
select max(salary) maxsal, min(salary) minsal from employees; 👈 최대 급여와 최저 급여
```

--- 

## group by 절

부서별 최대 급여와 최저 급여
```SQL
select department_id, max(salary) maxsal, min(salary) minsal 
from employees
group by department_id;
```

### having 절: grouping 조건

평균 급여가 5000 이상인 부서별 급여의 총합, 평균급여
```SQL
select department_id, sum(salary), avg(salary) 
from employees
group by department_id
having avg(salary) >= 5000;
```

group by한 결과에 조건을 추가할 경우 having을 사용

---

## 집합 연산자
- UNION: 두 쿼리에서 선택 된 모든 행 반환(중복 1번만)
- UNION ALL: 두 쿼리에서 선택 된 모든 행 반환(모든 중복 포함)
- INTERSECT: 두 쿼리에서 선택된 모든 중복 행 반환
- MINUS: 첫번째 쿼리에서 선택한 행 반환(중복행 제거)

*MySQL은 union 연산자만 지원*


---

### ⭐SQL 실행순서⭐
- SELECT : 5
- FROM : 1
- WHERE : 2
- GROUP BY : 3
- HAVING : 4
- ORDER BY : 6
