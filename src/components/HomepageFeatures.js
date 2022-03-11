import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Profile1 from "../../static/img/profile1.png";
import Profile2 from "../../static/img/profile2.png";
import Profile3 from "../../static/img/profile3.png";

const FeatureList = [
  {
    title: "배움, 정리를 좋아합니다.",
    description:
      "배우는 과정에서 재미를 느낍니다.\n배울 게 산더미인 프론트엔드... 오히려 좋습니다🤗\n정리와 기록은 강점, 공유는 취미입니다",
    imgUrl: Profile1,
  },
  {
    title: "아이디어를 실현하는 것을 즐깁니다.",
    description:
      "종종 공상에 빠지곤 합니다🪐\n사이드 프로젝트와 개발 동아리 활동을 통해\n다양한 사람들과 소통하고 유의미한 결과를 내며 성장합니다",
    imgUrl: Profile2,
  },
  {
    title: "회사원말고 프로그래머가 되고싶습니다.",
    description:
      "주어진 업무를 완수하는 것에서 더 나아가\n효율적이고 지속가능한 환경을 구축하고,\n훌륭한 코드를 작성할 줄 아는 GOD개발자이고 싶습니다",
    imgUrl: Profile3,
  },
];

function Feature({ imgUrl, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.featureImg} src={imgUrl} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
