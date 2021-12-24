import React, { createContext, useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";

export const myContext = createContext({});
const Context = (props: any) => {
  const [userObject, setUserObject] = useState<any>();

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/auth/getuser", { withCredentials: true })
      .then((res: AxiosResponse) => {
        if (res.data) {
          setUserObject(res.data);
        }
      });
  }, []);

  return (
    <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
  );
};

export default Context;
