# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

麻雀マインスイーパー — a PWA mobile game where the player faces riichi opponents and must discard safe tiles within 10 seconds. Inspired by Minesweeper mechanics applied to mahjong danger-tile reading.

Target: female ジャンたま players who want casual practice without it feeling like training.

## Development

No build step. Open `index.html` directly in a browser, or serve with any static server:

```powershell
# Quick local serve (Python)
python -m http.server 8080
# Then open http://localhost:8080
```

For PWA / Service Worker testing, requires HTTPS or localhost (not file://). Chrome DevTools MCP is configured in `.claude/settings.local.json` for live browser testing.

## Architecture

```
index.html          — all screens (title / how-to / game / victory / gameover)
css/style.css       — all styles (mobile-first, dark green theme)
js/tiles.js         — TILE_EMOJI / TILE_NAME lookup tables (loaded first)
js/problems.js      — PROBLEMS array (15 hand-crafted problems, IDs 1–15)
js/game.js          — all game logic + DOM rendering (loaded last)
manifest.json       — PWA manifest
sw.js               — service worker (cache-first, offline support)
icons/icon.svg      — app icon (SVG 中 tile)
```

**Script load order matters**: `tiles.js` → `problems.js` → `game.js`.

## Game Logic (game.js)

### Key globals
- `G` — single mutable state object (score, lives, combo, rivalIdx, rivalHp, phase, etc.)
- `_timer` / `_timerVal` — countdown timer (always call `stopTimer()` before starting a new one)
- `_advance` — auto-advance timeout (clear before starting game)

### Rival system
5 rivals in `RIVALS[]`, each with `hp` (correct picks needed) and `problemIds[]`.
- Safe pick → `rivalHp--`; when 0 → `rivalDefeated()` → next rival or victory
- Wrong pick / timeout → `lives--`; when 0 → `showGameOver()`

### Problem format (problems.js)
```js
{ id, difficulty, opponentDiscards: ['Nm'], hand: [{tile, safe, reason}], waits, waitShape, explanation }
```
Difficulty: `'beginner'` (1–5) → `'medium'` (6–10) → `'advanced'` (11–15).

### Tile rendering
Tiles are CSS-drawn (not Unicode emoji — rendering was unreliable on Windows Chrome).
`makeTile(tileId, type)` creates `.tile .tile-{type}` with `.tile-n .tile-s` (number+suit) or `.tile-z` (honor kanji).

### Timer bug fix
`startTimer()` calls `stopTimer()` first. `startGame()` clears both timer and advance timeout. Always maintain this invariant.

## Design Constraints

- **No overlay result screen** — feedback is inline (tile reveal) + toast (auto-dismiss 1.7s safe / 2.0s danger) + move-name slam animation
- **Tempo is king** — no tap required to advance; `scheduleAdvance()` auto-proceeds
- **Move names** — Yu-Gi-Oh style slam text on every pick (`MOVE_NAMES` in game.js)
- **Tile display** — CSS text tiles, not emoji; suit colors: 萬=red, 筒=blue, 索=green, 字=purple/dark

## Phase 2+ Roadmap

- Wordle-style score share (SNS copy-paste)
- P2P match via PeerJS (URL-share instant battle)
