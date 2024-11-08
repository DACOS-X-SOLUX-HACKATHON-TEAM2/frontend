import { css } from "@emotion/react";
import theme from "../../styles/theme";

export const pageStyle = css({
  width: "100vw",
  height: "100dvh",

  backgroundColor: theme.colors.bgGreen,
});

export const productLayout = css({
  display: "grid",

  gridTemplateColumns: "1fr 1fr 1fr 1fr",
  justifyContent: "center",
  placeItems: "center",

  width: "100%",
  height: "100dvh",

  padding: "3rem 15rem",
  gap: "3rem",

  overflowY: "scroll",
});

export const categoryLayoutStyle = css({
  display: "flex",
  position: "fixed",

  top: "25em",

  width: "100%",
  padding: "1rem 15rem",

  justifyContent: "space-between",
  alignItems: "center",

  marginBottom: "2rem",

  zIndex: 1,

  backgroundColor: theme.colors.bgGreen,
});

export const buttonStyle = (isClicked: boolean) =>
  css({
    width: "20rem",
    backgroundColor: isClicked ? theme.colors.lightGreen : "white",

    border: isClicked
      ? `1px solid ${theme.colors.lightGreen}`
      : `1px solid ${theme.colors.gray}`,

    "&:hover": {
      backgroundColor: theme.colors.lightGreen,
    },
  });
