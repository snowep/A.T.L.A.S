---
version: alpha
name: A.T.L.A.S.
description: Architectural minimalism with Linear/Vercel density. Dark-mode-first book management dashboard with shadow-as-border depth.
colors:
  primary: "#5e6ad2"
  secondary: "#7170ff"
  tertiary: "#171717"
  neutral: "#FFFFFF"
  bg: "#08090a"
  surface: "#0f1011"
  surface-elevated: "#191a1b"
  text-primary: "#f7f8f8"
  text-secondary: "#d0d6e0"
  text-tertiary: "#8a8f98"
  border-subtle: "rgba(255,255,255,0.05)"
  border-standard: "rgba(255,255,255,0.08)"
typography:
  display:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "48px"
    fontWeight: 510
    lineHeight: 1.00
    letterSpacing: "-1.056px"
  h1:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "32px"
    fontWeight: 400
    lineHeight: 1.13
    letterSpacing: "-0.704px"
  body:
    fontFamily: "Inter Variable, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.50
    letterSpacing: "0"
rounded:
  sm: "6px"
  md: "8px"
  lg: "12px"
spacing:
  sm: "8px"
  md: "16px"
  lg: "24px"
components:
  card:
    backgroundColor: "rgba(255,255,255,0.02)"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "16px"
  card-hover:
    backgroundColor: "rgba(255,255,255,0.04)"
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-ghost:
    backgroundColor: "rgba(255,255,255,0.02)"
    textColor: "{colors.text-secondary}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
---

## Overview

A.T.L.A.S. dashboard combines Linear's dark-mode precision with Vercel's shadow-as-border depth system. The design prioritizes high-density information display with whisper-level borders, compressed typography at display sizes, and luminance-based elevation on near-black canvas.

## Colors

- **Primary (#5e6ad2):** Brand indigo for primary CTAs and interactive accents.
- **Bg (#08090a):** Marketing black canvas.
- **Surface (#0f1011):** Panel backgrounds.
- **Text primary (#f7f8f8):** Near-white for headlines and primary content.

## Typography

Inter Variable with OpenType features `cv01`, `ss03` globally. Weight 510 is signature emphasis. Display sizes use aggressive negative letter-spacing.

## Layout

Two to three column grids for book strips. Max width ~1200px. Section spacing 80px+ on desktop, 48px on mobile.

## Elevation & Depth

Shadow-as-border technique replaces traditional borders. Cards use `rgba(255,255,255,0.02)` background + `1px solid rgba(255,255,255,0.08)` shadow-border. Elevation via background luminance steps, not drop shadows.

## Shapes

Border radius scale: 6px buttons, 8px cards, 12px panels, 9999px pills.

## Components

- BookCard: 280px min-width, shadow-border, lazy image, status selector with 44×44 touch target.
- FeaturedBookStrip: horizontal scroll with custom scrollbar, empty state ghost cards.
- FAB: fixed bottom-right, 56×56, `aria-label`.
- EmptyState: Fade-in illustration with dashed border, 44×44 action button.
- CommandPalette: Cmd+K overlay with backdrop blur, keyboard navigation.

## Do's and Don'ts

Do use Inter Variable with `cv01`, `ss03`. Do use shadow-as-border. Do use weight 510 for emphasis.
Don't use pure white text, solid borders, or drop shadows for elevation.