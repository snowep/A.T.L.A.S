# Responsive Audit

**Current state (prior to v1.1.1 updates):**
1. **AppBar**
   * Search box width fixed at 40%, no media queries.
   * Drawer toggle visible only on xs (hidden on md+).
1. **BookCard**
   * Fixed card width and minWidth; no responsive breakpoints.
1. **BookList**
   * Stack layout always vertical; no bandwidth check for breakpoint.
1. **Sidebar** in `MainAppBar` (logo + icons)
   * No responsive hide/show logic.

**Identified gaps:**
- Search box does not full‑width on mobile.
- No `useMediaQuery` to toggle compact icon on md+.
- Hard‑coded widths fail to adapt to different screen sizes.
- Layout overflow on narrow viewports due to fixed `boxSizing`.
- No aria‑labels for drawer toggle.
- No responsive grid for main content area and sidebar.

**Next steps**: Implement responsive styles, add `useMediaQuery`, adjust `Box` widths, and test with breakpoint simulation.
