"use client";

import { ListItemIcon } from "@mui/material";

interface NavIconProps {
  children: React.ReactNode;
}

export function NavIcon({ children }: NavIconProps) {
  return <ListItemIcon>{children}</ListItemIcon>;
}