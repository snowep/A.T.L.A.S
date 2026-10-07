"use client";

import { AppBar, Toolbar, useTheme, Box, IconButton, Tooltip } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import { AppBarTitle } from "@/components/atoms/AppBarTitle";
import { ThemeToggleButton } from "@/components/atoms/ThemeToggleButton";
import { SearchBox } from "@/components/atoms/SearchBox";

interface MainAppBarProps {
  title: string;
  toggleDrawer: (open: boolean) => void;
  drawerOpen: boolean;
}

export function MainAppBar({ title, toggleDrawer, drawerOpen }: MainAppBarProps) {
  const theme = useTheme();

  return (
    <AppBar position="fixed" sx={{ zIndex: theme.zIndex.drawer + 1 }}>
      <Toolbar>
        {/* Hidden on md and up */}
        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <Tooltip title={drawerOpen ? 'Close menu' : 'Open menu'}>
            <IconButton edge="start" color="inherit" onClick={() => toggleDrawer(false)}
              aria-label={drawerOpen ? 'close drawer' : 'open drawer'}>
              <MenuIcon />
            </IconButton>
          </Tooltip>
        </Box>
        <AppBarTitle>{title}</AppBarTitle>
        {/* Spacer to push SearchBox and ThemeToggleButton to the right */}
        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          <SearchBox />
        </Box>
        <ThemeToggleButton />
      </Toolbar>
    </AppBar>
  );
}