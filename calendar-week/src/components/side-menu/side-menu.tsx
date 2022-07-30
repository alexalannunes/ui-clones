import React from "react";
import styles from "./styles.module.scss";

const SideMenu: React.FC = () => {
  return (
    <aside className={styles.container}>
      <div role="button" tabIndex={0} className={styles.menuItem}>
        <span className="material-symbols-rounded">menu</span>
      </div>
      <div
        role="button"
        tabIndex={0}
        className={`${styles.menuItem} ${styles.fillPrimary} ${styles.menuItemIcon}`}
      >
        MK
      </div>
      <div role="button" tabIndex={0} className={styles.menuItem}>
        <span className="material-symbols-rounded">menu</span>
      </div>
      <div role="button" tabIndex={0} className={styles.menuItem}>
        <span className="material-symbols-rounded">add</span>
      </div>
    </aside>
  );
};

export { SideMenu };
