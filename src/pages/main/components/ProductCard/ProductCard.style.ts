import { css } from "@emotion/react";
import { theme } from "./../../../../styles/theme";

export const cardStyle = css({
  position: "relative",
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

  cursor: "pointer",

  "&:hover": {
    transform: "translateY(-10px)",

    transition: "0.3s ease-in-out",

    "& .description": {
      opacity: 0.8,
      pointerEvents: "auto",

      borderRadius: "0.8rem",
    },
  },

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

export const descriptionStyle = css({
  position: "absolute",
  display: "flex",

  top: "0",
  left: "0",

  width: "100%",
  height: "69%",

  backgroundColor: "rgba(0, 0, 0, 0.7)",

  color: theme.colors.white,

  opacity: "0",
  transition: "opacity 0.3s",

  padding: "3rem",
  fontSize: "1.4rem",
  lineHeight: "2.5rem",

  alignItems: "center",
  justifyContent: "center",

  pointerEvents: "none",

  zIndex: 4,
});
