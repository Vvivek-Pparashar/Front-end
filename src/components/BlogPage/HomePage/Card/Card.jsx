import React from "react";
import AuthorDetails from "../AuthorDetails/AuthorDetails";
import Tags from "../Tags/Tags";
import "./Card.css";

const Card = () => {
  return (
    <div className="mb-card">
      <AuthorDetails
        img={"../../../../../assests/BlogPage/Profile.png"}
        name={"Vivek Parashar"}
        Date={"21 March, 2023"}
      />
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
            <Tags tag={"Startup"} />
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
