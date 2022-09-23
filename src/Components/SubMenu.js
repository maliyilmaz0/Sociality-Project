import React, { useState } from "react";
import { Link } from "react-router-dom";
import './SubMenu.css';


const SubMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const showSubnav = () => setSubnav(!subnav);

  return (
    <React.Fragment>
      <Link to={item.path} onClick={item.subNav && showSubnav} className='SidebarLink'>
        <div className='SideBarDiv'>
          {item.icon}
          <span className='SidebarLabel'>{item.title}</span>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </Link>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <Link to={item.path} key={index} className='DropdownLink'>
              {item.icon}
              <span className ='SidebarLabel' >{item.title}</span>
            </Link>
          );
        })}
    </React.Fragment>
  );
};

export default SubMenu;
