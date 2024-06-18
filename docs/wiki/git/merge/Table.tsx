import React from "react";
import mergeCommitImage from "./mergeCommit.webp";
import squashCommitImage from "./squashCommit.webp";

export default function Table(): JSX.Element {
  return (
    <table>
      <thead>
        <tr>
          <th>방식 </th>
          <th>특징</th>
          <th>사용 시기</th>
          <th>히스토리 예시</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>Create Merge Commit</b>
          </td>
          <td>
            <ol>
              <li>병합 커밋이 생성되어 히스토리에 남는다</li>
              <li>병합 히스토리를 명확하게 볼 수 있다</li>
            </ol>
          </td>
          <td>
            <ol>
              <li>
                복잡한 프로젝트에서 병합 히스토리를 명확하게 남기고 싶을 때
              </li>
              <li>두 브랜치의 변경 사항을 명확히 분리하고 싶을 때</li>
            </ol>
          </td>
          <td>
            <img src={mergeCommitImage}></img>
          </td>
        </tr>
        <tr>
          <td>
            <b>Squash and Merge</b>
          </td>
          <td>
            <ol>
              <li>여러 커밋을 하나의 커밋으로 합쳐 병합한다</li>
              <li>
                커밋 메시지를 편집하여 한 개의 커밋으로 합칠 수 있어 히스토리가
                깔끔해진다.
              </li>
            </ol>
          </td>
          <td>
            <ol>
              <li>작은 단위의 커밋이 많아 히스토리가 지저분해질 때</li>
              <li>
                기능 단위로 하나의 커밋으로 합쳐서 히스토리를 간결하게 유지하고
                싶을 때
              </li>
            </ol>
          </td>
          <td>
            <img src={squashCommitImage}></img>
          </td>
        </tr>
        <tr>
          <td>
            <b>Rebase and Merge</b>
          </td>
          <td>
            <ol>
              <li>병합 커밋 없이 모든 커밋이 base 브랜치에 병합한다</li>
              <li>
                히스토리가 직선형으로 유지되어, 커밋 히스토리를 추적하기 쉽다
              </li>
            </ol>
          </td>
          <td>
            <ol>
              <li>히스토리를 직선형으로 유지하고 싶을 때</li>
              <li>
                커밋 히스토리를 깔끔하게 유지하면서도 모든 커밋을 보존하고 싶을
                때
              </li>
            </ol>
          </td>
          <td></td>
        </tr>
      </tbody>
    </table>
  );
}
