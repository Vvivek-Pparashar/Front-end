import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <>
      <div className="m-a">
        <div className="m-a-c">
          <div className="m-a-l">
            <div className="m-a-l-img-c">
              <img
                src="../../../../assests/landingPage/aboutUs.jpg"
                alt="AboutUs"
              />
            </div>
          </div>
          <div className="m-a-r">
            <h5 className="h5">
              We believe in promoting <br />
              innovative startups, a <br />
              multifaceted platform <br />
              allowing user to review <br />
              startups and get insight
              <br />
              about creative discipline
              <br /> for a variety of projects.
              <br /> Opinions supported by
              <br /> facts and observations <br />
              will to build a market.<br></br>
              {/* We believe in promoting innovative startups, a multifaceted
              platform allowing user to review startups and get insight about
              creative discipline for a variety of projects. Opinions supported
              by facts and observations will to build a market. */}
            </h5>
            <b className="b">About Us</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
