import "./assets/css/app.css";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routesUser, routesSeller } from "./routes/routes";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/userStore";
import { userState } from "./redux/reducers/userReducer";
function App() {
  const userLogin = useSelector<RootState, userState>(
    (state) => state.userLogin
  );
  const { userInfo } = userLogin;

  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (userInfo?.role === "ROLE_SELLER") {
      setCheck(true);
    }
  }, [userInfo]);
  return (
    <div className="wrapper">
      {check ? (
        <Router>{renderRoutes(routesSeller)}</Router>
      ) : (
        <Router>{renderRoutes(routesUser)}</Router>
      )}
    </div>
  );
}

export default App;
