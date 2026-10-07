import * as React from "react";
import { Box, Button, TextField, FormControl, InputLabel, Select, MenuItem, Stack, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, Fab } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Book } from "@/lib/bookData";

interface AddBookDialogProps {
  open: boolean;
  onClose: () => void;
  onAdd: (book: Omit<Book, 'id' | 'dateAdded'>) => void;
}

export default function AddBookDialog({ open, onClose, onAdd }: AddBookDialogProps) {
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
    onClose();
    
    setTimeout(() => setIsSubmitting(false), 1000);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Add New Book</DialogTitle>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <Stack spacing={2} sx={{ mt: 1 }}>
            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
              autoFocus
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
          </Stack>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={onClose} disabled={isSubmitting}>Cancel</Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting || !title.trim() || !author.trim()}
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
          </DialogActions>
        </form>
      </Dialog>
    );
}