import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import MiniBtn from "../../widgets/MiniBtn";
import { useNavigate, useParams } from "react-router-dom";

const AtmFrom = () => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const params = useParams();
  const navigate = useNavigate();
  const card = params.card;

  const cardtype = useRef(null);
  const bankCard = useRef(null);
  const valid = useRef(null);
  const userName = useRef(null);
  const phoneNumber = useRef(null);
  const bankName = useRef(null);
  const pin = useRef(null);
  const bankType = useRef(null);
  const bankAmount = useRef(null);

  const OnSaveData = () => {
    const SaveUser = {
      cardtype: cardtype.current.value,
      bankCard: bankCard.current.value,
      CardNumber: params.card,
      valid: valid.current.value,
      userName: userName.current.value,
      phoneNumber: phoneNumber.current.value,
      bankName: bankName.current.value,
      pin: pin.current.value,
      bankType: bankType.current.value,
      bankAmount: bankAmount.current.value,
    };

    users.push(SaveUser);

    localStorage.setItem("users", JSON.stringify(users));
    navigate("/");
  };

  const OnCloseForm = () => {
    navigate("/");
  };

  return (
    <>
      <div className="atm">
        <div className="container">
          <div className="atmBody">
            <div className="cardSection">
              <div className="ragistercard">
                <div className="topRegisterCard">
                  <div className="userCardType">
                    <label htmlFor="cardType">
                      Card Type
                      <span>*</span>
                    </label>
                    <input
                      className="cardType"
                      ref={cardtype}
                      type="text"
                      name=""
                      placeholder="VISA,RUPAY,etc..."
                    />
                  </div>
                  <div className="bankCardType">
                    <label htmlFor="bankCard">
                      Bank Card
                      <span>*</span>
                    </label>
                    <input
                      className="bankCard"
                      ref={bankCard}
                      type="text"
                      name=""
                      placeholder="HDFC,AXIS,etc..."
                    />
                  </div>
                </div>
                <div className="inputTop">
                  <div className="child1">
                    <label htmlFor="inputCardNuber">
                      Card Number
                      <span>*</span>
                    </label>
                    <p className="inputCardNumber" id="inputCardNumber">
                      {`xxxx xxxx xxxx ${card.substring(12, 16)}`}
                    </p>
                  </div>
                  <div className="child2">
                    <div className="childtop">
                      <label htmlFor="valid">
                        Expiration
                        <span>*</span>
                      </label>
                      <input
                        id="valid"
                        ref={valid}
                        type="text"
                        name=""
                        placeholder="mm/yyyy"
                      />
                    </div>
                  </div>
                </div>
                <div className="inputBottom">
                  <div className="child1">
                    <label htmlFor="userNamme">
                      Name
                      <span>*</span>
                    </label>
                    <input
                      id="userName"
                      ref={userName}
                      type="text"
                      name=""
                      placeholder="Ex Ashish"
                    />
                  </div>
                  <div className="child2">
                    <label htmlFor="phoneNumber">
                      Name
                      <span>*</span>
                    </label>
                    <input
                      id="phoneNumber"
                      type="text"
                      ref={phoneNumber}
                      name=""
                      placeholder="xxxxxxxx77"
                    />
                  </div>
                </div>
              </div>
              <div className="cardback">
                <div className="cardbackTop">
                  <div className="bankName">
                    <label htmlFor="bankNamer">
                      Bank Name
                      <span>*</span>
                    </label>
                    <input
                      id="bankName"
                      ref={bankName}
                      type="text"
                      name=""
                      placeholder="Bank Of India,etc..."
                    />
                  </div>
                  <div className="pin">
                    <label htmlFor="pin">
                      Pin
                      <span>*</span>
                    </label>
                    <input
                      id="pin"
                      ref={pin}
                      type="passward"
                      name=""
                      placeholder="XXXX"
                    />
                  </div>
                </div>
                <div className="cardbackBottom">
                  <div className="bankType">
                    <label htmlFor="bankType">
                      Bank Type
                      <span>*</span>
                    </label>
                    <input
                      type="passward"
                      id="bankType"
                      ref={bankType}
                      name=""
                      placeholder="Current,Savings,etc..."
                    />
                  </div>
                  <div className="bankAmount">
                    <label htmlFor="bankAmount">
                      Amount
                      <span>*</span>
                    </label>
                    <input
                      id="bankAmount"
                      ref={bankAmount}
                      type="passward"
                      name=""
                      placeholder="XXXX"
                    />
                  </div>
                </div>
              </div>
              <div className="cardSectionbuttons">
                <div className="btn">
                  <MiniBtn MiniBtnFn={OnSaveData} name="Save" bgBtn="#486b00" />
                  <MiniBtn
                    MiniBtnFn={OnCloseForm}
                    name="close"
                    bgBtn="#d70026"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AtmFrom;
