import React from "react";
import "./assets/css/app.css";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes/routes";
import { Header, Footer } from "./components/index";
function App() {
  return (
    <>
      <Router>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </Router>
    </>
  );
}

export default App;
