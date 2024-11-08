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

  height: "100dvh",

  padding: "2rem",
  marginTop: "5rem",

  gap: "3rem",

  overflowY: "scroll",
});

export const categoryLayoutStyle = css({
  display: "flex",
  position: "fixed",

  top: "22em",

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