import React from "react";
import styles from "./SkillSection.module.css";
import {Link} from 'react-scroll'

const SkillSection = () => {
  return (
    <div className={styles.skillSection} id="skill">
      <div className={styles.title}>
        <h2>My Skills</h2>
      </div>
      <div className={styles.detail}>
        <div className={styles.leftSide}>
          <h2>My creative skills & experiences.</h2>
          <p>
            I am experienced in front end Development, back end and I am very
            experienced at technologies like HTML, CSS and JS. I have also fare
            experience of MongoDB, React JS, Node Js, Express JS, I have made
            many websites using MERN stack you can see the examples ,I'll
            provide the link.
          </p>
          <Link to="Portfolio" spy={true} smooth={true}>
          <button  className={styles.hbutton}>See Projects</button>
          </Link>
        </div>
        <div className={styles.rightSide}>
          <div class={styles.bars}>
            <div class={styles.info}>
              <span>HTML</span>
              <span>90%</span>
            </div>
            <div class={`${styles.line} ${styles.html}`}></div>
          </div>
          <div class={styles.bars}>
            <div class={styles.info}>
              <span>CSS</span>
              <span>90%</span>
            </div>
            <div class={`${styles.line} ${styles.html}`}></div>
          </div>
          <div class={styles.bars}>
            <div class={styles.info}>
              <span>JS</span>
              <span>90%</span>
            </div>
            <div class={`${styles.line} ${styles.html}`}></div>
          </div>
          <div class={styles.bars}>
            <div class={styles.info}>
              <span>React JS</span>
              <span>70%</span>
            </div>
            <div class={`${styles.line} ${styles.mern}`}></div>
          </div>
          <div class={styles.bars}>
            <div class={styles.info}>
              <span>Node JS</span>
              <span>70%</span>
            </div>
            <div class={`${styles.line} ${styles.mern}`}></div>
          </div>
          <div class={styles.bars}>
            <div class={styles.info}>
              <span>Express JS</span>
              <span>70%</span>
            </div>
            <div class={`${styles.line} ${styles.mern}`}></div>
          </div>
          <div class={styles.bars}>
            <div class={styles.info}>
              <span>Mongo DB</span>
              <span>70%</span>
            </div>
            <div class={`${styles.line} ${styles.mern}`}></div>
          </div>
          <div class={styles.bars}>
            <div class={styles.info}>
              <span>NextJS</span>
              <span>40%</span>
            </div>
            <div class={`${styles.line} ${styles.mern}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
