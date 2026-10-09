"use client";

import { Box, Toolbar } from "@mui/material";
import { useState } from "react";
import { MainAppBar } from "@/components/organisms/MainAppBar";
import { NavigationDrawer } from "@/components/organisms/NavigationDrawer";

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  href?: string;
}

interface ClippedDrawerLayoutProps {
  navigationItems: NavigationItem[];
  children: React.ReactNode;
  drawerWidth?: number;
}

export function ClippedDrawerLayout({
  navigationItems,
  children,
  drawerWidth = 240,
}: ClippedDrawerLayoutProps) {
  const [drawerOpen, setDrawerOpen] = useState(true);

  const toggleDrawer = (open: boolean) => () => {
    setDrawerOpen(open);
  };

  return (
      <Box sx={{ display: "flex" }}>
        <MainAppBar />
      <NavigationDrawer 
        items={navigationItems} 
        width={drawerWidth} 
        variant={drawerOpen ? "permanent" : "temporary"}
        open={drawerOpen}
        onClose={toggleDrawer(false)}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
}