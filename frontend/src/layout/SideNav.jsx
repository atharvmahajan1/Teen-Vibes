import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Image } from "cloudinary-react";

const SideNav = () => {
  const location = useLocation();
  return (
    <aside>
      <div className="intro">
        {/* <img
          src="https://raw.githubusercontent.com/OfficialSiddharthBisht/first-rest-api/main/intro-img.png"
          alt="Intro Image"
        /> */}
        <Image cloudName="dbwanc9og" publicId="synopsis/sgdmj1nuiphsv4yjpyj1" />

        <h3 className="heading">
          Welcome to <strong> TeenVibes</strong>
        </h3>
        <p className="body-text">
          We are here for your mental health <br /> and well-being.
        </p>
        <button className="cta">
          <Link to="/">Get Started</Link>
        </button>
      </div>
      <footer>
        <ul className="quick-links">
          <li>
            {/* to make this active when this is visited */}
            <NavLink
              to="/disclamer"
              className={location.pathname === "/disclamer" ? "active" : ""}
            >
              Disclaimer
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/privacy-policy"
              className={
                location.pathname === "/privacy-policy" ? "active" : ""
              }
            >
              Privacy Policy
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/terms-and-conditions"
              className={
                location.pathname === "/terms-and-conditions" ? "active" : ""
              }
            >
              Terms &amp; Conditions
            </NavLink>
          </li>
        </ul>
        <p className="copyright">© 2024. All rights reserved. TeenVibes</p>
      </footer>
    </aside>
  );
};

export default SideNav;
