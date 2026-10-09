"use client";

import { CardMedia } from "@mui/material";
import { Book } from "@/lib/bookData";

interface BookCoverProps {
  book: Book;
  aspectRatio?: string;
  borderRadius?: number;
}

export function BookCover({ book, aspectRatio = "2/3", borderRadius = 2 }: BookCoverProps) {
  function getCoverColor(title: string): string {
    const colors = [
      "#2E7D32", "#1565C0", "#C62828", "#6A1B9A", 
      "#EF6C00", "#00695C", "#5D4037", "#37474F"
    ];
    let hash = 0;
    for (let i = 0; i < title.length; i++) {
      hash = title.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  }

  const coverColor = getCoverColor(book.title);

  return (
    <CardMedia
      component="div"
      sx={{
        width: "100%",
        aspectRatio,
        borderRadius,
        background: `linear-gradient(135deg, ${coverColor} 0%, ${coverColor}dd 100%)`,
        position: "relative",
        overflow: "hidden",
      }}
      image=""
    />
  );
}