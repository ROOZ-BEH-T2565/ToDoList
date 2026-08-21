import { useEffect, useState } from "react";
import style from "./Header.module.css";
import PersianCalendar from "../Calendar/PersianCalendar";
import { useLocalStorage } from "../../Context/localStorageContext";
import { useTheme } from "../../Context/themeMode";
import { useNavigate, useLocation } from "react-router-dom";

export const Header = () => {
  const [show, setShow] = useState(false);
  const { tasks } = useLocalStorage();
  const { theme, toggleTheme, isDark } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    const path = location.pathname;

    if (path === "/") {
      setIsHomePage(true);
    } else {
      setIsHomePage(false);
    }
  }, [location]);

  // گرفتن تاریخ امروز
  const getDate = new Date();
  const todayDate = getDate.toLocaleDateString("fa-IR", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className={style.header}>
      <div className={style.col}>
        <button
          onClick={toggleTheme}
          title={isDark ? "حالت روشن" : "حالت تیره"}
        >
          {isDark ? "☀️" : "🌙"}
        </button>
        <span className={style.date}>{todayDate}</span>
        <span
          className={style.calender}
          onClick={() => {
            setShow(!show);
          }}
        >
          📅
        </span>
        {show && <PersianCalendar />}
      </div>
      <div className={style.col}>
        <span className={style.task}>{tasks.length} کار</span>

        {isHomePage ? (
          <button onClick={() => navigate("/create")}>اضافه کردن</button>
        ) : (
          <button onClick={() => navigate("/")}>لیست کار ها</button>
        )}
      </div>
    </header>
  );
};
