import React from "react";
import HeaderText from "./HeaderText/HeaderText";
import DarkModeBtn from "./DarkModeBtn/DarkModeBtn";
import "./NavBar.css";
const NavBar = ()=>{
  return (
      <nav className="toggle-dark-mode">
        {/* <!-- where in the world container --> */}
        <HeaderText />
        {/* <!-- dark mode switcher container --> */}
        <DarkModeBtn />
        {/* <!-- end of dark mode switcher --> */}
    </nav>
  )
}
export default NavBar;