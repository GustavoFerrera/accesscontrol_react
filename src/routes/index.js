import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/Login";

function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;
