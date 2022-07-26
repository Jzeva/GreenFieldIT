import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="site-main-menu">
      <ul>
        {/* <li>
                    <NavLink to={process.env.PUBLIC_URL + "/home-one"}><span className="menu-text">Homepage</span></NavLink> */}
        {/* <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-one"}><span className="menu-text">Home One</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-two"}><span className="menu-text">Home Two</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/home-three"}><span className="menu-text">Home Three</span></NavLink></li>
                    </ul> */}
        {/* </li> */}
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/"}>
            <span className="menu-text">Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/about"}>
            <span className="menu-text">About Us</span>
          </NavLink>
        </li>
        {/* <li>
          <NavLink to={process.env.PUBLIC_URL + "/service"}>
            <span className="menu-text">Managed Services</span>
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to={process.env.PUBLIC_URL + "/service"}>
            <span className="menu-text"> Business Continuity</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={process.env.PUBLIC_URL + "/service"}>
            <span className="menu-text">IT Security</span>
          </NavLink>
        </li> */}
        {/* <li>
          <NavLink to={process.env.PUBLIC_URL + "/service"}>
            <span className="menu-text"> Office 365</span>
          </NavLink>
        </li> */}
        {/* Services */}
        <li className="has-children">
          <NavLink
            onClick={(event) => event.preventDefault()}
            to={process.env.PUBLIC_URL + "/service"}
          >
            <span className="menu-text">Services</span>
          </NavLink>
          <span className="menu-toggle">
            <i className="far fa-angle-down"></i>
          </span>
          <ul className="sub-menu">
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/1"}>
                <span className="menu-text">Managed Services</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/2"}>
                <span className="menu-text">VoIP Telephony</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/3"}>
                <span className="menu-text">IT Security</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/4"}>
                <span className="menu-text">SharePoint</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/5"}>
                <span className="menu-text">Office 365</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/6"}>
                <span className="menu-text">Business Continuity</span>
              </NavLink>
            </li>
          </ul>
        </li>

        {/* Partners */}
        <li className="has-children">
          <NavLink
            onClick={(event) => event.preventDefault()}
            to={process.env.PUBLIC_URL + "/service"}
          >
            <span className="menu-text">Partners</span>
          </NavLink>
          <span className="menu-toggle">
            <i className="far fa-angle-down"></i>
          </span>
          <ul className="sub-menu">
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/7"}>
                <span className="menu-text">Dell</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/2"}>
                <span className="menu-text">VoIP Telephony</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/3"}>
                <span className="menu-text">IT Security</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/4"}>
                <span className="menu-text">SharePoint</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/5"}>
                <span className="menu-text">Office 365</span>
              </NavLink>
            </li>
            <li>
              <NavLink to={process.env.PUBLIC_URL + "/work-details/2"}>
                <span className="menu-text">Business Continuity</span>
              </NavLink>
            </li>
          </ul>
        </li>
        {/* <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Work</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/work"}><span className="menu-text">Work</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/work-details/1`}><span className="menu-text">Work Details</span></NavLink></li>
                    </ul>
                </li>
                <li className="has-children">
                    <NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span className="menu-text">Blog</span></NavLink>
                    <span className="menu-toggle"><i className="far fa-angle-down"></i></span>
                    <ul className="sub-menu">
                        <li><NavLink to={process.env.PUBLIC_URL + "/blog-grid"}><span className="menu-text">Blog Grid</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + "/blog-classic"}><span className="menu-text">Blog classic</span></NavLink></li>
                        <li><NavLink to={process.env.PUBLIC_URL + `/blog-details/1`}><span className="menu-text">Blog Details</span></NavLink></li>
                    </ul>
                </li> */}
        {/* <li>
                    <NavLink to={process.env.PUBLIC_URL + "/contact"}><span className="menu-text">Contact Us</span></NavLink>
                </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
