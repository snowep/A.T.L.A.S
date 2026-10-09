"use client";

import { AppBar, Toolbar, useTheme, Box } from "@mui/material";
import { AppBarTitle } from "@/components/atoms/AppBarTitle";
import { ThemeToggleButton } from "@/components/atoms/ThemeToggleButton";
import { SearchBox } from "@/components/atoms/SearchBox";

export function MainAppBar() {
  const theme = useTheme();

  return (
    <AppBar position="fixed" sx={{ width: '100%', zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ flexGrow: 1 }}>
        <AppBarTitle />
        <Box sx={{ 
          flexGrow: 1, 
          display: 'flex', 
          justifyContent: 'center',
          px: { xs: 1, md: 3 }
        }}>
          <SearchBox />
        </Box>
        <ThemeToggleButton />
      </Toolbar>
    </AppBar>
  );
}
