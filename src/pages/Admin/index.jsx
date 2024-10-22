import React, { useState } from "react";
import "./index.css";
import Inputfield from "../../widgets/Inputfield";
import Button from "../../widgets/Button";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [cardNum, setcardNum] = useState("");

  const NevigatePin = useNavigate();

  const onchange = (e) => {
    setcardNum(e);
  };

  const OnGotoContinue = () => {
    const Users = JSON.parse(localStorage.getItem("users"));
    if (Users === 1) {
      NevigatePin("/pin/" + cardNum);
    } else {
      NevigatePin("/form/" + cardNum);
    }
  };

  return (
    <>
      <div className="atm">
        <div className="container">
          <div className="atm-body">
            <div className="atm-screen">
              <Inputfield
                v={cardNum}
                onChange={onchange}
                type="number"
                placeholder="Enter Your Card Number"
              />
              {cardNum.length > 0 && cardNum.length !== 16 && (
                <p
                  style={{
                    textAlign: "center",
                    fontSize: "17px",
                    paddingTop: "15px",
                    color: "blue",
                  }}
                >
                  Please Enter A Valid Card (16 Digits)
                </p>
              )}
            </div>
          </div>
          <div className="btn">
            <Button
              disabled={cardNum.length == 0}
              onclickFn={() => setcardNum("")}
              name="Clear"
              bgColor="#353c3f"
            />
            <Button
              onclickFn={() => setcardNum(cardNum.slice(0, -1))}
              disabled={cardNum.length == 0}
              name="Cancel"
              bgColor="#d70026"
            />
            <Button
              disabled={cardNum.length !== 16}
              name="Continue"
              bgColor="#486b00"
              onclickFn={OnGotoContinue}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Admin;
