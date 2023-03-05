import React from "react";
import "./News.css";

const News = () => {
  return (
    <>
      <div className="m-ncard">
        <img src="../../../../../assests/landingPage/news1.jpg" alt="news" />
        <div className="m-ncard-c">
          <h4
            style={{
              fontSize: "1.5vw",
              fontWeight: "normal",
              marginBottom: "20px",
            }}
          >
            Reliance To Take On Nykaa With Beauty Ecommerce Platform Tira vivek
          </h4>
          <a href="/">Read More &gt;</a>
        </div>
      </div>
    </>
  );
};

export default News;
