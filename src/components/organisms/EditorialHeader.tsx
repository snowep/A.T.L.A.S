"use client";

import { Box, TextField, IconButton, Tooltip, Avatar, useTheme, Typography } from "@mui/material";
import { Search as SearchIcon, Notifications as NotificationsIcon, Menu as MenuIcon, Person as PersonIcon } from "@mui/icons-material";

interface EditorialHeaderProps {
  title: string;
  onMenuClick: () => void;
  drawerOpen: boolean;
}

export function EditorialHeader({ title, onMenuClick, drawerOpen }: EditorialHeaderProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: { xs: 2, md: 3 },
        borderBottom: `1px solid ${theme.palette.divider}`,
        backgroundColor: theme.palette.background.paper,
        flexShrink: 0,
        gap: 2,
      }}
      role="banner"
    >
      {/* Left: Title + Menu button on mobile */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, minWidth: 0 }}>
        <IconButton
          onClick={onMenuClick}
          aria-label={drawerOpen ? "Close navigation" : "Open navigation"}
          sx={{ display: { xs: "flex", md: "none" }, color: theme.palette.text.primary }}
        >
          <MenuIcon />
        </IconButton>
        <Box sx={{ minWidth: 0 }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>

      {/* Center: Search Field */}
      <Box
        sx={{
          flexGrow: 1,
          maxWidth: 560,
          display: "flex",
          justifyContent: "center",
          minWidth: 0,
        }}
      >
        <TextField
          placeholder="Search books, authors, topics..."
          size="small"
          variant="outlined"
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-root": {
              borderRadius: 24,
              backgroundColor: theme.palette.mode === "light" ? "#F9F5ED" : "#1E1E1E",
              "& fieldset": {
                borderColor: "transparent",
              },
              "&:hover fieldset": {
                borderColor: theme.palette.divider,
              },
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.primary.main,
                borderWidth: 2,
              },
            },
            "& .MuiInputBase-input": {
              padding: "8px 16px",
            },
            "& .MuiInputAdornment-root": {
              color: theme.palette.text.secondary,
            },
          }}
          InputProps={{
            startAdornment: (
              <Box sx={{ p: 1, color: theme.palette.text.secondary }}>
                <SearchIcon fontSize="small" />
              </Box>
            ),
          }}
          aria-label="Search"
        />
      </Box>

      {/* Right: Notifications, Avatar, Primary Action */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, flexShrink: 0 }}>
        <Tooltip title="Notifications">
          <IconButton
            aria-label="Notifications"
            sx={{ color: theme.palette.text.secondary }}
          >
            <NotificationsIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
        
        <Tooltip title="Profile">
          <IconButton aria-label="Profile" sx={{ p: 0 }}>
            <Avatar
              sx={{
                width: 32,
                height: 32,
                fontSize: "0.75rem",
                fontWeight: 600,
                backgroundColor: theme.palette.primary.main,
                color: theme.palette.primary.contrastText,
              }}
            >
              AT
            </Avatar>
          </IconButton>
        </Tooltip>
        
        <Tooltip title="Add Book">
          <IconButton
            aria-label="Add Book"
            sx={{
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              "&:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
            }}
          >
            <PersonIcon fontSize="medium" />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
}