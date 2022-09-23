/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import notificationLogo from "../Assets/notification.png";
import summaryLogo from "../Assets/summary.png";
import publishLogo from "../Assets/publish.png";
import engageLogo from "../Assets/engage.png";
import listenLogo from "../Assets/listen.png";
import reportLogo from "../Assets/report.png";



export const SidebarData = [
  {
    title: "NOTIFICATIONS",
    icon: <img src={notificationLogo} />,
  },
  {
    title: "SUMMARY",
    icon: <img src={summaryLogo} />,
    iconClosed: <AiIcons.AiOutlinePlus />,
    iconOpened: <AiIcons.AiOutlineMinus />,
    subNav: [
      {
        title: "1",
        icon: <BsIcons.BsDot size ={30}/>,
      },
      {
        title: "2",
        icon: <BsIcons.BsDot size ={30}/>,
      },
    ],
  },

  {
    title: "PUBLISH",
    icon: <img src={publishLogo} />,
    iconClosed: <AiIcons.AiOutlinePlus />,
    iconOpened: <AiIcons.AiOutlineMinus />,

    subNav: [
      {
        title: "Compose",
        icon: <BsIcons.BsDot size ={30}/>,
        cName: "sub-nav",
      },
      {
        title: "Feed",
        icon: <BsIcons.BsDot size ={30}/>,
        cName: "sub-nav",
      },
    ],
  },

  {
    title: "ENGAGE",
    icon: <img src={engageLogo} />,

    iconClosed: <AiIcons.AiOutlinePlus />,
    iconOpened: <AiIcons.AiOutlineMinus />,

    subNav: [
      {
        title: "1",
        icon: <BsIcons.BsDot size ={30}/>,
      },
      {
        title: "2",
        icon: <BsIcons.BsDot size ={30}/>,
      },
    ],
  },
  {
    title: "LISTEN",
    icon: <img src={listenLogo} />,

    iconClosed: <AiIcons.AiOutlinePlus />,
    iconOpened: <AiIcons.AiOutlineMinus />,

    subNav: [
      {
        title: "1",
        icon: <BsIcons.BsDot size ={30}/>,
      },
      {
        title: "2",
        icon: <BsIcons.BsDot size ={30}/>,
      },
    ],
  },
  {
    title: "REPORT",
    icon: <img src={reportLogo} />,

    iconClosed: <AiIcons.AiOutlinePlus />,
    iconOpened: <AiIcons.AiOutlineMinus />,

    subNav: [
      {
        title: "1",
        icon: <BsIcons.BsDot size ={30}/>,
      },
      {
        title: "2",
        icon: <BsIcons.BsDot size ={30}/>,
      },
    ],
  },
];
