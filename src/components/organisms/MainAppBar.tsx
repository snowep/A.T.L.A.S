"use client";

import { AppBar, Toolbar, useTheme } from "@mui/material";
import { AppBarTitle } from "@/components/atoms/AppBarTitle";
import { ThemeToggleButton } from "@/components/atoms/ThemeToggleButton";

interface MainAppBarProps {
  title: string;
}

export function MainAppBar({ title }: MainAppBarProps) {
  const theme = useTheme();

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <AppBarTitle>{title}</AppBarTitle>
        <ThemeToggleButton />
      </Toolbar>
    </AppBar>
  );
}