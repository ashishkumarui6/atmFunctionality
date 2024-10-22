import React from "react";
import "./App.css";
import Admin from "./pages/Admin";
import Userpin from "./pages/UserPin";
import AtmFrom from "./pages/AtmForm";
import { Route, Routes } from "react-router-dom";
import MainUser from "./pages/MianUser";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/pin/:card" element={<Userpin />} />
        <Route path="/form/:card" element={<AtmFrom />} />
        <Route path="/MainUser/:card" element={<MainUser />} />
      </Routes>
    </>
  );
}

export default App;
