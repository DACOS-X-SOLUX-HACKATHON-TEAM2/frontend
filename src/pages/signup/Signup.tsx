/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import {
  bodyStyle,
  labelStyle,
  recommendationHeading,
  recommendationTextStyle,
  signupButtonStyle,
  signupContainerStyle,
  signupFormStyle,
  signupInputStyle,
  signupPageStyle,
} from "./Signup.style";
import { axiosInstance } from "../../apis/axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [userid, setUserid] = useState("");
  const [password, setPassword] = useState("");
  const [passwordcheck, setPasswordcheck] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (password !== passwordcheck) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await axiosInstance.post("/auth/join", {
        body: JSON.stringify({
          userid,
          username,
          password,
        }),
      });

      if (response) {
        alert("회원가입이 완료되었습니다!");
        navigate("/question"); // 회원가입 성공 시 페이지 이동
      } else {
        alert("회원가입에 실패했습니다. 다시 시도해주세요.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("회원가입 중 오류가 발생했습니다.");
    }
  };

  return (
    <div css={bodyStyle}>
      <div css={signupPageStyle}>
        <div css={recommendationTextStyle}>
          <h1 css={recommendationHeading}>회원가입</h1>
        </div>
        <form onSubmit={handleSubmit} css={signupFormStyle}>
          <div css={signupContainerStyle}>
            <label htmlFor="1" css={labelStyle}>
              이름
            </label>
            <input
              type="text"
              id="1"
              placeholder="이름(별명) 입력"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              css={signupInputStyle}
            />
            <label htmlFor="2" css={labelStyle}>
              아이디 설정
            </label>
            <input
              type="text"
              id="2"
              placeholder="아이디"
              value={userid}
              onChange={(e) => setUserid(e.target.value)}
              required
              css={signupInputStyle}
            />
            <label htmlFor="3" css={labelStyle}>
              비밀번호 설정
            </label>
            <input
              type="password"
              id="3"
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
