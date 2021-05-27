---
layout: post
title: 🌈DB Subquery
date: 2020-10-15 12:00:00
author: "SeWonKim"
categories: [CS, SQL]
tags: [etc, SQL]
fullview: false
comments: true
description: Subquery
---

# Subqeury

- 다른 쿼리 내부에 포함되어 있는 SELET 문
- Subquery에는 order by를 사용하지 못한다.

## Subquery의 종류

1. 중첩 서브쿼리(Nested): WHERE문에 작성
2. 인라인 뷰(Inline view): FROM문에 작성
3. 스칼라 서브쿼리(Scalar): SELECT문에 작성

## Subquery 사용 가능한 곳

- select
- from
- where
- having
- order by
- insert문의 values
- update문의 set

&nbsp;
&nbsp;
---

&nbsp;
&nbsp;
### Nested subquery
```SQL
-- nested query 단일행 
select deptname
from dept
where deptid = (select deptid
                from emp
                where emp.id = 100);

-- nested query 다중행
select empid, empname
from emp
where deptid in (select deptid
                from dept
                where locationid = (select locationid
                                    from locations
                                    where city = 'seattle'
                                    )
                );
```

- join의 경우 쿼리가 복잡해지거나 카타시안 곱으로 인해 성능저하가 올 수도 있다 => subquery 사용
- 다중행을 비교할 경우 `in, any, all` 사용

### Inline view
```SQL
-- inline view 
-- 모든 사원의 평균 급여보다 적게 받는 사원들과 같은 부서에서 근무하는 사원의 사번, 이름, 급여, 부서번호
select e.empid, e.empname, e.salary, e.deptid
from (select distinct deptid
     from emp
     where salary < (select avg(salary) from emp)
     ) d inner join emp e
on d.deptid = e.deptid;
```

- TopN 질의: 상위부터 N개를 뽑아온다
- MySQL에서는 limit 활용 👉 pagination 관련


### Scalar subquery

```SQL
-- 직급 아이디가 'IT_PROG'인 사원의 사번, 이름, 직급아이디, 부서명
select em.empid, e.empname, jobid, (select deptname
                                    from dept d
                                    where e.deptid = d.deptid)
from emp e
where e.jobid = 'IT_PROG';
```

---

### CREATE절에서 사용
```SQL
-- emp table copy
create table emp_copy
select * from emp;

-- 구조만 copy
create table emp_copy
select * from emp
where 1 = 0;

-- 일부 column만 copy
create tabel emp_copy
select empid, salary from emp;
```


### INSERT절에서 사용
```SQL
insert into emp_copy
select * from emp where empid = 30;
```

