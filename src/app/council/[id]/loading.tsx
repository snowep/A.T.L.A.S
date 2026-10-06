import { Box, Typography, Skeleton, Card, CardContent, CardMedia, Avatar, Divider, Grid, Chip } from "@mui/material";
import { Person, Psychology, MenuBook } from "@mui/icons-material";

export default function CouncilDetailLoading() {
  return (
    <Box sx={{ maxWidth: 900, mx: 'auto', px: 3, py: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <Box sx={{ position: 'relative', pt: '56.25%' }}>
              <Skeleton variant="rectangular" width="100%" height="100%" />
            </Box>
            <CardContent sx={{ textAlign: 'center', pb: 3 }}>
              <Skeleton variant="text" width="60%" height={40} sx={{ mx: 'auto', mb: 1 }} />
              <Skeleton variant="text" width="40%" height={24} sx={{ mx: 'auto', mb: 2 }} />
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>
              <Skeleton variant="text" width="40%" height={32} sx={{ mb: 3 }} />
              <Skeleton variant="text" width="100%" height={80} sx={{ mb: 4 }} />
              <Divider sx={{ mb: 3 }} />
              <Skeleton variant="text" width="30%" height={32} sx={{ mb: 2 }} />
              <Skeleton variant="rectangular" width="100%" height={120} sx={{ mb: 4 }} />
              <Divider sx={{ mb: 3 }} />
              <Skeleton variant="text" width="30%" height={32} sx={{ mb: 2 }} />
              <Skeleton variant="rectangular" width="100%" height={60} sx={{ mb: 4 }} />
              <Divider sx={{ mb: 3 }} />
              <Skeleton variant="text" width="30%" height={32} sx={{ mb: 2 }} />
              <Skeleton variant="rectangular" width="100%" height={200} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}