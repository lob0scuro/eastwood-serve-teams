import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "../assets/eastwood-logo.png";

const RootLayout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="logo-container">
        <img src={Logo} alt="eastwood logo" className="logo" />
        <nav>
          <NavLink to="/">Add Volunteers</NavLink>
          <NavLink to="/serve-team-index">Schedules</NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;
