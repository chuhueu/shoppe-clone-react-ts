import React, { createContext, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axios from "../axios";

export const myContext = createContext({});
const Context = (props: any) => {
  const [userObject, setUserObject] = useState<any>();

  const userInfo = localStorage.getItem("userInfo");

  useEffect(() => {
    axios
      .get("/auth/getuser", {
        withCredentials: true,
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
