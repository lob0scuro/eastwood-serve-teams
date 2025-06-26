import styles from "./Monther.module.css";
import { useState } from "react";

const Monther = ({ monthIndex, setMonthIndex }) => {
  const monthName = new Date(0, monthIndex - 1).toLocaleString("defualt", {
    month: "long",
  });
  return (
    <div className={styles.monther}>
      <button type="button" onClick={() => setMonthIndex(monthIndex - 1)}>
        prev
      </button>
      <span>{monthName}</span>
      <button type="button" onClick={() => setMonthIndex(monthIndex + 1)}>
        next
      </button>
    </div>
  );
};

export default Monther;
