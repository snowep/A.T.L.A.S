"use client";

import { Box, CssBaseline, Toolbar } from "@mui/material";
import { MainAppBar } from "@/components/organisms/MainAppBar";
import { NavigationDrawer } from "@/components/organisms/NavigationDrawer";

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  href?: string;
}

interface ClippedDrawerLayoutProps {
  title: string;
  navigationItems: NavigationItem[];
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