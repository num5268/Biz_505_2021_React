import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  const activeNavStyle = {
    backgroundColor: "#61dafb",
  };
  return (
    <section className="App_nav">
      <ul>
        <li>
          <NavLink to="/" activeStyle={activeNavStyle} exact>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to="/write" activeStyle={activeNavStyle}>
            글쓰기
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" activeStyle={activeNavStyle}>
            로그인
          </NavLink>
        </li>
        <li>
          <NavLink to="/join" activeStyle={activeNavStyle}>
            회원가입
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default MainNav;
