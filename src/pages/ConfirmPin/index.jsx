import React from "react";
import "./index.css";
import MiniBtn from "../../widgets/MiniBtn";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../container";

const ConFirmPin = () => {
  const navigate = useNavigate();

  const OngeClose = () => {
    navigate("/dashboard");
  };

  const OngetReset = () => {
    navigate("/PinChangeSucess");
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
                    {/* <p>Please Enter Correct Old ATM Pin</p> */}
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
