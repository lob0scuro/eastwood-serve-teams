import React, { useContext, createContext, useState, useEffect } from "react";
import { server } from "../utils/API";

const authContext = createContext();

export const UserContext = ({ children }) => {
  const [authenticated, setAuthenticated] = useState(false);

  const login = async (code) => {
    try {
      const response = await fetch(`${server}/validate_code`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      setAuthenticated(true);
      return { success: true, message: data.message };
    } catch (error) {
      setAuthenticated(false);
      return { success: false, error: error.message };
    }
  };

  const logout = async () => {
    const response = await fetch(`${server}/logout`);
    const data = await response.json();
    if (response.ok) {
      return { success: true, message: data.message };
    } else {
      return { success: false };
    }
  };

  return (
    <authContext.Provider value={{ authenticated, login, logout }}>
      {children}
    </authContext.Provider>
  );
};

export const useAuth = () => useContext(authContext);
