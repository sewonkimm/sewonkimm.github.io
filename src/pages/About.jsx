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
            <div>
              <p>
                저는 현재 뉴로클에서 테크니컬 커뮤니케이터로{" "}
                {currentYear - 2021}
                년째 일하고 있습니다. 첫 커리어는 프런트엔드 엔지니어로
                시작하여, 뉴로클에서 약 3년간 근무했어요.
              </p>
              <p>
                딥러닝 모델을 생성하는 소프트웨어를 개발하며 기술에 대한
                관심보다 비즈니스에 대한 관심이 많았다는 것을 느꼈습니다. 잘
                만든 제품으로 수익을 창출하고, 사용자에게 실질적인 도움을 주는
                프로덕트 메이커가 되고 싶었습니다. 특정 직군으로 저를 정의
                내리기 보다는 <b>문제를 해결할 줄 아는 사람</b>이 되고 싶어요.
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

        <p>
          저는 기록하는 것을 좋아합니다. 본격적으로 커리어에 대한 주제로 글을
          남긴 것은 2019년 7월부터입니다. 이 블로그도 {currentYear - 2019}년째
          운영 중입니다. <b>단순 메모가 아닌 인사이트가 담긴 좋은 글</b>을 쓰고
          싶어요! 개발 지식, 프로젝트 경험, 기술 서적 리뷰, 커리어에 대한 생각
          등을 주로 다루고 있어요.
        </p>

        {/* Fun Facts or Personal Interests */}
        <div className="container">
          <h2>TMI:</h2>
          <ol>
            <li>제 강점은 무엇일까요?</li>
            MBTI보다 강점 혁명을 좋아합니다! 지적 사고, 배움, 수집, 집중, 발상이
            제 대표적인 강점이에요😆
            <li>취미는 독서</li>
            다양한 장르를 읽으며, 별도의{" "}
            <a href="https://blog.naver.com/sewon_library/223323496616">
              독서 블로그
            </a>
            도 운영하고 있어요. 책에서 얻은 지혜를 삶에 녹여내고 싶습니다.
            <li>건강한 신체에 건강한 정신이 깃든다!</li>
            달리기를 꾸준히 하고 있습니다. 하프 마라톤까지 완주해 봤고, 최종
            목표는 풀 마라톤 완주입니다. 🏃‍♀️
          </ol>
        </div>
      </div>
    </Layout>
  );
}
