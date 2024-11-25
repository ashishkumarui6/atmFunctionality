import { createContext, useEffect, useState } from "react";

export const ContextPro = createContext({
  token: "",
  getToken: (data) => {},
});

const ContextProvider = ({ children }) => {
  const loggedUser = JSON.parse(localStorage.getItem("loggedUser"));
  const [token, setToken] = useState({});

  const getToken = (data) => {
    localStorage.setItem("loggedUser", JSON.stringify(data));

    setToken(data);
  };

  useEffect(() => {
    if (loggedUser) {
      setToken(loggedUser);
    }
  }, []);

  const val = {
    token: token,
    getToken: getToken,
  };
  return <ContextPro.Provider value={val}>{children}</ContextPro.Provider>;
};
export default ContextProvider;
