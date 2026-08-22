import { createContext, useState, useContext, useEffect } from "react";

//ساختن کانتکس
const ThemeContext = createContext(null);

//ساخت پروایدر
export const ThemeProvider = ({ children }) => {
  // تشخیص تم پیش‌فرض از localStorage یا سیستم
  const getInitialTheme = () => {
    // بررسی localStorage
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      return savedTheme;
    }

    // اگر در localStorage نبود، تشخیص تم سیستم
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      return "dark";
    }

    // در غیر این صورت، لایت مود
    return "light";
  };

  const [theme, setTheme] = useState(getInitialTheme);

  // تابع تغییر تم
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "light" ? "dark" : "light";
      return newTheme;
    });
  };

  // تابع تنظیم مستقیم تم
  const setThemeMode = (mode) => {
    if (mode === "light" || mode === "dark") {
      setTheme(mode);
    }
  };

  // اثر جانبی: هر بار که theme تغییر کند، در localStorage ذخیره کن و کلاس را به body اضافه/حذف کن
  useEffect(() => {
    // ذخیره در localStorage
    localStorage.setItem("theme", theme);

    // اعمال کلاس روی body
    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [theme]);

  //  گوش دادن به تغییرات تم سیستم
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleSystemThemeChange = (e) => {
      // فقط اگر کاربر قبلاً تم را دستی انتخاب نکرده باشد
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    };

    mediaQuery.addEventListener("change", handleSystemThemeChange);
    return () =>
      mediaQuery.removeEventListener("change", handleSystemThemeChange);
  }, []);

  const value = {
    theme,
    toggleTheme,
    setThemeMode,
    isDark: theme === "dark",
    isLight: theme === "light",
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

// هوک سفارشی
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme باید داخل ThemeProvider استفاده شود");
  }
  return context;
};

export default ThemeContext;
