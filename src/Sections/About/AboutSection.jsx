import React from "react";
import styles from "./AboutSection.module.css";
import Profile from '../../assets/profile-1.jpg'
import Typing from "../../Components/HeroSectionLeft/typing";
import resume from "../../assets/ShrishPandey.pdf"

const AboutSection = () => {
    const words=["Full Stack Web Developer",
"Youtuber",
"Software Engineeer"]
  return (
    
    <div className={styles.aboutSection} id="about">
      <div className={styles.title}>
        <h2>About me</h2>
      </div>
      <div className={styles.content}>
        <div className={styles.img}><img src={Profile} alt="" /></div>
        <div className={styles.about}>
            <h3>I'm Shrish and I'm a <Typing words={words}/></h3>
            <p>I am a coding Enthusiast who is currently pusrsuing the degree of Btech Cse from GLA University,Mathura.I am currently in my second Year
                and I am a MERN stack developer with actual project experiences ,You can check out the projects I'll provide the links. And I have a firm grasp over the programming languages such as JAVA,C,C++,python etc.
                I have done 130+ questions on LEETCODE and have 5 stars on Hackerrank.To know more you can checkout my Resume.
                and I have given information about my services and skills below ,You can check them out.
            </p>
            <button className={styles.hbutton}><a href={resume} target="new">Download Resume </a></button>
        </div>
        
      </div>
    </div>
  );
};

export default AboutSection;
