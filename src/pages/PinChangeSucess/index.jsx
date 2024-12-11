import React, { useContext } from "react";
import Yes from "../../assets/success.png";
import { useNavigate, useParams } from "react-router-dom";
import Container from "../../container";
import { ContextPro } from "../../context";

const PinChangeSucess = () => {
  const navigate = useNavigate();
  const ctx = useContext(ContextPro);
  const params = useParams();

  const OnGoClose = () => {
    const u = JSON.parse(localStorage.getItem("users"));
    const isExisting = u.find((it) => it.CardNumber === params.card);
    const index = u.findIndex((it) => it.CardNumber === params.card);

    if (isExisting) {
      isExisting.pin = newPin;
      u[index] = isExisting;
      localStorage.setItem("users", JSON.stringify(u));
    } else {
      localStorage.removeItem("loggedUser");
      ctx.getToken({});
      navigate("/");
    }
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

export default PinChangeSucess;
