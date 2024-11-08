import { css } from "@emotion/react";
import theme from "../../../../styles/theme";

export const layoutStyle = css({
  display: "flex",
  padding: "1.5rem 3rem",

  width: "71.4rem",

  justifyContent: "space-between",
  alignItems: "center",

  borderRadius: "1rem",

  backgroundColor: theme.colors.white,
});

export const titleStyle = css({
  ...theme.fonts.subtitle1,
});
