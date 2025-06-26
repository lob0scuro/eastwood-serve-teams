import styles from "./Login.module.css";
import React, { useState } from "react";
import { useAuth } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [accessCode, setAccessCode] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();
  const handleChange = (e) => {
    setAccessCode(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requestAccess = await login(accessCode);
    if (requestAccess.success) {
      navigate("/");
    } else {
      alert(requestAccess.error);
    }
  };
  return (
    <>
      <h1 className={styles.loginHeader}>Enter Access Code</h1>
      <form onSubmit={handleSubmit} className={styles.loginForm}>
        <input
          type="text"
          name="code"
          id="code"
          value={accessCode}
          onChange={handleChange}
        />
        <button type="submit" disabled={!accessCode.trim()}>
          Enter
        </button>
      </form>
    </>
  );
};

export default Login;
