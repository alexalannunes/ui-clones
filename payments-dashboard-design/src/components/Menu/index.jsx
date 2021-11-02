import React from "react";
import { clx } from "../..";

import styles from "./menu.module.css";

function Menu() {
  return (
    <div className={clx("border", styles.menuContainer)}>
      <div className="flex ai-center">
        <img src="https://github.com/alexalannunes.png?size=30" alt="gh-img" />
        <h5>Alex</h5>
      </div>

      <div className="flex column">
        <span>Balance</span>
        <h4>$ 32323</h4>
      </div>

      <div>
        <ul>
          <li>Menu </li>
          <li>Menu </li>
          <li>Menu </li>
          <li>Menu </li>
        </ul>
      </div>

      <div>rodape</div>
    </div>
  );
}

export { Menu };
