import { css } from "@emotion/react";
import theme from "../../../../styles/theme";

export const entireHeaderStyle = css({
  display: "flex",

  top: "1rem",

  width: "100vw",

  justifyContent: "space-between",
  alignItems: "center",

  backgroundColor: theme.colors.bgGreen,

  zIndex: 1,
});

export const headerStyle = css({
  position: "fixed",
  display: "flex",

  top: "1rem",

  width: "100%",

  padding: "1rem",

  justifyContent: "space-between",
  alignItems: "center",

  backgroundColor: theme.colors.bgGreen,
});

export const titleLayoutStyle = css({
  display: "flex",

  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  marginLeft: `calc(100vw - 61%)`,

  gap: "2rem",

  "& > h2": {
    color: theme.colors.mainGreen,
  },
});

export const typeStyle = css({
  ...theme.fonts.title3,
});

export const titleStyle = css({
  ...theme.fonts.title1,
});
