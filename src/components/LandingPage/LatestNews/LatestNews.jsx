import React from "react";
import News from "./News/News";
import "./LatestNews.css";

const LatestNews = () => {
  return (
    <>
      <div className="m-ln">
        <div className="section-header">
          <h1>Latest News</h1>
        </div>
        <div className="m-ln-c">
          <News />
          <News />
          <News />
        </div>
      </div>
    </>
  );
};

export default LatestNews;
