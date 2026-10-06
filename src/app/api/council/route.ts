import 'server-only';
import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(request: NextRequest) {
  try {
    const db = getDb();
    const searchParams = request.nextUrl.searchParams;
    
    const search = searchParams.get('search') || '';
    const role = searchParams.get('role') || undefined;
    const committee = searchParams.get('committee') || undefined;
    const sort = searchParams.get('sort') || 'name';
    const order = searchParams.get('order') || 'asc';
    const limit = parseInt(searchParams.get('limit') || '12');
    const cursor = searchParams.get('cursor') ? parseInt(searchParams.get('cursor')!) : undefined;

    let where = 'WHERE 1=1';
    const params: any[] = [];

    if (search) {
      where += ' AND (name LIKE ? OR bio LIKE ?)';
      params.push(`%${search}%`, `%${search}%`);
    }

    if (role) {
      where += ' AND role = ?';
      params.push(role);
    }

    if (committee) {
      where += ' AND committees LIKE ?';
      params.push(`%${committee}%`);
    }

    const validSorts = ['name', 'joined_at', 'role'];
    const sortCol = validSorts.includes(sort) ? sort : 'name';
    const sortDir = order === 'desc' ? 'DESC' : 'ASC';

    const countStmt = db.prepare(`SELECT COUNT(*) as count FROM council_members ${where}`);
    const totalCount = (countStmt.get(...params) as { count: number }).count;

    let limitClause = `LIMIT ?`;
    let limitParams = [...params, limit];
    
    if (cursor !== undefined) {
      limitClause = `LIMIT ? OFFSET ?`;
      limitParams = [...params, limit, cursor];
    }

    const dataStmt = db.prepare(`
      SELECT * FROM council_members 
      ${where}
      ORDER BY ${sortCol} ${sortDir}
      ${limitClause}
    `);
    const rows = dataStmt.all(...limitParams) as any[];

    const members = rows.map(row => ({
      id: row.id,
      name: row.name,
      role: row.role,
      avatar: row.avatar,
      bio: row.bio,
      joinedAt: row.joined_at,
      committees: JSON.parse(row.committees),
      traits: row.traits ? JSON.parse(row.traits) : undefined,
      philosophy: row.philosophy ? JSON.parse(row.philosophy) : undefined,
      contact: row.email || row.linkedin ? {
        email: row.email,
        linkedin: row.linkedin,
      } : undefined,
    }));

    return NextResponse.json({
      members,
      totalCount,
      nextCursor: rows.length === limit ? String((cursor || 0) + limit) : undefined,
    });
  } catch (error) {
    console.error('Failed to fetch council members:', error);
    return NextResponse.json({ error: 'Failed to fetch council members' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const db = getDb();
    const body = await request.json();
    
    const id = crypto.randomUUID();
    const now = new Date().toISOString();
    
    const stmt = db.prepare(`
      INSERT INTO council_members (id, name, role, avatar, bio, joined_at, committees, traits, philosophy, email, linkedin, created_at, updated_at)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);
    
    stmt.run(
      id,
      body.name,
      body.role,
      body.avatar || null,
      body.bio,
      body.joinedAt,
      JSON.stringify(body.committees || []),
      body.traits ? JSON.stringify(body.traits) : null,
      body.philosophy ? JSON.stringify(body.philosophy) : null,
      body.contact?.email || null,
      body.contact?.linkedin || null,
      now,
      now
    );

    return NextResponse.json({
      id,
      name: body.name,
      role: body.role,
      avatar: body.avatar,
      bio: body.bio,
      joinedAt: body.joinedAt,
      committees: body.committees || [],
      traits: body.traits || undefined,
      philosophy: body.philosophy || undefined,
      contact: body.contact || undefined,
    }, { status: 201 });
  } catch (error) {
    console.error('Failed to create council member:', error);
    return NextResponse.json({ error: 'Failed to create council member' }, { status: 500 });
  }
}