/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const bodyStyle = css`
  background-color: #f2f1eb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const signupPageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 700px;
  border-radius: 10px;
  position: relative;
`;

export const recommendationTextStyle = css`
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  width: 100%;
  padding: 10px;
`;

export const recommendationHeading = css`
  font-size: 34px;
  font-weight: 600;
  margin-bottom: 10px;
`;

export const signupFormStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 0;
  padding-bottom: 20px;
`;

export const signupContainerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
`;

export const signupInputStyle = css`
  width: 55%;
  height: 45px;
  background-color: white;
  border-radius: 8px;
  padding-left: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #f2f1eb;
  box-sizing: border-box;
`;

export const buttonStyle = css`
  width: 100%;
  height: 50px;
  color: #000;
  font-size: 16px;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 15px;
`;

export const signupButtonStyle = css`
  ${buttonStyle};
  width: 35%;
`;

export const labelStyle = css`
  width: 55%;
  text-align: left;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  margin-left: 10px;
  color: #333;
`;
