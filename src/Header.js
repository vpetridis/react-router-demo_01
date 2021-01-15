import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [activeLink, setActiveLink] = useState({
    home: true,
    about: false,
    contact: false
  });
  const handleClick = (name) => {
    let newState = [];
    let oldState = Object.entries(activeLink);
    for (let link of oldState) {
      if (name === link[0]) {
        link[1] = true;
      } else link[1] = false;
      console.log("link is", link);
      newState.push(link);
    }
    const newObjectState = Object.fromEntries(newState);
    setActiveLink(newObjectState);
    console.log("new state is", activeLink);
  };

  return (
    <nav className="nav nav-pills flex-row flex-sm-row p-1">
      <Link
        onClick={() => handleClick("home")}
        className={`nav-item nav-link  ${activeLink.home && "active"}`}
        to="/"
      >
        Home
      </Link>
      <Link
        onClick={() => handleClick("about")}
        className={`nav-item nav-link  ${activeLink.about && "active"}`}
        to="about"
      >
        About
      </Link>
      <Link
        onClick={() => handleClick("contact")}
        className={`nav-item nav-link  ${activeLink.contact && "active"}`}
        to="contact"
      >
        Contact
      </Link>
    </nav>
  );
};
export default Header;
