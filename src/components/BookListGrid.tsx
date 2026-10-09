import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import BookCard from "./BookCard";
import { Book } from "@/lib/bookData";

interface BookListProps {
  books: Book[];
  title: string;
  subtitle?: string;
  onRemove?: (id: string) => void;
  onStatusChange?: (id: string, newStatus: Book['status']) => void;
}

export default function BookList({ 
  books, 
  title, 
  subtitle,
  onRemove,
  onStatusChange 
}: BookListProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  if (books.length === 0) {
    return (
      <Box sx={{ mb: 6 }}>
        <Typography variant="h5" sx={{ 
          fontFamily: theme.typography.fontFamily,
          fontWeight: 510,
          letterSpacing: '-0.5px',
          color: 'text.primary',
          mb: 1
        }}>
          {title}
        </Typography>
        {subtitle && (
          <Typography variant="body2" sx={{ 
            color: 'text.secondary',
            mb: 3
          }}>
            {subtitle}
          </Typography>
        )}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 3,
          p: 4,
          borderRadius: 2,
          bgcolor: 'rgba(255,255,255,0.02)',
          border: '1px solid rgba(255,255,255,0.05)',
        }}>
          <Box sx={{ gridColumn: '1 / -1', textAlign: 'center', py: 6 }}>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              No books in {title.toLowerCase()}
            </Typography>
          </Box>
        </Box>
      </Box>
    );
  }

  return (
    <Box sx={{ mb: 6 }}>
      <Typography variant="h5" sx={{ 
        fontFamily: theme.typography.fontFamily,
        fontWeight: 510,
        letterSpacing: '-0.5px',
        color: 'text.primary',
        mb: 1
      }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" sx={{ 
          color: 'text.secondary',
          mb: 3
        }}>
          {subtitle}
        </Typography>
      )}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 3,
          '& .MuiCard-root': {
            backgroundColor: 'rgba(255,255,255,0.02)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: 2,
            transition: 'all 0.2s ease',
            '&:hover': {
              backgroundColor: 'rgba(255,255,255,0.04)',
              transform: 'translateY(-2px)',
            },
          },
        }}
      >
        {books.map((b) => (
          <Box key={b.id}>
            <BookCard book={b} onRemove={onRemove} onStatusChange={onStatusChange} />
          </Box>
        ))}
      </Box>
    </Box>
  );
}