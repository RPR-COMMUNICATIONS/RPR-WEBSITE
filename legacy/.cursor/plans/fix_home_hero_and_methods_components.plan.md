---
name: Fix Home Hero and Methods Components
overview: Replace HomeHero with Hero component in Home.tsx, and update Methods.tsx to use ASK / PAY / MAKE / PLAY / REPEAT instead of DISCOVER / DELIVER / MEASURE / IMPROVE
todos:
  - id: replace-homehero-with-hero
    content: Replace HomeHero import and usage with Hero component in Home.tsx
    status: pending
  - id: update-methods-to-ask-pay-make-play-repeat
    content: Update Methods.tsx to use ASK / PAY / MAKE / PLAY / REPEAT (5 items) with correct subtitles and descriptions
    status: pending
  - id: rebuild-after-fixes
    content: Run npm run build to generate new build with both fixes
    status: pending
    dependencies:
      - replace-homehero-with-hero
      - update-methods-to-ask-pay-make-play-repeat
  - id: redeploy-after-fixes
    content: Deploy to Firebase Hosting using firebase deploy --only hosting
    status: pending
    dependencies:
      - rebuild-after-fixes
---

# Fix Home Hero and Methods Components

## Issues Identified

1. **Home.tsx uses HomeHero instead of Hero**: The app renders `Home.tsx`, which imports and uses `HomeHero` component containing the old "ARCHITECTING / FORENSIC / AI SUBSTRATES" content. The correct boutique agency content is in `Hero.tsx` but not being used.

2. **Methods.tsx has wrong labels**: Currently shows `DISCOVER / DELIVER / MEASURE / IMPROVE` (4 items) but should show `ASK / PAY / MAKE / PLAY / REPEAT` (5 items) per the frozen spec.

## Solution

### 1. Fix Home.tsx

Replace `HomeHero` with `Hero` component:
- Remove: `import { HomeHero } from './HomeHero';`
- Add: `import { Hero } from './Hero';`
- Replace: `<HomeHero />` with `<Hero />`

### 2. Fix Methods.tsx

Update the `primaryIkons` array to have 5 items in this exact order:

```tsx
const primaryIkons: IkonMeta[] = [
  {
    name: 'ASK',
    subtitle: 'Strategic Planning',
    description: 'Define problem, map consumer journey, set success metrics.',
    icon: 'person_search' // or appropriate icon
  },
  {
    name: 'PAY',
    subtitle: 'Client Approval',
    description: 'Align on risks, timelines and budgets; get sign-off.',
    icon: 'sync' // or appropriate icon
  },
  {
    name: 'MAKE',
    subtitle: 'Planning',
    description: 'Develop concepts, plan channels, build the roadmap.',
    icon: 'construction' // or appropriate icon
  },
  {
    name: 'PLAY',
    subtitle: 'Execution',
    description: 'Produce assets, launch and monitor performance in market.',
    icon: 'rocket_launch' // or appropriate icon
  },
  {
    name: 'REPEAT',
    subtitle: 'Post Analysis',
    description: 'Review results, capture insights, improve the journey.',
    icon: 'self_improvement', // or appropriate icon
    isRefiner: true // Flag for REPEAT node visual distinction
  }
];
```

## Files to Modify

- `src/components/Home.tsx` - Replace HomeHero with Hero
- `src/components/Methods.tsx` - Update to ASK / PAY / MAKE / PLAY / REPEAT

## Files Already Correct

- `src/components/Hero.tsx` - ✅ Contains correct boutique agency content
- `src/components/Header.tsx` - ✅ Correct (FOUNDATIONS | METHODS | OVERWATCH)
- `src/components/Foundations.tsx` - ✅ Correct (METRIC_03 / THE JOURNEY (CX))

## Validation Checklist

After deployment, verify on `https://rpr-corporate-site.web.app`:

1. Header: `FOUNDATIONS | METHODS | OVERWATCH` only (no `LABS`, no `THE`)
2. Hero badge: `EST. 2025 // EXPERIENTIAL COMMUNICATIONS`
3. Hero headline: `GLOBAL INTELLIGENCE,` (white) / `EXPERIENTIAL ACTIVATION.` (cyan-400)
4. Hero body: Full "WE'RE A BOUTIQUE AGENCY AND EXPERIENCE STUDIO...WITH THE MESSY BITS IN BETWEEN." paragraph
5. Hero CTAs: `HIGHLIGHTS` (left, cyan) and `ASK OLLIE` (right with `smart_toy`)
6. Foundations metric 3: `METRIC_03` / `THE JOURNEY (CX)`
7. Methods: `ASK / PAY / MAKE / PLAY / REPEAT` (5 cards in that order)
