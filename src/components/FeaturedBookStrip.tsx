"use client";

import { Box, Typography, Chip, CardMedia, useTheme } from "@mui/material";
import { Book } from "@/lib/bookData";

interface FeaturedBookStripProps {
  books: Book[];
  title?: string;
  subtitle?: string;
}

function getCoverColor(title: string): string {
  const colors = [
    "#2E7D32", // green
    "#1565C0", // blue
    "#C62828", // red
    "#6A1B9A", // purple
    "#EF6C00", // orange
    "#00695C", // teal
    "#5D4037", // brown
    "#37474F", // blue grey
  ];
  let hash = 0;
  for (let i = 0; i < title.length; i++) {
    hash = title.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
}

export default function FeaturedBookStrip({ books, title = "Top Picks", subtitle }: FeaturedBookStripProps) {
  const theme = useTheme();

  if (books.length === 0) {
    return (
      <Box sx={{ textAlign: "center", py: 4 }}>
        <Typography variant="body2" color="text.secondary">
          No books to display
        </Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2, minWidth: 0 }}>
      {title && (
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      )}
      <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 1, px: { xs: 1, md: 0 } }}>
        {books.slice(0, 10).map((book, index) => {
          const coverColor = getCoverColor(book.title);
          return (
            <Box key={book.id} sx={{ flexShrink: 0, width: 160, display: "flex", flexDirection: "column", gap: 1 }}>
              {/* Rank Badge */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <Chip
                  label={`#${index + 1}`}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontWeight: 700,
                    borderColor: theme.palette.divider,
                    backgroundColor: theme.palette.background.paper,
                  }}
                />
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: coverColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                  }}
                >
                  {index + 1}
                </Box>
              </Box>

              {/* Book Cover Placeholder */}
              <CardMedia
                component="div"
                sx={{
                  width: "100%",
                  aspectRatio: "2/3",
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${coverColor} 0%, ${coverColor}dd 100%)`,
                  position: "relative",
                  overflow: "hidden",
                }}
                image=""
              >
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 1.5, background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}>
                  <Typography variant="caption" color="white" sx={{ fontWeight: 500 }}>
                    {book.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                  </Typography>
                </Box>
              </CardMedia>

              {/* Title & Author */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary, lineHeight: 1.3, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {book.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {book.author}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
}