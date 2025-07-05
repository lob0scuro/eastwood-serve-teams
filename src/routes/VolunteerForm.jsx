import styles from "./VolunteerForm.module.css";
import React, { useState } from "react";
import Logo from "../assets/eastwood-logo.png";
import { formatDate, getSundaysInMonth } from "../utils/tools";
import clsx from "clsx";
import { useNavigate } from "react-router-dom";
import Monther from "../components/Monther";
import { server } from "../utils/API";

const VolunteerForm = () => {
  const today = new Date();
  const navigate = useNavigate();
  const year = today.getFullYear();
  const month = today.getMonth();
  const [monthIndex, setMonthIndex] = useState(month + 1);
  const sundays = getSundaysInMonth(year, monthIndex - 1);
  const [team, setTeam] = useState("");
  const [formInputs, setFormInputs] = useState(
    sundays.reduce((acc, _, idx) => {
      acc[`sunday${idx}`] = [{ value: "" }];
      return acc;
    }, {})
  );

  const handleChange = (sundayKey, idx, e) => {
    const values = [...formInputs[sundayKey]];
    values[idx].value = e.target.value;
    setFormInputs({ ...formInputs, [sundayKey]: values });
  };

  const handleAddInput = (sundayKey) => {
    setFormInputs({
      ...formInputs,
      [sundayKey]: [...formInputs[sundayKey], { value: "" }],
    });
  };

  const handleRemoveInput = (sundayKey, idx) => {
    const values = [...formInputs[sundayKey]];
    values.splice(idx, 1);
    setFormInputs({
      ...formInputs,
      [sundayKey]: values,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const inputs = {
      team: team,
      schedule: {},
      month: monthIndex,
    };
    sundays.forEach((_, index) => {
      const sundayKey = `sunday${index}`;
      const people = formInputs[sundayKey]
        .map((input) => input.value.trim())
        .filter((name) => name !== "");
      inputs.schedule[sundayKey] = people;
    });
    try {
      const response = await fetch(`${server}/create_volunteer`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inputs),
      });
      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error);
      }
      alert(data.message);
      navigate("/");
    } catch (error) {
      alert(error.message);
      console.error(error);
    }
  };

  return (
    <>
      <div className={styles.formHeader}>
        <h1>Serve Teams</h1>
        <p>Please fill out the form below to set up your teams schedules!</p>
      </div>
      <Monther monthIndex={monthIndex} setMonthIndex={setMonthIndex} />
      <form className={styles.volunteerForm} onSubmit={handleSubmit}>
        <div className={styles.selectBlock}>
          <label htmlFor="team">Serve Team</label>
          <select
            name="team"
            id="team"
            value={team}
            onChange={(e) => setTeam(e.target.value)}
          >
            <option value="">--Select a team--</option>
            <option value="first_impressions">First Impressions</option>
            <option value="baptism_team">Baptism Team</option>
            <option value="cafe_team">Cafe Team</option>
            <option value="gift_shop">Gift Shop</option>
            <option value="info_center">Info Center</option>
            <option value="host_and_hospitality">Host & Hospitality</option>
          </select>
        </div>
        <div className={styles.inputBlock}>
          {sundays.map((dateObj, index) => {
            const sundayKey = `sunday${index}`;
            return (
              <div key={index} className={styles.sundayBlock}>
                <h4>{formatDate(dateObj)}</h4>

                {formInputs[sundayKey]?.map((formInput, idx) => (
                  <div key={idx} className={styles.inputRow}>
                    <input
                      type="text"
                      name={`${sundayKey}_person${idx}`}
                      placeholder="Enter name"
                      value={formInput.value}
                      onChange={(e) => handleChange(sundayKey, idx, e)}
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveInput(sundayKey, idx)}
                      className={styles.delButton}
                    >
                      del
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => handleAddInput(sundayKey)}
                  className={styles.addButton}
                >
                  Add Person
                </button>
              </div>
            );
          })}
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default VolunteerForm;
