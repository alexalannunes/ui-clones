import React from "react";
import { clx } from "../..";

import styles from "./content.module.css";

function Content() {
  return (
    <div className={clx(styles.contentContainer)}>
      <div className="flex ai-center jc-between">
        <div className="flex column">
          <h2>Payments</h2>
          <span>Use the search bar to complete your payment</span>
        </div>
        <div>Bell Icon</div>
      </div>
    </div>
  );
}

export { Content };
