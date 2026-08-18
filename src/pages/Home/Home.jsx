import React, { useState } from "react";
import style from "./Home.module.css";
import { WeekBtns } from "../../Components/weekBtns/WeekBtns";

export const Home = () => {
  const [selectedDate, setSelectedDate] = useState(null);

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
    <main className={style.home}>
      <div className={style.week}>
        {weekDays.map((date, index) => (
          <WeekBtns
            key={index}
            persianDate={date.toLocaleDateString("fa-IR", {
              // year: "numeric",
              month: "long",
              day: "numeric",
            })}
          />
        ))}
      </div>
    </main>
  );
};
// return (
//   <div>
//     {weekDays.map((date, index) => {
//       const persianDate = date.toLocaleDateString('fa-IR', {
//         year: 'numeric',
//         month: 'long',
//         day: 'numeric',
//       });
//       return (
//         <button
//           key={index}
//           onClick={() => setSelectedDate(date)}

//         >
//           {persianDate}
//         </button>
//       );
//     })}

//   </div>
// );
