import style from "./Tasks.module.css";

export const Tasks = (props) => {
  return (
    <div className={style.tasks}>
      <div className={style.time}>{props.task.time}</div>
      <div className={style.details}>
        <h4>{props.task.title}</h4>
        <p>{props.task.description}</p>
      </div>
      <button className={style.edit}>edit</button>
      <input type="checkbox" className={style.checkbox} />
    </div>
  );
};
