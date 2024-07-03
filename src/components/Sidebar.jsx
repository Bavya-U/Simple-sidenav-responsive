// import React, { useState } from 'react';
// import {
//     FaTh,
//     FaBars,
//     FaUserAlt,
//     FaRegChartBar,
//     FaCommentAlt,
//     FaShoppingBag,
//     FaThList
// }from "react-icons/fa";
// import { NavLink } from 'react-router-dom';

// const Sidebar = ({children}) => {
//     const[isOpen ,setIsOpen] = useState(false);
//     const toggle = () => setIsOpen (!isOpen);
//     const menuItem=[
//         {
//             path:"/",
//             name:"Home",
//             icon:<FaTh/>
//         },
//         {
//             path:"/login",
//             name:"About",
//             icon:<FaUserAlt/>
//         },
//         {
//             path:"/download",
//             name:"Download",
//             icon:<FaRegChartBar/>
//         },
//         {
//             path:"/content",
//             name:"Content",
//             icon:<FaCommentAlt/>
//         },
//         {
//             path:"/product",
//             name:"Product",
//             icon:<FaShoppingBag/>

//         },

//     ]
//     return (
//         <div className="side">
//            <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
//                <div className="top_section">
//                    <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Nav</h1>
//                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
//                        <FaBars onClick={toggle}/>
//                    </div>
//                </div>
//                {
//                    menuItem.map((item, index)=>(
//                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
//                            <div className="icon">{item.icon}</div>
//                            <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
//                        </NavLink>
//                    ))
//                }
//            </div>
//            <main>{children}</main>
//         </div>
//     );
// };

// export default Sidebar;

import React, { useState } from "react";
import {
  FaTh,
  FaBars,
  FaUserAlt,
  FaRegChartBar,
  FaCommentAlt,
  FaShoppingBag,
  FaThList,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../components/Sidebar.css";
import { Link } from "react-router-dom";
import {
  faMinus,
  faPlus,
  faShieldDog,
  faSearch,
  faArrowRightFromBracket,
  faAnglesRight,
  faXmark,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import Dog_logo from "../../Images/simple-dog.webp";
// import { sidebarDataFirst, sidebarDataLast } from "./SidenavData";

const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaTh />,
      submenus: [
        {
          path: "/submenu1",
          name: "Submenu 1",
          icon: <FaTh />,
        },
        {
          path: "/submenu2",
          name: "Submenu 2",
          icon: <FaTh />,
        },
      ],
    },
    {
      path: "/login",
      name: "About",
      icon: <FaUserAlt />,
      submenus: [
        {
          path: "/submenu3",
          name: "Submenu 3",
          icon: <FaUserAlt />,
        },
        {
          path: "/submenu4",
          name: "Submenu 4",
          icon: <FaUserAlt />,
        },
      ],
    },
    {
      path: "/download",
      name: "Download",
      icon: <FaRegChartBar />,
      submenus: [
        {
          path: "/submenu5",
          name: "Submenu 5",
          icon: <FaRegChartBar />,
        },
        {
          path: "/submenu6",
          name: "Submenu 6",
          icon: <FaRegChartBar />,
        },
      ],
    },
    {
      path: "/content",
      name: "Content",
      icon: <FaCommentAlt />,
      submenus: [
        // Add submenus for Content
      ],
    },
    {
      path: "/product",
      name: "Product",
      icon: <FaShoppingBag />,
      submenus: [
        // Add submenus for Product
      ],
    },
  ];
  const [activeMenu, setActiveMenu] = useState(null);
  const handleMenuClick = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  const isMenuActive = (menu) => activeMenu === menu;
  return (
    <div className="side">
      <div style={{ width: isOpen ? "200px" : "50px" }} className="sidebar">
        <div className="top_section">
          <div style={{ display: isOpen ? "block" : "none" }} className="logo">
            <div className="navbar-logo-div">
              <Link className="navbar-logo-link fw-bold h2">
                <FontAwesomeIcon className="" icon={faShieldDog} />
                <p className="navbar_para text-white ms-2">Pets</p>
              </Link>
            </div>
          </div>
          <div style={{ marginLeft: isOpen ? "" : "0px" }} className="bars">
            <FaBars onClick={toggle} />
          </div>
        </div>

        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            style={{ gap: isOpen ? "15px" : "" }}
            className="link menu-item"
            activeclassName="active"
          >
            

            
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
              <div className="menu-link">
        <FontAwesomeIcon
          className="me-2 logo"
          //    onClick={handleIconSearchClick}
          icon={item.icon}
        />
        <span className="menu-link-text ">{item.title}</span>
        <FontAwesomeIcon
          className="dowp-auto pe-4"
          style={{ display: isOpen ? "flex" : "none" }}
          icon={isMenuActive(item.name) ? faMinus : faPlus}
          onClick={() => handleMenuClick(item.name)}
        />
      </div>
              {isMenuActive(item.name) && item.submenus && (
                
  <ul className="submenu mt-4  d-block p-0">
    {item.submenus.map((subItem, subIndex) => (
      <li key={subIndex} className="pt-2 text-light submenu-hover d-flex">
        <Link to={subItem.path} className="d-flex">
          <FontAwesomeIcon
            className="arrow-submenu"
            style={{ color: "#98cb46", fontSize: "14px" }}
            icon={faAnglesRight}
          />{" "}
          {subItem.name}
           <FontAwesomeIcon
                className="dowp-auto pe-4"
                icon={isMenuActive(item.name) ? faMinus : faPlus}
                onClick={() => handleMenuClick(item.name)}
              />
        </Link>
        </li>
       
    ))}
    
  </ul>
)}
 
            </div>
            
          </NavLink>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
