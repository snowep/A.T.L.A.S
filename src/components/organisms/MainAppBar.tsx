"use client";

import { AppBar, Toolbar, useTheme, Box, IconButton, Tooltip } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBarTitle } from "@/components/atoms/AppBarTitle";
import { ThemeToggleButton } from "@/components/atoms/ThemeToggleButton";
import { SearchBox } from "@/components/atoms/SearchBox";

interface MainAppBarProps {
  toggleDrawer: (open: boolean) => void;
  drawerOpen: boolean;
}

export function MainAppBar({ toggleDrawer, drawerOpen }: MainAppBarProps) {
  const theme = useTheme();

  return (
    <AppBar position="fixed" sx={{ width: { xs: '100%', md: 800 }, mx: 'auto', zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar sx={{ flexGrow: 1 }}>
        {/* AppBar Title */}
        <AppBarTitle />
        {/* Search Box: full-width on mobile, right-aligned on desktop */}
        <Box sx={{ flexGrow: 1, display: { xs: 'block', md: 'flex' }, justifyContent: 'flex-end' }}>
          <SearchBox />
        </Box>
        <ThemeToggleButton />
      </Toolbar>
    </AppBar>
  );
}
