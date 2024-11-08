/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const cardStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 236px;
  margin-bottom: 20px;
`;

export const imageWrapper = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const imageStyle = css`
  width: 220px;
  height: 220px;
  object-fit: cover;
`;

export const textWrapper = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 70px;
  flex-grow: 1;
`;

export const titleStyle = css`
  width: 595px;
  height: 44px;
  font-size: 28px;
  margin-bottom: 8px;
`;

export const subtitleStyle = css`
  width: 595px;
  height: 44px;
  font-size: 22px;
  font-weight: 500;
  cursor: pointer;
`;

export const heartStyle = css`
  font-size: 48px;
  text-align: center;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f00;
`;

export const heartButtonStyle = css`
  color: #f00;
  font-size: 48px;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  padding: 0;
`;
