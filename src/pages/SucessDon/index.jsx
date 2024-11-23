import React from "react";
import Yes from "../../assets/success.png";
import "./index.css";
import { useNavigate } from "react-router-dom";
import Container from "../../container";

const SucessDon = () => {
  const navigate = useNavigate();

  const OnGoClose = () => {
    navigate("/");
  };
  return (
    <>
      <Container>
        <div className="atm">
          <div className="container">
            <div className="atmbody">
              <div className="success">
                <img src={Yes} alt="Yes" />
                <p>Done:)</p>
                <button onClick={OnGoClose} className="close">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default SucessDon;
