import styles from "./Monther.module.css";

const Monther = ({ monthIndex, setMonthIndex }) => {
  const monthName = new Date(0, monthIndex - 1).toLocaleString("default", {
    month: "long",
  });

  const handlePrev = () => {
    setMonthIndex((prev) => (prev === 1 ? 12 : prev - 1));
  };

  const handleNext = () => {
    setMonthIndex((prev) => (prev === 12 ? 1 : prev + 1));
  };

  return (
    <div className={styles.monther}>
      <button type="button" onClick={handlePrev}>
        prev
      </button>
      <span>{monthName}</span>
      <button type="button" onClick={handleNext}>
        next
      </button>
    </div>
  );
};

export default Monther;
