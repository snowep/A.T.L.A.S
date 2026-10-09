"use client";

import { Typography } from "@mui/material";

interface BookAuthorProps {
  author: string;
  prefix?: string;
  sx?: object;
}

export function BookAuthor({ author, prefix = "by ", sx = {} }: BookAuthorProps) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      sx={{
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        ...sx,
      }}
    >
      {prefix}{author}
    </Typography>
  );
}