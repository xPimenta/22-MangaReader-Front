import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export function UserProvider({ children }) {
  const [userToken, setUserToken] = useState("");
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
	const token = localStorage.getItem("token");
	if (token) {
		setUserToken(token)	
	}}, []);

	//useEffect(() => {
	//	const userInfo = localStorage.getItem("userInfo");
	//	if (userInfo) {
	//		setUserInfo(JSON.parse(userInfo))
	//	}}, []);
		
  const logUserIn = (data) => {
	//console.log(data.searchedUser)
	const token = data.token;
    const pictureURL = data.pictureURL;
    localStorage.setItem("token", JSON.stringify(token));
    localStorage.setItem("userInfo", JSON.stringify({ pictureURL }));
    setUserToken(token);
    setUserInfo({ pictureURL });
  };

  const logUserOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userInfo");
    setUserToken("");
    setUserInfo({});
  };

  return (
    <UserContext.Provider value={{ userToken, logUserIn, logUserOut, userInfo }}>
      {children}
    </UserContext.Provider>
  );
}
