import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../Actions/UserAction";
import { Image } from "cloudinary-react";

import { toast } from "react-toastify";

const navLinks = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About Us",
    path: "/about",
  },
  {
    title: "Contact Us",
    path: "/contact",
  },
];
const userImgUrl =
  "https://res.cloudinary.com/dbwanc9og/image/upload/v1234567890/synopsis/hhkbeoiyqkubprrr04nn";

const Header = () => {
  const dispatch = useDispatch();
  const { user, loading } = useSelector((state) => state.user);
  const [isActive, setIsActive] = useState(false);

  const logoutHandler = () => {
    dispatch(logoutUser());
    toast.success("Logged out successfully");
  };
  const handleClick = () => {
    setIsActive(!isActive);
  };
  return (
    <nav className="nav">
      <Link to="/" className="logo">
        {/* <img
          src="https://res-console.cloudinary.com/dbwanc9og/media_explorer_thumbnails/fcd2a65103c8ff9a645fe6dfeb9f9492/detailed"
          alt="Logo"
        /> */}
        <Image cloudName="dbwanc9og" publicId="synopsis/gabcr5wkabi9wpoi29be" />
              
      </Link>
      <ul className="nav-items">
        {navLinks.map((link, index) => (
          <li className="nav-item" key={index}>
            <NavLink
              to={link.path}
              className="nav-link"
              activeClassName="active"
            >
              {link.title}
            </NavLink>
          </li>
        ))}

        <li className="nav-item profile-cont">
          <Link className="nav-link ">
            <div
              className="profile-pic bg-image"
              style={{
                backgroundImage: `url(${userImgUrl})`,
              }}
            />
            <span className="fname">{user.name || "loading..."}</span>
            <i className="fa-solid fa-sort-down" />
          </Link>
          <div className="dropdown-cont hidden">
            <ul className="dropdown-menu">
              <li className="dropdown-item" onClick={logoutHandler}>
                Logout
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
