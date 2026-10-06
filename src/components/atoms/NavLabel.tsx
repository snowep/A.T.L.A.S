"use client";

import { ListItemText } from "@mui/material";

interface NavLabelProps {
  primary: string;
}

export function NavLabel({ primary }: NavLabelProps) {
  return <ListItemText primary={primary} />;
}