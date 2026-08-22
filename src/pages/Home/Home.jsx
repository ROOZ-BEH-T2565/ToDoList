import React, { useEffect, useState } from "react";
import style from "./Home.module.css";
import { WeekBtns } from "../../Components/weekBtns/WeekBtns";
import { Tasks } from "../../Components/Tasks/Tasks";
import { useLocalStorage } from "../../Context/localStorageContext";
import { useTheme } from "../../Context/themeMode";

export const Home = () => {
  // ذخیره ایندکس هر باتن
  const [selectedIndex, setSelectedIndex] = useState(0);
  //ذخیرع کردن دیتا خوانده شده از لوکال استوریج
  const { tasks, syncTasks } = useLocalStorage();

  useEffect(() => {
    //خواندن از لوکال استوریج
    syncTasks();
  }, []);

  // ساخت آرایه‌ای از ۷ روز
  const getDateRange = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weekDays = getDateRange();

  return (
    <main className="container">
      <div className={style.week}>
        {weekDays.map((date, index) => (
          <WeekBtns
            key={index}
            persianDate={date.toLocaleDateString("fa-IR", {
              // year: "numeric",
              month: "long",
              day: "numeric",
            })}
            isActive={selectedIndex === index}
            onClick={() => setSelectedIndex(index)}
          />
        ))}
      </div>
      <h2 className={style.taskTitle}>کار های من</h2>
      {(tasks || []).map((task) => (
        <Tasks key={task.id} task={task} />
      ))}
    </main>
  );
};
