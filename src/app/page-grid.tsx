"use client";

import { Box } from "@mui/material";
import { useState } from "react";
import { useTheme } from "@mui/material";
import { Dashboard as DashboardIcon, Settings as SettingsIcon } from "@mui/icons-material";
import { Add as AddIcon } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { ClippedDrawerLayout } from "@/components/templates/ClippedDrawerLayout";
import AddBookDialog from "@/components/AddBookDialog";
import FeaturedBookStrip from "@/components/FeaturedBookStrip";
import BookListGrid from "@/components/BookListGrid";
import { Book } from "@/lib/bookData";
import { placeholderBooks } from "@/lib/bookData";

const navigation = [
  { label: "Dashboard", icon: <DashboardIcon />, href: "/" },
  { label: "Settings", icon: <SettingsIcon />, href: "/settings" },
];

export default function Dashboard() {
  const [books, setBooks] = useState<Book[]>(placeholderBooks);
  const [addDialogOpen, setAddDialogOpen] = useState(false);
  const theme = useTheme();

  const handleAddBook = (newBook: Omit<Book, 'id' | 'dateAdded'>) => {
    const bookWithId: Book = {
      ...newBook,
      id: Math.random().toString(36).substr(2, 9),
      dateAdded: new Date().toISOString()
    };
    setBooks(prev => [...prev, bookWithId]);
  };

  // Filter books by status
  const dailyBooks = books.filter(book => book.status === 'daily');
  const libraryBooks = books.filter(book => book.status === 'library');
  const readingListBooks = books.filter(book => book.status === 'reading-list');
  const buyListBooks = books.filter(book => book.status === 'buy-list');
  const readNextBooks = books.filter(book => book.status === 'read-next');

  // All books for featured strip
  const allBooks = books;

  return (
    <ClippedDrawerLayout navigationItems={navigation}>
      <Box sx={{ 
        p: { xs: 2, md: 4 },
        backgroundColor: '#08090a',
        minHeight: '100vh',
      }}>
        <AddBookDialog
          open={addDialogOpen}
          onClose={() => setAddDialogOpen(false)}
          onAdd={handleAddBook}
        />
        <Fab
          color="primary"
          aria-label="Add book"
          onClick={() => setAddDialogOpen(true)}
          sx={{ 
            position: 'fixed', 
            bottom: 24, 
            right: 24, 
            zIndex: 1300,
            minWidth: 56,
            minHeight: 56,
          }}
        >
          <AddIcon />
        </Fab>

        <Box sx={{ 
          maxWidth: 1200, 
          mx: 'auto',
          '& h5': {
            fontFamily: theme.typography.fontFamily,
            fontWeight: 510,
            letterSpacing: '-0.5px',
          }
        }}>
          <FeaturedBookStrip
            books={allBooks}
            title="Top Picks This Week"
            subtitle="Your personalized recommendations"
          />

          <BookListGrid
            books={dailyBooks}
            title="Daily Books"
            subtitle="Books for today"
            onStatusChange={(id: string, status: Book['status']) => {
              setBooks(prev => prev.map(b => b.id === id ? { ...b, status } : b));
            }}
          />

          <BookListGrid
            books={libraryBooks}
            title="Library"
            subtitle="All your books"
            onStatusChange={(id: string, status: Book['status']) => {
              setBooks(prev => prev.map(b => b.id === id ? { ...b, status } : b));
            }}
          />

          <BookListGrid
            books={readingListBooks}
            title="Reading List"
            subtitle="Books you're currently reading"
            onStatusChange={(id: string, status: Book['status']) => {
              setBooks(prev => prev.map(b => b.id === id ? { ...b, status } : b));
            }}
          />

          <BookListGrid
            books={buyListBooks}
            title="Buy List"
            subtitle="Books to purchase"
            onStatusChange={(id: string, status: Book['status']) => {
              setBooks(prev => prev.map(b => b.id === id ? { ...b, status } : b));
            }}
          />

          <BookListGrid
            books={readNextBooks}
            title="Read Next"
            subtitle="Your reading queue"
            onStatusChange={(id: string, status: Book['status']) => {
              setBooks(prev => prev.map(b => b.id === id ? { ...b, status } : b));
            }}
          />
        </Box>
      </Box>
    </ClippedDrawerLayout>
  );
}