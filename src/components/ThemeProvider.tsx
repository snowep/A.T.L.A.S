"use client";

import * as React from "react";
import { ThemeProvider as MuiThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

const clientCache = createCache({ key: "mui", prepend: true });

const theme = createTheme({
  cssVariables: true,
});

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <CacheProvider value={clientCache}>
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </CacheProvider>
  );
}