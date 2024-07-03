import {
    faUser,
    faStethoscope,
    faChartLine,
    faBolt,
    faBarsProgress,
    faFireFlameCurved,
    faUserGroup,
  } from "@fortawesome/free-solid-svg-icons";
  
  export function sidebarDataFirst() {
    return [
      {
        title: "Dashboard",
        icon: faChartLine,
        submenu: [
          {
            title: "Login",
            path: "/login",
          },
          {
            title: "Item",
            path: "/",
          },
        ],
      },
      {
        title: "Pets",
        icon: faBolt,
        submenu: [
          {
            title: "Item",
            path: "/",
          },
          {
            title: "Item",
            path: "/",
          },
        ],
      },
      {
        title: "Customers",
        icon: faUser,
        submenu: [
          {
            title: "Item",
            path: "/",
          },
          {
            title: "Item",
            path: "/",
          },
        ],
      },
      {
        title: "Vets",
        icon: faStethoscope,
        submenu: [
          {
            title: "Item",
            path: "/",
          },
          {
            title: "Item",
            path: "/",
          },
        ],
      },
      {
        title: "Settings",
        icon: faBarsProgress,
        submenu: [
          {
            title: "Item",
            path: "/",
          },
          {
            title: "Item",
            path: "/",
          },
        ],
      },
    ];
  }
  
  export function sidebarDataLast() {
    return [
      {
        title: "Updates",
        icon: faFireFlameCurved,
        path: "/",
      },
      {
        title: "Support",
        icon: faUserGroup,
        path: "/",
      },
    ];
  }
  