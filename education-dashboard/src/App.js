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
            <div className="relative flex ai-center search__container">
              <span className="header__input__icon material-icons-outlined">
                search
              </span>
              <input placeholder="Search" className="header__search__input" />
            </div>
          </div>
          <div className="flex ai-center">
            <div className="header__icon__actions flex ai-center">
              <span className="icon__action icon__action--filled material-icons-round">
                add
              </span>
              <span className="icon__action icon__action--badged material-icons-outlined">
                notifications
              </span>
            </div>
            <img
              src="https://github.com/alexalannunes.png"
              alt="user"
              className="header__image__user br-100"
            />
            <strong className="header__name__user">Alex A. N.</strong>
          </div>
        </div>
        <div className="dashboard__body">
          <div className="flex ai-center">
            <div className="ddd">
              <h2>Find your teacher</h2>
            </div>
            <div className="dkk">ldkelkdew</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
