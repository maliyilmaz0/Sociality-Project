import React from "react";
import { SidebarData } from "./DropDownData";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import "./DropDown.css";


const Sidebar = () => {
  return (
    <React.Fragment>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="SidebarNav">
          <div className="SidebarWrap">
            {SidebarData.map((item, index) => {
              return <SubMenu item={item} key={index} />;
            })}
          </div>
        </nav>
      </IconContext.Provider>
    </React.Fragment>
  );
};

export default Sidebar;
