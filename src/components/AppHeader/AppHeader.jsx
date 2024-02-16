import React from "react";
import AHStyles from "./AppHeader.module.css";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import queryString from "query-string";
import Icon from "../../ui/icon/icon";

const AppHeader = () => {
  const location = useLocation();
  const history = useHistory();

  const updateSearchURL = (searchParams) => {
    const currentSearch = queryString.parse(location.search);
    const newSearch = { ...currentSearch, ...searchParams };
    history.push({
      pathname: location.pathname,
      search: queryString.stringify(newSearch),
    });
  };

  return (
    <header className={`${AHStyles.header}`}>
      <nav className={`${AHStyles.nav} ${AHStyles.stroke}`}>
        <ul
          className={`
        ${AHStyles.navList} mr-28`}
        >
          <li className={AHStyles.navListItem}>
            <NavLink
              to="/"
              exact
              className={`${AHStyles.navLink} pt-4 pb-4 pr-5 pl-5 mr-2`}
              activeClassName={AHStyles.activeLink}
              onClick={() => {
                updateSearchURL({ section: "constructor" });
              }}
            >
              <Icon
                type="Feather"
                size={25}
                isActive={location.pathname === "/" ? true : false}
              />
              <span
                className={`${AHStyles.linkText}text ${
                  location.pathname === "/"
                    ? "text_color_active"
                    : "text_color_inactive"
                } text_type_main-default ml-2`}
              >
                Portfolio
              </span>
            </NavLink>
          </li>
        </ul>
        <div className={AHStyles.logo}>
          <h1 className={`${AHStyles.logoText} text `}>
            Welcome My Personal Page
          </h1>
        </div>
        <div className={`${AHStyles.list} ${AHStyles.rightList}`}>
          <ul
            className={`
        ${AHStyles.navList} mr-28`}
          >
            <li className={AHStyles.navListItem}>
              <NavLink
                to="/contact"
                className={`${AHStyles.navLink}  pt-4 pb-4 pr-5 pl-5`}
                activeClassName={AHStyles.activeLink}
                onClick={() => {
                  updateSearchURL({ section: "contact" });
                }}
              >
                <Icon
                  type="Contact"
                  size={25}
                  isActive={location.pathname === "/contact" ? true : false}
                />
                <span
                  className={`${AHStyles.linkText}text ${
                    location.pathname === "/contact"
                      ? "text_color_active"
                      : "text_color_inactive"
                  } text_type_main-default ml-2`}
                >
                  Contact{" "}
                </span>
              </NavLink>
            </li>
            <li className={AHStyles.navListItem}>
              <NavLink
                to="/profile"
                className={`${AHStyles.navLink}   pt-4 pb-4 pr-5 pl-5`}
                activeClassName={AHStyles.activeLink}
                onClick={() => {
                  updateSearchURL({ section: "profile" });
                }}
              >
                <Icon
                  type="AboutMe"
                  size={25}
                  isActive={
                    ["/profile"].includes(location.pathname) ? true : false
                  }
                />
                <span
                  className={`linkText ${
                    ["/profile"].includes(location.pathname)
                      ? "text_color_active"
                      : "text_color_inactive"
                  } text_type_main-default ml-2`}
                >
                  ABOUT ME
                  <span className={`${AHStyles.line}`}></span>
                </span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
