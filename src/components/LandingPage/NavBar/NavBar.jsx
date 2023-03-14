import { useState } from "react";
import { NavLink } from "react-router-dom";
import style from "./NavBar.module.css";

export const NavBar = () => {
  const activeLink = ({ isActive }) => isActive ? `${style["m-link"]} ${style["activeLink"]}` : `${style["m-link"]}`
  const activeLinkBtnP = ({ isActive }) => isActive ? `${style["m-link"]} ${style["m-button-p"]} ${style["activeLink"]}` : `${style["m-link"]} ${style["m-button-p"]}`
  const activeLinkBtnS = ({ isActive }) => isActive ? `${style["m-link"]} ${style["m-button-s"]} ${style["activeLink"]}` : `${style["m-link"]} ${style["m-button-s"]}`
  const [display, setDisplay] = useState(`${style["m"]}`);
  const [background, setBackground] = useState("transparent");
  
  let prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    let currentScrollPos = window.pageYOffset;
    (prevScrollpos < currentScrollPos) ? setDisplay(`${style["m"]} ${style["scrollUp"]}`) : setDisplay(`${style["m"]} ${style["scrollDown"]}`)
    prevScrollpos = currentScrollPos;
    (currentScrollPos > 30) ? setBackground("#42547C") : setBackground("transparent")
  }
  return (
    <div className="App">
      <ul className={display} style = {{background}}>
        <div className={`${style["logo"]}`}></div>
        <li className={`${style["m-item"]}`}><NavLink className={activeLink} to="/startups">For Startups</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={activeLink} to="/review">Write a Review</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={activeLink} to="/blogs">Blogs</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={activeLink} to="/faq">FAQ's</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={activeLinkBtnP} to="join">Join</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={activeLinkBtnS} to="login">Login</NavLink></li>
      </ul>
      <div style={{margin: "0 0 5rem 0"}}></div>
    </div>
  );
}
