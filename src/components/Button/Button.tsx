/** @jsxImportSource @emotion/react */

import React, { HTMLAttributes } from "react";
import { buttonStyle, variantStyle } from "./Button.style";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
}

const Button = ({ variant = "primary", children, ...props }: ButtonProps) => {
  return (
    <button type="button" {...props} css={[buttonStyle, variantStyle(variant)]}>
      {children}
    </button>
  );
};

export default Button;
