import React from 'react'
import styles from './Footer.module.css'
import { UilCopyright } from '@iconscout/react-unicons'

const Footer = () => {
  return (
    <div className={styles.footer}>
        <p>Created By <span>Knowing With Shrish</span>|</p><UilCopyright/>
        <p>2023 All rights reserved.</p>
    </div>
  )
}

export default Footer