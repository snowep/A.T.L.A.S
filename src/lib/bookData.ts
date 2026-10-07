export interface Book {
  id: string;
  title: string;
  author: string;
  status: 'daily' | 'library' | 'reading-list' | 'buy-list' | 'read-next';
  dateAdded: string; // ISO string
}

export const placeholderBooks: Book[] = [
  {
    id: '1',
    title: 'The Pragmatic Programmer',
    author: 'Andrew Hunt, David Thomas',
    status: 'library',
    dateAdded: '2026-10-01T08:00:00Z',
  },
  {
    id: '2',
    title: 'Clean Code',
    author: 'Robert C. Martin',
    status: 'reading-list',
    dateAdded: '2026-10-02T09:00:00Z',
  },
  {
    id: '3',
    title: 'Designing Data-Intensive Applications',
    author: 'Martin Kleppmann',
    status: 'buy-list',
    dateAdded: '2026-10-03T10:00:00Z',
  },
  {
    id: '4',
    title: 'The Phoenix Project',
    author: 'Gene Kim, Kevin Behr, George Spafford',
    status: 'daily',
    dateAdded: '2026-10-04T11:00:00Z',
  },
  {
    id: '5',
    title: 'Accelerate',
    author: 'Nicole Forsgren, Jez Humble, Gene Kim',
    status: 'read-next',
    dateAdded: '2026-10-05T12:00:00Z',
  },
];