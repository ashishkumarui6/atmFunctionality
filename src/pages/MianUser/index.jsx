import React, { useState } from "react";
import "./index.css";
import card from "../../assets/card.png";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MainUser = () => {
  const [check, setCheck] = useState(false);
  const navigate = useNavigate();
  const u = JSON.parse(localStorage.getItem("loggedUser")) || {};

  const onLogout = () => {
    localStorage.removeItem("loggedUser");
    navigate("/");
  };

  const onGoToWithdraw = () => {
    navigate("/withdraw");
  };

  const OnUpdateBtn = () => {
    navigate("/changepin");
  };

  return (
    <>
      <div className="atm">
        <div className="container">
          <div className="atmBody">
            <div className="loggedin">
              <div className="top">
                <div className="profile">
                  <FaUserCircle size={100} color="#fff" />
                </div>
                <div className="btnB">
                  <button onClick={onLogout} className="logout">
                    Logout
                  </button>
                  <button onClick={onGoToWithdraw} className="withdrow">
                    Withdrow
                  </button>
                </div>
              </div>
              <div className="underdetail">
                <p className="name">{u.userName}</p>
                <p className="phone">{u.phoneNumber}</p>
                <p className="bank">{u.bankName}</p>
                <p className="type">{u.bankType}</p>
              </div>
              <div className="balance">
                {check && (
                  <h1>
                    Acount Balance :<span>₹{u.bankAmount}</span>
                  </h1>
                )}
                <button className="balanceBtn" onClick={() => setCheck(!check)}>
                  cheack balance
                </button>
              </div>
              <div className="cardDetail">
                <img src={card} alt="ATM" />
                <h2 className="num">{u.CardNumber}</h2>
                <h1 className="bankName">{u.bankCard}</h1>
                <p className="cardType">{u.cardtype}</p>
                <div className="validity">
                  <div className="val">
                    <p>valid</p>
                    <p className="thru">thru</p>
                  </div>
                  <p className="date">{u.valid}</p>
                </div>
              </div>
              <div className="bottom">
                <p onClick={OnUpdateBtn}>Update Pin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainUser;
