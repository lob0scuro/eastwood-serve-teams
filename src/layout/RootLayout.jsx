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
        {authenticated && (
          <nav>
            <NavLink to="/">Add Volunteers</NavLink>
            <NavLink to="/serve-team-index">Schedules</NavLink>
          </nav>
        )}
      </div>
      <Outlet />
    </>
  );
};

export default RootLayout;
