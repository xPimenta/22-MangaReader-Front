import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userToken, setUserToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  // useEffect(() => {
  //   const token = JSON.parse(localStorage.getItem("token"));
  //   if (token) {
  //     setUserToken(token);
  //   }
  // }, []);

    

  const logUserIn = (userInfo) => {
    const { token, id, username, email, pictureUrl } = userInfo;
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("userInfo", JSON.stringify({ id, username, email, pictureUrl }));
    setUserToken(token);
    setUserInfo({ id, username, email, pictureUrl });
  };

  const logUserOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setUserToken("");
    setUserInfo({});
    window.location.reload();
  };

  return (
    <UserContext.Provider value={{ userToken, logUserIn, logUserOut, userInfo }}>
      {children}
    </UserContext.Provider>
  );
}
