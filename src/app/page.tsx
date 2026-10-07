"use client";

import { useState } from "react";
import { ClippedDrawerLayout } from "@/components/templates/ClippedDrawerLayout";
import { Home as HomeIcon, Dashboard as DashboardIcon, Settings as SettingsIcon } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Add as AddIcon } from "@mui/icons-material";
import { Fab } from "@mui/material";
import { Book } from "@/lib/bookData";
import { placeholderBooks } from "@/lib/bookData";
import BookList from "@/components/BookList";
import AddBookDialog from "@/components/AddBookDialog";

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

  const handleRemoveBook = (id: string) => {
    setBooks(prev => prev.filter(book => book.id !== id));
  };

  const handleStatusChange = (id: string, newStatus: Book['status']) => {
    setBooks(prev => 
      prev.map(book => 
        book.id === id ? { ...book, status: newStatus } : book
      )
    );
  };

  // Filter books by status
  const dailyBooks = books.filter(book => book.status === 'daily');
  const libraryBooks = books.filter(book => book.status === 'library');
  const readingListBooks = books.filter(book => book.status === 'reading-list');
  const buyListBooks = books.filter(book => book.status === 'buy-list');
  const readNextBooks = books.filter(book => book.status === 'read-next');

  return (
    <ClippedDrawerLayout title="A.T.L.A.S. Book Dashboard" navigationItems={navigation}>
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

        {/* Daily Books */}
        <BookList 
          title="Daily Books" 
          books={dailyBooks} 
          onRemove={handleRemoveBook}
          onStatusChange={handleStatusChange}
        />
        
        {/* Library */}
        <BookList 
          title="Library" 
          books={libraryBooks} 
          onRemove={handleRemoveBook}
          onStatusChange={handleStatusChange}
        />
        
        {/* Reading List */}
        <BookList 
          title="Reading List" 
          books={readingListBooks} 
          onRemove={handleRemoveBook}
          onStatusChange={handleStatusChange}
        />
        
        {/* Buy List */}
        <BookList 
          title="Buy List" 
          books={buyListBooks} 
          onRemove={handleRemoveBook}
          onStatusChange={handleStatusChange}
        />
        
        {/* Read Next */}
        <BookList 
          title="Read Next" 
          books={readNextBooks} 
          onRemove={handleRemoveBook}
          onStatusChange={handleStatusChange}
        />
      </Box>
    </ClippedDrawerLayout>
  );
}