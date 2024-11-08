/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

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
    background-color: #c4d7b2;
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
