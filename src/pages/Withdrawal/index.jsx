import React, { useState } from "react";
import Inputfield from "../../widgets/Inputfield";
import Button from "../../widgets/Button";
import { useNavigate } from "react-router-dom";
import Container from "../../container";

const Withdrawal = () => {
  const u = JSON.parse(localStorage.getItem("loggedUser"));
  const users = JSON.parse(localStorage.getItem("users"));
  const [amount, setAmount] = useState("");

  const navigate = useNavigate();

  const onGetAmount = (val) => {
    setAmount(val);
  };

  const onWithdraw = () => {
    const existingUser = users.find((it) => it.CardNumber === u.CardNumber);
    const index = users.findIndex((it) => it.CardNumber === u.CardNumber);

    if (existingUser.bankAmount > amount) {
      if (existingUser) {
        existingUser.bankAmount -= amount;

        users[index] = existingUser;

        localStorage.setItem("users", JSON.stringify(users));
        localStorage.removeItem("loggedUser");
        navigate("/transtionSuccess");
      }
    } else {
      alert("Insufficient Balance");
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
                  onChange={onGetAmount}
                  type="number"
                  placeholder=" Enter Amount To Withdraw"
                />
              </div>
            </div>
            <div className="btn">
              <Button name="Clear" bgColor="#353c3f" />
              <Button onclickFn={onWithdraw} name="Confirm" bgColor="#486b00" />
              <Button name="back" bgColor="#d70026" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Withdrawal;
