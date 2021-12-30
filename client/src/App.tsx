import "./assets/css/app.css";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routesUser, routesSeller } from "./routes/routes";
import { useState, useEffect } from "react";
function App() {
  const user = localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null;
  const [check, setCheck] = useState(false);
  useEffect(() => {
    if (user?.role === "ROLE_SELLER") {
      setCheck(true);
    }
  }, [user]);
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
