"use client";

import { Box, CssBaseline, Toolbar } from "@mui/material";
import { MainAppBar } from "@/components/organisms/MainAppBar";
import { NavigationDrawer } from "@/components/organisms/NavigationDrawer";

interface ClippedDrawerLayoutProps {
  title: string;
  navigationItems: Array<{ label: string; icon: React.ReactNode }>;
  children: React.ReactNode;
  drawerWidth?: number;
}

export function ClippedDrawerLayout({
  title,
  navigationItems,
  children,
  drawerWidth = 240,
}: ClippedDrawerLayoutProps) {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <MainAppBar title={title} />
      <NavigationDrawer items={navigationItems} width={drawerWidth} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}