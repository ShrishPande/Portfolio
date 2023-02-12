import React, { useEffect, useState } from 'react'
import styles from "./HeaderLeft.module.css"
const HeaderLeft = () => {
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
    <div className={styles.headerLeft}>
        <h1>Shrish<span className={scroll ? styles.scrolled :""}>Pandey</span></h1>
    </div>
  )
}

export default HeaderLeft