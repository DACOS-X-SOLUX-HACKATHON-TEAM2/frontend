import { css } from "@emotion/react";

export const theme = {
  colors: {
    mainGreen: "#A0C49D",
    middleGreen: "#C4D7B2",
    lightGreen: "#E1ECC8",
    bgGreen: "#F2F1EB",
    black: "#010101",
    white: "#FFF",
  },
  fonts: {
    title1: css`
      font-weight: 700;
      font-size: 4.2rem;
      font-family: "Pretendard Variable", sans-serif;
      font-style: normal;
      line-height: 120%; /* 50.4px */
      letter-spacing: -0.084rem;
    `,
    title2: css`
      font-weight: 700;
      font-size: 3.6rem;
      font-family: "Pretendard Variable", sans-serif;
      font-style: normal;
      line-height: 100%; /* 36px */
    `,
    title3: css`
      font-weight: 700;
      font-size: 3.2rem;
      font-family: "Pretendard Variable", sans-serif;
      font-style: normal;
      line-height: 120%; /* 38.4px */
    `,
    subtitle1: css`
      font-weight: 700;
      font-size: 1.8rem;
      font-family: "Pretendard Variable", sans-serif;
      font-style: normal;
      line-height: 200%; /* 36px */
    `,
    subtitle2: css`
      font-weight: 600;
      font-size: 1.8rem;
      font-family: "Pretendard Variable", sans-serif;
      font-style: normal;
      line-height: 135%; /* 24.3px */
    `,
    body1: css`
      font-weight: 500;
      font-size: 1.6rem;
      font-family: "Pretendard Variable", sans-serif;
      font-style: normal;
      line-height: 120%; /* 19.2px */
    `,
    body2: css`
      font-weight: 400;
      font-size: 1.6rem;
      font-family: "Pretendard Variable", sans-serif;
      font-style: normal;
      line-height: 160%; /* 25.6px */
    `,
    body3: css`
      font-weight: 400;
      font-size: 1.6rem;
      font-family: "Pretendard Variable", sans-serif;
      font-style: normal;
      line-height: 140%; /* 22.4px */
    `,
  },
};

export default theme;
