export interface CouncilMember {
  id: string;
  name: string;
  role: 'chair' | 'member' | 'advisor' | 'emeritus';
  avatar?: string;
  bio: string;
  joinedAt: string;
  committees: string[];
  traits?: string[]; // personality traits, expertise areas
  philosophy?: string; // their guiding principle
  contact?: {
    email?: string;
    linkedin?: string;
  };
}

export interface CouncilListParams {
  search?: string;
  role?: CouncilMember['role'];
  committee?: string;
  sort?: 'name' | 'joinedAt' | 'role';
  order?: 'asc' | 'desc';
  cursor?: string;
  limit?: number;
}

export interface CouncilListResponse {
  members: CouncilMember[];
  nextCursor?: string;
  totalCount: number;
}