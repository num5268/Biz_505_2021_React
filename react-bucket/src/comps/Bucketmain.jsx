import React from "react";
import "../css/bucket.css";
function Bucketmain() {
  return (
    <section>
      <table className="buc_list">
        <tr>
          <td>FLAG</td>
          <td>날짜</td>
          <td>BUCKET</td>
          <td>완료</td>
          <td>취소</td>
        </tr>
        <tr>
          <td>중요</td>
          <td>2021-09-01 00:00:00</td>
          <td>리액트 실습</td>
          <td>2021-09-13 09:37:00</td>
          <input type="checkbox"></input>
        </tr>
      </table>
    </section>
  );
}

export default Bucketmain;
