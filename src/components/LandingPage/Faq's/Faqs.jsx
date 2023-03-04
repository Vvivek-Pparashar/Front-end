import React, { useState } from "react";
import Data from "./Data";
import QA from "./QA/QA";
import "./Faqs.css";

const Faqs = () => {
  const [value, setValue] = useState(0);

  const changeValue = (e) => {
    setValue(e);
  };

  for (let i = 0; i < Data.length; i++) {
    Data[i].Open = false;
  }

  Data[value].Open = true;

  const Qa = Data.map((e) => {
    return (
      <QA
        question={e.Ques}
        ans={e.Ans}
        open={e.Open}
        index={e.Index}
        changeValue={changeValue}
      />
    );
  });

  return (
    <>
      <div className="m-fa">
        <div className="m-fa-c">
          <h5 style={{ color: "black" }}>FAQ's</h5>
          <div className="m-fa-qa">{Qa}</div>
        </div>
      </div>
    </>
  );
};

export default Faqs;
