import React from "react";
import Layout from "@theme/Layout";
import "./About.css";
import Profile from "../../static/img/profile_400.png";

export default function About() {
  const currentYear = new Date().getFullYear();
  return (
    <Layout title="About" description="Introduce">
      <div className="AboutRoot">
        {/* About me */}
        <h1>안녕하세요👋 소프트웨어 개발자 김세원입니다.</h1>
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
                저는 현재 뉴로클에서 테크니컬 커뮤니케이터로{" "}
                {currentYear - 2021}
                년째 일하고 있습니다. 첫 커리어는 프런트엔드 엔지니어로시작하여,
                약 3년간 근무했어요.
              </p>
              <p>
                특정 직군으로 저를 정의내리기 보다는{" "}
                <b>문제를 해결할 줄 아는 사람</b>이 되고 싶습니다.
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
          <button
            onClick={() => {
              window.open(`/careerChangelog`, "_self");
            }}
          >
            커리어 체인지로그 보러가기
          </button>
        </div>

        {/* Fun Facts or Personal Interests */}
        <div className="container">
          <h2>More info:</h2>
          <ol>
            <li>제 강점은 무엇일까요?</li>
            MBTI보다 강점 혁명을 좋아합니다! 지적 사고, 배움, 수집, 집중, 발상이
            제 대표적인 강점이에요😆
            <li>취미는 독서</li>
            다양한 장르를 읽으며, 별도의{" "}
            <a href="https://blog.naver.com/sewon_library/223323496616">
              독서 블로그
            </a>
            도 운영하고 있어요. 책에서 얻은 지혜를 삶에 녹이는 걸 좋아합니다.
            <li>건강한 신체에 건강한 정신이 깃든다!</li>
            달리기를 꾸준히 하고 있습니다. 하프 마라톤을 완주한 경험이 있고,
            목표는 풀 마라톤 도전이에요. 둘레길 걷기와 등산도 좋아합니다🏃‍♀️
            <li>會說中文的韓國工程師很少見，對吧？</li>
            대만에서 교환 학생 생활을 했어요. 해외 생활에도 관심이 많습니다🌏
            <li>미니멀리스트입니다.</li>
            실용적이고 가벼운 삶을 추구합니다.
          </ol>
        </div>
      </div>
    </Layout>
  );
}
