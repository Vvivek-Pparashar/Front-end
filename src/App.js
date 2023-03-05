// import { NavLink, Outlet } from "react-router-dom";
// import style from "./App.module.css";
import AboutUs from "./components/LandingPage/AboutUs/AboutUs";
import Faqs from "./components/LandingPage/Faq's/Faqs";
import Footer from "./components/LandingPage/Footer/Footer";
import HeroPage from "./components/LandingPage/HeroPage/HeroPage";
import OurServices from "./components/LandingPage/OurServices/OurServices";
import StoryTelling from "./components/LandingPage/StoryTelling/StoryTelling";

function App() {
  return (
    <div className="App">
      {/* <ul className={`${style["m"]}`}>
        <div className={`${style["logo"]}`}></div>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]}`}>For Startups</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]}`}>Write a Review</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]}`}>Blogs</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]}`}>FAQ's</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]} ${style["m-button-p"]}`}>Join</NavLink></li>
        <li className={`${style["m-item"]}`}><NavLink className={`${style["m-link"]} ${style["m-button-s"]}`}>Login</NavLink></li>
      </ul> */}
      
      <HeroPage/>
      <AboutUs/>
      <OurServices/>
      <StoryTelling/>
      <Faqs/>
      <Footer/>
    </div>
  );
}

export default App;
