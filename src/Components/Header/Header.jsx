import { useState } from "react";
import style from "./Header.module.css";
import PersianCalendar from "../Calendar/PersianCalendar";
import { useLocalStorage } from "../../Context/localStorageContext";

export const Header = () => {
  const [show, setShow] = useState(false);
  const { tasks } = useLocalStorage();

  // گرفتن تاریخ امروز
  const getDate = new Date();
  const todayDate = getDate.toLocaleDateString("fa-IR", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className={style.header}>
      <div className={style.col}>
        <span>دسته بندی ها</span>
        <span className={style.date}>{todayDate}</span>
        <span
          className={style.calender}
          onClick={() => {
            setShow(!show);
          }}
        >
          تقویم
        </span>
        {show && <PersianCalendar />}
      </div>
      <div className={style.col}>
        <span className={style.task}>{tasks.length} کار</span>
        <button>اضافه کردن</button>
      </div>
    </header>
  );
};
