import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

const FeatureList = [
  {
    title: "기록과 공유를 좋아합니다.",
    Svg: require("../../static/img/undraw_docusaurus_mountain.svg").default,
    description:
      "저는 꾸준히 기록하고, 팀원과 공유하며\n함께 성장하는 팀을 만드는 사람입니다",
  },
  {
    title: "아이디어를 실현하는 것을 즐깁니다.",
    Svg: require("../../static/img/undraw_docusaurus_tree.svg").default,
    description:
      "개인 프로젝트와 개발 동아리 활동을 통해\n다양한 사람들과 유의미한 결과를 내며 성장합니다",
  },
  {
    title: "회사원이 아니라 프로그래머가 되고싶습니다.",
    Svg: require("../../static/img/undraw_docusaurus_react.svg").default,
    description:
      "주어진 업무를 완수하는 것에서 끝나지 않고,\n더 나아가 성능 향상과 효율적인 코드 작성을 고민합니다.",
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
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
