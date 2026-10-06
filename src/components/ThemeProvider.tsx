"use client";

import * as React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  createTheme,
  CssBaseline,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";

function createEmotionCache() {
  return createCache({ key: "mui", prepend: true });
}

function ColorSchemeContextProvider({ children }: { children: React.ReactNode }) {
  const theme = React.useMemo(
    () => createTheme({
      colorSchemes: { light: {}, dark: {} },
    }),
    []
  );

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </MuiThemeProvider>
  );
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [cache] = React.useState(() => createEmotionCache());

  return (
    <CacheProvider value={cache}>
      <ColorSchemeContextProvider>
        {children}
      </ColorSchemeContextProvider>
    </CacheProvider>
  );
}