import React, { useState } from "react";
import {
  MdOutlinePayments,
  MdOutlineSettings,
  MdPayment,
  MdSwapHoriz,
} from "react-icons/md";
import { clx } from "../..";
import styles from "./menu.module.css";

const menu = [
  {
    text: "Transactions",
    icon: <MdSwapHoriz size={22} />,
  },
  {
    text: "Payments",
    icon: <MdOutlinePayments size={22} />,
  },
  {
    text: "Cards",
    icon: <MdPayment size={22} />,
  },
  {
    text: "Administration",
    icon: <MdOutlineSettings size={22} />,
  },
];

function Menu() {
  const [selected, setSelected] = useState(menu[1].text);
  return (
    <div className={clx(styles.menuContainer)}>
      <div className="flex column jc-between">
        <div className={clx("flex ai-center", styles.userContainer)}>
          <img
            className={clx("br-100", styles.userImage)}
            src="https://github.com/alexalannunes.png?size=50"
            alt="gh-img"
          />
          <div className="flex column">
            <h3 className="m-0">Alex AN</h3>
            <span>Rocket GmbH</span>
          </div>
        </div>

        <div className={clx("flex column", styles.balanceContainer)}>
          <span>Balance</span>
          <h3 className="m-0">R$ 250.421,00</h3>
        </div>

        <div className={clx(styles.menuNavContainer)}>
          <ul>
            {menu.map((item, index) => (
              <li
                key={index}
                className={item.text === selected ? styles.selected : ""}
                onClick={() => setSelected(item.text)}
              >
                {menu[index].icon}
                <span className="menuItemText">{item.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>rodape</div>
    </div>
  );
}

export { Menu };
