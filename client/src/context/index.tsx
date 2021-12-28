import React, { createContext, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axios from "../axios";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store/userStore";
import { userState } from "../redux/reducers/userReducer";

export const myContext = createContext({});
const Context = (props: any) => {
  const [userObject, setUserObject] = useState<any>();

  const userLogin = useSelector<RootState, userState>(
    (state) => state.userLogin
  );
  const { userInfo } = userLogin;

  useEffect(() => {
    axios
      .get("/auth/getuser", {
        withCredentials: true,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": "*",
        },
      })
      .then((res: AxiosResponse) => {
        if (res.data) {
          setUserObject(res.data);
          localStorage.setItem("userInfo", JSON.stringify(res.data));
        }
        if (!userInfo) {
          window.location.reload();
        }
      });
  }, [userInfo]);

  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  );
};

export default Context;
