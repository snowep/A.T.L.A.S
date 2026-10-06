"use client";

import { IconButton, useColorScheme } from "@mui/material";
import { DarkMode as DarkModeIcon, LightMode as LightModeIcon } from "@mui/icons-material";

export function ThemeToggleButton() {
  const colorScheme = useColorScheme();

  return (
    <IconButton
      onClick={() => colorScheme.setMode(colorScheme.mode === "dark" ? "light" : "dark")}
      edge="end"
      size="medium"
      color="inherit"
      aria-label="toggle color scheme"
    >
      {colorScheme.mode === "dark" ? <LightModeIcon /> : <DarkModeIcon />}
    </IconButton>
  );
}