import { css } from "@emotion/react";
import theme from "../../../../styles/theme";

export const bgStyle = css({
  position: "absolute",
  width: "100vw",
  height: "100vh",

  top: "50%",
  left: "50%",

  backgroundColor: "rgba(0, 0, 0, 0.3)",

  transform: "translate(-50%, -50%)",

  zIndex: 1,
});

export const dialogStyle = css({
  position: "absolute",
  display: "flex",

  flexDirection: "column",

  top: "48%",
  left: "50%",

  width: "41rem",
  height: "45rem",

  padding: "2.5rem",

  gap: "2rem",

  border: "none",
  borderRadius: "0.8rem",

  backgroundColor: theme.colors.white,

  transform: "translate(-50%, -50%)",

  zIndex: 2,
});

export const headerStyle = css({
  display: "flex",

  justifyContent: "space-between",
  alignItems: "center",
});

export const buttonStyle = css({
  padding: "1rem",

  border: "none",
  backgroundColor: "transparent",

  cursor: "pointer",
});

export const modalTitleStyle = css({
  ...theme.fonts.subtitle1,
});

export const contentBoxStyle = css({
  minHeight: "30rem",

  padding: "2rem",

  border: `1px solid ${theme.colors.middleGreen}`,
  borderRadius: "0.8rem",

  backgroundColor: theme.colors.bgGreen,

  overflowY: "scroll",
  whiteSpace: "pre-line",

  "& p": {
    maxHeight: "30rem",

    whiteSpace: "pre-line",

    wordBreak: "keep-all",

    ...theme.fonts.body4,
  },
});
