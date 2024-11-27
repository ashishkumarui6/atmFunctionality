import React, { useContext } from "react";
import "./index.css";
import Yes from "../../assets/success.png";
import MiniBtn from "../../widgets/MiniBtn";
import { useNavigate } from "react-router-dom";
import Container from "../../container";
import { ContextPro } from "../../context";
const TranstionSuccess = () => {
  const ctx = useContext(ContextPro);
  const navigate = useNavigate();

  const OnSucessClose = () => {
    localStorage.removeItem("loggedUser");
    ctx.getToken({});
    navigate("/");
  };
  return (
    <Container>
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
    </Container>
  );
};

export default TranstionSuccess;
