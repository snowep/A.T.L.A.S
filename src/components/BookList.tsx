import { Box, Stack, Typography } from "@mui/material";
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
      <Stack spacing={2}>
        {books.map((book) => (
          <BookCard
            key={book.id}
            book={book}
            onRemove={onRemove}
            onStatusChange={onStatusChange}
          />
        ))}
      </Stack>
    </Box>
  );
}