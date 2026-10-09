"use client";

import { ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Link from "next/link";
import { useTheme } from "@mui/material";
import { NavIcon } from "@/components/atoms/NavIcon";

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  href?: string;
  selected?: boolean;
}

export function NavItem({ label, icon, href, selected = false }: NavItemProps) {
  const theme = useTheme();

  const activeStyle = {
    backgroundColor: theme.palette.mode === "light" 
      ? "rgba(30, 30, 30, 0.08)" 
      : "rgba(255, 255, 255, 0.12)",
    borderRadius: 2,
    "&:hover": {
      backgroundColor: theme.palette.mode === "light"
        ? "rgba(30, 30, 30, 0.12)"
        : "rgba(255, 255, 255, 0.16)",
    },
  };

  const inactiveStyle = {
    borderRadius: 2,
    "&:hover": {
      backgroundColor: theme.palette.mode === "light"
        ? "rgba(30, 30, 30, 0.04)"
        : "rgba(255, 255, 255, 0.08)",
    },
  };

  const buttonStyle = selected ? activeStyle : inactiveStyle;

  return (
    <ListItem key={label} disablePadding>
      {href ? (
        <ListItemButton
          component={Link}
          href={href}
          sx={{ ...buttonStyle, textDecoration: "none", color: "inherit", py: 1, px: 1.5 }}
        >
          <ListItemIcon sx={{ minWidth: 40 }}>
            <NavIcon>{icon}</NavIcon>
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      ) : (
        <ListItemButton sx={{ ...buttonStyle, textDecoration: "none", color: "inherit", py: 1, px: 1.5 }}>
          <ListItemIcon sx={{ minWidth: 40 }}>
            <NavIcon>{icon}</NavIcon>
          </ListItemIcon>
          <ListItemText primary={label} />
        </ListItemButton>
      )}
    </ListItem>
  );
}