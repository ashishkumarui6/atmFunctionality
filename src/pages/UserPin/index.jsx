import React, { useState } from "react";
import "./index.css";
import Button from "../../widgets/Button";
import Inputfield from "../../widgets/Inputfield";
import { useNavigate } from "react-router-dom";

const Userpin = () => {
  const [pin, setPin] = useState("");

  const Navigate = useNavigate();

  const onchange = (e) => {
    setPin(e);
  };

  const GotoHome = () => {
    Navigate("/");
  };

  const OnGetCanfirm = () => {
    Navigate("/MainUser/" + pin);
  };

  return (
    <>
      <div className="atm">
        <div className="container">
          <div className="atm-body">
            <div className="atm-screen">
              <Inputfield
                onChange={onchange}
                v={pin}
                type="number"
                placeholder="Enter Your Atm Pin"
              />
              {pin.length > 0 && pin.length !== 16 && (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "17px",
                    paddingTop: "15px",
                    color: "blue",
                  }}
                >
                  Please Enter Your Correct Pin
                </p>
              )}
            </div>
          </div>
          <div className="btn">
            <Button
              disabled={pin.length < 1}
              onclickFn={() => setPin("")}
              name="Clear"
              bgColor="#353c3f"
            />
            <Button
              disabled={pin.length !== 4}
              name="Canfrim"
              bgColor="#486b00"
              onclickFn={OnGetCanfirm}
            />
            <Button name="Back" bgColor="#d70026" onclickFn={GotoHome} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Userpin;
