# AppBar Refactor Findings

## Current AppBar Analysis
- Fixed position AppBar with Toolbar
- Left: AppBarTitle
- Center: Box with flexGrow:1 containing SearchBox (takes available space)
- Right: ThemeToggleButton
- Issues:
  * SearchBox is centered and takes all available space, pushing title to left and theme button to right
  * No responsive behavior: search box always visible, may be too wide on small screens
  * No way to open/close navigation drawer from AppBar (drawer state not managed here)
  * SearchBox may not be optimal for mobile (should be hidden or converted to icon)

## MUI Best Practices (from knowledge)
- AppBar should use Toolbar for proper height
- Common layout: 
   * Start: menu icon (on mobile) or brand/logo
   * Center: title (optional, often left-aligned on mobile)
   * End: actions (icons, buttons)
- Use Box with flexGrow:1 to push items to the end
- Responsive design: hide/show elements based on breakpoints
- Drawer toggle: typically a menu icon (hamburger) in the AppBar that controls the drawer state
- Search: on desktop, can be visible in AppBar; on mobile, often an icon that opens a search dialog or drawer

## Proposed Design
1. Manage drawer state in ClippedDrawerLayout (pass toggleDrawer to MainAppBar)
2. MainAppBar props:
   - title: string
   - toggleDrawer: function (to open/close drawer)
   - drawerOpen: boolean (optional, to change icon)
3. Breakpoints:
   - Mobile (below sm): show menu icon on left, title, no search box, theme toggle on right
   - Desktop (md and up): show title (no menu icon), search box centered or on right, theme toggle on right
   - Actually, let's do:
        Left: [Mobile: MenuIcon] [Always: Title]
        Center: Spacer (flexGrow:1) to push right items to the end
        Right: [Desktop: SearchBox] [Always: ThemeToggleButton]
4. SearchBox: only render on desktop (md and up)
5. MenuIconButton: only render on mobile (below sm), calls toggleDrawer

## Implementation Plan
- Update ClippedDrawerLayout to manage drawerOpen state and pass toggleDrawer to MainAppBar
- Update MainAppBar to accept toggleDrawer and drawerOpen props, and use theme.breakpoints
- Update MainAppBar to conditionally render MenuIconButton (mobile) and SearchBox (desktop)
- Ensure existing usage of MainAppBar in ClippedDrawerLayout is updated to pass new props
