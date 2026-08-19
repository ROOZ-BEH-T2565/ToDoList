import { useState } from "react";
import { DayPicker } from "@daypicker/persian";
import "@daypicker/react/style.css";
import style from "./PersianCalender.module.css";

function PersianCalendar() {
  return (
    <div className={style.calender}>
      <DayPicker mode="single" />
    </div>
  );
}

export default PersianCalendar;
