import { useState } from "react";
import { useLocalStorage } from "../../Context/localStorageContext";
import { Input } from "../../Components/input/Input";
import style from "./CreateTask.module.css";
import { SelectedWeekBtns } from "../../Components/SelectedWeekBtns/SelectedWeekBtns";

export const CreateTask = () => {
  // استت برای وصعیت نمایش مودال
  const [showModal, setShowModal] = useState(false);
  // addTask از کانتکس دریافت میکنیم
  const { addTask } = useLocalStorage();

  // استیت برای ذخیره کردن ولیو های فرم
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    time: "",
  });

  // گرفتن مقدار هر اینپوت و ذخیره در استیت فرم
  const handleChangeTasks = (e) => {
    const { name, value } = e.target;
    setFormData((prevTasks) => ({
      ...prevTasks,
      [name]: value,
    }));
  };

  //ثبت تسک ها
  const handleSubmitTask = () => {
    //اعتبار سنجی
    if (
      !formData.title.trim() ||
      !formData.description.trim() ||
      !formData.time.trim()
    ) {
      alert("لطفاً عنوان و توضیحات و زمان را وارد کنید");
      return;
    }

    //نمایش مودال
    setShowModal(true);
  };

  const handleSelectedDate = (date) => {
    //بستن مودال
    setShowModal(false);

    // ساخت تسک جدید
    const newTask = {
      ...formData,
      id: Date.now(),
      completed: false,
      date: date,
    };

    //فرستادن تسک به لوکال استوریج
    addTask(newTask);

    //پاک کردن مقادیر فرم بعد از ثبت
    setFormData({ title: "", description: "", time: "" });
  };

  return (
    <div className={`container ${style.creatPage}`}>
      <Input
        label={"عنوان"}
        name={"title"}
        value={formData.title}
        func={handleChangeTasks}
      />
      <Input
        label={"توضیحات"}
        name={"description"}
        value={formData.description}
        func={handleChangeTasks}
      />
      <Input
        label={"زمان"}
        name={"time"}
        value={formData.time}
        func={handleChangeTasks}
      />

      <button className={style.btn} onClick={handleSubmitTask}>
        ثبت
      </button>
      {showModal && <SelectedWeekBtns onSelectDate={handleSelectedDate} />}

      <div className={`${style.circle} ${style.one}`}></div>
      <div className={`${style.circle} ${style.two}`}></div>
      <div className={`${style.circle} ${style.three}`}></div>
    </div>
  );
};
