import React from "react";

export default function Table(): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th>맛집 찾기 </th>
          <th>개발자로서의 길 찾기</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>별점이 높다고 맛집은 아니다</td>
          <td>사람들의 평가가 좋다고 나에게 좋은 건 아니다</td>
        </tr>
        <tr>
          <td>맛집에 대한 기준은 사람마다 천차만별</td>
          <td>나만의 기준을 만들 것</td>
        </tr>
        <tr>
          <td>'시장이 반찬이다' 적당히 배고파야 음식이 맛있다</td>
          <td>너무 편한 길로 가려하지 말자</td>
        </tr>
        <tr>
          <td>음식을 먹는 방법은 다양(외식, 집밥 요리, 식당 개업…)</td>
          <td>회사에 다니는 것만이 정답은 아니다</td>
        </tr>
        <tr>
          <td>맛집은 많이 가봐야 안다</td>
          <td>다양한 경험을 해보고, 실패도 해보자</td>
        </tr>
        <tr>
          <td>
            목적지로 가는 경로는 하나가 아니다
            <br />
            최단 거리가 아니더라도 갈 수 있는 길은 많다
          </td>
          <td>목표를 이루기 위해 다양한 도전을 해보자</td>
        </tr>
      </tbody>
    </table>
  );
}
