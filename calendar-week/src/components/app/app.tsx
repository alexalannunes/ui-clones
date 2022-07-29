import React from "react";
import { AppHeader } from "../app-header/app-header";
import { CalendarWeek } from "../calendar-week/calendar-week";
import { SideMenu } from "../side-menu/side-menu";
import styles from "./styles.module.scss";
const CalendarApp: React.FC = () => {
  return (
    <div className={styles.container}>
      <AppHeader />
      <SideMenu />
      <CalendarWeek />
    </div>
  );
};

export { CalendarApp };
