import React, { useEffect, useState } from "react";
import style from "./HeaderRight.module.css";
import { UilBars } from "@iconscout/react-unicons";
import { Link } from "react-scroll";

const HeaderRight = ({ showMenu, showMenuOption }) => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 20) {
        setScroll(true);
        // document.querySelector().
      } else {
        setScroll(false);
      }
    });
  });
  return (
    <div className={style.headerRight}>
      {showMenuOption ? (
        <UilBars onClick={showMenu} />
      ) : (
        <ul className={style.menu}>
          <li
            className={
              scroll ? `${style.links} ${style.scrolled}` : style.links
            }
          >
            <Link activeClass="active" to="home" spy={true} smooth={true}>
              Home
            </Link>
          </li>
          <li
            className={
              scroll ? `${style.links} ${style.scrolled}` : style.links
            }
          >
            <Link to="about" spy={true} smooth={true}>
              About
            </Link>
          </li> 
          <li
            className={
              scroll ? `${style.links} ${style.scrolled}` : style.links
            }
          >
            <Link to="service" spy={true} smooth={true}>
              Services
            </Link>
          </li>
          <li
            className={
              scroll ? `${style.links} ${style.scrolled}` : style.links
            }
          >
            <Link to="skill" spy={true} smooth={true}>
              Skills
            </Link>
          </li>
          <li
            className={
              scroll ? `${style.links} ${style.scrolled}` : style.links
            }
          >
            <Link to="Portfolio" spy={true} smooth={true}>
              Portfolio
            </Link>
          </li>
          <li
            className={
              scroll ? `${style.links} ${style.scrolled}` : style.links
            }
          >
            <Link to="Contact" spy={true} smooth={true}>
              Contact
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default HeaderRight;
