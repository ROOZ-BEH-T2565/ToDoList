import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { CreateTask } from "./pages/Create Task/CreateTask";
import { Header } from "./Components/Header/Header";
import { LocalStorageProvider } from "./Context/localStorageContext";

function App() {
  return (
    <>
      <LocalStorageProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Create" element={<CreateTask />} />
          </Routes>
        </BrowserRouter>
      </LocalStorageProvider>
    </>
  );
}

export default App;
