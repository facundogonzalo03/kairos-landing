# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

KAIROS Skills is a single-page landing page (sales funnel) for an online sales training program targeting Spanish-speaking migrants. No framework, no build tools — pure HTML5, vanilla CSS, vanilla JS.

## Project Rules

**Read [SKILL.md](SKILL.md) and [BRAND.md](BRAND.md) before making any changes.**  
**Read [copy.md](copy.md) before writing or editing any HTML copy — copy is literal, never paraphrase.**

## File Structure

- `index.html` — all markup lives here, single file
- `css/styles.css` — all styles, no inline styles in HTML
- `js/main.js` — all JavaScript, no inline scripts in HTML
- `assets/` — fonts, images, graphic elements (referenced via relative paths)

## Development

No build step. Open `index.html` directly in a browser to develop locally. Vimeo embeds, Cal.com calendar, and Meta Pixel require internet access.

**Deploy via SFTP** to `facundogonzalo.com/kairos` (VS Code SFTP extension or similar).

## Architecture

**External dependencies (CDN only, no npm):**
- Google Fonts (Poppins)
- Vimeo Player API — `player.vimeo.com/api/player.js`
- Meta Pixel (ID: `1246041047738964`) — tracks Lead, VideoPlay, Video25/50/75, VideoComplete, Schedule
- Cal.com embed widget

**JavaScript modules in `main.js`:**
- Custom cursor (dot + lerp ring at 0.10 interpolation factor)
- Header scroll state (`.scrolled` class at 60px)
- Scroll reveal via IntersectionObserver (`.rv` elements receive `.on` class at 10% viewport threshold)
- Vimeo event tracking → Meta Pixel events

**CSS systems:**
- All colors via CSS variables — never hardcode hex values
- Scroll reveal: add `.rv` class to new elements; use `.d1`–`.d4` for staggered delays
- Responsive breakpoints: 960px, 768px, 600px
- Container: use `.container` class for section margins

## Design Restrictions (from BRAND.md)

- No `border-radius` anywhere
- No `box-shadow`
- No gradients
- No emojis
- No centered text (except designated sections like hero and CTAs)
- No external CSS frameworks or animation libraries

**Typography:**
- Display headings: The Season (local OTF)
- Accent/quotes: Pinyon Script (local TTF)
- UI/body: Poppins (Google Fonts)

**Colors (CSS variables):**
- `--cream: #F4F4F6`
- `--black: #0d0d0d`
- `--blue-deep`, `--blue-mid`, `--blue-light`
- `--gold: #D1B254`

## Responsive Behavior

All new sections/components must be tested at 960px, 768px, and 600px. Grid layouts collapse to single column on mobile.
