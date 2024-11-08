/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const pageContainer = css`
  background-color: ${theme.colors.bgGreen};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120vh;
`;

export const headerStyle = css`
  display: flex;
  justify-content: center;
  width: 100%;
  position: relative;
  padding: 1rem 2rem;
  margin-top: 10px;
  margin-bottom: 40px;
`;

export const buttonWrapper = css`
  position: absolute;
  right: 2rem;
  display: flex;
  gap: 2rem;
`;

export const bodyStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;
  gap: 1rem;
  width: 100%;
  max-width: 1063px;
  padding-bottom: 50px;
`;
