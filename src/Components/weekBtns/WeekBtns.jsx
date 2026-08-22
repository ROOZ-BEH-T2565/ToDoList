import { useState } from "react";
import style from "./WeekBtns.module.css";

export const WeekBtns = (props) => {
  const handelClick = (e) => {
    if (props.onClick) {
      props.onClick();
    }
  };

  return (
    <button
      className={`${style.btns} ${props.isActive ? style.active : ""}`}
      onClick={handelClick}
    >
      {props.persianDate}
    </button>
  );
};
