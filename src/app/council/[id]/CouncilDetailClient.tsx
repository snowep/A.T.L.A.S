"use client";

import { useState, useEffect } from "react";
import { Box, Typography, Card, CardContent, CardMedia, Chip, Avatar, Divider, Grid, Button, IconButton, Tooltip } from "@mui/material";
import { Person, Psychology, MenuBook, ArrowBack, Edit, Delete } from "@mui/icons-material";
import { useRouter, useParams } from "next/navigation";
import type { CouncilMember } from "@/types/council";

interface CouncilDetailClientProps {
  initialMember: CouncilMember;
}

export function CouncilDetailClient({ initialMember }: CouncilDetailClientProps) {
  const router = useRouter();
  const params = useParams();
  const id = params.id as string;
  const [member, setMember] = useState<CouncilMember | null>(initialMember);

  useEffect(() => {
    if (initialMember) {
      setMember(initialMember);
    }
  }, [initialMember]);

  const handleBack = () => router.push('/council');

  if (!member) {
    return (
      <Box sx={{ textAlign: 'center', py: 6 }}>
        <Typography variant="h6" color="text.secondary">
          Council Member Not Found
        </Typography>
      </Box>
    );
  }

  return (
    <Box>
      <IconButton onClick={handleBack} sx={{ mb: 2 }} aria-label="Back to Council">
        <ArrowBack />
      </IconButton>

      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Card sx={{ height: '100%' }}>
            <Box sx={{ position: 'relative', pt: '56.25%' }}>
              {member.avatar ? (
                <CardMedia
                  component="img"
                  image={member.avatar}
                  alt={member.name}
                  sx={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <Box
                  sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    bgcolor: 'primary.light',
                    color: 'primary.contrastText',
                  }}
                >
                  <Avatar sx={{ width: 120, height: 120 }}>
                    <Person fontSize="large" />
                  </Avatar>
                </Box>
              )}
            </Box>
            <CardContent sx={{ textAlign: 'center', pb: 3 }}>
              <Typography variant="h5" component="h2" sx={{ mb: 0.5 }}>
                {member.name}
              </Typography>
              <Chip
                label={member.role.charAt(0).toUpperCase() + member.role.slice(1)}
                size="medium"
                variant="outlined"
                sx={{ mb: 2 }}
              />
              <Typography variant="body1" color="text.secondary">
                Joined: {new Date(member.joinedAt).getFullYear()}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid size={{ xs: 12, md: 8 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" component="h3" sx={{ mb: 2, color: 'text.primary' }}>
                Biography
              </Typography>
              <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
                {member.bio}
              </Typography>

              <Divider sx={{ mb: 3 }} />

              <Typography variant="h6" component="h3" sx={{ mb: 2, color: 'text.primary' }}>
                Committees
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                {member.committees.map((committee) => (
                  <Chip key={committee} label={committee} variant="filled" size="small" />
                ))}
              </Box>

              {member.traits && member.traits.length > 0 && (
                <>
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="h6" component="h3" sx={{ mb: 2, color: 'text.primary' }}>
                    <Psychology sx={{ mr: 1, verticalAlign: 'middle' }} /> Traits
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 4 }}>
                    {member.traits.map((trait) => (
                      <Chip key={trait} label={trait} icon={<Psychology fontSize="small" />} variant="outlined" size="small" />
                    ))}
                  </Box>
                </>
              )}

              {member.philosophy && (
                <>
                  <Divider sx={{ mb: 3 }} />
                  <Typography variant="h6" component="h3" sx={{ mb: 2, color: 'text.primary' }}>
                    <MenuBook sx={{ mr: 1, verticalAlign: 'middle' }} /> Philosophy
                  </Typography>
                  <Typography variant="body1" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.7, whiteSpace: 'pre-line' }}>
                    {(() => {
                      const p = member.philosophy;
                      if (typeof p === 'string') return p.split(';').join('\n\n');
                      if (Array.isArray(p)) return p.join('\n\n');
                      return String(p);
                    })()}
                  </Typography>
                </>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}