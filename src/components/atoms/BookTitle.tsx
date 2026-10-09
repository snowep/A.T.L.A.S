"use client";

import { Typography } from "@mui/material";

interface BookTitleProps {
  title: string;
  variant?: "h6" | "body1" | "body2";
  maxLines?: 1 | 2 | 3;
  sx?: object;
}

export function BookTitle({ title, variant = "h6", maxLines = 2, sx = {} }: BookTitleProps) {
  return (
    <Typography
      variant={variant}
      component="div"
      sx={{
        fontWeight: 500,
        color: "primary.main",
        display: "-webkit-box",
        WebkitLineClamp: maxLines,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
        lineHeight: 1.3,
        ...sx,
      }}
    >
      aa{title}
    </Typography>
  );
}