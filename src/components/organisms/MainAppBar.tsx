"use client";

import { AppBar, Toolbar, useTheme, Box } from "@mui/material";
import { AppBarTitle } from "@/components/atoms/AppBarTitle";
import { ThemeToggleButton } from "@/components/atoms/ThemeToggleButton";
import { SearchBox } from "@/components/atoms/SearchBox";

interface MainAppBarProps {
  title: string;
}

export function MainAppBar({ title }: MainAppBarProps) {
  const theme = useTheme();

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        <AppBarTitle>{title}</AppBarTitle>
        <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <SearchBox />
        </Box>
        <ThemeToggleButton />
      </Toolbar>
    </AppBar>
  );
}