import { Card, CardContent, Typography, Box, Button, Select, MenuItem } from "@mui/material";
import { Book } from "@/lib/bookData";

interface BookCardProps {
  book: Book;
  onRemove?: (id: string) => void;
  onStatusChange?: (id: string, newStatus: Book['status']) => void;
}

export default function BookCard({ 
  book, 
  onRemove, 
  onStatusChange 
}: BookCardProps) {
  const statusColors: Record<Book['status'], string> = {
    daily: 'success',
    library: 'info',
    'reading-list': 'warning',
    'buy-list': 'error',
    'read-next': 'secondary'
  };

  const statusLabels: Record<Book['status'], string> = {
    daily: 'Daily',
    library: 'Library',
    'reading-list': 'Reading List',
    'buy-list': 'Buy List',
    'read-next': 'Read Next'
  };

  return (
    <Card 
      sx={{ 
        mb: 2, 
        minWidth: 200,
        '&:hover': { 
          transform: 'translateY(-2px)', 
          boxShadow: 3 
        },
        transition: 'transform 0.2s, box-shadow 0.2s'
      }}
    >
      <CardContent sx={{ py: 3 }}>
        <Box 
          sx={{ 
            display: "flex", 
            justifyContent: "space-between", 
            alignItems: "start" 
          }}
        >
          <Box>
            <Typography variant="h6" component="div">
              {book.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              by {book.author}
            </Typography>
          </Box>
          <Box sx={{ ml: 2 }}>
            {onRemove && (
              <Button
                variant="text"
                color="error"
                size="small"
                onClick={() => onRemove(book.id)}
                sx={{ 
                  p: 1, 
                  '&:focus-visible': {
                    outline: '2px solid',
                    outlineOffset: 2
                  }
                }}
                aria-label="Remove book"
              >
                ×
              </Button>
            )}
          </Box>
        </Box>
        
        <Box sx={{ mt: 1 }}>
          <Typography 
            variant="caption" 
            color="text.secondary"
          >
            Added: {new Date(book.dateAdded).toLocaleDateString()}
          </Typography>
        </Box>
        
        <Box sx={{ mt: 2 }}>
          <Typography 
            variant="body2" 
            color={statusColors[book.status]}
            sx={{ fontWeight: 500 }}
          >
            {statusLabels[book.status]}
          </Typography>
          {onStatusChange && (
            <Box sx={{ mt: 1 }}>
              <Select
                labelId="status-select"
                id="status-select"
                value={book.status}
                label="Status"
                onChange={(e) => onStatusChange(book.id, e.target.value as Book['status'])}
                sx={{ 
                  border: 1, 
                  bordercolor: 'divider', 
                  borderradius: 2, 
                  px: 2,
                  '&:focus-visible': {
                    outline: '2px solid',
                    outlineOffset: 2
                  }
                }}
              >
                <MenuItem value="daily">Daily</MenuItem>
                <MenuItem value="library">Library</MenuItem>
                <MenuItem value="reading-list">Reading List</MenuItem>
                <MenuItem value="buy-list">Buy List</MenuItem>
                <MenuItem value="read-next">Read Next</MenuItem>
              </Select>
            </Box>
          )}
        </Box>
      </CardContent>
    </Card>
  );
}