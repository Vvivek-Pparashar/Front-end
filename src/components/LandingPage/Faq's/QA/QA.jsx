import React from "react";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './QA.css'

const QA = ({ question, ans, open, index, changeValue }) => {
  return (
    <>
      <div className="m-qa" onClick={()=>changeValue(index)}>
        <div className="m-qa-question">
          <span style={{color:"black"}}>{question}</span>
          <NavigateNextIcon className={`navigator ${open === true?"active":""}`}/>
        </div>
        <div className={`m-qa-ans ${open === true?"active":""}`}><p>{ans}</p></div>
      </div>
    </>
  );
};

export default QA;
