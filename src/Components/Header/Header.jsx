import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import HeaderLeft from '../HeaderLeft/HeaderLeft'
import HeaderRight from '../HeaderRight/HeaderRight'
import styles from './Header.module.css'

const Header = ({showMenu,showMenuOption}) => {
    const [scroll,setScroll]=useState(false);
    useEffect(()=>{
    
        window.addEventListener("scroll",()=>{
            if(window.scrollY>20){
                setScroll(true)
            }else{
                setScroll(false)
            }
        })
        
    })

  return (
    <div className={scroll?`${styles.header} ${styles.sticky}`:styles.header}>
        <HeaderLeft/>
        <HeaderRight showMenu={showMenu} showMenuOption={showMenuOption}/>
    </div>
  )
}

export default Header