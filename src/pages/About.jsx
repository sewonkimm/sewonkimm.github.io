import React from "react";
import Layout from "@theme/Layout";
import "./About.css";
import Profile from "../../static/img/profile_400.png";

export default function About() {
  const currentYear = new Date().getFullYear();
  return (
    <Layout title="About" description="Introduce">
      <div className="root">
        {/* About me */}
        <h1>안녕하세요👋</h1>
        <div className="container">
          <div className="introSection">
            <img
              src={Profile}
              alt="Profile"
              width={300}
              height={300}
              className="profile"
            />
            <div>
              <p>
                제 이름은 김세원입니다. 저는 현재 뉴로클에서 프런트엔드
                엔지니어로 {currentYear - 2021}년째 일하고 있습니다.
              </p>
              <p>
                기술로 <b>사람들을 도와주고 싶어요</b>. 특정 직군으로 저를 'OO
                하는 사람'이라고 정의내리기 보다는 문제를 해결할 줄 아는 사람이
                되고 싶습니다.
              </p>

              <p>
                저는 기록하는 것을 좋아합니다. 2019년 7월부터 글을 쓰기
                시작했어요. 이 블로그도 {currentYear - 2019}년째 운영 중입니다.{" "}
                <b>단순 메모가 아닌 인사이트가 담긴 좋은 글</b>을 쓰고 싶습니다.
                개발 지식, 프로젝트 경험, IT/기술 서적 리뷰, 커리어에 대한 생각
                등을 주로 다루고 있어요.
              </p>
            </div>
          </div>
          <button>커리어 ChangeLog 보러가기</button>
        </div>

        {/* Fun Facts or Personal Interests */}
        <h2>More info:</h2>
        <div className="container">
          <li>
            MBTI보다 강점 혁명을 좋아합니다. 제 강점은 지적 사고, 배움, 수집,
            집중, 발상이에요!
          </li>
          <li>
            장르 불문하고 책을 좋아합니다. 책과 관련된{" "}
            <a href="https://blog.naver.com/sewon_library/223323496616">
              블로그
            </a>
            는 따로 운영하고 있습니다.
          </li>
          <li>
            달리기를 꾸준히 하고 있습니다. 목표는 풀 마라톤 달리기에요. 최대
            기록은 하프 마라톤 달리기입니다. 둘레길 걷기, 등산도 즐겨합니다.
          </li>
          <li>
            해외 생활에 관심이 많습니다. 대만에서 교환 학생 생활을 했어요.
            您好！歡迎光臨來到我的部落格🙂
          </li>
          <li>미니멀리스트입니다. 가볍고, 실용적인 게 좋아요.</li>
        </div>
      </div>
    </Layout>
  );
}
