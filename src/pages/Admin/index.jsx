import React, { useEffect, useState } from "react";
import "./index.css";
import Inputfield from "../../widgets/Inputfield";
import Button from "../../widgets/Button";
import { generatePath, useNavigate } from "react-router-dom";
import Container from "../../container";

const Admin = () => {
  const [token, setToken] = useState("");
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  useEffect(() => {
    setToken(loggedUser);
  }, []);

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const navigate = useNavigate();
  const [cardNum, setcardNum] = useState("");

  const onchange = (e) => {
    setcardNum(e);
  };

  const onContinueToPin = () => {
    const existingUser = users.find((it) => it.CardNumber === cardNum);

    if (existingUser) {
      const path = generatePath("pin/:card", {
        card: cardNum,
      });

      navigate(path);
    } else {
      const path = generatePath("/form/:card", {
        card: cardNum,
      });

      navigate(path);
    }
  };

  return (
    <>
      <Container>
        <div className="atm">
          <div className="container">
            <div className="atm-body">
              <div className="atm-screen">
                <Inputfield
                  v={cardNum}
                  onChange={onchange}
                  type="text"
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
                onclickFn={onContinueToPin}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Admin;
