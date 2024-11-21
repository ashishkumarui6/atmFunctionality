import React, { useEffect, useState } from "react";
import "./App.css";
import Admin from "./pages/Admin";
import Userpin from "./pages/UserPin";
import AtmFrom from "./pages/AtmForm";
import { Route, Routes } from "react-router-dom";
import MainUser from "./pages/MianUser";
import TranstionSuccess from "./pages/TransitionSuccess";
import ChangePin from "./pages/ChangePin";
import ConFirmPin from "./pages/ConfirmPin";
import SucessDon from "./pages/SucessDon";
import Withdrawal from "./pages/Withdrawal";
import NotFound from "./pages/NotFound";

function App() {
  const token = "";
  return (
    <>
      {!token ? (
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/pin/:card" element={<Userpin />} />
          <Route path="/form/:card" element={<AtmFrom />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/transtionSuccess" element={<TranstionSuccess />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/dashboard" element={<MainUser />} />
          <Route path="/withdraw" element={<Withdrawal />} />
          <Route path="/changepin" element={<ChangePin />} />
          <Route path="/conFirmpin" element={<ConFirmPin />} />
          <Route path="/sucessDon" element={<SucessDon />} />
        </Routes>
      )}

      {/* <ConFirmPin />
      <SucessDon /> */}
    </>
  );
}

export default App;
