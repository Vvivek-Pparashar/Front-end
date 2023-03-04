import React from "react";
import Card from "./Card/Card";
import "./OurServices.css";

const OurServices = () => {
  return (
    <>
      <div className="m-os">
        <div className="section-header">
          <h1 style={{ color: "white" }}>Our services</h1>
        </div>
        <div className="m-os-c">
          <Card />
          <Card />
        </div>
      </div>
    </>
  );
};

export default OurServices;
