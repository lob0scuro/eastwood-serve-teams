import styles from "../components/Schedule.module.css";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ServeTeams } from "../utils/tools";
import Schedule from "../components/Schedule";
import Monther from "../components/Monther";
import { server } from "../utils/API";

const TeamSchedule = () => {
  const { team } = useParams();
  const teamName = ServeTeams.find((k) => k.key === team)?.value;
  const month = new Date();
  const [monthIndex, setMonthIndex] = useState(month.getMonth() + 1);

  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    const getVolunteers = async () => {
      try {
        const response = await fetch(
          `${server}/get_team_volunteers/${team}/${monthIndex}`
        );
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.error);
        }
        setVolunteers(data.data.volunteers);
      } catch (error) {
        alert(error.message);
        console.error(error);
      }
    };
    if (team && monthIndex) {
      getVolunteers();
    }
  }, [team, monthIndex]);

  return (
    <>
      <Monther monthIndex={monthIndex} setMonthIndex={setMonthIndex} />
      <h1 className={styles.scheduleHeader}>{teamName}</h1>
      <Schedule volunteers={volunteers} />
    </>
  );
};

export default TeamSchedule;
