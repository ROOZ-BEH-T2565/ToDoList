import style from "./WeekBtns.module.css";

export const WeekBtns = (props) => {
  return <button className={style.btns}>{props.persianDate}</button>;
};
