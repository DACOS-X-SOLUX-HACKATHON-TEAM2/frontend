import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Global, ThemeProvider } from "@emotion/react";
import React from "react";
import AppRouter from "./Router.tsx";
import { GlobalStyle } from "./styles/globalStyle.ts";
import theme from "./styles/theme.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <AppRouter />
    </ThemeProvider>
  </StrictMode>
);
