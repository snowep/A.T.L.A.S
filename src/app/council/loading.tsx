"use client";

import { Grid, Typography, Skeleton, Card, CardContent, Box } from "@mui/material";

export default function CouncilLoading() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" sx={{ mb: 0.5 }}>
        Council Members
      </Typography>
      <Grid container spacing={3}>
        {[...Array(12)].map((_, i) => (
          <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={i}>
            <Card>
              <CardContent>
                <Skeleton variant="rectangular" width="60%" height={40} sx={{ mb: 1 }} />
                <Skeleton variant="rectangular" width="40%" height={24} sx={{ mb: 2 }} />
                <Skeleton variant="rectangular" width="100%" height={60} />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}