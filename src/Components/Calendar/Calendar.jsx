import { useState } from "react";
import { DayPicker } from "@daypicker/persian";
import "@daypicker/react/style.css";

function PersianCalendar() {
  // state برای ذخیره تاریخ انتخاب‌شده
  const [selectedDate, setSelectedDate] = useState(null);

  // تابعی که هنگام انتخاب روز اجرا می‌شود
  const handleSelect = (date) => {
    if (date) {
      // ذخیره در state
      setSelectedDate(date);

      // چاپ شیء Date در کنسول
      console.log("تاریخ خام (شیء Date):", date);

      // چاپ تاریخ به صورت شمسی و خوانا
      const persianDate = date.toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      console.log("تاریخ شمسی:", persianDate);

      // نمایش به کاربر با alert
      // alert(`شما روی تاریخ ${persianDate} کلیک کردید.`);
    }
  };

  // (اختیاری) تابعی برای کلیک روی هر روز (حتی روزهای تکراری)
  const handleDayClick = (day) => {
    console.log("روی روز کلیک شد:", day);
    // می‌توانید کار دیگری مثل تغییر استایل یا لاگ کردن انجام دهید
  };

  return (
    <div>
      <DayPicker
        mode="single" // حالت انتخاب تکی
        onSelect={handleSelect} // اینجا تابع ما صدا زده می‌شود
        onDayClick={handleDayClick} // (اختیاری) برای رویداد کلیک لحظه‌ای
        selected={selectedDate} // برای هایلایت کردن روز انتخاب‌شده
      />
      {/* نمایش تاریخ انتخاب‌شده در زیر تقویم */}
      {selectedDate && (
        <p style={{ marginTop: "20px", direction: "rtl" }}>
          📅 تاریخ انتخاب‌شده:{" "}
          <strong>
            {selectedDate.toLocaleDateString("fa-IR", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </strong>
        </p>
      )}
    </div>
  );
}

export default PersianCalendar;