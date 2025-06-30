import styles from "../components/Schedule.module.css";
import React, { useEffect, useState } from "react";
import Monther from "../components/Monther";
import Schedule from "../components/Schedule";
import { getAllServeTeams } from "../utils/API";
import { ServeTeams } from "../utils/tools";

const AllTeamsSchedule = () => {
  const month = new Date();
  const [monthIndex, setMonthIndex] = useState(month.getMonth() + 1);
  const [serveTeams, setServeTeams] = useState([]);

  useEffect(() => {
    const fetchAllTeams = async () => {
      try {
        const response = await getAllServeTeams(monthIndex);
        if (!response.success) {
          throw new Error(response.error);
        }
        console.log(response.serveTeams);
        setServeTeams(response.serveTeams);
      } catch (error) {
        alert(error.message);
        console.error(error);
      }
    };
    fetchAllTeams();
  }, []);

  return (
    <>
      <Monther monthIndex={monthIndex} setMonthIndex={setMonthIndex} />
      <h1 className={styles.scheduleHeader}>All Teams Schedule</h1>
      <Schedule volunteers={serveTeams} />
    </>
  );
};

export default AllTeamsSchedule;
