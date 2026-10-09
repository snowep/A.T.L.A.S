# Graph Report - .  (2026-10-09)

## Corpus Check
- Corpus is ~11,076 words - fits in a single context window. You may not need a graph.

## Summary
- 135 nodes · 356 edges · 13 communities detected
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output
- Edge kinds: ON_BRANCH: 112 · MODIFIES: 92 · contains: 59 · PARENT_OF: 38 · imports_from: 29 · imports: 26


## Input Scope
- Requested: auto
- Resolved: committed (source: default-auto)
- Included files: 53 · Candidates: 63
- Excluded: 50 untracked · 76031 ignored · 0 sensitive · 2 missing committed
- Recommendation: Use --scope all or graphify.yaml inputs.corpus for a knowledge-base folder.

## Graph Freshness
- Built from Git commit: `53fcf0c`
- Compare this hash to `git rev-parse HEAD` before trusting freshness-sensitive graph output.
## God Nodes (most connected - your core abstractions)
1. `Book` - 8 edges
2. `BookAuthor()` - 3 edges
3. `BookCover()` - 3 edges
4. `BookTitle()` - 3 edges
5. `ClippedDrawerLayout()` - 3 edges
6. `AppBarTitle()` - 2 edges
7. `BookMeta()` - 2 edges
8. `NavIcon()` - 2 edges
9. `SearchBox()` - 2 edges
10. `ThemeToggleButton()` - 2 edges

## Surprising Connections (you probably didn't know these)
- `0abddc6 Cleanup: remove Tailwind, add Playwright, restructure to MUI components` --ON_BRANCH--> `master`  [EXTRACTED]
  git → git  _Bridges community 1 → community 0_
- `0abddc6 Cleanup: remove Tailwind, add Playwright, restructure to MUI components` --ON_BRANCH--> `v0.2.0-editorial-dashboard-experiment`  [EXTRACTED]
  git → git  _Bridges community 1 → community 2_
- `124689f v0.1.1: Fix AppBar full width, center SearchBox, redesign BookCard with text wrapping/ellipsis, add 25 dummy books` --ON_BRANCH--> `master`  [EXTRACTED]
  git → git  _Bridges community 3 → community 0_
- `124689f v0.1.1: Fix AppBar full width, center SearchBox, redesign BookCard with text wrapping/ellipsis, add 25 dummy books` --ON_BRANCH--> `v0.2.0-editorial-dashboard-experiment`  [EXTRACTED]
  git → git  _Bridges community 3 → community 2_
- `23f1329 Initial Next.js project with TypeScript, ESLint, and Tailwind CSS` --ON_BRANCH--> `v0.2.0-editorial-dashboard-experiment`  [EXTRACTED]
  git → git  _Bridges community 0 → community 2_

## Communities

### Community 11 - "Community 11"
Cohesion: 1.00
Nodes (1): eslintConfig

### Community 2 - "Community 2"
Cohesion: 0.22
Nodes (13): 022363b v0.2.3: Clear build cache, all checks pass, 27e5b2b v0.2.1: Fix EditorialDashboard type errors per MUI v9 docs, 390756a v0.2.4: Fix hydration mismatch from browser extension, 3aed66e v0.2.0: Editorial Dashboard experiment branch, 3f3dd95 v0.2.8: Update progress and task plan - nav drawer reverted, 66b40e6 v0.2.7: Revert nav drawer to default clipped drawer with labels, 6fd2bfd v0.2.1: Mark editorial dashboard experiment complete, 8999a95 v0.2.5: Replace BookList with FeaturedBookStrip on front page (+5 more)

### Community 8 - "Community 8"
Cohesion: 0.40
Nodes (1): dom

### Community 12 - "Community 12"
Cohesion: 1.00
Nodes (1): nextConfig

### Community 3 - "Community 3"
Cohesion: 0.26
Nodes (8): AppBarTitle(), SearchBox(), ThemeToggleButton(), linearTheme, 124689f v0.1.1: Fix AppBar full width, center SearchBox, redesign BookCard with text wrapping/ellipsis, add 25 dummy books, 2e2be7d update: implement divine palette with bone background, charcoal text, blood red accents, halo gold, and ash grey; fix AppBar title to show only app name; improve SearchBox visibility with white outline, 4e0cc36 feat: position SearchBox in AppBar toolbar next to title (mobile full-width, desktop right-aligned); MUI guidelines, b3af321 v1.1.2 – mobile‑first responsive override

### Community 0 - "Community 0"
Cohesion: 0.21
Nodes (24): metadata, 170ae86 v0.2.9: Atomic design for BookCard components, 23f1329 Initial Next.js project with TypeScript, ESLint, and Tailwind CSS, 34c1129 feat: basic React template with Tailwind styling, 36043b1 v0.2.10: Update task plan with atomic design phases, 444364f v0.1.2: Fix Grid item boolean attribute error (MUI v9), 4e7e5b9 v0.2.7: Revert nav drawer to default clipped drawer with labels, 5276435 fix: ThemeProvider with Emotion CacheProvider for hydration (+16 more)

### Community 4 - "Community 4"
Cohesion: 0.26
Nodes (6): navigation, AddBookDialogProps, BookListProps, Book, placeholderBooks, ec84dea feat(book): add book dashboard CRUD components, remove council leftovers; docs: add architecture diagram

### Community 1 - "Community 1"
Cohesion: 0.15
Nodes (15): navigation, NavIconProps, NavIcon(), NavItemProps, NavItem(), MainAppBar(), NavigationItem, NavigationDrawerProps (+7 more)

### Community 6 - "Community 6"
Cohesion: 0.28
Nodes (5): BookCardProps, BookMetaProps, BookMeta(), BookRemoveButtonProps, BookRemoveButton()

### Community 5 - "Community 5"
Cohesion: 0.28
Nodes (5): FeaturedBookStripProps, BookAuthorProps, BookAuthor(), BookTitleProps, BookTitle()

### Community 10 - "Community 10"
Cohesion: 0.67
Nodes (2): BookCoverProps, BookCover()

### Community 9 - "Community 9"
Cohesion: 0.50
Nodes (3): BookStatusSelectorProps, statusOptions, BookStatusSelector()

### Community 7 - "Community 7"
Cohesion: 0.33
Nodes (3): DB_DIR, DB_PATH, db

## Knowledge Gaps
- **27 isolated node(s):** `eslintConfig`, `dom`, `nextConfig`, `metadata`, `navigation` (+22 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `Community 11`** (1 nodes): `eslintConfig`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 8`** (1 nodes): `dom`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 12`** (1 nodes): `nextConfig`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.
- **Thin community `Community 10`** (2 nodes): `BookCoverProps`, `BookCover()`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Book` connect `Community 4` to `Community 10`, `Community 6`, `Community 5`, `Community 9`?**
  _High betweenness centrality (0.013) - this node is a cross-community bridge._
- **Why does `ClippedDrawerLayout()` connect `Community 1` to `Community 4`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **Why does `BookAuthor()` connect `Community 5` to `Community 6`?**
  _High betweenness centrality (0.001) - this node is a cross-community bridge._
- **What connects `eslintConfig`, `dom`, `nextConfig` to the rest of the system?**
  _27 weakly-connected nodes found - possible documentation gaps or missing edges._