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

function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/main");
  };

  const goToSignup = () => {
    navigate("/Signup");
  };

  return (
    <form css={bodyStyle} onSubmit={handleSubmit}>
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
            />
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              css={loginInputStyle}
            />
            <Button variant="primary" css={loginButtonStyle}>
              로그인
            </Button>
          </div>
          <div css={loginTextStyle}>
            아직 회원이 아니신가요?
            <p
              css={{ color: theme.colors.mainGreen, cursor: "pointer" }}
              onClick={goToSignup}
            >
              회원가입
            </p>
          </div>
        </form>
      </div>
    </form>
  );
}

export default Login;
