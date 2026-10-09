"use client";

import { Card, CardContent, Box, useMediaQuery } from "@mui/material";
import { Book } from "@/lib/bookData";
import { BookCover } from "@/components/atoms/BookCover";
import { BookTitle } from "@/components/atoms/BookTitle";
import { BookAuthor } from "@/components/atoms/BookAuthor";
import { BookMeta } from "@/components/atoms/BookMeta";
import { BookStatusSelector } from "@/components/molecules/BookStatusSelector";
import { BookRemoveButton } from "@/components/molecules/BookRemoveButton";

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
  const prefersReducedMotion = useMediaQuery('(prefers-reduced-motion: reduce)');
  const transition = prefersReducedMotion ? 'none' : 'all 0.2s ease';
  return (
    <Card 
      sx={{ 
        mb: 2,
        width: '100%',
        borderRadius: 2,
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: '1px solid rgba(255,255,255,0.08)',
        transition: transition,
        '&:hover': { 
          backgroundColor: 'rgba(255,255,255,0.04)',
          transform: 'translateY(-2px)',
          boxShadow: 4
        }
      }}
    >
      <CardContent sx={{ py: 3, pb: 1 }}>
        {/* Book Cover */}
        <BookCover book={book} />

        <Box sx={{ px: 2, mb: 2 }}>
          <BookTitle title={book.title} />
          <BookAuthor author={book.author} />
        </Box>

        <BookMeta dateAdded={book.dateAdded} sx={{ mt: 1 }} />

        {/* Status Selector */}
        <BookStatusSelector 
          book={book} 
          onStatusChange={onStatusChange} 
        />

        {/* Remove button */}
        {onRemove && (
          <BookRemoveButton onRemove={onRemove} bookId={book.id} />
        )}
      </CardContent>
    </Card>
  );
}
