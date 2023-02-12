import React from 'react'
import "./MenuModal.css"
import { UilTimes } from '@iconscout/react-unicons'
import { Link } from 'react-scroll'

const MenuModal = ({hideMenu}) => {
  return (
    <div className="MenuModal ">
        <UilTimes onClick={hideMenu}/>
        <ul className="menu">
      <li><Link className="menuItem" to="home" spy={true} smooth={true} onClick={hideMenu}>Home</Link></li>
      <li><Link className="menuItem" to="about" spy={true} smooth={true} onClick={hideMenu}>About</Link></li>
      <li><Link className="menuItem" to="service" spy={true} smooth={true} onClick={hideMenu}>Services</Link></li>
      <li><Link className="menuItem" to="skill" spy={true} smooth={true} onClick={hideMenu}>Skills</Link></li>
      <li><Link className="menuItem" to="Portfolio" spy={true} smooth={true} onClick={hideMenu}>Portfolio</Link></li>
      <li><Link className="menuItem" to="Contact" spy={true} smooth={true} onClick={hideMenu}>Contact</Link></li>
  </ul>
    </div>
  )
}

export default MenuModal

