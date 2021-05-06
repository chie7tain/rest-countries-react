import React from "react";
import "./MainContainer.css";
import NavBar from "../NavBar/NavBar";
import ContainerCenter from "./ContainerCenter/ContainerCenter";
const MainContainer = ()=>{
  return (
    <div className="main-container">
      <NavBar />
      <ContainerCenter />
    </div>
  )
}
export default MainContainer;