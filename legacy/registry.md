# Navigation Registry - Harbor A Unified

**Authority**: TS-Λ3 Directive 1.6.1  
**Date**: 2026-01-24  
**Status**: Active

## Navigation Logic (Locked)

- **METHODS** → `#foundations` (anchor)
- **LABS** → `/labs` (Internal Route)
- **OVERWATCH** → `#overwatch` (anchor)
- **KONTROL** → `https://kontrol.rprcomms.com` (Governance Latch)

## Nomenclature Transition

- **Legacy**: "VIEW PRODUCTS" → **Current**: "VIEW LABS"
- **Route**: `/products` (301 redirect) → `/labs`
- **Template**: React components (authoritative state)
- **Section ID**: `#products` remains for backward compatibility (Firebase redirect handles URL routing)

## Branding

- **RprMasterLogo tracking**: `0.15em` (fixed)
- **Identity**: butterdime.com signature

## Infrastructure

### Firebase Configuration

- **Project**: `rpr-corporate-site` (Mothership - Primary)
- **Target**: `main` → `rpr-corporate-site`
- **Redirect**: `/products` (301) → `/labs`
- **SPA Rewrite**: All paths (`**`) → `/index.html`

### Harbor A Architecture

- **Harbor A (Primary)**: The Public Mothership (rprcomms.com)
- **Harbor A (Governance)**: RPR KONTROL Dashboard (kontrol.rprcomms.com) - Sub-substrate of Harbor A

Harbor B distinction is liquidated. KONTROL is now officially classified as a sub-substrate of Harbor A for unified identity across rprcomms.com and kontrol.rprcomms.com domains.

## Component Updates

### Hero Component
- **Body Text**: "We're a boutique agency and experience studio that actually cares if the campaign moves the needle. We plan campaigns based on real world results through digital, virtual and the physical spaces..with the messy bits in between."
- **CTA**: "View Labs" → `/labs` route

### Header Component
- **Desktop Navigation**: "Labs" → `/labs` route
- **Mobile Navigation**: "Labs" → `/labs` route

### Products Component
- **Title**: "Labs" (already correct)
- **Section ID**: `id="products"` (preserved for anchor navigation)

## Deployment

- **Bundle Size**: 173.09 kB (< 173.12 kB ceiling) ✅
- **Type Environment**: 592 errors liquidated ✅
- **Deployment Target**: Singapore edge (asia-southeast1)
- **URL**: https://rprcomms.com
