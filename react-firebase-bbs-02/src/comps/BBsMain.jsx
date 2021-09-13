import React, { useEffect, useState } from "react";
import "../css/BBs.css";
import { useHistory } from "react-router";

function BBsMain() {
  const ruter_history = useHistory();
  const [bbsData, setBBsData] = useState([]);
  const firebaseFetch = async () => {
    const result = await firestore
      .collection("bbs")
      .orderBy("b_data", "desc") // b_date 칼럼으로 내림차순 정렬
      .orderBy("b_time", "desc") // b_time 칼럼으로 내림차순 정렬
      .get();

    /**
     * firebase로 부터 수신된 데이터 중에서
     * 실제 BBS 데이터객체만 추출하여 bbsList 배열로 만들기
     */
    const bbsList = result.docs.map((doc) => {
      const id = doc.id;
      return { ...doc.data(), id: id };
    });
    setBBsData(bbsList);
  };
  useEffect(firebaseFetch, []);

  const bbsBody = bbsData.map((bbs) => {
    <tr
      key={bbs.id}
      data-id={bbs.id}
      onClick={(e) => {
        const id = e.target.closest("TR").dataset.id;
        alert("안녕 : " + id);
      }}
    >
      <td>{bbs.b_date}</td>
      <td>{bbs.b_time}</td>
      <td>{bbs.b_writer}</td>
      <td>{bbs.b_subject}</td>
    </tr>;
  });

  return (
    <table className="bbs_list">
      <thead>
        <tr>
          <th>작성일자</th>
          <th>작성시각</th>
          <th>작성자</th>
          <th>제목</th>
        </tr>
      </thead>
      <tbody>{bbsBody}</tbody>
    </table>
  );
}

export default BBsMain;
