/* eslint-disable jsx-a11y/anchor-is-valid */
import "./Actions.css";
import React from "react";
const Actions = () => {

  

  return (
    <React.Fragment>
      <div className="actions">
        <div className="action_items">
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src={require("../Assets/trashcan.png")}
              alt="example"
              style={{ width: 18, height: 18, paddingRight: 5 }}
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src={require("../Assets/edit.png")}
              alt="example"
              style={{ width: 18, height: 18, paddingRight: 5 }}
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src={require("../Assets/cancel.png")}
              alt="example"
              style={{ width: 18, height: 18, paddingRight: 7 }}
            />
          </a>

          <a href="#" target="_blank" rel="noreferrer">
            <img
              src={require("../Assets/tabs.png")}
              alt="example"
              style={{ width: 18, height: 18, paddingRight: 7 }}
            />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <img
              src={require("../Assets/list.png")}
              alt="example"
              style={{ width: 18, height: 18, paddingRight: 20 }}
            />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Actions;
