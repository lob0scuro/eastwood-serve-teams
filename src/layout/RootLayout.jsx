import React from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import Logo from "../assets/eastwood-logo.png";
import { useAuth } from "../context/UserContext";

const RootLayout = () => {
  const navigate = useNavigate();
  const { authenticated } = useAuth();
  return (
    <>
      <div className="logo-container">
        <img src={Logo} alt="eastwood logo" className="logo" />
        <nav>
          {authenticated ? (
            <NavLink to="/add-volunteer">Add Volunteers</NavLink>
          ) : (
            <NavLink to="/login">Add Volunteer</NavLink>
          )}
          <NavLink to="/">Schedules</NavLink>
        </nav>
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;
