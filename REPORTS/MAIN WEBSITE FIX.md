## **HARBOR A: v1.8.8 SURFACE FREEZE – HEADER \+ HERO VISUAL SPEC**

**Format:** Addendum to existing Harbor A Map \[v1.8.7\]  
**Scope:** Header \+ Hero ONLY (frozen baseline)  
**Date:** 2026-02-01  
**Status:** LATCHED // NO GEMINI // NO REDESIGN

---

## **❄️ ADDENDUM: v1.8.8 SURFACE FREEZE (2026-02-01)**

The visual styling of Harbor A Header \+ Hero has been **finalized and locked** to the Vercel frozen baseline.

---

## **🎨 GLOBAL VISUAL STYLE (APPLY FIRST)**

## **Color Palette**

* **Background:** `#000000` (black) → `#111827` (gray-900) gradient  
* **Primary Text:** `#FFFFFF` (white)  
* **Secondary Text:** `#FFFFFF99` (white/60)  
* **Tertiary Text:** `#FFFFFF66` (white/40)  
* **Accent Primary:** `#22D3EE` (cyan-400) – for text/icons  
* **Accent Secondary:** `#06B6D4` (cyan-500) – for buttons/borders  
* **Borders:** `#FFFFFF1A` (white/10)  
* **Hover Borders:** `#06B6D44D` (cyan-500/30)

## **Typography**

* **Primary Font:** Sans-serif (Inter preferred, fallback: system-ui)  
* **Monospace Font:** JetBrains Mono (fallback: Courier, monospace)  
* **Weights:** 400 (normal), 500 (medium), 600 (semibold), 700 (bold)

## **Effects**

* **Backdrop Blur:** `backdrop-blur-sm` on header and cards  
* **Transitions:** `transition-colors` (200ms), `transition-all` (300ms)  
* **Hover States:** Increase opacity or change background/border colors

---

## **📐 LOCKED ASSETS: HEADER**

## **Structure**

* **Fixed top nav:** `position: fixed; top: 0; z-index: 50;`  
* **Background:** `bg-black/80` \+ `backdrop-blur-sm`  
* **Border:** `border-b border-white/10`  
* **Height:** `h-16` mobile (\~64px), `lg:h-20` desktop (\~80px)

## **Logo (USE OFFICIAL LOGO- ask if you dont have it)**

* **Text:** `"RPR COMMUNICATIONS"`  
* **Font:** Monospace (JetBrains Mono), `font-bold`, `tracking-[0.2em]`, `uppercase`  
* **Size:** `text-sm lg:text-base` (\~12px mobile, \~14px desktop)  
* **Color:** `text-white`

## **Navigation (Center, Desktop Only)**

* **Items:** `FOUNDATIONS` | `METHODS` | `OVERWATCH`  
* **Display:** `hidden lg:flex items-center gap-8`  
* **Font:** Monospace, `text-xs`, `tracking-widest`, `uppercase`  
* **Color:** `text-white/80`, hover → `text-white`  
* **Spacing:** `gap-8` (32px between items)  
* **Links:** Semantic `<a>` tags (e.g., `href="#foundations"`, `href="#methods"`, `href="#overwatch"`)

## **Controls (Right)**

**Desktop Layout (`≥1024px`):**

text  
`[user icon]` 

**Mobile Layout (`<1024px`):**

text  
`[user icon] [Hamburger Menu Icon]`

**User Icon (Desktop Only, Far Right):**

* **Icon:** Material Icons `"account_circle"` or user avatar  
* **Size:** `24px`  
* **Color:** `text-white`  
* **Display:** `hidden lg:block`  
* **Spacing:** `gap-4` from KONTROL

**Mobile Hamburger Menu (Mobile Only):**

* **Icon:** Material Icons `"menu"`, `24px`, `text-white`  
* **Display:** `lg:hidden`  
* **Position:** Far right  
* **Spacing:** `gap-4` from KONTROL

## **Mobile Menu Overlay (CRITICAL \- DO NOT FUCK THIS UP)**

When hamburger clicked:

* **Overlay:** Full-screen modal  
* **Background:** `bg-slate-950/60` (60% opacity black) \+ `backdrop-blur-xl`  
* **Close Icon:** Material Icons `"close"` (X), top-right, `24px`, `text-white`  
* **Nav Items:** Stacked vertically, centered  
  * `FOUNDATIONS`  
  * `METHODS`  
  * `OVERWATCH`  
* **Item Style:** `text-2xl text-white/90 py-4 font-mono tracking-wider uppercase`  
* **Item Hover:** `text-white`  
* **Animation:** Slide in from right, fade in backdrop  
* **Z-index:** `z-50` (above everything)

---

## **📐 LOCKED ASSETS: HERO**

## **Layout**

* **Container:** `relative min-h-screen flex items-center justify-center`  
* **Padding:** `px-4 sm:px-6 lg:px-8 pt-24 pb-16`  
* **Content max-width:** `max-w-5xl mx-auto text-center`  
* **Internal spacing:** `space-y-8` (32px gaps)

## **Badge**

* **Text:** `"EST. 2025 // EXPERIENTIAL COMMUNICATIONS"`  
* **Style:** `inline-block border border-white/10 rounded-full px-4 py-1.5`  
* **Font:** Monospace (JetBrains Mono), `text-[10px]`, `tracking-[0.15em]`, `uppercase`, `font-medium`  
* **Color:** `text-white/70`

## **Headline**

jsx  
`<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">`  
  `<span className="text-white">GLOBAL INTELLIGENCE,</span>`  
  `<br />`  
  `<span className="text-cyan-400">EXPERIENTIAL ACTIVATION.</span>`  
`</h1>`

* **Line 1:** White (`#FFFFFF`)  
* **Line 2:** Cyan-400 (`#22D3EE`)  
* **Font:** Sans-serif (Inter), `font-bold`  
* **Size:** `text-4xl` mobile (\~36px), `text-5xl` tablet (\~48px), `text-7xl` desktop (\~72px)  
* **Tracking:** `tracking-tight` (-0.02em)  
* **Line height:** `leading-tight` (\~1.1)  
* **Break:** After `"INTELLIGENCE,"` on all screen sizes

## **Body Copy**

* **Text:**  
  text

`WE'RE A BOUTIQUE AGENCY AND EXPERIENCE STUDIO THAT ACTUALLY CARES IF THE CAMPAIGN MOVES THE NEEDLE. WE PLAN CAMPAIGNS BASED ON REAL WORLD RESULTS THROUGH DIGITAL, VIRTUAL AND THE PHYSICAL SPACES..WITH THE MESSY BITS IN BETWEEN.`

*   
* **Style:** `max-w-3xl mx-auto text-base lg:text-lg text-white/60 leading-relaxed`  
* **Font:** Sans-serif (Inter), `font-normal`  
* **Size:** `text-base` mobile (\~16px), `text-lg` desktop (\~18px)  
* **Color:** `text-white/60` (`#FFFFFF99`)  
* **Max width:** `768px` (max-w-3xl)  
* **Line height:** `1.75`

## **CTA Button Group**

**Container:**

jsx  
`<div className="flex items-center justify-center gap-4">`  
  `{/* LABS (Left) */}`  
  `{/* ASK OLLIE (Right) */}`  
`</div>`

**Primary CTA (LEFT \- LABS):**

jsx  
`<a`  
  `href="https://rprcomms.com/labs"`  
  `className="inline-flex items-center gap-2 bg-cyan-500 text-black px-6 py-3 rounded hover:bg-cyan-400 transition-colors text-sm font-semibold tracking-wider uppercase"`  
`>`  
  `HIGHLIGHTS`  
`</a>`

* **Text:** `"HIGHLIGHTS"`  
* **Link:** `https://rprcomms.com/labs`  
* **Background:** `bg-cyan-500` (solid cyan)  
* **Text color:** `text-black`  
* **Hover:** `hover:bg-cyan-400`  
* **Padding:** `px-6 py-3` (24px × 12px)  
* **Border radius:** `4px`  
* **Font:** Monospace (JetBrains Mono), `text-sm`, `font-semibold`, `tracking-wider`, `uppercase`

**Secondary CTA (RIGHT \- ASK OLLIE):**

jsx  
`<button`  
  `className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white/80 px-6 py-3 rounded hover:border-white/40 hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase"`  
`>`  
  `<span className="material-symbols-outlined text-sky-500">smart_toy</span>`  
  `ASK OLLIE`  
`</button>`

* **Text:** `"ASK OLLIE"` with `smart_toy` icon (LEFT of text)  
* **Icon:** Material Symbols Outlined `smart_toy`, `text-sky-500` (sky-500 cyan), size `20px`  
* **Background:** Transparent, `border border-white/20`  
* **Text color:** `text-white/80`  
* **Hover:** `hover:border-white/40 hover:text-white`  
* **Padding:** `px-6 py-3` (24px × 12px)  
* **Border radius:** `4px`  
* **Font:** Monospace (JetBrains Mono), `text-sm`, `font-semibold`, `tracking-wider`, `uppercase`  
* **Gap:** `gap-2` (8px between icon and text)

**Button Layout (Left → Right):**

text  
`[HIGHLIGHTS (cyan solid)] [ASK OLLIE (outlined with smart_toy icon)]`

**Button Spacing:**

* **Gap between buttons:** `gap-4` (16px)  
* **Alignment:** Centered horizontally

---

## **🔒 ENFORCEMENT (READ THIS GEMINI)**

## **CRITICAL RULES FOR GEMINI:**

1. **BUTTON ORDER:** HIGHLIGHTS (left), ASK OLLIE (right) – DO NOT SWAP  
2. **USE** Material Symbols Outlined for `smart_toy` icon (already implemented in v1.8.7, commit a4c4287)  
3. **DO NOT** change the mobile menu overlay structure  
4. **DO NOT** remove backdrop-blur effects  
5. **DO NOT** change hamburger icon behavior  
6. **DO NOT** modify color values from this spec  
7. **DO NOT** change font families (Inter for sans, JetBrains Mono for mono)  
8. **DO NOT** add new nav items without approval  
9. **DO NOT** modify spacing/padding values  
10. **DO NOT** change the headline line break position  
11. **DO NOT** add dnaPillars or other unauthorized components  
12. **DO NOT** redesign – this is a RESTORE operation

## **Baseline Reference:**

* **Vercel Snapshot:** `https://rpr-comms-website-9ul4niu7c-butterdime.vercel.app/`  
* **Local Repo:** `/Users/puvansivanasan/perplexity/jobs/active/2026-001-RPR-WEBSITE`  
* **Icon Implementation:** Commit a4c4287 (Material Symbols smart\_toy icon seated)

## **Rollback Protocol:**

Any visual changes not matching this spec \= **instant rollback to v1.8.8**

**Audit ID:** `FREEZE-v1.8.8-LATCHED-FINAL`  
**Authority:** hello@butterdime.com  
**Next:** JULES implements Header \+ Hero per this spec; NO GEMINI EDITS.

// src/components/Foundations.tsx

import React from 'react';
import { SentinelVisualizer } from './SentinelVisualizer';

/**
 * TS-Λ3 // FOUNDATIONS SUBSTRATE [v1.8.8]
 * Mission: Restore 3-pillar FOUNDATIONS grid + Mothership C4 visualizer.
 * Source of truth: HarborAWebsiteMap.html foundations section (v1.8.7 SPA map).
 * Authority: hello@butterdime.com
 *
 * ENFORCEMENT:
 * - Do NOT change icon names, label strings, colors, or spacing without approval.
 * - This file may NOT modify Header/Hero; it is scoped to #foundations only.
 */

const foundationsMetrics = [
  {
    icon: 'flag',
    label: 'METRIC_01',
    title: 'THE SOURCE OF TRUTH',
    body: `
A pretty story sitting on top of bad data is not a brand strategy; it is a very expensive lie we tell ourselves until the numbers don't add up and the contract gets handed to the next agency down the street.

Bad data quietly bleeds budgets, derails strategy, and breaks the journeys your customers experience, manifesting as confusion, inconsistency, and distrust.

For most small and mid-sized businesses, the issue is not a lack of tools; it is that every tool is working from its own version of the truth. Marketing has one view of the data, finance has another, operations have a third, and your AI assistants are being trained on whatever happens to be in front of them that day. The result is noise: conflicting reports, misread signals, and "performance" that no one can tie back to reality.

We work to identify what actually matters, where it lives, and how to measure it across every touchpoint and outcome. Then we structure every message, test and retest it until we're satisfied that it accurately reflects that truth. Your decisions are then based on reality instead of the meaningless fantasy we keep seeing each day.
    `.trim(),
  },
  {
    icon: 'insights',
    label: 'METRIC_02',
    title: 'THE INSIGHT (UI)',
    body: `
Your customers are not short on information; they are exhausted, conflicted, and trying to make sense of a world where human judgment was quietly outsourced to dashboards and algorithms.

Somewhere along the way, big data and "best practice" replaced the simple act of sitting with people, listening properly, and learning what they actually need. The mismatch is simple: your customers are still human, but the systems around them now treat them as rows in a report, so they answer with guesswork, silence, or whatever they think the machine wants to hear.

This drift didn't come from bad intentions; it came from a culture that worships scale and efficiency, even when it quietly erases context, nuance, and basic empathy from everyday decisions. When every insight must fit a database and every feeling must become a metric, whole parts of your customers' reality simply stop being seen.

We aim to ground consumer insight in measurable reality using the right tools. Which to us is not a slide or a chart. It's a small set of human truths your team recognizes as real, confirmed by numbers that actually reflect what's happening, not what they guaranteed would happen. Nobody can guarantee outcomes, but we can show you how we try.
    `.trim(),
  },
  {
    icon: 'near_me',
    label: 'METRIC_03',
    title: 'THE JOURNEY (CX)',
    body: `
We try to get the moments that matter right. We use the right tools to get the job done, not the other way around.

Your team feels this every day: the same issues repeating in every channel and across every industry, the same escalations, the same misunderstandings cycling through. You are not short on data; you are short on a way to turn what is happening on the screen and off the screen into fewer, better problems to fix.

We observe what people actually do—not what we are told—and continuously adjust the words and steps to surface where friction exists and where momentum builds. Every change has to earn its place by showing measurable progress toward clearer, more manageable problems. Over time, this reveals what actually works versus what you assumed would work, so you're building on evidence rather than on hope.
    `.trim(),
  },
];

export const Foundations: React.FC = () => {
  return (
    <section id="foundations" className="px-4 sm:px-6 lg:px-8 py-24">
      <div className="max-w-screen-2xl mx-auto">
        {/* SECTION LABEL */}
        <h2 className="text-sm tracking-[0.3em] uppercase text-cyan-400 mb-12 font-mono">
          // THE FOUNDATIONS
        </h2>

        {/* THREE-PILLAR GRID (SOURCE OF TRUTH / INSIGHT / JOURNEY) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {foundationsMetrics.map((metric) => (
            <article
              key={metric.label}
              className="border border-white/10 rounded-[2.5rem] bg-white/5 p-8 backdrop-blur-sm flex flex-col"
            >
              <header className="mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="material-icons text-cyan-400 text-2xl">
                    {metric.icon}
                  </span>
                  <span className="text-xs text-white/40 tracking-widest uppercase font-mono">
                    {metric.label}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">
                  {metric.title}
                </h3>
              </header>

              <div className="text-sm text-white/60 leading-relaxed space-y-4 whitespace-pre-line">
                {metric.body}
              </div>
            </article>
          ))}
        </div>

        {/* THE MOTHERSHIP // SENTINEL C4 VISUALIZER */}
        <section aria-labelledby="mothership-heading">
          <div className="mb-6">
            <p className="text-sm tracking-[0.3em] uppercase text-cyan-400 font-mono">
              // THE MOTHERSHIP
            </p>
            <p className="text-xs text-white/40 tracking-widest uppercase font-mono mt-2">
              SENTINEL GOVERNANCE C4 DIAGRAMS
            </p>
          </div>

          {/* NOTE: SentinelVisualizer owns the 4-tab selector (L1–L4 C4 diagrams). */}
          <div className="border border-white/10 rounded-3xl bg-black/40 p-6 lg:p-8 backdrop-blur-sm">
            <SentinelVisualizer />
          </div>
        </section>
      </div>
    </section>
  );
};
// src/components/C4DiagramDefinitions-Final.ts

/**
 * TS-Λ3 // C4 ARCHITECTURE DEFINITIONS [v1.8.9]
 * Authority: Stitch-approved Mermaid styling with Bauhaus premium UI card aesthetic.
 * Environment: Pure black background (#000000).
 * Visual Weight: 1px/2px stroke consistency for premium look.
 */

export interface C4Diagram {
  id: string;
  title: string;
  description: string;
  definition: string;
}

export const sentinelDiagrams: Record<string, C4Diagram> = {
  l1_overwatch: {
    id: 'l1-overwatch',
    title: 'L1: THE OVERWATCH',
    description: 'Command Horizon & Strategic Authority',
    definition: `%%{init: {'theme':'base', 'themeVariables': { 'primaryColor':'#121212','primaryTextColor':'#A0A0A0','primaryBorderColor':'#333333','lineColor':'#333333','secondaryColor':'#1A1A1A','tertiaryColor':'#121212'}}}%%
graph TD
    classDef default fill:#121212,stroke:#333333,stroke-width:1px,color:#A0A0A0,font-family:Inter
    classDef hero fill:#1A1A1A,stroke:#FFB800,stroke-width:2px,color:#FFB800,font-weight:bold
    
    A[THE OVERWATCH]:::hero --> B[GOVERNANCE]
    A --> C[OPERATIONS]
    
    subgraph OVERWATCH_SCOPE [COMMAND_HORIZON]
    B
    C
    end`,
  },

  l2_elders: {
    id: 'l2-elders-divisions',
    title: 'L2: THE ELDERS',
    description: 'Operational seating of Elder triad & agency divisions',
    definition: `%%{init: {'theme':'base', 'themeVariables': { 'primaryColor':'#121212','primaryTextColor':'#A0A0A0','primaryBorderColor':'#333333','lineColor':'#333333','secondaryColor':'#222222','tertiaryColor':'#1A1A1A'}}}%%
graph TD
    classDef base fill:#121212,stroke:#333333,stroke-width:1px,color:#A0A0A0
    classDef active fill:#1A1A1A,stroke:#FFB800,stroke-width:2px,color:#FFB800,font-weight:bold
    classDef standard fill:#222222,stroke:#D1D1D1,stroke-width:1px,color:#D1D1D1
    
    subgraph ELDER_TRIAD [SHARED_STATE_DECISION_MATRIX]
        direction LR
        PA[PERPLEXITY ARCHITECT]:::standard
        SG[SENTINEL GOVERNOR]:::active
        GE[GEMINI ENGINEER]:::standard
    end
    
    ELDER_TRIAD --> TECH[TECHNICAL & OPERATIONS]:::base
    ELDER_TRIAD --> STRAT[STRATEGIC & CREATIVE]:::base`,
  },

  l3_forge: {
    id: 'l3-forge',
    title: 'L3: THE FORGE',
    description: 'Asset synthesis, protocol refinery, and logic weaving',
    definition: `%%{init: {'theme':'base', 'themeVariables': { 'primaryColor':'#121212','primaryTextColor':'#D1D1D1','primaryBorderColor':'#D1D1D1','lineColor':'#333333','secondaryColor':'#E5E5E5','tertiaryColor':'#121212'}}}%%
graph TD
    classDef forgeBase fill:#121212,stroke:#D1D1D1,stroke-width:1px,color:#D1D1D1
    classDef tool fill:#E5E5E5,stroke:#333333,stroke-width:1px,color:#000000
    
    FORGE[THE FORGE]:::forgeBase --> COMP1[ASSET_SYNTHESIS]:::tool
    FORGE --> COMP2[PROTOCOL_REFINERY]:::tool
    FORGE --> COMP3[LOGIC_WEAVER]:::tool`,
  },

  l4_instances: {
    id: 'l4-instances',
    title: 'L4: INSTANCES',
    description: 'Standalone child instances and product graduation',
    definition: `%%{init: {'theme':'base', 'themeVariables': { 'primaryColor':'#121212','primaryTextColor':'#A0A0A0','primaryBorderColor':'#333333','lineColor':'#333333','secondaryColor':'#0A0A0A','tertiaryColor':'#121212'}}}%%
graph TD
    classDef core fill:#121212,stroke:#333333,stroke-width:1px,color:#A0A0A0
    classDef instance fill:#0A0A0A,stroke:#00F0FF,stroke-width:1px,color:#00F0FF
    
    CORE[BASE_TEMPLATE]:::core --> I1[INSTANCE_ALPHA]:::instance
    CORE --> I2[INSTANCE_BETA]:::instance
    CORE --> I3[INSTANCE_GAMMA]:::instance`,
  },
};
// src/components/SentinelVisualizer.tsx

import React, { useState } from 'react';
import mermaid from 'mermaid';
import { sentinelDiagrams } from './C4DiagramDefinitions-Final';

/**
 * TS-Λ3 // SENTINEL VISUALIZER [v1.8.9]
 * Mission: 4-tab C4 diagram selector with Stitch-approved Bauhaus styling.
 * Authority: Centered layout, no horizontal scroll, pure black background.
 */

mermaid.initialize({
  startOnLoad: true,
  theme: 'base',
  securityLevel: 'loose',
  fontFamily: 'Inter, sans-serif',
});

const tabs = [
  { id: 'l1_overwatch', label: 'L1: OVERWATCH' },
  { id: 'l2_elders', label: 'L2: ELDERS' },
  { id: 'l3_forge', label: 'L3: FORGE' },
  { id: 'l4_instances', label: 'L4: INSTANCES' },
];

export const SentinelVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState('l1_overwatch');
  const activeDiagram = sentinelDiagrams[activeTab];

  React.useEffect(() => {
    mermaid.contentLoaded();
  }, [activeTab]);

  return (
    <div className="w-full">
      {/* TAB NAVIGATION */}
      <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2 text-xs font-mono font-bold tracking-widest uppercase transition-all
              border-b-2 whitespace-nowrap
              ${
                activeTab === tab.id
                  ? 'border-cyan-400 text-cyan-400'
                  : 'border-transparent text-white/60 hover:text-white hover:border-white/20'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* DIAGRAM METADATA */}
      <div className="mb-6 text-center">
        <h3 className="text-lg font-bold text-white mb-2 tracking-tight">
          {activeDiagram.title}
        </h3>
        <p className="text-xs text-white/60 tracking-wider uppercase">
          {activeDiagram.description}
        </p>
      </div>

      {/* MERMAID CANVAS */}
      <div className="bg-black rounded-lg p-8 flex items-center justify-center overflow-x-auto">
        <div
          className="mermaid w-full flex justify-center"
          key={activeTab}
        >
          {activeDiagram.definition}
        </div>
      </div>

      {/* FOOTER METADATA */}
      <div className="mt-6 flex items-center justify-between text-[10px] text-white/40 font-mono uppercase tracking-widest border-t border-white/10 pt-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
            <span>ACTIVE DEPLOYMENT</span>
          </div>
          <span className="text-white/20">|</span>
          <span>DECENTRALIZED BAUHAUS</span>
        </div>
        <span>REF_ID: {activeDiagram.id.toUpperCase()}</span>
      </div>
    </div>
  );
};
