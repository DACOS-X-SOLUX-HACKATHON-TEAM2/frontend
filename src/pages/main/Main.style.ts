import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const pageStyle = css({
  width: "100vw",
  height: "100dh",

  backgroundColor: theme.colors.bgGreen,
});

export const productLayout = css({
  display: "grid",

  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  justifyContent: "center",

  padding: "2rem",

  gap: "3rem",

  overflowY: "scroll",
});
