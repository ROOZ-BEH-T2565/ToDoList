import { Input } from "../../Components/input/Input";
import style from "./CreateTask.module.css";

export const CreateTask = () => {
  return (
    <div className={`container ${style.creatPage}`}>
      <Input label={"عنوان"} name={"title"} />
      <Input label={"توضیحات"} name={"description"} />
      <Input label={"زمان"} name={"time"} />

      <button className={style.btn}>ثبت</button>
      <div className={`${style.circle} ${style.one}`}></div>
      <div className={`${style.circle} ${style.two}`}></div>
      <div className={`${style.circle} ${style.three}`}></div>
    </div>
  );
};
