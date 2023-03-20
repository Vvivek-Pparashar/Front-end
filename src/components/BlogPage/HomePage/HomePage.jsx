import React from "react";
import { NavBar } from "../NavBar/NavBar";
import Card from "./Card/Card";
import "./HomePage.css";
import HotTopic from "./HotTopic/HotTopic";
import Tags from "./Tags/Tags";

const HomePage = () => {
  return (
    <>
      <div className="mb">
        <NavBar />
        <div className="mb-l">
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
        <div className="mb-r">
          <div className="mb-r-ht">
            <h5 className="mb-r-ht-head">Hot Topics :</h5>
            <div className="mb-r-ht-content">
              <HotTopic />
              <HotTopic />
              <HotTopic />
              <HotTopic />
            </div>
            <a href="/">See full list</a>
          </div>
          <div className="mb-r-c">
            <div className="mb-r-box">
              <h6 className="mb-r-box-h6">writing on starvest</h6>
              <ul className="mb-r-box-ul">
                <li>Be specific</li>
                <li>Spread Knowledge</li>
                <li>Be Helpful & have fun</li>
              </ul>
              <button className="mb-r-box-button">Start Writing</button>
            </div>

            <div className="mb-r-rec">
              <h5 className="mb-r-rec-head">Recommended :</h5>
              <div className="mb-r-rec-option">
                <Tags tag={"Startup"} />
                <Tags tag={"MVP"} />
                <Tags tag={"Market"} />
                <Tags tag={"Incubator"} />
                <Tags tag={"Funding"} />
                <Tags tag={"IPO"} />
                <Tags tag={"Growth"} />
                <Tags tag={"Vivekisgr8"} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
