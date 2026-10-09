"use client";

import { Box, Typography, Select, MenuItem } from "@mui/material";
import { Book } from "@/lib/bookData";

interface BookStatusSelectorProps {
  book: Book;
  onStatusChange?: (id: string, newStatus: Book['status']) => void;
  sx?: object;
}

const statusOptions: { value: Book['status']; label: string }[] = [
  { value: "daily", label: "Daily" },
  { value: "library", label: "Library" },
  { value: "reading-list", label: "Reading List" },
  { value: "buy-list", label: "Buy List" },
  { value: "read-next", label: "Read Next" },
];

export function BookStatusSelector({ 
  book, 
  onStatusChange, 
  sx = {} 
}: BookStatusSelectorProps) {
  return (
    <Box sx={{ ...sx, mt: 2 }}>
      <Typography variant="caption" color="text.secondary">
        Status
      </Typography>
      <Select
        labelId="status-select"
        id={`status-select-${book.id}`}
        value={book.status || "daily"}
        label="Status"
        onChange={(e) => onStatusChange && onStatusChange(book.id, e.target.value as Book['status'] || "daily")}
        sx={{
          mt: 1,
          border: 1,
          borderColor: "divider",
          borderRadius: 2,
          px: 2,
          "&:focus-visible": {
            outline: "2px solid",
            outlineOffset: 2,
          },
        }}
      >
        {statusOptions.map((opt) => (
          <MenuItem key={opt.value} value={opt.value}>
            {opt.label}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}