import style from "./Tasks.module.css";
export const Tasks = () => {
  return (
    <div className={style.tasks}>
      <div className={style.time}>10:00 --- 12:00</div>
      <div className={style.details}>
        <h4>ورزش</h4>
        <p>رفتن به باشگاه</p>
      </div>
      <input type="checkbox" className={style.test}/>
    </div>
  );
};
