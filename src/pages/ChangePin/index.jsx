import React, { useContext, useState } from "react";
import "./index.css";
import MiniBtn from "../../widgets/MiniBtn";
import { generatePath, useNavigate, useParams } from "react-router-dom";
import Container from "../../container";
import { ContextPro } from "../../context";

const ChangePin = () => {
  const ctx = useContext(ContextPro);
  const [oldPin, setOldPin] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  const OnOldPinClose = () => {
    navigate("/dashboard");
  };

  const onGetPin = (e) => {
    setOldPin(e.target.value);
  };

  const OnCanfirmPage = () => {
    if (ctx.token.pin === oldPin && ctx.token.CardNumber === params.card) {
      const path = generatePath("/conFirmpin/:card", {
        card: params.card,
      });
      navigate(path);
    } else {
      alert("Wrong Pin!");
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
                  <h1 className="change-pin-heading">Change Your ATM Pin</h1>
                  <div className="upBottom">
                    <label htmlFor="OldPin">Old Pin</label>
                    <input
                      onChange={onGetPin}
                      type="password"
                      name=""
                      id="oldPin"
                    />
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
