import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import MyPage from "./pages/mypage/MyPage";
import Q1 from "./pages/question/Question1";
import Q10 from "./pages/question/Question10";
import Q11 from "./pages/question/Question11";
import Q12 from "./pages/question/Question12";
import Q2 from "./pages/question/Question2";
import Q3 from "./pages/question/Question3";
import Q4 from "./pages/question/Question4";
import Q5 from "./pages/question/Question5";
import Q6 from "./pages/question/Question6";
import Q7 from "./pages/question/Question7";
import Q8 from "./pages/question/Question8";
import Q9 from "./pages/question/Question9";
import Signup from "./pages/signup/Signup";
import SurveyReport from "./pages/SurveyReport/SurveyReport";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/Q1" element={<Q1 />} />
        <Route path="/Q2" element={<Q2 />} />
        <Route path="/Q3" element={<Q3 />} />
        <Route path="/Q4" element={<Q4 />} />
        <Route path="/Q5" element={<Q5 />} />
        <Route path="/Q6" element={<Q6 />} />
        <Route path="/Q7" element={<Q7 />} />
        <Route path="/Q8" element={<Q8 />} />
        <Route path="/Q9" element={<Q9 />} />
        <Route path="/Q10" element={<Q10 />} />
        <Route path="/Q11" element={<Q11 />} />
        <Route path="/Q12" element={<Q12 />} />
        <Route path="/report" element={<SurveyReport />} />
        <Route path="/main" element={<Main />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
