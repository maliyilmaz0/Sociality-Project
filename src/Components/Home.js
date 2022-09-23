/* eslint-disable no-unused-vars */
import "./Home.css";
import React, { useEffect, useState } from "react";
import ContentBox from "./ContentBox";
import SideBar from "./SideBar";
import data from "../data.json";
import NavPage from "./NavPage";
const Home = () => {
  const datas = Object.values(data.posts_by_date);
  let count = 0;
  // console.log(myArray[1]);
  // console.log(items);
  // datas[i][i].published_at.toString()
  const dateList = [];
  for (let i = 0; i < datas.length; i++) {
    const str = datas[i][i].published_at.toString().slice(0, 10);
    const dateResult = new Date(str);
    // console.log(dateResult);
    dateList.push(dateResult);
  }

  return (
    <React.Fragment>
      <div className="home">
        <SideBar />
        <NavPage />
      </div>
    </React.Fragment>
  );
};

export default Home;
