import type { CouncilMember, CouncilListParams, CouncilListResponse } from '@/types/council';

function getBaseUrl(): string {
  if (typeof window !== 'undefined') return '';
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.NEXT_PUBLIC_APP_URL) return process.env.NEXT_PUBLIC_APP_URL;
  return `http://localhost:${process.env.PORT || 3000}`;
}

const API_BASE = `${getBaseUrl()}/api/council`;

function buildQueryString(params: CouncilListParams): string {
  const searchParams = new URLSearchParams();
  if (params.search) searchParams.set('search', params.search);
  if (params.role) searchParams.set('role', params.role);
  if (params.committee) searchParams.set('committee', params.committee);
  if (params.sort) searchParams.set('sort', params.sort);
  if (params.order) searchParams.set('order', params.order);
  if (params.limit) searchParams.set('limit', String(params.limit));
  if (params.cursor) searchParams.set('cursor', params.cursor);
  return searchParams.toString();
}

export const councilService = {
  async list(params: CouncilListParams = {}): Promise<CouncilListResponse> {
    const query = buildQueryString(params);
    const response = await fetch(`${API_BASE}?${query}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch council members');
    }
    
    return response.json();
  },

  async get(id: string): Promise<CouncilMember | null> {
    const response = await fetch(`${API_BASE}/${id}`, {
      cache: 'no-store',
    });
    
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error('Failed to fetch council member');
    }
    
    return response.json();
  },

  // Server-side only methods - will need API endpoints
  async create(member: Omit<CouncilMember, 'id'>): Promise<CouncilMember> {
    const response = await fetch(API_BASE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(member),
    });
    
    if (!response.ok) {
      throw new Error('Failed to create council member');
    }
    
    return response.json();
  },

  async update(id: string, updates: Partial<CouncilMember>): Promise<CouncilMember | null> {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    
    if (!response.ok) {
      if (response.status === 404) return null;
      throw new Error('Failed to update council member');
    }
    
    return response.json();
  },

  async delete(id: string): Promise<boolean> {
    const response = await fetch(`${API_BASE}/${id}`, {
      method: 'DELETE',
    });
    
    return response.ok;
  },
};