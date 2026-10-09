# Daily Section Wireframe

## Layout
- Today focus with quick-add FAB and optimistic status moves
- Top app bar with search and title
- Book cards in grid layout
- Empty state, loading, and error states

## BookCard Redesign (MUI v9.4)
- Use `Card` with `CardMedia` for cover image
- `CardContent` with h6 title, body2 author
- Status as `Chip` with status color
- Elevation 1 default, elevation 3 on hover
- 8px border-radius, 16px padding
- Responsive width: 100% on xs, fixed max-width on md+

## AppBar & SearchBox
- Full-width, fixed position, proper zIndex
- Title on left
- SearchBox: responsive width (100% xs, 300px sm, 400px md, max 600px)
- Theme toggle on far right
- Drawer toggle on mobile only (hidden md+)
- Toolbar height: 64px desktop, 56px mobile

## Dummy Books
- 5 books with unique title, author, status, dateAdded
- Price/currency where applicable