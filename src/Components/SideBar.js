/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import "./Sidebar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import DropDown from "./DropDown";
const SideBar = () => {
  const activeLink = "active";

  return (
    <React.Fragment>
      <div>
        <div className="main_header">
          <img
            src={require("../Assets/socialitylogo.png")}
            className="main_logo"
          />
        </div>
        <div className="sidebar_container">
          <div className="company_select">
            <ul className="company_list">
              <NavLink
                to="/4"
                className={({ isActive }) => (isActive ? activeLink : null)}
              >
                <img
                  src={require("../Assets/Logo1.png")}
                  className="logo_list"
                />
              </NavLink>

              <NavLink
                to="/2"
                className={({ isActive }) => (isActive ? activeLink : null)}
              >
                <img
                  src={require("../Assets/Logo2.png")}
                  className="logo_list"
                />
              </NavLink>

              <NavLink
                to="/3"
                className={({ isActive }) => (isActive ? activeLink : null)}
              >
                <img
                  src={require("../Assets/Logo3.png")}
                  className="logo_list"
                />
              </NavLink>

              <NavLink
                to="/1"
                className={({ isActive }) => (isActive ? activeLink : null)}
              >
                <img
                  src={require("../Assets/Logo4.png")}
                  className={"logo_list"}
                />
              </NavLink>
              <NavLink
                to="/5"
                className={({ isActive }) => (isActive ? activeLink : null)}
              >
                <img
                  src={require("../Assets/Logo5.png")}
                  className="logo_list"
                />
              </NavLink>

              <NavLink
                to="/6"
                className={({ isActive }) => (isActive ? activeLink : null)}
              >
                <img
                  src={require("../Assets/Logo6.png")}
                  className="logo_list"
                />
              </NavLink>
            </ul>
          </div>
          <div className="company_details">
            <DropDown />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SideBar;
