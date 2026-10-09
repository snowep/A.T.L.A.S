"use client";

import { useState } from "react";
import { ClippedDrawerLayout } from "@/components/templates/ClippedDrawerLayout";
import { Dashboard as DashboardIcon, Settings as SettingsIcon } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { Book } from "@/lib/bookData";
import { placeholderBooks } from "@/lib/bookData";
import AddBookDialog from "@/components/AddBookDialog";
import FeaturedBookStrip from "@/components/FeaturedBookStrip";

const navigation = [
  { label: "Dashboard", icon: <DashboardIcon />, href: "/" },
  { label: "Settings", icon: <SettingsIcon />, href: "/settings" },
];

export default function Dashboard() {
  const [books, setBooks] = useState<Book[]>(placeholderBooks);
  const [addDialogOpen, setAddDialogOpen] = useState(false);

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
      <Box sx={{ p: 4 }}>
        <AddBookDialog
          open={addDialogOpen}
          onClose={() => setAddDialogOpen(false)}
          onAdd={handleAddBook}
        />
        <Fab
          color="primary"
          aria-label="Add book"
          onClick={() => setAddDialogOpen(true)}
          sx={{ position: 'fixed', bottom: 24, right: 24, zIndex: 1300 }}
        >
          <AddIcon />
        </Fab>

        {/* Featured Book Strip - Top Picks This Week */}
        <FeaturedBookStrip
          books={allBooks}
          title="Top Picks This Week"
          subtitle="Your personalized recommendations"
        />

        {/* Daily Books */}
        <FeaturedBookStrip
          books={dailyBooks}
          title="Daily Books"
          subtitle="Books for today"
        />

        {/* Library */}
        <FeaturedBookStrip
          books={libraryBooks}
          title="Library"
          subtitle="All your books"
        />

        {/* Reading List */}
        <FeaturedBookStrip
          books={readingListBooks}
          title="Reading List"
          subtitle="Books you're currently reading"
        />

        {/* Buy List */}
        <FeaturedBookStrip
          books={buyListBooks}
          title="Buy List"
          subtitle="Books to purchase"
        />

        {/* Read Next */}
        <FeaturedBookStrip
          books={readNextBooks}
          title="Read Next"
          subtitle="Your reading queue"
        />
      </Box>
    </ClippedDrawerLayout>
  );
}