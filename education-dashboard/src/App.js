import { teatchers } from "./mock/teachers";
import schedules from "./mock/schedules/days.json";
import courses from "./mock/courses/index.json";
import { CircularProgressBar } from "./chart";

function App() {
  return (
    <div className="dashboard">
      <ul className="dashboard__menu flex column ai-center">
        <li className="menu__item menu__item__first">
          <span className="material-icons-round menu__icon">drag_handle</span>
        </li>

        <li className="menu__item">
          <span className="material-icons-outlined menu__icon menu__icon--selected">
            home
          </span>
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
          <div className="flex">
            <div className="information__side flex column">
              <div className="teachers__container flex ai-center jc-between">
                <h2>Find your teacher</h2>
                <div className="dropdown__select relative">
                  <div className="flex ai-center">
                    <span className="dropdown__selected">English</span>
                    <span className="material-icons-round">expand_more</span>
                  </div>
                  <div className="dropdown__menu" role="menu">
                    <div className="dropdown__menu-item" role="listitem">
                      Espanhol
                    </div>
                    <div className="dropdown__menu-item" role="listitem">
                      Português
                    </div>
                  </div>
                </div>
              </div>

              <div className="teacher__list" role="menu">
                {teatchers.map((i, x) => (
                  <div
                    key={x}
                    className={`teacher__list-item ${
                      x === 1 && "teacher__list-item--selected"
                    } flex ai-center jc-between`}
                    role="menuitem"
                  >
                    <div className="flex ai-center teacher__list-item__name">
                      <img
                        src={i.image}
                        alt="teacher"
                        className="teatcher__image br-100"
                      />
                      <strong>Prof. {i.name}</strong>
                    </div>
                    <div className="flex ai-center text-light">
                      {i.time} hours lecture
                    </div>
                    <div className="flex ai-center text-light">
                      ${i.price}/hr
                    </div>
                    <div className="flex ai-center">
                      <div className="custom__dots__action custom__dots__action--vertical flex ai-center jc-center br-100">
                        <div />
                        <div />
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="schedule__container">
                <div className="flex ai-center jc-between">
                  <h2>Schedule</h2>

                  <div className="flex ai-center">
                    <span className="schedule__date">Oct 08, 2020</span>
                    <div className="dropdown__select dropdown__select--dark relative">
                      <div className="flex ai-center">
                        <span className="dropdown__selected">
                          Prof. {teatchers[1].name}
                        </span>
                        <span className="material-icons-round">
                          expand_more
                        </span>
                      </div>
                      <div className="dropdown__menu" role="menu">
                        {teatchers.map((i, x) => (
                          <div
                            key={x}
                            className="dropdown__menu-item"
                            role="listitem"
                          >
                            Prof. {i.name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="schedule__grid">
                  <div className="schedule-grid__item flex-1">
                    <div className="schedule-teacher__information flex column">
                      <div className="schedule-teacher__image-container flex ai-center jc-center">
                        <img
                          className="schedule-teacher__img br-100"
                          src={teatchers[1].image}
                          alt="prof"
                        />
                      </div>
                      <div className="schedule-teacher__name-container flex ai-center jc-center">
                        <h4 className="prof__name">
                          Prof. {teatchers[1].name}
                        </h4>
                      </div>
                      <div className="schedule-teacher__details-container flex ai-center jc-center column">
                        <span className="text-light teacher__detail__experience">
                          5 years Experience
                        </span>
                        <span className="text-light teacher__detail__education">
                          Master's in Language
                        </span>
                      </div>
                      <div className="schedule__teacher__action flex ai-center jc-center">
                        <button className="schedule__teacher__button">
                          Book online
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="schedule-grid__item schedule-grid__item--padding flex column flex-2">
                    {schedules.map((i, x) => (
                      <div
                        className={`flex ai-center jc-between flex-1 ${
                          x === 0 ? "ai-baseline" : ""
                        }`}
                        key={x}
                      >
                        <div
                          className={`schedule-grid__item__days flex column ${
                            x === 2 ? "as-flex-end" : ""
                          }`}
                        >
                          <div
                            className={`schedule__day__box ${
                              x === 1 ? "schedule__day_box--selected" : ""
                            } flex ai-center`}
                          >
                            <span className="scheule__day__number">
                              {i.day}
                            </span>
                            <div className="flex column">
                              <span className="schedule__day__month-name">
                                {i.month}
                              </span>
                              <span className="schedule__day__week-name">
                                {i.weekName}
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="schedule-grid__item__times text-light">
                          <span>{i.schedules}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="my-courses__side flex column">
              <h2>My Courses</h2>

              <div className="myc__list">
                {courses.map((i, x) => (
                  <div className="myc__list-item" key={x}>
                    <div className="flex ai-center jc-between">
                      <div className="flex ai-center">
                        <div className="myc__icon__img">
                          <span className={i.iconFamily}>{i.iconName}</span>
                        </div>
                        <div className="flex column myc__information">
                          <strong className="myc__name">{i.name}</strong>
                          <span className="myc__hours">{i.hours} Hours</span>
                        </div>
                      </div>
                      <div className="myc__list-item__action">
                        <div className="custom__dots__action custom__dots__action--horizontal flex ai-center jc-center br-100">
                          <div />
                          <div />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <h2>Account Progress</h2>

              <div className="flex ai-center jc-center">
                <CircularProgressBar
                  sqSize={200}
                  percentage={75}
                  strokeWidth={30}
                />

                {/* <AppChart /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
