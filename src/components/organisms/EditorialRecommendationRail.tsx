"use client";

import { Box, Typography, Card, Avatar, Chip, Button, Divider, useTheme } from "@mui/material";
import { ArrowForward as ArrowForwardIcon, Star as StarIcon } from "@mui/icons-material";

interface Recommendation {
  id: string;
  type: "book" | "person" | "list";
  title: string;
  subtitle: string;
  avatarColor: string;
  avatarText: string;
  preview?: string;
  socialProof?: string;
  featured?: boolean;
}

const recommendations: Recommendation[] = [
  {
    id: "1",
    type: "book",
    title: "Staff Engineer",
    subtitle: "Will Larson • Leadership",
    avatarColor: "#2E7D32",
    avatarText: "SE",
    preview: "Leadership beyond the management track. Essential reading for ICs aiming for staff+ roles.",
    socialProof: "4.8 ★ • 2.3k reviews",
    featured: true,
  },
  {
    id: "2",
    type: "person",
    title: "Camille Fournier",
    subtitle: "Author • The Manager's Path",
    avatarColor: "#1565C0",
    avatarText: "CF",
    preview: "Former CTO at Rent the Runway. Writes about engineering leadership and career growth.",
    socialProof: "12.4k followers",
  },
  {
    id: "3",
    type: "list",
    title: "System Design Essentials",
    subtitle: "Curated by Alex Xu",
    avatarColor: "#6A1B9A",
    avatarText: "SD",
    preview: "15 books covering distributed systems, scalability, and architecture patterns.",
    socialProof: "847 saves",
  },
  {
    id: "4",
    type: "book",
    title: "Team Topologies",
    subtitle: "Skelton & Pais • Org Design",
    avatarColor: "#EF6C00",
    avatarText: "TT",
    preview: "Organizing business and technology teams for fast flow. A modern classic.",
    socialProof: "4.7 ★ • 1.8k reviews",
  },
  {
    id: "5",
    type: "person",
    title: "Kelsey Hightower",
    subtitle: "Kubernetes Co-creator • Google",
    avatarColor: "#00695C",
    avatarText: "KH",
    preview: "Distributed systems advocate. Shares practical insights on infrastructure and ops.",
    socialProof: "240k followers",
  },
  {
    id: "6",
    type: "book",
    title: "High Output Management",
    subtitle: "Andy Grove • Intel",
    avatarColor: "#C62828",
    avatarText: "HM",
    preview: "The definitive guide to management from Intel's former CEO. Timeless principles.",
    socialProof: "4.9 ★ • 3.1k reviews",
  },
];

export function EditorialRecommendationRail() {
  const theme = useTheme();

  return (
    <Box sx={{ p: { xs: 2, md: 3 }, display: "flex", flexDirection: "column", gap: 3 }}>
      {/* Rail Header */}
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
        <Typography variant="h6" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
          Recommended for You
        </Typography>
        <Chip
          label={recommendations.length}
          size="small"
          variant="outlined"
          sx={{ fontWeight: 600, borderColor: theme.palette.primary.main, color: theme.palette.primary.main }}
        />
      </Box>

      {/* Featured Recommendation */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {recommendations.filter(r => r.featured).map((rec) => (
          <Card
            key={rec.id}
            sx={{
              p: 2,
              borderRadius: 2,
              border: `1px solid ${theme.palette.primary.main}`,
              backgroundColor: theme.palette.mode === "light"
                ? `linear-gradient(135deg, ${theme.palette.primary.main}10 0%, ${theme.palette.primary.main}05 100%)`
                : `linear-gradient(135deg, ${theme.palette.primary.main}20 0%, ${theme.palette.primary.main}10 100%)`,
              position: "relative",
              overflow: "hidden",
            }}
          >
            <Box sx={{ position: "absolute", top: 8, right: 8 }}>
              <Chip
                label="Featured"
                size="small"
                icon={<StarIcon fontSize="small" />}
                sx={{
                  backgroundColor: theme.palette.primary.main,
                  color: theme.palette.primary.contrastText,
                  fontWeight: 600,
                  fontSize: "0.65rem",
                  height: 20,
                }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: 2, alignItems: "flex-start" }}>
              <Avatar
                sx={{
                  width: 56,
                  height: 56,
                  fontSize: "1rem",
                  fontWeight: 700,
                  backgroundColor: rec.avatarColor,
                  color: "white",
                  flexShrink: 0,
                }}
              >
                {rec.avatarText}
              </Avatar>
              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Typography variant="body1" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                  {rec.title}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                  {rec.subtitle}
                </Typography>
                {rec.preview && (
                  <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.5, mb: 1.5, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {rec.preview}
                  </Typography>
                )}
                {rec.socialProof && (
                  <Typography variant="caption" sx={{ color: theme.palette.primary.main, fontWeight: 500 }}>
                    {rec.socialProof}
                  </Typography>
                )}
              </Box>
            </Box>
            <Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${theme.palette.divider}`, display: "flex", justifyContent: "flex-end" }}>
              <Button size="small" variant="contained" startIcon={<ArrowForwardIcon fontSize="small" />}>
                Explore
              </Button>
            </Box>
          </Card>
        ))}

        {/* Regular Recommendations */}
        <Divider sx={{ opacity: 0.3 }} />
        
        <Typography variant="subtitle2" color="text.secondary" sx={{ fontWeight: 500 }}>
          More Suggestions
        </Typography>

        {recommendations.filter(r => !r.featured).map((rec) => (
          <Card
            key={rec.id}
            sx={{
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
            <Box sx={{ display: "flex", gap: 1.5, alignItems: "flex-start" }}>
              <Avatar
                sx={{
                  width: 44,
                  height: 44,
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  backgroundColor: rec.avatarColor,
                  color: "white",
                  flexShrink: 0,
                }}
              >
                {rec.avatarText}
              </Avatar>
              <Box sx={{ flexGrow: 1, minWidth: 0 }}>
                <Typography variant="body2" sx={{ fontWeight: 600, color: theme.palette.text.primary }}>
                  {rec.title}
                </Typography>
                <Typography variant="caption" color="text.secondary" sx={{ mb: 0.5 }}>
                  {rec.subtitle}
                </Typography>
                {rec.preview && (
                  <Typography variant="caption" color="text.secondary" sx={{ lineHeight: 1.4, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {rec.preview}
                  </Typography>
                )}
                {rec.socialProof && (
                  <Typography variant="caption" sx={{ color: theme.palette.text.secondary, fontSize: "0.7rem" }}>
                    {rec.socialProof}
                  </Typography>
                )}
              </Box>
              <Button
                size="small"
                variant="text"
                sx={{ alignSelf: "flex-start", p: 0.5, minWidth: "auto" }}
                endIcon={<ArrowForwardIcon fontSize="small" />}
              >
                View
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
}