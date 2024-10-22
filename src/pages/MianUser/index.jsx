import React from "react";
import "./index.css";
import card from "../../assets/card.png";
import { FaUserCircle } from "react-icons/fa";

const MainUser = () => {
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
                  <button className="logout">Logout</button>
                  <button className="withdrow">Withdrow</button>
                </div>
              </div>
              <div className="underdetail">
                <p className="name">Vivek</p>
                <p className="phone">7704984177</p>
                <p className="bank">hdfc</p>
                <p className="type">saving acount</p>
              </div>
              <div className="balance">
                <h1>
                  Acount Balance :<span>₹15000</span>
                </h1>
                <button className="balanceBtn">cheack balance</button>
              </div>
              <div className="cardDetail">
                <img src={card} alt="ATM" />
                <h2 className="num">1234123412341234</h2>
                <h1 className="bankName">hdfc</h1>
                <p className="cardType">visa</p>
                <div className="validity">
                  <div className="val">
                    <p>valid</p>
                    <p className="thru">thru</p>
                  </div>
                  <p className="date">12/24</p>
                </div>
              </div>
              <div className="bottom">
                <p>Update Pin</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainUser;
