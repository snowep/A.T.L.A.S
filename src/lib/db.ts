import 'server-only';
import Database from 'better-sqlite3';
import { join } from 'path';
import { homedir } from 'os';
import { mkdirSync, existsSync } from 'fs';

const DB_DIR = join(process.cwd(), 'data');
const DB_PATH = join(DB_DIR, 'atlas.db');

if (!existsSync(DB_DIR)) {
  mkdirSync(DB_DIR, { recursive: true });
}

const db = new Database(DB_PATH);

db.exec(`
  CREATE TABLE IF NOT EXISTS council_members (
    id TEXT PRIMARY KEY,
    name TEXT NOT NULL,
    role TEXT NOT NULL CHECK (role IN ('chair', 'member', 'advisor', 'emeritus')),
    avatar TEXT,
    bio TEXT NOT NULL,
    joined_at TEXT NOT NULL,
    committees TEXT NOT NULL,
    traits TEXT,
    philosophy TEXT,
    email TEXT,
    linkedin TEXT,
    created_at TEXT DEFAULT (datetime('now')),
    updated_at TEXT DEFAULT (datetime('now'))
  );

  CREATE INDEX IF NOT EXISTS idx_council_role ON council_members(role);
  CREATE INDEX IF NOT EXISTS idx_council_name ON council_members(name);
`);

export function getDb() {
  return db;
}

export function closeDb() {
  db.close();
}

export function seedCouncilIfEmpty() {
  const count = db.prepare('SELECT COUNT(*) as count FROM council_members').get() as { count: number };
  
  if (count.count === 0) {
    const members = [
      {
        id: '1',
        name: 'Steve Jobs',
        role: 'chair',
        avatar: undefined,
        bio: 'Co-founder, chairman, and CEO of Apple Inc. Visionary who revolutionized personal computing, animated movies, music, phones, tablet computing, and digital publishing. Known for obsessive focus on design, simplicity, and the intersection of technology and liberal arts.',
        joinedAt: '1976-04-01',
        committees: JSON.stringify(['Vision', 'Design', 'Strategy']),
        traits: JSON.stringify(['Visionary', 'Perfectionist', 'Charismatic', 'Reality Distortion Field']),
        philosophy: JSON.stringify(['Design is not just what it looks like — design is how it works.', 'Stay hungry, stay foolish.', 'Innovation distinguishes between a leader and a follower.']),
        email: 'steve@atlas.example',
        linkedin: 'stevejobs',
      },
      {
        id: '2',
        name: 'Ada Lovelace',
        role: 'member',
        avatar: undefined,
        bio: "Pioneering mathematician and writer, known for her work on Charles Babbage's proposed mechanical general-purpose computer, the Analytical Engine.",
        joinedAt: '1843-01-01',
        committees: JSON.stringify(['Strategy', 'Research']),
        traits: JSON.stringify(['Analytical', 'Visionary', 'Poetic', 'Methodical']),
        philosophy: JSON.stringify(['The Analytical Engine weaves algebraic patterns just as the Jacquard loom weaves flowers and leaves.', 'Imagination is the discovering faculty, pre-eminently.']),
        email: 'ada@atlas.example',
        linkedin: 'adalovelace',
      },
      {
        id: '3',
        name: 'Alan Turing',
        role: 'member',
        avatar: undefined,
        bio: 'Mathematician, computer scientist, logician, cryptanalyst, philosopher, and theoretical biologist.',
        joinedAt: '1936-01-01',
        committees: JSON.stringify(['Security', 'Architecture']),
        traits: JSON.stringify(['Brilliant', 'Logical', 'Persistent', 'Foundational']),
        philosophy: JSON.stringify(['We can only see a short distance ahead, but we can see plenty there that needs to be done.', 'A computer would deserve to be called intelligent if it could deceive a human into believing that it was human.']),
        email: 'alan@atlas.example',
        linkedin: 'alanturing',
      },
      {
        id: '4',
        name: 'Grace Hopper',
        role: 'member',
        avatar: undefined,
        bio: 'Computer scientist and United States Navy rear admiral. Pioneer of computer programming and inventor of one of the first linkers.',
        joinedAt: '1944-01-01',
        committees: JSON.stringify(['Operations', 'Standards']),
        traits: JSON.stringify(['Pragmatic', 'Tenacious', 'Innovative', 'Mentor']),
        philosophy: JSON.stringify(['The most dangerous phrase in the language is: \"We\'ve always done it this way.\"', 'It\'s easier to ask forgiveness than it is to get permission.']),
        email: 'grace@atlas.example',
        linkedin: 'gracehopper',
      },
      {
        id: '5',
        name: 'John von Neumann',
        role: 'advisor',
        avatar: undefined,
        bio: 'Mathematician, physicist, computer scientist, engineer and polymath. Made major contributions to many fields.',
        joinedAt: '1945-01-01',
        committees: JSON.stringify(['Architecture', 'Strategy']),
        traits: JSON.stringify(['Polymath', 'Rigorous', 'Foundational', 'Strategic']),
        philosophy: JSON.stringify(['If people do not believe that mathematics is simple, it is only because they do not realize how complicated life is.', 'Anyone who attempts to generate random numbers by deterministic means is, of course, living in a state of sin.']),
        email: 'john@atlas.example',
        linkedin: 'johnvonneumann',
      },
      {
        id: '6',
        name: 'Margaret Hamilton',
        role: 'member',
        avatar: undefined,
        bio: 'Computer scientist, systems engineer, and business owner. Led the team that developed onboard flight software for Apollo missions.',
        joinedAt: '1961-01-01',
        committees: JSON.stringify(['Quality', 'Operations']),
        traits: JSON.stringify(['Meticulous', 'Pioneering', 'Disciplined', 'Systems Thinker']),
        philosophy: JSON.stringify(['Software reliability is not an accident — it\'s engineered.', 'There was no choice but to be pioneers.']),
        email: 'margaret@atlas.example',
        linkedin: 'margarethamilton',
      },
      {
        id: '7',
        name: 'Donald Knuth',
        role: 'emeritus',
        avatar: undefined,
        bio: 'Computer scientist, mathematician, and professor emeritus at Stanford University. Author of The Art of Computer Programming.',
        joinedAt: '1968-01-01',
        committees: JSON.stringify(['Research', 'Standards']),
        traits: JSON.stringify(['Scholarly', 'Precise', 'Comprehensive', 'Artistic']),
        philosophy: JSON.stringify(['Premature optimization is the root of all evil.', 'Science is what we understand well enough to explain to a computer. Art is everything else we do.']),
        email: 'donald@atlas.example',
        linkedin: 'donaldknuth',
      },
    ];

    const insert = db.prepare(`
      INSERT INTO council_members (id, name, role, avatar, bio, joined_at, committees, traits, philosophy, email, linkedin)
      VALUES (@id, @name, @role, @avatar, @bio, @joinedAt, @committees, @traits, @philosophy, @email, @linkedin)
    `);

    const insertMany = db.transaction((members) => {
      for (const member of members) {
        insert.run(member);
      }
    });

    insertMany(members);
    console.log('Seeded council members');
  }
}

seedCouncilIfEmpty();