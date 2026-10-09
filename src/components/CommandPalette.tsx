"use client";

import { Box } from "@mui/material";
import { useState, useEffect } from "react";

interface CommandPaletteProps {
  open: boolean;
  onClose: () => void;
}

export default function CommandPalette({ open, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!open) return null;

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.8)',
        backdropFilter: 'blur(4px)',
        zIndex: 1400,
        display: 'flex',
        alignItems: 'flex-start',
        justifyContent: 'center',
        pt: '20vh',
        p: 2,
      }}
      onClick={onClose}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: 640,
          backgroundColor: '#191a1b',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 2,
          overflow: 'hidden',
          boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            px: 3,
            py: 2.5,
            borderBottom: '1px solid rgba(255,255,255,0.05)',
          }}
        >
          <Box sx={{ color: 'text.secondary', fontSize: 20 }}>⌘</Box>
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search books, jump to sections..."
            style={{
              flex: 1,
              background: 'transparent',
              border: 'none',
              outline: 'none',
              color: '#f7f8f8',
              fontSize: '16px',
              fontFamily: 'Inter Variable, system-ui, sans-serif',
            }}
          />
          <Box sx={{ color: 'text.tertiary', fontSize: '12px' }}>
            ESC
          </Box>
        </Box>
        
        <Box sx={{ p: 2 }}>
          <Box sx={{ 
            px: 3, 
            py: 2, 
            color: 'text.secondary',
            fontSize: '14px',
          }}>
            Recent
          </Box>
          {[
            'Go to Daily Books',
            'Add new book',
            'Toggle theme',
            'Open settings',
          ].map((item, i) => (
            <Box
              key={i}
              sx={{
                px: 3,
                py: 2,
                borderRadius: 1,
                cursor: 'pointer',
                '&:hover': {
                  backgroundColor: 'rgba(255,255,255,0.05)',
                },
              }}
            >
              <Box sx={{ color: '#f7f8f8', fontSize: '14px' }}>
                {item}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}