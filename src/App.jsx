import React from "react";
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

function App() {
  return (
    <>
      {/* <Routes>
        <Route path="/" element={<Admin />} />
        <Route path="/pin/:card" element={<Userpin />} />
        <Route path="/form/:card" element={<AtmFrom />} />
        <Route path="/MainUser/:card" element={<MainUser />} />
      </Routes>
      <MainUser /> */}
      <TranstionSuccess />
      <ChangePin />
      <ConFirmPin />
      <SucessDon />
      <Withdrawal />
    </>
  );
}

export default App;
