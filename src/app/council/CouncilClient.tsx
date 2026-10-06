"use client";

import { Grid, Typography, Box, TextField, InputAdornment, Select, MenuItem, FormControl, InputLabel, Chip, Pagination, Skeleton, Card, CardContent } from "@mui/material";
import { Search as SearchIcon, FilterList as FilterIcon } from "@mui/icons-material";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect, useCallback } from "react";
import { MemberCard } from "@/components/molecules/MemberCard";
import { councilService } from "@/services/council";
import type { CouncilMember, CouncilListParams } from "@/types/council";

const ROLE_OPTIONS = ['chair', 'member', 'advisor', 'emeritus'] as const;
const SORT_OPTIONS = [
  { value: 'name', label: 'Name' },
  { value: 'joinedAt', label: 'Joined' },
  { value: 'role', label: 'Role' },
] as const;

export function CouncilClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const [members, setMembers] = useState<CouncilMember[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState(searchParams.get('search') || '');
  const [role, setRole] = useState<CouncilListParams['role']>(searchParams.get('role') as CouncilListParams['role'] || undefined);
  const [sort, setSort] = useState<CouncilListParams['sort']>((searchParams.get('sort') as CouncilListParams['sort']) || 'name');
  const [order, setOrder] = useState<CouncilListParams['order']>((searchParams.get('order') as CouncilListParams['order']) || 'asc');

  const limit = 12;

  const buildParams = useCallback((): CouncilListParams => ({
    search: search || undefined,
    role,
    sort,
    order,
    limit,
    cursor: page > 1 ? String((page - 1) * limit) : undefined,
  }), [search, role, sort, order, page, limit]);

  const fetchMembers = useCallback(async () => {
    setLoading(true);
    try {
      const params = buildParams();
      const response = await councilService.list(params);
      setMembers(response.members);
      setTotalCount(response.totalCount);
    } catch (error) {
      console.error('Failed to fetch council members:', error);
    } finally {
      setLoading(false);
    }
  }, [buildParams]);

  useEffect(() => {
    fetchMembers();
  }, [fetchMembers]);

  const handleSearchChange = (value: string) => {
    setSearch(value);
    setPage(1);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPage(1);
    updateUrl();
  };

  const handleRoleChange = (value: CouncilListParams['role']) => {
    setRole(value);
    setPage(1);
    updateUrl();
  };

  const handleSortChange = (value: CouncilListParams['sort']) => {
    if (value === sort) {
      setOrder(order === 'asc' ? 'desc' : 'asc');
    } else {
      setSort(value);
      setOrder('asc');
    }
    setPage(1);
    updateUrl();
  };

  const updateUrl = () => {
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (role) params.set('role', role);
    params.set('sort', sort || 'name');
    params.set('order', order || 'asc');
    if (page > 1) params.set('page', String(page));
    router.replace(`/council?${params.toString()}`, { scroll: false });
  };

  useEffect(() => {
    updateUrl();
  }, [search, role, sort, order, page, router]);

  const totalPages = Math.ceil(totalCount / limit);

  return (
    <Box>
      <Box sx={{ mb: 3 }}>
        <Typography variant="h4" component="h1" sx={{ mb: 0.5 }}>
          Council Members
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {totalCount} member{totalCount !== 1 ? 's' : ''} • Leadership and advisory council
        </Typography>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, alignItems: 'flex-end' }}>
            <Box sx={{ flexGrow: 1, minWidth: 280 }}>
              <form onSubmit={handleSearchSubmit}>
                <TextField
                  fullWidth
                  placeholder="Search by name or bio..."
                  value={search}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  size="small"
                  variant="outlined"
                  sx={{ '& .MuiInputBase-input': { padding: '8px 12px' } }}
                />
              </form>
            </Box>

            <FormControl size="small" sx={{ minWidth: 180 }}>
              <InputLabel id="role-filter-label">Role</InputLabel>
              <Select
                label="Role"
                value={role || ''}
                labelId="role-filter-label"
                onChange={(e) => handleRoleChange(e.target.value as CouncilListParams['role'] || undefined)}
                displayEmpty
              >
                <MenuItem value="">All Roles</MenuItem>
                {ROLE_OPTIONS.map((r) => (
                  <MenuItem key={r} value={r}>
                    {r.charAt(0).toUpperCase() + r.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl size="small" sx={{ minWidth: 160 }}>
              <InputLabel id="sort-filter-label">Sort</InputLabel>
              <Select
                label="Sort"
                value={sort}
                labelId="sort-filter-label"
                onChange={(e) => handleSortChange(e.target.value as CouncilListParams['sort'])}
              >
                {SORT_OPTIONS.map((s) => (
                  <MenuItem key={s.value} value={s.value}>
                    {s.label} {sort === s.value ? (order === 'asc' ? '↑' : '↓') : ''}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {search || role ? (
              <Chip
                label="Filters active"
                icon={<FilterIcon />}
                onDelete={() => {
                  setSearch('');
                  setRole(undefined);
                  setPage(1);
                }}
                size="small"
                variant="outlined"
              />
            ) : null}
          </Box>
        </CardContent>
      </Card>

      {loading ? (
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
      ) : members.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <Typography variant="h6" color="text.secondary" sx={{ mb: 1 }}>
            No council members found
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Try adjusting your search or filters
          </Typography>
        </Box>
      ) : (
        <>
          <Grid container spacing={3}>
            {members.map((member) => (
              <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={member.id}>
                <MemberCard member={member} onClick={(id) => router.push(`/council/${id}`)} />
              </Grid>
            ))}
          </Grid>

          {totalPages > 1 && (
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
              <Pagination
                count={totalPages}
                page={page}
                onChange={(_, value) => setPage(value)}
                color="primary"
                showFirstButton
                showLastButton
                boundaryCount={1}
                siblingCount={1}
              />
            </Box>
          )}
        </>
      )}
    </Box>
  );
}