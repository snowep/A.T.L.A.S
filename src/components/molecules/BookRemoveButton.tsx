"use client";

import { Button, Box } from "@mui/material";

interface BookRemoveButtonProps {
  onRemove: (id: string) => void;
  bookId: string;
  sx?: object;
}

export function BookRemoveButton({ onRemove, bookId, sx = {} }: BookRemoveButtonProps) {
  return (
    <Box sx={{ mt: 1, pt: 1, borderTop: "1px solid", borderColor: "divider", ...sx }}>
      <Button
        variant="text"
        color="error"
        size="small"
        onClick={() => onRemove(bookId)}
        sx={{
          p: 1,
          "&:focus-visible": {
            outline: "2px solid",
            outlineOffset: 2,
          },
        }}
        aria-label="Remove book"
      >
        ×
      </Button>
    </Box>
  );
}