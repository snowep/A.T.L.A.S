"use client";

import { Typography } from "@mui/material";

interface AppBarTitleProps {
  children: React.ReactNode;
}

export function AppBarTitle({ children }: AppBarTitleProps) {
  return (
    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
      {children}
    </Typography>
  );
}