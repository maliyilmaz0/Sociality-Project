/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./ContentBox.css";
import Actions from "./Actions.js";
import Details from "./Details.js";
const ContentBox = (props) => {
  const defaultImage = require("../Assets/missingimg.png");
  const replaceImage = (error) => {
    error.target.src = defaultImage;
  };
  // console.log(props.date);
  // console.log(props.text);
  // const textData = [];
  // for (let i = 0; i < props.items.length; i++) {
  //   // console.log(datas[i]);

  //   for (let m = 0; m < props.items[i].length; m++) {
  //     textData.push(props.items[i][m].entry.message);
  //   }
  //   // console.log(dateResult);
  // }
  // console.log(props.channel);
  let imageURL = "";

  switch (props.channel) {
    case "twitter":
      imageURL = require("../Assets/twitter.png");
      break;
    case "facebook":
      imageURL = require("../Assets/facebook.png");
      break;
    case "instagrambusiness":
      imageURL = require("../Assets/instagram.png");
      break;
    default:
      console.log("Invalid Input");
  }
  let status = "";
  console.log(props.status);
  switch (props.status) {
    case 0:
      status = "yellowStatus";
      break;
    case 1:
      status = "greenStatus";
      break;
    case 2:
      status = "blueStatus";
      break;
    case 3:
      status = "grayStatus";
      break;
    case 4:
      status = "redStatus";
      break;
    default:
      console.log("Invalid Input");
  }

  return (
    <React.Fragment>
      <div className="Contents">
        <div className={status}>
          <img src={imageURL} className="image" />
        </div>

        <ul>
          <li>
            <div className="actions">
              <Actions />
            </div>
            <div className="details">
              <Details date={props.date} accountname={props.accountname} />
            </div>
            <div className="text">{props.text}</div>
            <div>
              <img
                src={props.image}
                className="postImage"
                onError={replaceImage}
              />
            </div>
            <div className="postStats">
              <img
                src={require("../Assets/like.png")}
                className="postStatsImg"
              />
              0
              <img
                src={require("../Assets/comment.png")}
                className="postStatsImg"
              />
              0
              <img
                src={require("../Assets/share.png")}
                className="postStatsImg"
              />
              0
              <img
                src={require("../Assets/seen.png")}
                className="postStatsImg"
              />
              0
            </div>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ContentBox;
