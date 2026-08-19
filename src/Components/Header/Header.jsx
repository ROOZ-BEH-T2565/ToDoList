import style from "./Header.module.css";
export const Header = () => {
  const getDate = new Date();
  const todayDate = getDate.toLocaleDateString("fa-IR", {
    month: "long",
    day: "numeric",
  });

  return (
    <header className={style.header}>
      <div className={style.col}>
        <span>menu</span>
        <span className={style.date}>{todayDate}</span>
        <span>taghvim</span>
      </div>
      <div className={style.col}>
        <span className={style.task}>6 کار</span>
        <button>اضافه کردن</button>
      </div>
    </header>
  );
};
