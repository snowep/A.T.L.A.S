"use client";

import { Typography } from "@mui/material";
import { useTheme } from "@mui/material";

export function AppBarTitle() {
  const theme = useTheme();

  return (
    <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, color: theme.palette.text.primary }}>
      A.T.L.A.S.
    </Typography>
  );
}