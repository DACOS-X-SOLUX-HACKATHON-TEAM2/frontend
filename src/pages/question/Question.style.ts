import { theme } from "./../../styles/theme";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const pageStyle = css`
  display: flex;

  width: 100vw;
  height: 100dvh;

  align-items: center;
  justify-content: center;

  gap: 2rem;

  background-color: ${theme.colors.bgGreen};
`;

export const layoutStyle = css`
  display: flex;

  width: 50rem;
  height: 40rem;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${theme.colors.lightGray};

  border-radius: 0.8rem;
`;

export const skipButtonStyle = css`
  margin-top: 3rem;
  border: none;

  background-color: ${theme.colors.lightGray};

  ${theme.fonts.body4}

  &:hover {
    text-decoration: underline;
  }
`;

export const qAppContainer = css`
  display: flex;
  justify-content: center;
  height: 100vh;
  background-color: #f2f1eb;
`;

export const qContent = css`
  width: 100%;
  max-width: 650px;
  position: absolute;
`;

export const qButtonGrid = css`
  display: grid;
  gap: 14px;
  margin-top: 120px;
`;

export const qTopicButton = css`
  padding: 20px;
  font-size: 18px;
  cursor: pointer;
  border: 1px solid #000000;
  border-radius: 10px;
  font-weight: bold;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${theme.colors.middleGreen};
    border: 1px solid #000000;

    transition: 0.2s ease-in-out;
  }
`;

export const qTopicButtonSelected = css`
  background-color: #e9e9e9;
`;

export const qButtonContent = css`
  display: flex;
  align-items: center;
`;

export const qButtonContentImg = css`
  width: 24px;
  height: 24px;
  margin-right: 8px;
`;

export const qNextButton = css`
  top: 260px;
  right: 0px;
  position: absolute;
  font-size: 40px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: #cccccc;
`;

export const qQuestion = css`
  margin-top: 130px;
  font-size: 40px;
  text-align: center;
  display: flex;
  justify-content: center;
`;

export const q = css`
  margin-top: 20px;
  font-size: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
`;
