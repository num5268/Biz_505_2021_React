import React from "react";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <section className="App_nav">
      <ul>
        <li>
          <NavLink exact to="/" activeClassName="avtive_nav">
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/write" activeClassName="avtive_nav">
            글쓰기
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/login" activeClassName="avtive_nav">
            로그인
          </NavLink>
        </li>
        <li>
          <NavLink exact to="/join" activeClassName="avtive_nav">
            회원가입
          </NavLink>
        </li>
      </ul>
    </section>
  );
}

export default MainNav;
