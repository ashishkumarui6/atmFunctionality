import React from "react";
import Inputfield from "../../widgets/Inputfield";
import Button from "../../widgets/Button";

const Withdrawal = () => {
  return (
    <>
      <div className="atm">
        <div className="container">
          <div className="atm-body">
            <div className="atm-screen">
              <Inputfield
                type="number"
                placeholder=" Enter Amount To Withdraw"
              />
            </div>
          </div>
          <div className="btn">
            <Button name="Clear" bgColor="#353c3f" />
            <Button name="Cancel" bgColor="#d70026" />
            <Button name="Continue" bgColor="#486b00" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Withdrawal;
