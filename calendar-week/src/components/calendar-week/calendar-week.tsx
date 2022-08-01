import React from "react";
import styles from "./styles.module.scss";

const CalendarWeek: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.calenderHeader}>
        <div className={styles.rowFlex}>
          <h1 className={styles.rowTitleBreadcrumb}>
            Dashboard <span>/ Calendar</span>
          </h1>

          <button className={styles.options}>
            <span className="material-symbols-rounded">more_vert</span>
          </button>
        </div>
        <div className={styles.rowFlex} style={{ marginTop: "1rem" }}>
          <h1 className={styles.calendarDate}>July 2022</h1>

          <div className={styles.calendarActions}>
            <span>Today</span>
            <div className={styles.calendarToggle}>
              <button>Day</button>
              <button className={styles.toggleActiveOption}>Week</button>
              <button>Month</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CalendarWeek };
