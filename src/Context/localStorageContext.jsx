import { createContext, useState, useContext } from "react";

const LocalStorageContext = createContext(null);

//ساختن پروایدر
export const LocalStorageProvider = ({ children }) => {
  //ذخیره تسک ها که از لوکال استوریج میان
  const [tasks, setTasks] = useState(() => {
    // خواندن داده از لوکال استوریج و اگر نبود ارایه خالی بر میگردونه
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  //خواندن مقادیر لوکال استوریج و برگرداندن ان
  const syncTasks = () => {
    const savedTasks = localStorage.getItem("tasks");
    const parsedTasks = setTasks ? JSON.parse(savedTasks) : [];

    setTasks(parsedTasks);
    return tasks;
  };

  // تابع برای اضافه کردن تسک جدید 
  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  // تابع برای حذف تسک
  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const value = {
    tasks,
    addTask,
    deleteTask,
    syncTasks,
    // هر تابع دیگری که نیاز داری مثل ویرایش تسک
  };

  return (
    <LocalStorageContext.Provider value={value}>
      {children}
    </LocalStorageContext.Provider>
  );
};

// 3. هوک سفارشی برای استفاده راحت در کامپوننت‌ها
export const useLocalStorage = () => {
  const context = useContext(LocalStorageContext);
  if (!context) {
    throw new Error(
      "useLocalStorage باید داخل LocalStorageProvider استفاده شود",
    );
  }
  return context;
};
