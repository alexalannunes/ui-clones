import React, { useEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";

function CalendarContent() {
  const contentRef = useRef<HTMLDivElement | null>(null);

  const [info, setInfo] = useState({
    width: 100,
  });

  useEffect(() => {
    function onResize() {
      if (contentRef.current) {
        const WIDTH = contentRef.current.clientWidth;
        const HEIGHT = contentRef.current.clientHeight;
        const MAX_DAYS_VIEW = 7;
        const COLUMN_WIDTH = WIDTH / MAX_DAYS_VIEW;

        console.log("oi", HEIGHT);
        setInfo({
          width: COLUMN_WIDTH,
        });
      }
    }

    onResize();

    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <div className={styles.content}>
      <div
        style={{ width: 100, backgroundColor: "#ccc", height: "100%" }}
      ></div>
      <div
        ref={contentRef}
        style={{ display: "flex", width: "calc(100% - 100px)" }}
      >
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <div
            key={i}
            style={{
              flex: 1,
              width: info.width,
              borderRight: "1px solid #ccc",
            }}
          >
            lorem
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
