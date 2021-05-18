function App() {
  return (
    <div className="dashboard">
      <ul className="dashboard__menu flex column ai-center">
        <li className="menu__item menu__item__first">
          <span className="material-icons-round menu__icon">drag_handle</span>
        </li>

        <li className="menu__item">
          <span className="material-icons-outlined menu__icon">home</span>
        </li>
        <li className="menu__item">
          <span className="material-icons-outlined menu__icon">
            account_circle
          </span>
        </li>
        <li className="menu__item">
          <span className="material-icons-outlined menu__icon">chat</span>
        </li>
        <li className="menu__item">
          <span className="material-icons-round menu__icon">event</span>
        </li>
        <li className="menu__item">
          <span className="material-icons-round menu__icon">schedule</span>
        </li>
        <li className="menu__item">
          <span className="material-icons-outlined menu__icon">settings</span>
        </li>
      </ul>
      <div className="dashboard__content">
        <div className="content__header flex ai-center jc-between">
          <div className="flex ai-center">
            <h2 className="content__title">Dashboard</h2>
            <input />
          </div>
          <div className="flex ai-center">
            <span className="material-icons-outlined">notifications</span>
            <span className="material-icons-round">add</span>
            <img
              src="https://github.com/alexalannunes.png"
              width="50"
              alt="a"
            />
            <h4>alex</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
