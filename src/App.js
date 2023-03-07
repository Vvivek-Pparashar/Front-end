// import { NavLink, Outlet } from "react-router-dom";
import "./App.css";
import AboutUs from "./components/LandingPage/AboutUs/AboutUs";
import Faqs from "./components/LandingPage/Faq's/Faqs";
import Footer from "./components/LandingPage/Footer/Footer";
import HeroPage from "./components/LandingPage/HeroPage/HeroPage";
import LatestNews from "./components/LandingPage/LatestNews/LatestNews";
import OurServices from "./components/LandingPage/OurServices/OurServices";
import StoryTelling from "./components/LandingPage/StoryTelling/StoryTelling";
import ScrollToTop from "react-scroll-to-top";

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

      <HeroPage />
      <AboutUs />
      <OurServices />
      <StoryTelling />
      <LatestNews />
      <Faqs />
      <Footer />
      <ScrollToTop
        smooth
        id="scroll-to-top"
        color="white"
        style={{}}
        // style={{
        //   background: "black",
        //   position: "fixed",
        //   width: "60px",
        //   height: "60px",
        //   right: "20px",
        //   bottom: "14px",
        // }}
      />
    </div>
  );
}

export default App;
