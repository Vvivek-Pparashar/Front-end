import { NavLink, Outlet } from "react-router-dom";
import style from "./App.module.css";

function App() {
  return (
    <div className="App">
      <ul className={`${style["m"]}`}>
        <div className={`${style["logo"]}`}></div>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]}`}>For Startups</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]}`}>Write a Review</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]}`}>Blogs</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]}`}>FAQ's</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]} ${style["m-button-p"]}`}>Join</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]} ${style["m-button-s"]}`}>Login</NavLink></li>
      </ul>
      <Outlet />
    </div>
  );
}

export default App;
