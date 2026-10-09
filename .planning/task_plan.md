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

## Experimental: Editorial Dashboard (v0.2.0)
- [x] Phase E1: Create application shell with centered rounded canvas
- [x] Phase E2: Build left navigation rail with icon items, active state, tooltips
- [x] Phase E3: Build top header with title, centered search, avatar/actions
- [x] Phase E4: Build main content: featured strip + resume/continue + explore sections
- [x] Phase E5: Build right recommendation rail with tinted panel
- [x] Phase E6: Implement responsive behavior (desktop → tablet → mobile)
- [x] Phase E7: Add interaction states (focus, hover, empty, loading, error)
- [x] Phase E8: Theme support (light/dark), accessibility audit, contrast verification

## Navigation Rail Redesign (NEW)
- [x] Phase N1: Convert NavItem to icon-only with tooltip on hover/focus
- [x] Phase N2: Set optimal rail width (72px per MUI/Linear guidelines) with 44px minimum touch targets
- [x] Phase N3: Add hover/focus states with proper contrast and ripple effect
- [x] Phase N4: Implement responsive behavior - rail collapses to bottom nav on mobile (<1024px)
- [x] Phase N5: Add active state indicator per Linear.app design (subtle background + accent indicator)

## Front Page Redesign (NEW)
- [x] Phase F1: Create FeaturedBookStrip component with "Top Picks This Week" design
- [x] Phase F2: Replace all BookList sections with FeaturedBookStrip per category
- [x] Phase F3: Add getCoverColor helper for dynamic cover colors
- [x] Phase F4: Remove unused handlers, clean up page.tsx

## Next Step
All phases complete. Both branches ready for review.
