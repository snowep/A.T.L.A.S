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
  // Generate a placeholder cover image based on book title hash
  const coverUrl = `/api/placeholder-book?title=${encodeURIComponent(book.title)}&size=200x280`;

  return (
    <Card 
      sx={{ 
        mb: 2,
        width: { xs: '100%', md: 400 },
        borderRadius: 8,
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': { 
          transform: 'translateY(-2px)',
          boxShadow: 4 
        }
      }}
    >
      <CardContent sx={{ py: 3, pb: 1 }}>
        {/* Book Cover Placeholder */}
        <Box sx={{ 
          width: '100%', 
          height: 140, 
          borderRadius: 4,
          marginBottom: 2,
          backgroundImage: `linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <img 
            src={coverUrl}
            alt={book.title}
            width={200}
            height={280}
            style={{ objectFit: 'cover' }}
            loading="lazy"
          />
        </Box>

        <Box sx={{ px: 2, mb: 2 }}>
          <Typography 
            variant="h6" 
            component="div" 
            sx={{ 
              fontWeight: 500, 
              color: 'primary.main',
              // Title: wrap to 2 lines max
              display: '-webkit-box',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              lineHeight: 1.3,
            }}
          >
            {book.title}
          </Typography>
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              // Author: single line with ellipsis
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            by {book.author}
          </Typography>
        </Box>

        <Box sx={{ mt: 1 }}>
          <Typography variant="caption" color="text.secondary">
            Added: {new Date(book.dateAdded).toLocaleDateString()}
          </Typography>
        </Box>

        {/* Status Selector */}
        <Box sx={{ mt: 2 }}>
          <Typography variant="caption" color="text.secondary">Status</Typography>
          <Select
            labelId="status-select"
            id="status-select"
            value={book.status || 'daily'}
            label="Status"
            onChange={(e) => onStatusChange && onStatusChange(book.id, e.target.value || 'daily')}
            sx={{
              marginTop: 1,
              border: 1,
              borderColor: 'divider',
              borderRadius: 2,
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

        {/* Remove button */}
        {onRemove && (
          <Box sx={{ mt: 1, pt: 1, borderTop: '1px solid', borderColor: 'divider' }}>
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
          </Box>
        )}
      </CardContent>
    </Card>
  );
}
