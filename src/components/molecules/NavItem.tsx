"use client";

import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { NavIcon } from "@/components/atoms/NavIcon";
import { NavLabel } from "@/components/atoms/NavLabel";

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
}

export function NavItem({ label, icon }: NavItemProps) {
  return (
    <ListItem key={label} disablePadding>
      <ListItemButton>
        <ListItemIcon>
          <NavIcon>{icon}</NavIcon>
        </ListItemIcon>
        <NavLabel primary={label} />
      </ListItemButton>
    </ListItem>
  );
}