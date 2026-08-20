import { useState } from "react";
import { Input } from "../../Components/input/Input";
import style from "./CreateTask.module.css";
import { id } from "@daypicker/react/locale";

export const CreateTask = () => {
  const [tasks, setTasks] = useState({
    title: "",
    description: "",
    time: "",
  });

  //گرفتن مقدار هر اینوپوت و ذخیره در استیت
  const handleChangeTasks = (e) => {
    const { name, value } = e.target;
    setTasks((prevTasks) => ({
      ...prevTasks,
      [name]: value,
    }));
  };

  // ذخیره کردن تسک ها در لوکال استوریج
  const handleSetLocalStoeage = () => {
    //گرفتن تسک ها از لوکال استوریج
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");

    //ساخت تسک جدید
    const newTask = {
      ...tasks,
      id: Date.now(),
      completed: false,
    };
    //فرستادن تسک ها به لوکال استوریج
    localStorage.setItem("tasks", JSON.stringify([...storedTasks, newTask]));
    setTasks({ title: "", description: "", time: "" });
  };

  return (
    <div className={`container ${style.creatPage}`}>
      <Input
        label={"عنوان"}
        name={"title"}
        value={tasks.title}
        func={handleChangeTasks}
      />
      <Input
        label={"توضیحات"}
        name={"description"}
        value={tasks.description}
        func={handleChangeTasks}
      />
      <Input
        label={"زمان"}
        name={"time"}
        value={tasks.time}
        func={handleChangeTasks}
      />

      <button className={style.btn} onClick={handleSetLocalStoeage}>
        ثبت
      </button>
      <div className={`${style.circle} ${style.one}`}></div>
      <div className={`${style.circle} ${style.two}`}></div>
      <div className={`${style.circle} ${style.three}`}></div>
    </div>
  );
};
