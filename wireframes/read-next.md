# Read Next Section Wireframe

## Layout
- Priority queue with drag to reschedule
- Top app bar with search and title
- Book cards showing priority and ETA
- Empty state, loading, and error states

## BookCard Redesign (MUI v9.4)
- Use `Card` with `CardMedia` for cover image
- `CardContent` with h6 title, body2 author
- Priority badge with color coding
- ETA text showing estimated read date
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
- Priority level (high, medium, low) with color indicator
- ETA date for each book
- Drag handle for rescheduling priority