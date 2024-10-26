import React from "react";
import Yes from "../../assets/success.png";
import "./index.css";

const SucessDon = () => {
  return (
    <>
      <div className="atm">
        <div className="container">
          <div className="atmbody">
            <div className="success">
              <img src={Yes} alt="Yes" />
              <p>Done:)</p>
              <button className="close">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SucessDon;
