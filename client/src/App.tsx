import React from "react";
import "./assets/css/app.css";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes/routes";
import { RootState } from "./redux/store/userStore";
import { useSelector } from "react-redux";
import { userState } from "./redux/reducers/userReducer";
function App() {
  const { userInfo } = useSelector<RootState, userState>(
    (state) => state.userLogin
  );
  localStorage.setItem("user", JSON.stringify(userInfo));

  return (
    <div className="wrapper">
      <Router>{renderRoutes(routes)}</Router>
    </div>
  );
}

export default App;
