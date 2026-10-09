# Buy List Section Wireframe

## Layout
- Budget/price column with wishlist toggle
- Top app bar with search and title
- Book cards showing price and wishlist status
- Empty state, loading, and error states

## BookCard Redesign (MUI v9.4)
- Use `Card` with `CardMedia` for cover image
- `CardContent` with h6 title, body2 author
- Price/currency display with strikethrough for discounted
- Wishlist toggle as `IconButton` with favorite icon
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
- Price/currency for each (MSRP and discounted if on sale)
- Wishlist toggled state for each book