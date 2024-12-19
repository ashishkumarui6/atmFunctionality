import React, { useContext, useEffect, useState } from "react";
import Admin from "./pages/Admin";
import Userpin from "./pages/UserPin";
import AtmFrom from "./pages/AtmForm";
import { Navigate, Route, Routes } from "react-router-dom";
import MainUser from "./pages/MianUser";
import TranstionSuccess from "./pages/TransitionSuccess";
import ChangePin from "./pages/ChangePin";
import ConFirmPin from "./pages/ConfirmPin";
import SucessDon from "./pages/SucessDon";
import Withdrawal from "./pages/Withdrawal";
import NotFound from "./pages/NotFound";
import { ContextPro } from "./context";
import PinChangeSucess from "./pages/PinChangeSucess";

function App() {
  const ctx = useContext(ContextPro);
  console.log(ctx.token);

  return (
    <>
      {ctx.token.CardNumber ? (
        <Routes>
          <Route path="/dashboard" element={<MainUser />} />
          <Route path="/withdraw" element={<Withdrawal />} />
          <Route path="/transtionSuccess" element={<TranstionSuccess />} />
          <Route path="/changepin/:card" element={<ChangePin />} />
          <Route path="/conFirmpin/:card" element={<ConFirmPin />} />
          <Route path="/sucessDon" element={<SucessDon />} />
          <Route path="/PinChangeSucess" element={<PinChangeSucess />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Admin />} />
          <Route path="/pin/:card" element={<Userpin />} />
          <Route path="/form/:card" element={<AtmFrom />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      )}
    </>
  );
}

export default App;
