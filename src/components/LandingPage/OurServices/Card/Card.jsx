import React from "react";
// import './Card.css'

const Card = ({ image, service }) => {
  return (
    <>
      <div className="m-card" style={{backgroundImage:`url(../../../../assests/landingPage/${image})`}}>
        <h5>{service}</h5>
      </div>
    </>
  );
};

export default Card;
