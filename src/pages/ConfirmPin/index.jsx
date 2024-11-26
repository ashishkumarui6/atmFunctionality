import React, { useContext, useState } from "react";
import "./index.css";
import MiniBtn from "../../widgets/MiniBtn";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../container";
import { ContextPro } from "../../context";

const ConFirmPin = () => {
  const [newPin, setNewPin] = useState("");
  const ctx = useContext(ContextPro);
  // const [renternewPin, setRenterNewPin] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const OngeClose = () => {
    navigate("/dashboard");
  };

  const OngetReset = () => {
    const u = JSON.parse(localStorage.getItem("users"));
    const isExisting = u.find((it) => it.CardNumber === params.card);
    const index = u.findIndex((it) => it.CardNumber === params.card);

    if (isExisting) {
      isExisting.pin = newPin;
      u[index] = isExisting;

      localStorage.setItem("users", JSON.stringify(u));

      localStorage.removeItem("loggedUser");
      ctx.getToken({});
      navigate("/");
    }
  };

  return (
    <>
      <Container>
        <div className="atm">
          <div className="container">
            <div className="atmbody">
              <div className="wrapper">
                <div className="updatePin">
                  <h1>Set Your ATM Pin</h1>
                  <div className="upBottom">
                    <label htmlFor="OldPin">Enter New ATM Pin</label>
                    <input
                      onChange={(e) => setNewPin(e.target.value)}
                      type="password"
                      name=""
                      id="oldPin"
                    />
                    <label htmlFor="OldPin">Confirm ATM Pin</label>
                    <input type="password" name="" id="oldPin" />
                    <p>Please Enter Correct Old ATM Pin</p>
                  </div>
                  <div className="ConfirmBtn">
                    <MiniBtn
                      MiniBtnFn={OngetReset}
                      name="next"
                      bgBtn="#486b00"
                    />
                    <MiniBtn
                      MiniBtnFn={OngeClose}
                      name="close"
                      bgBtn="#d70026"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ConFirmPin;
