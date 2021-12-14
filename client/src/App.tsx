import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import { routes } from "./routes/routes";
import { Header, Footer } from "./components/index";
function App() {
  return (
    <div className="wrapper">
      <Router>
        <Header />
        {renderRoutes(routes)}
        <Footer />
      </Router>
    </div>
  );
}

export default App;
