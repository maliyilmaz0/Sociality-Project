/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import data from "../data.json";
import ContentBox from "./ContentBox";
const Empty = () => {
  let datas = Object.values(data.posts_by_date);
  const dateList = [];

  for (let i = 0; i < datas.length; i++) {
    const str = datas[i][i].published_at.toString().slice(0, 10);
    const dateResult = new Date(str);

    // console.log(dateResult);
    dateList.push(dateResult);
  }
  // console.log(datas);

  // console.log(textData);
  return (
    <React.Fragment>
      <section>
        <div className="container">
          <div className="topList">
            <div>
              <ul className="topItemList">
                <li className="dotTextDesign">
                  <div className="grayDot"></div>{" "}
                  <div className="dotText">Published</div>
                </li>
                <li className="dotTextDesign">
                  <div className="greenDot"></div>{" "}
                  <div className="dotText">Scheduled</div>
                </li>
                <li className="dotTextDesign">
                  <div className="yellowDot"></div>{" "}
                  <div className="dotText">Need Approval</div>
                </li>
                <li className="dotTextDesign">
                  <div className="redDot"></div>{" "}
                  <div className="dotText">Error</div>
                </li>
                <li className="dotTextDesign">
                  <div className="blueDot"></div>{" "}
                  <div className="dotText">Notes</div>
                </li>
              </ul>
            </div>
            <div className="userImg">
              <img src={require("../Assets/Picture.png")} />
            </div>
          </div>
          {[...Array(datas.length)].map((e, i) => (
            <div key={i}>
              <p className="dateText">{dateList[i].toString().slice(4, 15)}</p>
              <div className="items">
                {[...Array(datas[i].length)].map((e, m) => (
                  <ContentBox
                    items={datas}
                    text={datas[i][m].entry.message}
                    image={datas[i][m].entry.image}
                    date={datas[i][m].published_at}
                    accountname={datas[i][m].account.name}
                    channel={datas[i][m].account.channel}
                    status={datas[i][m].status}
                    key={m}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </React.Fragment>
  );
};

export default Empty;
