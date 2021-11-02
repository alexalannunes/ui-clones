import React from "react";
import { clx } from "../..";
import styles from "./aside.module.css";
function Aside() {
  return (
    <div className={clx(styles.asideContainer)}>
      <div className="flex ai-center">
        <h2>New payment</h2>
        <button>Clear</button>
      </div>
    </div>
  );
}

export { Aside };
