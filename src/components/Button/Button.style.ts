import { css } from "@emotion/react";
import { theme } from "./../../styles/theme";
import { ButtonProps } from "./Button";

export const buttonStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  gap: "0.4rem",

  border: "none",

  padding: "1.2rem 2rem",
  borderRadius: "8px",

  cursor: "pointer",
});

export const variantStyle = (variant: Required<ButtonProps>["variant"]) => {
  const style = {
    primary: css({
      color: theme.colors.black,
      backgroundColor: theme.colors.middleGreen,
      "&:hover": {
        backgroundColor: theme.colors.mainGreen,

        transition: "0.2s ease-in-out",
      },
    }),
    secondary: css({
      border: `1px solid ${theme.colors.gray}`,

      color: theme.colors.gray,
      backgroundColor: theme.colors.white,

      "&:hover": {
        backgroundColor: theme.colors.lightGray,
      },
    }),
  };
  return style[variant];
};
