import { Link } from "react-router-dom";
import styles from "./ServeTeamNavigation.module.css";
import { ServeTeams } from "../utils/tools";
// import { getAllServeTeams } from "../utils/API";

const ServeTeamNavigation = () => {
  return (
    <>
      <h1 className={styles.indexHeader}>Serve Team Schedules</h1>
      <div className={styles.teamLinks}>
        {/* <Link to={`/all-teams`}>View All</Link> */}
        {ServeTeams.map(({ key, value }) => (
          <Link key={key} to={`/team/${key}`}>
            {value}
          </Link>
        ))}
      </div>
    </>
  );
};

export default ServeTeamNavigation;
