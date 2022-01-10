import "./assets/css/app.css";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routesUser, routesSeller } from "./routes/routes";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import { userState } from "./redux/reducers/userReducer";
import { createCart } from "./redux/actions/cartAction";
function App() {
  const userLogin = useSelector<RootState, userState>(
    (state) => state.userLogin
  );
  const dispatch = useDispatch();
  const { userInfo } = userLogin;
  //console.log(userInfo);

  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (userInfo?._id) {
      dispatch(createCart(userInfo?._id));
    }
    if (userInfo?.role === "ROLE_SELLER") {
      setCheck(true);
    }
  }, [userInfo, dispatch]);
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
