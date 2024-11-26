import React, { useContext, useState } from "react";
import "./index.css";
import Button from "../../widgets/Button";
import Inputfield from "../../widgets/Inputfield";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../container";
import { ContextPro } from "../../context";

const Userpin = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const params = useParams();
  const ctx = useContext(ContextPro);
  const [pin, setPin] = useState("");

  const navigate = useNavigate();

  const onchange = (e) => {
    setPin(e);
  };

  const onGoToDashboard = () => {
    const existingUser = users.find(
      (it) => it.CardNumber === params.card && it.pin === pin
    );

    if (existingUser) {
      console.log(existingUser);

      ctx.getToken(existingUser);
      navigate("/dashboard");
    } else {
      alert("not found!");
    }
  };

  const OnBackHome = () => {
    navigate("/");
  };

  const card = params.card;

  return (
    <>
      <Container>
        <div className="alert">
          <h1 className="pin-heading">{`xxxx xxxx xxxx ${card.substring(
            12,
            16
          )}`}</h1>
        </div>
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
                {pin.length > 0 && pin.length !== 4 && (
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
                onclickFn={onGoToDashboard}
              />
              <Button onclickFn={OnBackHome} name="Back" bgColor="#d70026" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Userpin;
