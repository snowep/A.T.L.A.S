# A.T.L.A.S. Book Dashboard — Showcase Implementation

## Goal
Implement a book showcase dashboard with MUI appbar "A.T.L.A.S." title, book covers with placeholder images, status categories, and interactive CRUD — per MUI guidelines and design-taste-frontend (3 dials: density comfortable, contrast standard, motion expressive; 70-item pre-flight checklist passed).

## Current Issues to Fix
1. **AppBar not full width** - Currently limited to 800px on desktop (line 18 MainAppBar.tsx)
2. **SearchBox not centered** - Currently right-aligned on desktop, should be dead centered
3. **BookCard redesign** - Needs visual polish, long title wrapping (2 lines), long author ellipsis
4. **More dummy data** - Only 5 books, need 25+ for proper testing

## Phases
- [x] Phase 1: Read existing planning files and analyze current state
- [x] Phase 2: Fix AppBar full width and center SearchBox
- [x] Phase 3: Redesign BookCard with text wrapping/ellipsis per requirements
- [x] Phase 4: Expand dummy data to 25 books (5 per section)
- [ ] Phase 5: Verify MUI guidelines compliance across all components
- [ ] Phase 6: Run web-design-guidelines 100+ rule audit
- [ ] Phase 7: Test responsiveness and accessibility (WCAG 2.1 AA)
- [ ] Phase 8: Document findings and close task plan

## Atomic Design for BookCard (NEW)
- [x] Phase A1: Create BookCover atom with dynamic gradient colors
- [x] Phase A2: Create BookTitle atom with line clamping
- [x] Phase A3: Create BookAuthor atom with ellipsis
- [x] Phase A4: Create BookMeta atom for date display
- [x] Phase A5: Create BookStatusSelector molecule
- [x] Phase A6: Create BookRemoveButton molecule
- [x] Phase A7: Refactor BookCard to use atomic components
- [x] Phase A8: FeaturedBookStrip reuses BookCover, BookTitle, BookAuthor atoms

## Front Page Atomic Design (NEW)
- [x] Phase F1: Refactor FeaturedBookStrip to use BookCover, BookTitle, BookAuthor atoms
- [x] Phase F2: Remove duplicate getCoverColor, CardMedia, Typography implementations
- [x] Phase F3: Consistent visual design across FeaturedBookStrip and BookCard

## Next Step
All atomic design phases complete. Both branches ready for review.
