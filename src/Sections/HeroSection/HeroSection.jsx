import React from "react";
import Header from "../../Components/Header/Header";
import HeroSectionLeft from "../../Components/HeroSectionLeft/HeroSectionLeft";
import HeroSectionRight from "../../Components/HeroSectionRight/HeroSectionRight";
import style from "./HeroSection.module.css";

const HeroSection = ({showMenuOption}) => {

  const showMenu =()=>{
    const menuModal=document.getElementsByClassName("menu-modal")[0]
    
    menuModal.classList.remove("MenuModal-close");
    menuModal.classList.add("MenuModal-open")
    setTimeout(()=>{
      menuModal.style.display="block";
    },300)
  }


  

  return (
    <div className={style.HeroSection}  id="home">
      <Header showMenu={showMenu} showMenuOption={showMenuOption}/>
      <div className={style.HeroPage}>
        <HeroSectionLeft />
        <HeroSectionRight/>
      </div>
    </div>
  );
};

export default HeroSection;
