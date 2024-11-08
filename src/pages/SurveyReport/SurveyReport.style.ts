import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const pageStyle = css({
  display: "flex",

  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",

  backgroundColor: theme.colors.bgGreen,

  "& header": {
    marginBottom: "15rem",
  },
});

export const textLayoutStyle = css({
  display: "flex",

  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",

  gap: "3rem",
});

export const titleStyle = css({
  ...theme.fonts.subtitle1,
});

export const reportStyle = css({
  ...theme.fonts.title3,
});

export const reportSectionStyle = css({
  display: "flex",
  flexDirection: "column",

  gap: "5rem",
});
