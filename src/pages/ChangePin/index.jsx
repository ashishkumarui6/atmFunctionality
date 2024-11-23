import React from "react";
import "./index.css";
import MiniBtn from "../../widgets/MiniBtn";
import { useNavigate } from "react-router-dom";
import Container from "../../container";

const ChangePin = () => {
  const navigate = useNavigate();

  const OnOldPinClose = () => {
    navigate("/dashboard");
  };

  const OnCanfirmPage = () => {
    navigate("/conFirmpin");
  };
  return (
    <>
      <Container>
        <div className="atm">
          <div className="container">
            <div className="atmbody">
              <div className="wrapper">
                <div className="updatePin">
                  <h1>Change Your ATM Pin</h1>
                  <div className="upBottom">
                    <label htmlFor="OldPin">Old Pin</label>
                    <input type="password" name="" id="oldPin" />
                    {/* <p>Please Enter Correct Old ATM Pin</p> */}
                  </div>
                  <div className="ChangeBtn">
                    <MiniBtn
                      MiniBtnFn={OnCanfirmPage}
                      name="next"
                      bgBtn="#486b00"
                    />
                    <MiniBtn
                      MiniBtnFn={OnOldPinClose}
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

export default ChangePin;
