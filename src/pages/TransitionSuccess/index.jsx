import React from "react";
import "./index.css";
import Yes from "../../assets/success.png";
import MiniBtn from "../../widgets/MiniBtn";
import { useNavigate } from "react-router-dom";
const TranstionSuccess = () => {
  const navigate = useNavigate();

  const OnSucessClose = () => {
    navigate("/");
  };
  return (
    <div className="atm">
      <div className="container">
        <div className="atmbody">
          <div className="success">
            <img src={Yes} alt="Yes" />
            <p>Thank You For Transaction :)</p>
            <MiniBtn MiniBtnFn={OnSucessClose} bgBtn="red" name="close" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TranstionSuccess;
