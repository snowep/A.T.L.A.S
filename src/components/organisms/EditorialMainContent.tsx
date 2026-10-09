"use client";

import { Box, Typography, Chip, Card, CardMedia, Button, Divider } from "@mui/material";
import { ArrowForward as ArrowForwardIcon, Bookmark as BookmarkIcon, Clock as ClockIcon } from "@mui/icons-material";
import { placeholderBooks } from "@/lib/bookData";

interface FeaturedBook {
  rank: number;
  title: string;
  author: string;
  coverColor: string;
  progress: number; // 0-100
}

const featuredBooks: FeaturedBook[] = [
  { rank: 1, title: "Atomic Habits", author: "James Clear", coverColor: "#2E7D32", progress: 65 },
  { rank: 2, title: "Deep Work", author: "Cal Newport", coverColor: "#1565C0", progress: 40 },
  { rank: 3, title: "The Pragmatic Programmer", author: "Hunt & Thomas", coverColor: "#C62828", progress: 80 },
  { rank: 4, title: "Clean Code", author: "Robert C. Martin", coverColor: "#6A1B9A", progress: 30 },
  { rank: 5, title: "Designing Data-Intensive Apps", author: "Martin Kleppmann", coverColor: "#EF6C00", progress: 55 },
];

const resumeBooks = placeholderBooks.filter(b => b.status === 'daily').slice(0, 3);
const exploreCategories = [
  { label: "Productivity", count: 12, color: "#2E7D32" },
  { label: "Software Architecture", count: 8, color: "#1565C0" },
  { label: "Leadership", count: 6, color: "#6A1B9A" },
  { label: "DevOps & SRE", count: 7, color: "#EF6C00" },
  { label: "System Design", count: 5, color: "#C62828" },
  { label: "Career Growth", count: 9, color: "#00695C" },
];

export function EditorialMainContent() {

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
      {/* Featured Strip */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: theme.palette.text.primary }}>
          Top Picks This Week
        </Typography>
        <Box sx={{ display: "flex", gap: 2, overflowX: "auto", pb: 1, px: { xs: 1, md: 0 } }}>
          {featuredBooks.map((book) => (
            <Box key={book.title} sx={{ flexShrink: 0, width: 160, display: "flex", flexDirection: "column", gap: 1 }}>
              {/* Rank Badge */}
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                <Chip
                  label={`#${book.rank}`}
                  size="small"
                  variant="outlined"
                  sx={{
                    fontWeight: 700,
                    borderColor: theme.palette.divider,
                    backgroundColor: theme.palette.background.paper,
                  }}
                />
                <Box
                  sx={{
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    backgroundColor: book.coverColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    fontWeight: 700,
                    fontSize: "0.75rem",
                  }}
                >
                  {book.rank}
                </Box>
              </Box>
              
              {/* Book Cover Placeholder */}
              <CardMedia
                component="div"
                sx={{
                  width: "100%",
                  aspectRatio: "2/3",
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${book.coverColor} 0%, ${book.coverColor}dd 100%)`,
                  position: "relative",
                  overflow: "hidden",
                }}
                image=""
              >
                <Box sx={{ position: "absolute", bottom: 0, left: 0, right: 0, p: 1.5, background: "linear-gradient(transparent, rgba(0,0,0,0.7))" }}>
                  <Typography variant="caption" color="white" sx={{ fontWeight: 500 }}>
                    {book.progress}% complete
                  </Typography>
                </Box>
              </CardMedia>
              
              {/* Title & Author */}
              <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary, lineHeight: 1.3, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {book.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {book.author}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ opacity: 0.3 }} />

      {/* Resume / Continue Section */}
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
            Continue Reading
          </Typography>
          <Button size="small" variant="text" endIcon={<ArrowForwardIcon fontSize="small" />}>
            View All
          </Button>
        </Box>
        
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {resumeBooks.map((book) => (
            <Card
              key={book.id}
              sx={{
                display: "flex",
                gap: 2,
                p: 1.5,
                borderRadius: 2,
                border: `1px solid ${theme.palette.divider}`,
                transition: "box-shadow 0.2s, border-color 0.2s",
                "&:hover": {
                  boxShadow: 2,
                  borderColor: theme.palette.primary.light,
                },
              }}
            >
              <CardMedia
                component="div"
                sx={{
                  width: 64,
                  aspectRatio: "2/3",
                  borderRadius: 1,
                  background: "linear-gradient(135deg, #e0e0e0 0%, #f5f5f5 100%)",
                  flexShrink: 0,
                }}
                image=""
              />
              <Box sx={{ flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "center", minWidth: 0 }}>
                <Typography variant="body1" sx={{ fontWeight: 500, color: theme.palette.text.primary, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                  {book.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                  {book.author}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mt: 1 }}>
                  <Chip
                    label={book.status.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                    size="small"
                    variant="outlined"
                    sx={{ fontSize: "0.7rem", height: 20 }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    <ClockIcon fontSize="small" sx={{ mr: 0.5, verticalAlign: "middle" }} />
                    Added {new Date(book.dateAdded).toLocaleDateString()}
                  </Typography>
                </Box>
              </Box>
              <Button
                size="small"
                variant="outlined"
                sx={{ alignSelf: "center", minWidth: 80 }}
                startIcon={<ArrowForwardIcon fontSize="small" />}
              >
                Resume
              </Button>
            </Card>
          ))}
        </Box>
      </Box>

      <Divider sx={{ opacity: 0.3 }} />

      {/* Explore / Discover Section */}
      <Box>
        <Typography variant="h6" sx={{ fontWeight: 600, mb: 2, color: theme.palette.text.primary }}>
          Explore Categories
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1.5 }}>
          {exploreCategories.map((cat) => (
            <Chip
              key={cat.label}
              label={`${cat.label} (${cat.count})`}
              variant="outlined"
              size="medium"
              sx={{
                height: 36,
                borderColor: `${cat.color}66`,
                color: cat.color,
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: `${cat.color}14`,
                  borderColor: cat.color,
                },
                "& .MuiChip-icon": {
                  color: cat.color,
                },
              }}
              icon={<BookmarkIcon fontSize="small" />}
            />
          ))}
        </Box>
      </Box>
    </Box>
  });
  }