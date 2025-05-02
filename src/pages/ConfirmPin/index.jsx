import React, { useState } from "react";
import "./index.css";
import MiniBtn from "../../widgets/MiniBtn";
import { useNavigate } from "react-router-dom";
import Container from "../../container";

const ConFirmPin = () => {
  const [check, setCheck] = useState("");
  const [recheck, setRECheck] = useState("");
  const navigate = useNavigate();

  const getSubmit = () => {
    if (!/^\d{4}$/.test(check)) {
      alert("Allow only 4 digits");
      return;
    }
    if (!/^\d{4}$/.test(recheck)) {
      alert("Confirm Passwords not match");
      return;
    }
    if (check === recheck) {
      navigate("/PinChangeSucess");
    } else {
      alert("Passwords do not match");
    }
  };

  const OngeClose = () => {
    navigate("/dashboard");
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
                      onChange={(e) => setCheck(e.target.value)}
                      type="password"
                      name=""
                      id="oldPin"
                    />
                    <label htmlFor="OldPin">Confirm ATM Pin</label>
                    <input
                      onChange={(e) => setRECheck(e.target.value)}
                      type="password"
                      name=""
                      id="oldPin"
                    />
                    {/* <p>Please Enter Correct Old ATM Pin</p> */}
                  </div>
                  <div className="ConfirmBtn">
                    <MiniBtn
                      MiniBtnFn={getSubmit}
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
