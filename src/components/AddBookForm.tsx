import * as React from "react";
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Stack, CircularProgress } from "@mui/material";
import { Book } from "@/lib/bookData";

interface AddBookFormProps {
  onAdd: (book: Omit<Book, 'id' | 'dateAdded'>) => void;
}

export default function AddBookForm({ onAdd }: AddBookFormProps) {
  const [title, setTitle] = React.useState('');
  const [author, setAuthor] = React.useState('');
  const [status, setStatus] = React.useState<Book['status']>('library');
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !author.trim()) return;

    setIsSubmitting(true);
    
    const newBook: Omit<Book, 'id' | 'dateAdded'> = {
      title: title.trim(),
      author: author.trim(),
      status
    };

    onAdd(newBook);
    setTitle('');
    setAuthor('');
    setStatus('library');
    
    // Reset submitting state after a short delay
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack spacing={2} sx={{ maxWidth: 400, mx: 'auto' }}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
        />
        <TextField
          label="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          fullWidth
          required
        />
        <FormControl fullWidth>
          <InputLabel id="status-label">Status</InputLabel>
          <Select
            labelId="status-label"
            value={status}
            onChange={(e) => setStatus(e.target.value as Book['status'])}
            label="Status"
          >
            <MenuItem value="daily">Daily</MenuItem>
            <MenuItem value="library">Library</MenuItem>
            <MenuItem value="reading-list">Reading List</MenuItem>
            <MenuItem value="buy-list">Buy List</MenuItem>
            <MenuItem value="read-next">Read Next</MenuItem>
          </Select>
        </FormControl>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          fullWidth
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <CircularProgress size={20} />
              Adding...
            </>
          ) : (
            "Add Book"
          )}
        </Button>
      </Stack>
    </Box>
  );
}