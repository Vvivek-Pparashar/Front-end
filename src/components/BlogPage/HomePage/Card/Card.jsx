import React from "react";
import "./Card.css";

const Card = () => {
  return (
    <div className="mb-card">
      <div className="mb-card-ab">
        <img
          className="mb-card-ab-img"
          src="../../../../../assests/BlogPage/Profile.png"
          alt="profile"
        />
        <p>Vivek Parashar</p>
        <p>march 21,2023</p>
      </div>
      <div className="mb-card-c">
        <div className="mb-card-l">
          <h5 className="mb-card-l-h3">
            5 common mistakes by first time startup owner and how to avoid them
          </h5>
          <p className="mb-card-l-p">
            Startups are hard. 90% fail, 10% within the first year itself. If
            you’re a startup founder you already know these...
          </p>
          <div className="mb-card-l-bottom">
            <div className="mb-card-l-bottom-tag">
              <p className="mb-card-l-bottom-tag-p">StartUp</p>
            </div>
            <p>6 min read</p>
            <b className="selectedforyou">.</b>
            <p className="selectedforyou">selected for you</p>
          </div>
        </div>
        <div className="mb-card-r">
          <img
            className="mb-card-r-img"
            src="../../../../../assests/BlogPage/blogImg.png"
            alt="blog_image"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
