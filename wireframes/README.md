# A.T.L.A.S Dashboard Section Wireframes

This directory contains wireframes and specifications for each section of the dashboard.

## Sections
1. [Daily](./daily.md) - Today focus with quick-add FAB and optimistic status moves
2. [Library](./library.md) - Searchable virtualized grid with filters
3. [Reading List](./reading-list.md) - Progress tracker with reading sessions
4. [Buy List](./buy-list.md) - Budget/price column with wishlist toggle
5. [Read Next](./read-next.md) - Priority queue with drag to reschedule

## Design Specs: BookCard Redesign & AppBar/SearchBox Positioning
### MUI Guidelines Compliance
- **Density**: Comfortable — spacing scale 2→4, touch targets 44×44 minimum
- **Contrast**: Standard — text color ratios meet 4.5:1 AA, focus rings 2px solid
- **Motion**: Expressive — transform 0.2s, box-shadow 0.2s on hover, prefers-reduced-motion respected

### BookCard Redesign (MUI v9.4)
- Use `Card` with `CardMedia` for cover image (proper image component)
- `CardContent` with proper typography hierarchy (h6 title, body2 author)
- Status as `Chip` with status color, not `Select` for display
- Status change via `IconButton` with dropdown `Menu` for compact UI
- Remove action as `IconButton` with delete icon, aria-label
- Responsive width: 100% on xs, fixed max-width on md+
- Elevation 1 default, elevation 3 on hover
- 8px border-radius, 16px padding

### AppBar & SearchBox Positioning
- AppBar: full-width, fixed position, proper zIndex
- Title on left, SearchBox centered on mobile, right-aligned on desktop
- SearchBox: responsive width (100% xs, 300px sm, 400px md, max 600px)
- Theme toggle on far right
- Drawer toggle on mobile only (hidden md+)
- Toolbar height: 64px desktop, 56px mobile

### Dummy Books (up to 5 per section)
- Expand placeholder data to 5 books per section
- Each with unique title, author, status, dateAdded
- Include price/currency for Buy List, progress for Reading List, priority/ETA for Read Next