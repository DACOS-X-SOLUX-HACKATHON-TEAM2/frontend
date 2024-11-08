import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const pageStyle = css({
  display: "flex",
  flexDirection: "column",

  width: "100vw",
  height: "100dvh",

  alignItems: "center",
  justifyContent: "center",

  backgroundColor: theme.colors.bgGreen,
});

export const headerStyle = css({
  position: "fixed",
  display: "flex",

  top: "0",
  justifyContent: "center",
  alignItems: "center",

  width: "100%",
  height: "7rem",

  padding: "1.5rem 2rem",

  backgroundColor: `${theme.colors.middleGreen}`,
  zIndex: "10",
});

export const layoutStyle = css({
  display: "flex",

  padding: "4rem",

  gap: "2rem",

  backgroundColor: `#EEEEEE`,

  borderRadius: "0.8rem",
});

export const imageStyle = css({
  objectFit: "cover",
});

export const productNameStyle = css({
  ...theme.fonts.subtitle2,
});
