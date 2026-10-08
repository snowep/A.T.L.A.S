"use client";

import { IconButton, useColorScheme } from "@mui/material";
import { useTheme } from "@mui/material";
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from "@mui/icons-material";

export function ThemeToggleButton() {
  const colorScheme = useColorScheme();
  const theme = useTheme();

  return (
      <IconButton
        onClick={() => colorScheme.setMode(colorScheme.mode === "dark" ? "light" : "dark")}
        edge="end"
        size="medium"
        sx={{ color: theme.palette.text.primary }}
        aria-label="toggle color scheme"
      >
      {colorScheme.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}