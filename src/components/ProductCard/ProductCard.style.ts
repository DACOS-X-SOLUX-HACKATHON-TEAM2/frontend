import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const cardStyle = css({
  display: "flex",

  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  width: "27.6rem",
  height: "36.5rem",

  padding: "1.5rem",

  gap: "2rem",

  borderRadius: "0.8rem",

  backgroundColor: theme.colors.lightGreen,

  "& h3": {
    alignSelf: "baseline",
  },
});

export const imagestyle = css({
  display: "flex",

  width: "23.5rem",
  height: "23.5rem",

  borderRadius: "0.8rem",

  objectFit: "cover",
});

export const titleStyle = css({
  display: "flex",

  ...theme.fonts.subtitle1,
});
