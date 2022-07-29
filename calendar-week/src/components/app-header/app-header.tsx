import React from "react";
import styles from "./styles.module.scss";

const AppHeader: React.FC = () => {
  return (
    <header className={styles.container}>
      <div className={styles.content}>
        <div className={styles.leftSide}>
          <div className={styles.logo}>
            <div className={styles.logoContent}>
              <span className="material-symbols-rounded">
                sentiment_satisfied
              </span>
            </div>
          </div>
          <ul className={styles.menu}>
            <li tabIndex={0}>
              <span className="material-symbols-rounded">dashboard</span>
              Dashboard
            </li>
            <li tabIndex={0}>
              <span className="material-symbols-rounded">folder_open</span>
              Projects
            </li>
            <li tabIndex={0}>
              <span className="material-symbols-rounded">description</span>
              Invoices
            </li>
            <li tabIndex={0}>
              <span className="material-symbols-rounded">event</span>
              Calendar
            </li>
            <li tabIndex={0}>
              <span className="material-symbols-rounded">checklist</span>
              ToDo
            </li>
            <li tabIndex={0}>
              <span className="material-symbols-rounded">save</span>
              Drive
            </li>
          </ul>
        </div>
        <div className={styles.rightSide} tabIndex={-1}>
          <div className={styles.inputSearch}>
            <span className="material-symbols-rounded">search</span>
            <input type="text" placeholder="Search" />
          </div>
          <div className={styles.rightSideIcon} role="button">
            <span className="material-symbols-rounded">apps</span>
          </div>
          <div className={styles.rightSideIcon} data-icon="email" role="button">
            <span className="material-symbols-rounded">email</span>
          </div>
          <img
            src="https://github.com/alexalannunes.png?size=45"
            alt="alexalannunes"
            className={styles.userAvatar}
          />
        </div>
      </div>
    </header>
  );
};

export { AppHeader };
