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

export const categoryLayoutStyle = css({
  display: "flex",

  top: "20rem",

  width: "100%",
  padding: "1rem 15rem",

  justifyContent: "space-between",
  alignItems: "center",

  marginBottom: "2rem",

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
