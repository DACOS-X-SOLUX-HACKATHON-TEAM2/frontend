/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import theme from "../../styles/theme";
import {
  bodyStyle,
  loginButtonStyle,
  loginContainerStyle,
  loginFormStyle,
  loginInputStyle,
  loginPageStyle,
  loginTextStyle,
  recommendationHeading,
  recommendationParagraph,
  recommendationTextStyle,
} from "./Login.style";
import { axiosInstance } from "../../apis/axios";

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const loginUser = async (email: string, password: string) => {
    try {
      const response = await axiosInstance.post("/auth/login", {
        email,
        password,
      });

      if (response.status === 200) {
        localStorage.setItem("accessToken", response.data.accessToken);
        localStorage.setItem("refreshToken", response.data.refreshToken);

        navigate("/main");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("로그인 요청 중 오류 발생", error);
      alert("로그인에 실패했습니다. 다시 시도해주세요.");
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await loginUser(username, password);
  };

  const goToSignup = () => {
    navigate("/signup");
  };

  return (
    <div css={bodyStyle}>
      <div css={loginPageStyle}>
        <div css={recommendationTextStyle}>
          <h1 css={recommendationHeading}>SkinLAB</h1>
          <p css={recommendationParagraph}>
            SkinLAB을 통해 나의 피부 타입에 맞는 기초 제품을 추천받아 보세요!
          </p>
        </div>
        <form onSubmit={handleSubmit} css={loginFormStyle}>
          <div css={loginContainerStyle}>
            <input
              type="text"
              placeholder="아이디"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              css={loginInputStyle}
              tabIndex={0}
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              css={loginInputStyle}
              tabIndex={0}
            />
            <Button variant="primary" css={loginButtonStyle}>
              로그인
            </Button>
          </div>
          <span css={loginTextStyle}>
            아직 회원이 아니신가요?
            <p
              css={{ color: theme.colors.mainGreen, cursor: "pointer" }}
              onClick={goToSignup}
            >
              회원가입
            </p>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
