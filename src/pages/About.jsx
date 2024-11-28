import React from "react";
import Layout from "@theme/Layout";
import "./About.css";

export default function About() {
  return (
    <Layout title="About" description="Introduce">
      <div className="root">
        <h1>안녕하세요👋</h1>

        <div className="container">
          <p>
            제 이름은 김세원입니다. 저는 코드로 <b>사람들에게 도움이 되는 일</b>
            을 하고 싶어요. <br />
            특정 직군으로 제 한계를 제한하기 보다는 제가 가진 능력들을 최대한
            활용해 세상의 문제를 풀어나가고자 합니다.
          </p>
          <button>커리어 ChangeLog 보러가기</button>
        </div>

        <div className="container">
          <p>
            저는 기록하는 것을 좋아합니다. 2019년 7월부터 시작한 이 블로그도
            벌써 {new Date().getFullYear() - 2019}년이 되었네요. <br />
            <b>단순 메모가 아닌 인사이트가 담긴 좋은 글</b>을 쓰고 싶습니다.
          </p>
          <button>About This Blog</button>
        </div>
      </div>
    </Layout>
  );
}
