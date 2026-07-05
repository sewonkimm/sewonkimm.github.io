import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import "./About.css";
import Profile from "../../static/img/profile_400.png";

export default function About() {
  const currentYear = new Date().getFullYear();
  return (
    <Layout title="About" description="Introduce">
      <div className="AboutRoot">
        {/* About me */}
        <h1>안녕하세요👋 테크니컬 커뮤니케이터 김세원입니다.</h1>
        <div className="container">
          <div className="introSection">
            <img
              src={Profile}
              alt="Profile"
              width={300}
              height={300}
              className="profile"
            />
            <div className="container">
              <li>{currentYear - 2021}년차 직장인</li>
              <li>2025 ~ 현재: 테크니컬 커뮤니케이터 @Neurocle</li>
              <li>2021 ~ 2025: 프런트엔드 엔지니어 @Neurocle</li>

              <br />

              <p>
                프런트엔드 엔지니어로 커리어를 시작했지만 비즈니스에 대한 관심도
                많습니다. 그래서 기술을 베이스로 여러 사람을 도울 수 있는
                테크니컬 커뮤니케이터가 되었습니다. 스타 플레이어보다는 서포터
                체질입니다.
              </p>
              <p>
                이 블로그에는 개발 지식, 프로젝트 경험, 기술 서적 리뷰, 커리어에
                대한 생각 등을 주로 다루고 있어요.{" "}
                <b>단순 메모가 아닌 인사이트가 담긴 좋은 글</b>을 쓰고 싶어요!
              </p>
            </div>
          </div>
          <Link className="button button--secondary" to="/CareerChangelog">
            커리어 체인지로그 보러가기
          </Link>
        </div>

        {/* Fun Facts or Personal Interests */}
        <div className="container">
          <h2>TMI:</h2>
          <ol>
            <li>강점: 지적 사고, 배움, 수집, 집중, 발상</li>
            <li>좌우명: 건강한 신체에 건강한 정신이 깃든다.</li>
            <li>
              취미: 독서(
              <a href="https://blog.naver.com/sewon_library/223323496616">
                독서 블로그
              </a>
              ), 운동(달리기, 등산, 요가, F45)
            </li>
            <li>좋아하는 것: 기록</li>
            <li>개인 블로그 운영 {currentYear - 2019}년 차(2019년 7월 시작)</li>
          </ol>
        </div>
      </div>
    </Layout>
  );
}
