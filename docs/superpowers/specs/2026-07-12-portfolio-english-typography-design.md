# Portfolio English Content & Typography Update

## Overview
Translate the entire portfolio content from Spanish to English and slightly increase font sizes while keeping the current font family (`Playfair Display` + `Source Sans 3`).

## Goals
- All user-facing text in the portfolio is in natural English.
- Font sizes are increased by approximately one step for better readability.
- Visual hierarchy and layout are preserved.

## Non-Goals
- Changing the color palette.
- Changing the font family.
- Refactoring component structure beyond text and style updates.
- Adding new sections or features.

## Approach
**Option B: Natural translation + light hierarchical bump** (selected).

Translate content naturally rather than literally, update embedded UI labels, and bump font sizes proportionally to maintain hierarchy.

## Content Changes

### File: `frontend/app/features/portfolio/content/portfolio.ts`
Translate all fields:
- `profile.role`: "Desarrollador Junior Full Stack" → "Junior Full Stack Developer"
- `profile.summary`: natural English rewrite
- `about.paragraphs`: three paragraphs in English
- `skills[].category`: "Herramientas" → "Tools", "Metodologías" → "Methodologies"
- `projects[].description`: natural English translations
- `experience[].role`, `company`, `description[]`: natural English translations
- `education[].degree`, `institution`, `description`: natural English translations

### Embedded UI text
Review and translate hardcoded strings in:
- `PortfolioHero.vue`
- `PortfolioHeader.vue`
- `PortfolioContact.vue`
- `PortfolioFooter.vue`

## Typography Changes

### Keep
- `--font-display`: `'Playfair Display', Georgia, serif`
- `--font-body`: `'Source Sans 3', system-ui, -apple-system, sans-serif`

### Bump
- Body base: `1rem` → `1.125rem`
- `.sectionTitle`: `2rem` / `2.5rem` → `2.25rem` / `2.75rem`
- Secondary text: `0.875rem` → `1rem` where applicable
- Module-level hero titles and other type scales: bump proportionally to preserve hierarchy

### Compensate
- Adjust `line-height` or margins only if the size increase causes layout imbalance.

## Verification
- No Spanish text remains in the rendered portfolio.
- Mobile layout does not break due to larger text.
- Visual hierarchy is preserved after the size bump.
