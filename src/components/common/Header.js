import React from "react";
import { NavLink } from "react-router-dom";

const HomeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
const Header = () => {
  const activeStyle = { color: "#F15B2A" };
  return (
    <div className='container-fluid' style={HomeStyle}>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <NavLink to='/' exact activeStyle={activeStyle}>
          Home
        </NavLink>
        |
        <NavLink to='/about' activeStyle={activeStyle}>
          About
        </NavLink>
        |
        <NavLink to='/books' activeStyle={activeStyle}>
          Books
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
