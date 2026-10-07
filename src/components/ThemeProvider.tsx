"use client";

import * as React from "react";
import {
  ThemeProvider as MuiThemeProvider,
  CssBaseline,
} from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import linearTheme from "@/theme/linearTheme";

function createEmotionCache() {
  return createCache({ key: "mui", prepend: true });
}

function ColorSchemeContextProvider({ children }: { children: React.ReactNode }) {
  return (
    <MuiThemeProvider theme={linearTheme}>
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