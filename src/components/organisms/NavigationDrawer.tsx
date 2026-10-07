"use client";

import { Drawer, Toolbar, List, Divider, Box } from "@mui/material";
import { NavItem } from "@/components/molecules/NavItem";

interface NavigationItem {
  label: string;
  icon: React.ReactNode;
  href?: string;
}

interface NavigationDrawerProps {
  items: NavigationItem[];
  width?: number;
  variant?: 'permanent' | 'temporary';
  open?: boolean;
  onClose?: () => void;
}

export function NavigationDrawer({ items, width = 240, variant = "permanent", open = true, onClose }: NavigationDrawerProps) {
  return (
    <Drawer
      variant={variant}
      sx={{
        width,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width, boxSizing: "border-box" },
      }}
      open={open}
      onClose={onClose}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto" }}>
        <List>
          {items.map((item) => (
            <NavItem key={item.label} label={item.label} icon={item.icon} href={item.href} />
          ))}
        </List>
        <Divider />
      </Box>
    </Drawer>
  );
}