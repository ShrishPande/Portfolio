import React from "react";
import styles from "./HeroSectionLeft.module.css";
import Typing from "./typing";
import { Link } from "react-scroll";

const HeroSectionLeft = () => {
  const words = ["Full Stack Web Developer", "Youtuber", "Software Engineer"];

  return (
    <div className={styles.HeroSectionLeft}>
      <div>
        <span>Hello, my name is</span>
        <span>Shrish Pandey</span>
        <span>
          And I'm a <Typing words={words} />{" "}
        </span>
      </div>

      <div>
        <button className={styles.hbutton}>
          <Link to="Contact" spy={true} smooth={true}>
            Contact me
          </Link>
        </button>
        <button className={styles.hbutton}>
          <Link to="about" spy={true} smooth={true}>
            Know More
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeroSectionLeft;
