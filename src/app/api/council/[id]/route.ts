import { NextRequest, NextResponse } from 'next/server';
import { getDb } from '@/lib/db';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getDb();
    const { id } = await params;
    
    const row = db.prepare('SELECT * FROM council_members WHERE id = ?').get(id) as any;
    
    if (!row) {
      return NextResponse.json({ error: 'Council member not found' }, { status: 404 });
    }

    const member = {
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
    };

    return NextResponse.json(member);
  } catch (error) {
    console.error('Failed to fetch council member:', error);
    return NextResponse.json({ error: 'Failed to fetch council member' }, { status: 500 });
  }
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getDb();
    const { id } = await params;
    const body = await request.json();
    
    const existing = db.prepare('SELECT * FROM council_members WHERE id = ?').get(id) as any;
    if (!existing) {
      return NextResponse.json({ error: 'Council member not found' }, { status: 404 });
    }

    const updated = { ...existing, ...body };
    
    const stmt = db.prepare(`
      UPDATE council_members 
      SET name = ?, role = ?, avatar = ?, bio = ?, joined_at = ?, 
          committees = ?, traits = ?, philosophy = ?, email = ?, linkedin = ?, updated_at = datetime('now')
      WHERE id = ?
    `);
    
    stmt.run(
      updated.name,
      updated.role,
      updated.avatar || null,
      updated.bio,
      updated.joinedAt,
      JSON.stringify(updated.committees),
      updated.traits ? JSON.stringify(updated.traits) : null,
      updated.philosophy ? JSON.stringify(updated.philosophy) : null,
      updated.contact?.email || null,
      updated.contact?.linkedin || null,
      id
    );

    return NextResponse.json({
      id: updated.id,
      name: updated.name,
      role: updated.role,
      avatar: updated.avatar,
      bio: updated.bio,
      joinedAt: updated.joined_at,
      committees: JSON.parse(updated.committees),
      traits: updated.traits ? JSON.parse(updated.traits) : undefined,
      philosophy: updated.philosophy ? JSON.parse(updated.philosophy) : undefined,
      contact: updated.contact,
    });
  } catch (error) {
    console.error('Failed to update council member:', error);
    return NextResponse.json({ error: 'Failed to update council member' }, { status: 500 });
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const db = getDb();
    const { id } = await params;
    
    const stmt = db.prepare('DELETE FROM council_members WHERE id = ?');
    const result = stmt.run(id);
    
    if (result.changes === 0) {
      return NextResponse.json({ error: 'Council member not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete council member:', error);
    return NextResponse.json({ error: 'Failed to delete council member' }, { status: 500 });
  }
}