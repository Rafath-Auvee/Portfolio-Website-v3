import React, { useContext } from "react";
import pdf from "../../assets/Rafath Bin Zafar Auvee.pdf";
import DarkModeToggle from "../Utilities/DarkModeToggle.js";
import { ThemeContext } from "../../context/ThemeContext.js";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
  const menuItems = (
    <>
      <li>
        <HashLink smooth to="/#home">
          Home
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/blog">
          Blog
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/#about">
          About
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/#project">
          Projects
        </HashLink>
      </li>
      <li>
        <HashLink smooth to="/#contact">
          Contact
        </HashLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeWidth="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <a href="#home" className="btn btn-ghost normal-case text-xl">
            Rafath Auvee
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <a
            to="#"
            className="btn mr-5"
            href={pdf}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <DarkModeToggle onToggle={setIsDarkMode} />
          {console.log({ isDarkMode })}
        </div>
      </div>
    </div>
  );
};

export default Header;
