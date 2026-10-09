"use client";

import { Box, Typography, Chip, useTheme } from "@mui/material";
import { Book } from "@/lib/bookData";
import { BookCover } from "@/components/atoms/BookCover";
import { BookTitle } from "@/components/atoms/BookTitle";
import { BookAuthor } from "@/components/atoms/BookAuthor";

interface FeaturedBookStripProps {
  books: Book[];
  title?: string;
  subtitle?: string;
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
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, pb: 1, px: { xs: 1, md: 0 } }}>
        {books.slice(0, 10).map((book, index) => (
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
                  backgroundColor: "transparent",
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

            {/* Book Cover - using atomic component */}
            <BookCover book={book} aspectRatio="2/3" borderRadius={2} />

            {/* Title & Author - using atomic components */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
              <BookTitle title={book.title} variant="body2" maxLines={2} />
              <BookAuthor author={book.author} />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
