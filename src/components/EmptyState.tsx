"use client";

import { Box, Fade, Typography } from "@mui/material";

interface EmptyStateProps {
  title: string;
  icon?: React.ReactNode;
  description?: string;
  actionLabel?: string;
  onAction?: () => void;
}

export default function EmptyState({ 
  title, 
  icon,
  description = "No items here yet",
  actionLabel,
  onAction
}: EmptyStateProps) {

  return (
    <Fade in={true} timeout={400}>
      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        p: 6,
        borderRadius: 2,
        backgroundColor: 'rgba(255,255,255,0.02)',
        border: '1px dashed rgba(255,255,255,0.08)',
        minHeight: 200,
        textAlign: 'center',
      }}>
        {icon && (
          <Box sx={{ 
            mb: 3, 
            opacity: 0.6,
            fontSize: 48,
          }}>
            {icon}
          </Box>
        )}
        <Typography variant="h6" sx={{ 
          mb: 1,
          fontWeight: 510,
          color: 'text.primary',
        }}>
          {title}
        </Typography>
        <Typography variant="body2" sx={{ 
          color: 'text.secondary',
          mb: actionLabel ? 3 : 0,
          maxWidth: 320,
        }}>
          {description}
        </Typography>
        {actionLabel && onAction && (
          <Box 
            component="button"
            onClick={onAction}
            sx={{
              px: 3,
              py: 1.5,
              borderRadius: 1,
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              color: 'text.primary',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              '&:hover': {
                backgroundColor: 'rgba(255,255,255,0.08)',
                transform: 'translateY(-1px)',
              },
            }}
          >
            {actionLabel}
          </Box>
        )}
      </Box>
    </Fade>
  );
}