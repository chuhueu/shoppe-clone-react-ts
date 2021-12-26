import React, { createContext, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import axios from "../axios";

export const myContext = createContext({});
const Context = (props: any) => {
  const [userObject, setUserObject] = useState<any>();

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
          localStorage.setItem("authInfo", JSON.stringify(res.data));
        }
      });
  }, []);

  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  );
};

export default Context;
