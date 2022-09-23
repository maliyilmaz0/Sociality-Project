/* eslint-disable jsx-a11y/alt-text */
import "./Details.css";
import image from "../Assets/socialorientation.png";
import React from "react";
const Details = (props) => {
  // console.log(props.date);
  
  const dateResult = new Date(props.date);
  // console.log(dateResult);
  return (
    <React.Fragment>
      <div className="detail">
        <img src={image} className="icon" />
        <ul>
          <li>
            <div className="companyName">{props.accountname}</div>
          </li>
          <li>
            <div className="dateTime">{dateResult.toString().slice(4,21)}</div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Details;
