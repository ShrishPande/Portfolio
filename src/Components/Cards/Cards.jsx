import React from 'react'
import { UilArrow } from '@iconscout/react-unicons'
import { UilGraduationCap } from '@iconscout/react-unicons'
import { UilPaintTool } from '@iconscout/react-unicons'
import styles from './Cards.module.css'
const Cards = ({data}) => {
  return (
    <div className={styles.cards}>
        {data.id==1 && <UilGraduationCap/>
        }
        {data.id==2 && <UilArrow/>}
        {data.id==3 && <UilPaintTool/>}
        <h2>{data.title}</h2>
        <p>{data.about}</p>
    </div>
  )
}

export default Cards