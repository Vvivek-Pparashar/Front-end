import React from "react";

const Card = ({ image, service }) => {
  return (
    <>
      <div className="m-card">
        <h5>{service}</h5>
      </div>
    </>
  );
};

export default Card;
