
import { useEffect, useState } from 'react'
import './App.css'
import MenuModal from './Modals/MenuModal/MenuModal'
import AboutSection from './Sections/About/AboutSection'
import Contact from './Sections/ContactSection/Contact'
import Footer from './Sections/Footer/Footer'
import HeroSection from './Sections/HeroSection/HeroSection'
import Porfolio from './Sections/Portfolio/Porfolio'
import Service from './Sections/Service/Service'
import SkillSection from './Sections/Skills/SkillSection'

function App() {

  
  const hideMenu=()=>{
    const menuModal=document.getElementsByClassName("menu-modal")[0]
    menuModal.classList.remove("MenuModal-open");
    menuModal.classList.add("MenuModal-close")
    setTimeout(() => {
      menuModal.style.display = "none";
    }, 200)
  }

  const [showMenuOption,setShowMenuOption]=useState(false);

  const [windowWidth,setWindowWidth]=useState();
  
  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
  
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 800|| window.innerWidth<800) {
      setShowMenuOption(true);
    } else {
      setShowMenuOption(false);
    }
  }, [windowWidth]);


  
  return (
    <div className="App">
      
      <div className='menu-modal'>
        <MenuModal hideMenu={hideMenu}/>
      </div>
      <HeroSection showMenuOption={showMenuOption}/>
      <AboutSection/>
      <Service/>
      <SkillSection/>
      <Porfolio/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
