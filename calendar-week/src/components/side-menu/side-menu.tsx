import React from "react";
import styles from "./styles.module.scss";

const SideMenu: React.FC = () => {
  return (
    <aside className={styles.container}>
      <div className={styles.sideMenuTop}>
        <div role="button" tabIndex={0} className={styles.menuItem}>
          <span className="material-symbols-rounded">menu</span>
        </div>
        <div
          role="button"
          tabIndex={0}
          className={`${styles.menuItem} ${styles.menuItemIcon} ${styles.fillPrimary}`}
        >
          MK
        </div>
        <div
          role="button"
          tabIndex={0}
          className={`${styles.menuItem} ${styles.menuItemIcon} ${styles.fillOrange}`}
        >
          <span className="material-symbols-rounded">bolt</span>
        </div>
        <div
          role="button"
          tabIndex={0}
          className={`${styles.menuItem} ${styles.menuItemIcon} ${styles.fillGray} ${styles.customSize}`}
        >
          <span className="material-symbols-rounded">add</span>
        </div>
      </div>
      <div>
        <div
          role="button"
          tabIndex={0}
          className={`${styles.menuItem} ${styles.itemSettings}`}
        >
          <span className="material-symbols-rounded">settings</span>
        </div>
      </div>
    </aside>
  );
};

export { SideMenu };
