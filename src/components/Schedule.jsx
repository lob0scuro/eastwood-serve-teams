import styles from "./Schedule.module.css";
import React from "react";
import { getSundaysInMonth, formatDate } from "../utils/tools";
import { deleteVolunteer } from "../utils/API";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/UserContext";

const Schedule = ({ volunteers }) => {
  const { authenticated } = useAuth();
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const sundays = getSundaysInMonth(year, month);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (!confirm("Delete volunteer?")) {
      return;
    }
    deleteVolunteer(id);
    navigate("/");
  };

  if (volunteers.length === 0) {
    return <p style={{ textAlign: "center" }}>No volunteers for this month</p>;
  }
  return (
    <div className={styles.weeksContainer}>
      {sundays.map((dateObj, index) => {
        const volunteersForThisWeek = volunteers.filter(
          (person) => person.week_index === index
        );

        return (
          <div className={styles.weekBlock} key={index}>
            <h3>{formatDate(dateObj)}</h3>
            <div className={styles.nameBlock}>
              {volunteersForThisWeek.length > 0 ? (
                volunteersForThisWeek.map((person) => (
                  <p
                    key={person.id}
                    className={authenticated ? styles.volunteer : ""}
                    onClick={
                      authenticated ? () => handleDelete(person.id) : null
                    }
                  >
                    {person.position ? `${person.position}:` : null}
                    {person.name}
                  </p>
                ))
              ) : (
                <p>none</p>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Schedule;
