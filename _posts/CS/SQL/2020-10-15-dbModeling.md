---
layout: post
title: DB Modeling
date: 2020-10-15 14:06:00
author: "SeWonKim"
categories: [CS, SQL]
tags: [SQL]
comments: true
---

## DB 모델링 순서

1. `업무 프로세스` 분석
2. 개념적 모델링 👉 `개념적 구조` 만들기
3. 논리적 모델링 👉 `데이터 모델` 만들기
4. 물리적 모델링 👉 `물리적 데이터베이스` 생성
5. 업무 프로세스에 적합한지 일치성 검토


### 개념적 DB 모델링
- 업무 분석 단계에서 얻어진 내용을 토대로 Entity 추출, ERDiagram 정의
- 개체(Entity) & 속성(Attribute) & 관계(Relation)
- 속성: 개체의 세부사항
- 관계: 두 Entity간의 연관성. 실선으로 관계 표시. 1:1 / 1:n / n:n 관계가 있다.

### 논리적 DB 모델링

- Mapping Rule을 적용해서 스키마를 설계 & 정규화 작업

`Mapping Rule`    
- 단순 entity = table
- attirbute = column
- 식별자 = primary key
- 관계 = foreign key


⭐`정규화`⭐       
- 관계형 스키마를 더 좋은 구조로 정제해 나가는 과정
- 정규화의 기본 방향은 Entity의 분리
- 1 정규화: **반복되는 그룹을 제거**한 뒤 primary key를 추가해 새로은 table 생성한다. 기존의 table과 1:N 관계를 형성.
- 2 정규화: **키가 여러 column으로 구성 된 경우**, 정규화를 통해 테이블을 분리한다. ( **2개의 key 중 1개에만 의존**하는 경우 )
- 3 정규화: PK에 의존하지 않고(데이터를 변경시켜도 영향을 안준다는 뜻) **일반 column에 의존하는 column들을 제거**.

 
 `역정규화`      
- 업무 성격상 분리된 Entity 조회시 많은 join이 발생하고 성능이 저하 -> 역정규화
- 성능 문제를 해결하고하 정규화를 취소하는 과정
- 조회 업무가 많은 Entity를 우선으로 역정규화



 ### 물리적 DB 모델링
 
 - 스키마를 좀 더 효율적으로 구현하기 위해 DBMS 특성에 맞게 개체들을 정의 ex) coulmn의 domain 설정(int, varchar...)
 - 효과적인 index 정의 (select가 주 용도일 경우 index를 쓰면 빨라지지만 DML이 빈번하게 일어나는 경우 성능이 저하된다)
 - 상황에 따른 역정규화(Denomalization) 작업을 수행


