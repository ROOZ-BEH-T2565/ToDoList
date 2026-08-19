import { useState } from "react";
import { Header } from "./Components/Header/Header";
import { Home } from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CreateTask } from "./pages/Create Task/CreateTask";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Create" element={<CreateTask />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
