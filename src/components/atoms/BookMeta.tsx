"use client";

import { Typography } from "@mui/material";

interface BookMetaProps {
  dateAdded: string;
  sx?: object;
}

export function BookMeta({ dateAdded, sx = {} }: BookMetaProps) {
  return (
    <Typography variant="caption" color="text.secondary" sx={sx}>
      Added: {new Date(dateAdded).toLocaleDateString()}
    </Typography>
  );
}