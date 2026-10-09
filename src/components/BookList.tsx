import { Box, Typography } from "@mui/material";
import BookCard from "@/components/BookCard";
import { Book } from "@/lib/bookData";

interface BookListProps {
  books: Book[];
  title: string;
  onRemove?: (id: string) => void;
  onStatusChange?: (id: string, newStatus: Book['status']) => void;
}

export default function BookList({ 
  books, 
  title, 
  onRemove, 
  onStatusChange 
}: BookListProps) {
  if (books.length === 0) {
    return (
      <Box component="div" sx={{ textAlign: 'center', py: 4 }}>
        <Typography variant="body2" color="text.secondary">
          No books in {title.toLowerCase()}
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <Typography variant="h5" color="text.primary" gutterBottom>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          overflowX: 'auto',
          pb: 1, // space for scrollbar
          '::-webkit-scrollbar': { height: 8 },
          '::-webkit-scrollbar-track': { background: 'transparent' },
          '::-webkit-scrollbar-thumb': { 
            backgroundColor: 'divider',
            borderRadius: 4,
            '&:hover': { backgroundColor: 'text.secondary' }
          },
        }}
      >
        {books.map((b) => (
          <Box key={b.id} sx={{ minWidth: 280, flexShrink: 0 }}>
            <BookCard book={b} onRemove={onRemove} onStatusChange={onStatusChange} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}