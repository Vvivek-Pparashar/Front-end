import React from "react";
import Card from "./Card/Card";
import "./HomePage.css";

const HomePage = () => {
  return (
    <>
      <div className="mb">
        <div className="mb-l">
          <div className="mb-l-c">
            <Card />
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
          </div>
        </div>
        <div className="mb-r">
          <div className="mb-r-c">vivekisgr8</div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
