import React from "react";
import moment from "moment";

const bbsSampleData = {
  b_date: moment().format("YYYY[-]MM[-]DD"),
  b_time: moment().format("HH:mm:ss"),
  b_id: "홍길동",
  b_subject: "BBS",
  comp: false,
};

function BBsMain() {
  return (
    <div>
      <table>
        <tr>
          <td>작성일자</td>
          <td>작성시각</td>
          <td>작성자</td>
          <td>제목</td>
        </tr>
        <tr>
          <td>2021-09-09</td>
          <td>09:32:28</td>
          <td>홍길동</td>
          <td>BBS</td>
        </tr>
      </table>
    </div>
  );
}

export default BBsMain;
