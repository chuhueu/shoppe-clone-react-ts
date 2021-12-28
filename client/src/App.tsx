import React from "react";
import "./assets/css/app.css";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes/routes";
function App() {
  return (
    <div className="wrapper">
      <Router>{renderRoutes(routes)}</Router>
    </div>
  );
}

export default App;
