import React from "react";
import styles from "./styles.module.scss";

function CalendarContent() {
  return (
    <div className={styles.content}>
      <div className={styles.calendarTimes}>
        {[8, 9, 10, 11, 12, 13, 14, 15, 16, 17].map((i) => (
          <div key={i} className={styles.timeRow}>{`${i
            .toString()
            .padStart(2, "0")}:00`}</div>
        ))}
      </div>
      <div className={styles.calendarDays}>
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div className={styles.calendarDaysColumn} key={i}>
            <div className={styles.columHeader}>
              <h4>{i}</h4>
              <span>Mon</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

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
      <CalendarContent />
    </div>
  );
};

export { CalendarWeek };
