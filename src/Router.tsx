import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import SurveyReport from "./pages/SurveyReport/SurveyReport";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/report" element={<SurveyReport />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
