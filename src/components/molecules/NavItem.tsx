"use client";

import { ListItem, ListItemButton, ListItemIcon } from "@mui/material";
import Link from "next/link";
import { NavIcon } from "@/components/atoms/NavIcon";
import { NavLabel } from "@/components/atoms/NavLabel";

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  href?: string;
}

export function NavItem({ label, icon, href }: NavItemProps) {
  return (
    <ListItem key={label} disablePadding>
      {href ? (
        <ListItemButton
          component={Link}
          href={href}
          sx={{ textDecoration: "none", color: "inherit" }}
        >
          <ListItemIcon>
            <NavIcon>{icon}</NavIcon>
          </ListItemIcon>
          <NavLabel primary={label} />
        </ListItemButton>
      ) : (
        <ListItemButton sx={{ textDecoration: "none", color: "inherit" }}>
          <ListItemIcon>
            <NavIcon>{icon}</NavIcon>
          </ListItemIcon>
          <NavLabel primary={label} />
        </ListItemButton>
      )}
    </ListItem>
  );
}