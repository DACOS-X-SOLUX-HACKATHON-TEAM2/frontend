import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const bodyStyle = css`
  background-color: #f2f1eb;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const loginPageStyle = css`
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
  top: -130px;
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

export const recommendationParagraph = css`
  font-size: 16px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const loginFormStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  z-index: 0;
`;

export const loginContainerStyle = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 7rem;
`;

export const loginInputStyle = css`
  width: 39rem;
  height: 4rem;
  background-color: white;
  border-radius: 8px;
  padding-left: 10px;
  font-size: 16px;
  margin-bottom: 20px;
  border: 1px solid #f2f1eb;
  box-sizing: border-box;
  outline: none;

  &:focus {
    border: 1px solid ${theme.colors.middleGreen};
  }
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

export const loginButtonStyle = css`
  ${buttonStyle};
  width: 35%;
`;

export const loginTextStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  font-size: 14px;
  margin-top: 15px;
  padding-bottom: 40px;

  .signup-link {
    color: #4caf50;
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;

    &:hover {
      color: #388e3c;
    }
  }
`;
