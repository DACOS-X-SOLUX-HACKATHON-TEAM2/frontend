/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  bodyStyle,
  signupPageStyle,
  recommendationTextStyle,
  recommendationHeading,
  signupFormStyle,
  signupContainerStyle,
  signupInputStyle,
  signupButtonStyle,
  labelStyle,
} from "./Signup.style";

function Signup() {
  const [username, setUsername] = useState<string>("");
  const [userid, setUserid] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordcheck, setPasswordcheck] = useState<string>("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== passwordcheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    navigate("/Q1");
  };

  return (
    <div css={bodyStyle}>
      <div css={signupPageStyle}>
        <div css={recommendationTextStyle}>
          <h1 css={recommendationHeading}>회원가입</h1>
        </div>
        <form onSubmit={handleSubmit} css={signupFormStyle}>
          <div css={signupContainerStyle}>
            <label css={labelStyle}>이름</label>
            <input
              type="text"
              placeholder="주민등록상 실명 입력"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              css={signupInputStyle}
            />
            <label css={labelStyle}>아이디 설정</label>
            <input
              type="text"
              placeholder="아이디"
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
              required
              css={signupInputStyle}
            />
            <label css={labelStyle}>비밀번호 설정</label>
            <input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              css={signupInputStyle}
            />
            <input
              type="password"
              placeholder="비밀번호 확인"
              value={passwordcheck}
              onChange={(e) => setPasswordcheck(e.target.value)}
              required
              css={signupInputStyle}
            />

            <Button type="submit" variant="primary" css={signupButtonStyle}>
              회원가입
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
