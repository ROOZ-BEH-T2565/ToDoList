import { WeekBtns } from "../weekBtns/WeekBtns";
import style from "./SelectedWeekBtns.module.css";

export const SelectedWeekBtns = (props) => {
  const getWeekDate = () => {
    const dates = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      dates.push(date);
    }
    return dates;
  };

  const weeksDate = getWeekDate();
  return (
    <div className={style.modalOverlay}>
      <div className={style.modalContent}>
        <h3>تاریخ مورد نظر را وارد کنید</h3>
        <div className={style.btns}>
          {weeksDate.map((date, index) => (
            <WeekBtns
              key={index}
              persianDate={date.toLocaleDateString("fa-IR", {
                month: "long",
                day: "numeric",
              })}
              onClick={() => props.onSelectDate(date)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
