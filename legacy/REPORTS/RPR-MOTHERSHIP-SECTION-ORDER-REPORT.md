# RPR Mothership – Lock Canonical Section Order Report

## Summary

Route "/" now renders sections in the exact order: Hero + Origin Story → Foundations → Methods → Mothership Section → Mothership Visualizer → Overwatch → Labs. The Hero component contains the origin narrative ("The Needle Mandate"). Foundations was stripped of its embedded Mothership block; that content was split into two standalone sections in Home.tsx (Mothership Section with heading/tagline, Mothership Visualizer with SentinelVisualizer). Labs was moved after Overwatch per spec. All section IDs (hero, foundations, methods, mothership, visualizer, overwatch, labs) are in place for anchor navigation. `npm run build` passes with zero TypeScript errors.

---

## SECTION 1: COMPONENT MAPPING

| surface | component_name | component_path | notes |
|---------|----------------|----------------|-------|
| Hero + Origin Story | Hero | src/components/Hero.tsx | Contains badge, headline, Needle Mandate body copy, CTAs |
| Foundations | Foundations | src/components/Foundations.tsx | Three metric pillars (Source of Truth, Insight, Journey); Mothership block removed |
| Methods | Methods | src/components/Methods.tsx | ASK/PAY/MAKE/PLAY/REPEAT grid |
| Mothership Section | inline JSX | src/components/Home.tsx | Heading "THE MOTHERSHIP" + tagline; extracted from Foundations |
| Mothership Visualizer | SentinelVisualizer | src/components/SentinelVisualizer.tsx | C4 diagram; wrapped in section in Home |
| Overwatch | Overwatch | src/components/Overwatch.tsx | Bio, Strategic Authority |
| Labs | Labs | src/components/Labs.tsx | Product graduation tier; rendered after Overwatch |

---

## SECTION 2: PAGE LAYOUT

**File owning the vertical stack:** `src/components/Home.tsx`

Home is mounted at route "/" in App.tsx. The sections are arranged as a single scrollable column:

1. Hero (root `id="hero"`)
2. Foundations (`<section id="foundations">`)
3. Methods (`<section id="methods">`)
4. Mothership Section (`<section id="mothership">`) – heading + tagline only
5. Mothership Visualizer (`<section id="visualizer">`) – SentinelVisualizer in styled container
6. Overwatch (`<section id="overwatch">`)
7. Labs (`<section id="labs">`)

Footer is rendered by App.tsx outside the main content, below the Routes outlet.

---

## SECTION 3: CHANGES MADE

| file_path | change_type | notes |
|-----------|-------------|-------|
| src/components/Foundations.tsx | reorder | Removed "THE MOTHERSHIP" block (heading + SentinelVisualizer); removed SentinelVisualizer import |
| src/components/Home.tsx | reorder, import_fix, id_added | Added SentinelVisualizer import; inserted Mothership Section and Mothership Visualizer sections between Methods and Overwatch; moved Labs after Overwatch; added id="mothership" and id="visualizer" |

---

## SECTION 4: BUILD STATUS

| metric | value |
|--------|-------|
| npm run build | **PASS** |
| TypeScript errors | 0 |
| Warnings | Rollup chunk size (non-blocking) |
