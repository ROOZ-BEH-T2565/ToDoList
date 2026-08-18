import style from "./Header.module.css";

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.col}>
        <span>menu</span>
        <span className={style.date}>14 sept</span>
        <span>taghvim</span>
      </div>
      <div className={style.col}>
        <span className={style.task}>6 Task</span>
        <button>add New</button>
      </div>
    </header>
  );
};
