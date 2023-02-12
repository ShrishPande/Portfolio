import React from 'react'
import styles from "./HeroSectionRight.module.css"
import picture from '../../assets/20211217_115416.png'
const HeroSectionRight = () => {
  return (
    <div className={styles.HeroSectionRight}>
        <img src={picture} alt="" />
    </div>
  )
}

export default HeroSectionRight