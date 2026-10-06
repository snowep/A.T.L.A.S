"use client";

import { Drawer, Toolbar, List, Divider, Box } from "@mui/material";
import { NavItem } from "@/components/molecules/NavItem";

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
}

interface NavigationDrawerProps {
  items: NavigationItem[];
  width?: number;
}

export function NavigationDrawer({ items, width = 240 }: NavigationDrawerProps) {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width, boxSizing: "border-box" },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {items.map((item) => (
            <NavItem key={item.label} label={item.label} icon={item.icon} />
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}