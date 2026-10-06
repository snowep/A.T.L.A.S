"use client";

import { Card, CardContent, CardMedia, Typography, Chip, Box, Divider, Avatar } from "@mui/material";
import { Person, Psychology, MenuBook } from "@mui/icons-material";
import type { CouncilMember } from "@/types/council";

interface MemberCardProps {
  member: CouncilMember;
  variant?: 'default' | 'compact';
  onClick?: (id: string) => void;
}

export function MemberCard({ member, variant = 'default', onClick }: MemberCardProps) {
  const handleClick = () => onClick?.(member.id);

  return (
    <Card
      onClick={handleClick}
      sx={{
        cursor: onClick ? 'pointer' : 'default',
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': onClick ? {
          transform: 'translateY(-4px)',
          boxShadow: 8,
        } : {},
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
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
            <Avatar sx={{ width: 64, height: 64 }}>
              <Person />
            </Avatar>
          </Box>
        )}
      </Box>
      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ mb: 1 }}>
          <Typography variant="h6" component="h3" noWrap sx={{ color: 'text.primary' }}>
            {member.name}
          </Typography>
          <Chip
            label={member.role.charAt(0).toUpperCase() + member.role.slice(1)}
            size="small"
            variant="outlined"
            sx={{ mt: 0.5 }}
          />
        </Box>
        <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1, mb: 2 }}>
          {member.bio.length > 120 ? member.bio.slice(0, 120) + '...' : member.bio}
        </Typography>
        <Divider />
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
          {member.committees.slice(0, 3).map((committee) => (
            <Chip key={committee} label={committee} size="small" variant="filled" sx={{ height: 24 }} />
          ))}
          {member.committees.length > 3 && (
            <Chip size="small" label={`+${member.committees.length - 3} more`} variant="outlined" />
          )}
        </Box>
        {member.traits && member.traits.length > 0 && (
          <Box sx={{ mb: 1.5 }}>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
              Traits
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {member.traits.slice(0, 4).map((trait) => (
                <Chip
                  key={trait}
                  label={trait}
                  size="small"
                  icon={<Psychology fontSize="small" />}
                  variant="outlined"
                  sx={{ height: 22 }}
                />
              ))}
              {member.traits.length > 4 && (
                <Chip size="small" label={`+${member.traits.length - 4} more`} variant="outlined" sx={{ height: 22 }} />
              )}
            </Box>
          </Box>
        )}
        {member.philosophy && (
          <Box>
            <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
              Philosophy
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic', lineHeight: 1.5 }}>
              {(() => {
                const p = member.philosophy;
                if (typeof p === 'string') return `"${p.split(';')[0]}"`;
                if (Array.isArray(p)) return `"${p[0]}"`;
                return `"${String(p)}"`;
              })()}
            </Typography>
          </Box>
        )}
      </CardContent>
    </Card>
  );
}