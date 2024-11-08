import { theme } from "./../../styles/theme";
import { css } from "@emotion/react";

export const pageContainer = css`
  background-color: ${theme.colors.bgGreen};
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 120vh;
`;

export const headerStyle = css`
  position: fixed;
  display: flex;
  top: 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1.5rem 2rem;
  background-color: ${theme.colors.middleGreen};
  z-index: 10;
  height: 7rem;
`;

export const buttonWrapper = css`
  display: flex;
  right: 2rem;
  margin-left: auto;
  gap: 1rem;
`;

export const bodyStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 8rem;
  gap: 1rem;
  max-width: 1063px;
  padding-bottom: 50px;
`;
