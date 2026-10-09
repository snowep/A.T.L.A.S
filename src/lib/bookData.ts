export interface Book {
  id: string;
  title: string;
  author: string;
  status: 'daily' | 'library' | 'reading-list' | 'buy-list' | 'read-next';
  dateAdded: string; // ISO string
}

export const placeholderBooks: Book[] = [
  // Daily Books (5)
  {
    id: '1',
    title: 'The Pragmatic Programmer: Your Journey to Mastery',
    author: 'Andrew Hunt, David Thomas',
    status: 'daily',
    dateAdded: '2026-10-01T08:00:00Z',
  },
  {
    id: '2',
    title: 'Atomic Habits: An Easy & Proven Way to Build Good Habits',
    author: 'James Clear',
    status: 'daily',
    dateAdded: '2026-10-02T09:00:00Z',
  },
  {
    id: '3',
    title: 'Deep Work: Rules for Focused Success in a Distracted World',
    author: 'Cal Newport',
    status: 'daily',
    dateAdded: '2026-10-03T10:00:00Z',
  },
  {
    id: '4',
    title: 'The 7 Habits of Highly Effective People: Powerful Lessons in Personal Change',
    author: 'Stephen R. Covey',
    status: 'daily',
    dateAdded: '2026-10-04T11:00:00Z',
  },
  {
    id: '5',
    title: 'Essentialism: The Disciplined Pursuit of Less',
    author: 'Greg McKeown',
    status: 'daily',
    dateAdded: '2026-10-05T12:00:00Z',
  },

  // Library (5)
  {
    id: '6',
    title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
    author: 'Robert C. Martin',
    status: 'library',
    dateAdded: '2026-10-06T08:00:00Z',
  },
  {
    id: '7',
    title: 'Design Patterns: Elements of Reusable Object-Oriented Software',
    author: 'Erich Gamma, Richard Helm, Ralph Johnson, John Vlissides',
    status: 'library',
    dateAdded: '2026-10-07T09:00:00Z',
  },
  {
    id: '8',
    title: 'Structure and Interpretation of Computer Programs',
    author: 'Harold Abelson, Gerald Jay Sussman, Julie Sussman',
    status: 'library',
    dateAdded: '2026-10-08T10:00:00Z',
  },
  {
    id: '9',
    title: 'The Mythical Man-Month: Essays on Software Engineering',
    author: 'Frederick P. Brooks Jr.',
    status: 'library',
    dateAdded: '2026-10-09T11:00:00Z',
  },
  {
    id: '10',
    title: 'Refactoring: Improving the Design of Existing Code',
    author: 'Martin Fowler, Kent Beck',
    status: 'library',
    dateAdded: '2026-10-10T12:00:00Z',
  },

  // Reading List (5)
  {
    id: '11',
    title: 'Designing Data-Intensive Applications: The Big Ideas Behind Reliable, Scalable, and Maintainable Systems',
    author: 'Martin Kleppmann',
    status: 'reading-list',
    dateAdded: '2026-10-11T08:00:00Z',
  },
  {
    id: '12',
    title: 'System Design Interview: An Insider\'s Guide',
    author: 'Alex Xu',
    status: 'reading-list',
    dateAdded: '2026-10-12T09:00:00Z',
  },
  {
    id: '13',
    title: 'Building Microservices: Designing Fine-Grained Systems',
    author: 'Sam Newman',
    status: 'reading-list',
    dateAdded: '2026-10-13T10:00:00Z',
  },
  {
    id: '14',
    title: 'Kubernetes Up & Running: Dive into the Future of Infrastructure',
    author: 'Kelsey Hightower, Brendan Burns, Joe Beda',
    status: 'reading-list',
    dateAdded: '2026-10-14T11:00:00Z',
  },
  {
    id: '15',
    title: 'Site Reliability Engineering: How Google Runs Production Systems',
    author: 'Niall Richard Murphy, Betsy Beyer, Chris Jones, Jennifer Petoff',
    status: 'reading-list',
    dateAdded: '2026-10-15T12:00:00Z',
  },

  // Buy List (5)
  {
    id: '16',
    title: 'The Phoenix Project: A Novel About IT, DevOps, and Helping Your Business Win',
    author: 'Gene Kim, Kevin Behr, George Spafford',
    status: 'buy-list',
    dateAdded: '2026-10-16T08:00:00Z',
  },
  {
    id: '17',
    title: 'Accelerate: The Science of Lean Software and DevOps',
    author: 'Nicole Forsgren, Jez Humble, Gene Kim',
    status: 'buy-list',
    dateAdded: '2026-10-17T09:00:00Z',
  },
  {
    id: '18',
    title: 'Team Topologies: Organizing Business and Technology Teams for Fast Flow',
    author: 'Matthew Skelton, Manuel Pais',
    status: 'buy-list',
    dateAdded: '2026-10-18T10:00:00Z',
  },
  {
    id: '19',
    title: 'Fundamentals of Software Architecture: An Engineering Approach',
    author: 'Mark Richards, Neal Ford',
    status: 'buy-list',
    dateAdded: '2026-10-19T11:00:00Z',
  },
  {
    id: '20',
    title: 'Building Evolutionary Architectures: Support Constant Change',
    author: 'Neal Ford, Rebecca Parsons, Patrick Kua',
    status: 'buy-list',
    dateAdded: '2026-10-20T12:00:00Z',
  },

  // Read Next (5)
  {
    id: '21',
    title: 'Staff Engineer: Leadership Beyond the Management Track',
    author: 'Will Larson',
    status: 'read-next',
    dateAdded: '2026-10-21T08:00:00Z',
  },
  {
    id: '22',
    title: 'An Elegant Puzzle: Systems of Engineering Management',
    author: 'Will Larson',
    status: 'read-next',
    dateAdded: '2026-10-22T09:00:00Z',
  },
  {
    id: '23',
    title: 'The Manager\'s Path: A Guide for Tech Leaders Navigating Growth and Change',
    author: 'Camille Fournier',
    status: 'read-next',
    dateAdded: '2026-10-23T10:00:00Z',
  },
  {
    id: '24',
    title: 'High Output Management',
    author: 'Andrew S. Grove',
    status: 'read-next',
    dateAdded: '2026-10-24T11:00:00Z',
  },
  {
    id: '25',
    title: 'Radical Candor: Be a Kick-Ass Boss Without Losing Your Humanity',
    author: 'Kim Scott',
    status: 'read-next',
    dateAdded: '2026-10-25T12:00:00Z',
  },
];