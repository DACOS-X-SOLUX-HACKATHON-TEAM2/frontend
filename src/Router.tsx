import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/Login";
import Main from "./pages/main/Main";
import MyPage from "./pages/mypage/MyPage";
import Question from "./pages/question/Question";
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
        <Route path="/question" element={<Question />} />
        <Route path="/question/1" element={<Q1 />} />
        <Route path="/question/2" element={<Q2 />} />
        <Route path="/question/3" element={<Q3 />} />
        <Route path="/question/4" element={<Q4 />} />
        <Route path="/question/5" element={<Q5 />} />
        <Route path="/question/6" element={<Q6 />} />
        <Route path="/question/7" element={<Q7 />} />
        <Route path="/question/8" element={<Q8 />} />
        <Route path="/question/9" element={<Q9 />} />
        <Route path="/question/10" element={<Q10 />} />
        <Route path="/question/11" element={<Q11 />} />
        <Route path="/question/12" element={<Q12 />} />
        <Route path="/report/:userId" element={<SurveyReport />} />
        <Route path="/main" element={<Main />} />
        <Route path="/detail/:cosmeticsId" element={<Detail />} />
        <Route path="/myPage" element={<MyPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
