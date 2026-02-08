<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# RPR MOTHERSHIP | MASTER CONTENT MANIFEST [v2.1.0]

**Status:** ARCHITECT-APPROVED SURFACES ONLY
**Authority:** RPR Communications LLC / Architect
**Alignment:** SG-CANONICAL-2026 | HARBOR A v1.8.8 FREEZE
**Date:** 2026-02-03
**Supersedes:** v2.0.0

***

## SCOPE \& GOVERNANCE

### What is APPROVED \& FROZEN

This manifest documents **ONLY** content and visual patterns explicitly approved by the Architect:

1. **Hero substrate** (headline, body copy, CTAs)
2. **Foundations pillars** (3 metrics: titles, copy, icons, collapsible behavior)
3. **Methods client loop** (5-step cycle: ASK/PAY/MAKE/PLAY/REPEAT)
4. **Overwatch surface** (biography, credentials) – **NEW IN v2.1.0**
5. **Mermaid/C4 diagrams** (4 layers: L1-L4) – **UPDATED IN v2.1.0**

### What is NOT YET APPROVED

The following surfaces are **NOT confirmed** and must NOT be implemented without explicit Architect sign-off:

- **Process** (4-step cycle: DISCOVER/DELIVER/MEASURE/IMPROVE) – structure frozen, copy TBD
- **Labs surface** (highlights, case studies, products)
- **Products inventory**
- **Footer content** beyond basic legal links


### Agent Governance Rules

**Cursor (Implementation Agent):**

- MAY: Implement surfaces in this manifest character-for-character
- MUST NOT: Invent copy, change wording, add sections/cards, modify icons or visual tokens without Architect approval
- IF UNCERTAIN: Leave unchanged, report "requires Architect decision"

**Gemini (Google Ecosystem Auditor):**

- MAY: Verify feasibility of concepts using Firebase/Google Cloud/Workspace APIs
- MAY: Propose technical wiring (APIs, data models, event flows) in notes/reports only
- MUST NOT: Edit copy or visuals directly, invent product names, weaken governance rules
- IF INFEASIBLE: Flag explicitly as implementation constraint, suggest paths as notes (not edits)

***

## BRAND GUIDELINES

### Typography

**Fonts:**

- Primary: JetBrains Mono (monospace, headings/labels/nav)
- Secondary: System sans-serif stack for body copy

**Hierarchy:**

- Section labels: `text-xs tracking-[0.3em] uppercase font-mono text-cyan-400`
- Metric labels: `text-xs tracking-widest uppercase font-mono text-white/40`
- Card titles: `text-xl font-bold text-white tracking-tight`
- Body copy: `text-sm text-white/60 leading-relaxed`
- Nav items: `text-xs tracking-widest uppercase font-mono`


### Color Palette

**Approved colors ONLY:**

- Background: `bg-black`, `bg-black/80`, `bg-white/5`
- Text primary: `text-white`
- Text secondary: `text-white/60`, `text-white/40`
- Accent: `text-cyan-400`, `text-cyan-500`
- Borders: `border-white/10`, `border-white/20`
- CTA primary: `bg-cyan-500 text-black`
- CTA secondary: `border-white/20 text-white/80`

**Forbidden:**

- No gradients
- No additional accent colors without approval
- No color changes to frozen surfaces


### Visual Tokens

**Card chrome:**

- Border: `border border-white/10`
- Radius: `rounded-3xl`
- Background: `bg-white/5` or `bg-black/40`
- Blur: `backdrop-blur-sm`
- Padding: `p-8` or `p-6 lg:p-8`

**Icon tiles (premium pattern):**

- Outer: `rounded-2xl bg-black/80 shadow-[0_0_40px_rgba(0,0,0,0.6)] p-6`
- Inner: `w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center`
- Icon: Material Icons, `text-cyan-400` or `text-white`, `text-2xl` or `32px`

**Spacing:**

- Section padding: `px-4 sm:px-6 lg:px-8 py-24`
- Container: `max-w-screen-2xl mx-auto` or `max-w-5xl mx-auto`
- Grid gaps: `gap-8 lg:gap-12`


### Icons

**Icon library:** Material Icons ONLY

**Approved icons:**

- Foundations: `flag`, `insights`, `near_me`
- Methods: (to be documented per step)
- Process: (to be documented per step)
- UI controls: `menu`, `close`, `expand_more`, `expand_less`, `smart_toy`

**Icon usage:**

- Via `Icon` helper component: `<Icon name="flag" className="text-cyan-400" size={32} />`

```
- Or direct: `<span className="material-icons text-cyan-400 text-2xl">flag</span>`
```


***

## 1. HERO SUBSTRATE [APPROVED]

**File:** `src/components/Hero.tsx`

### Layout

- Section: `relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-16`
- Container: `max-w-5xl mx-auto text-center space-y-8`


### Badge

**Text:** `EST. 2025 // EXPERIENTIAL COMMUNICATIONS`

**Styles:**

```tsx
<div className="inline-block border border-white/10 rounded-full px-4 py-1.5 font-mono text-[10px] tracking-[0.15em] uppercase font-medium text-white/70">
  EST. 2025 // EXPERIENTIAL COMMUNICATIONS
</div>
```


### Headline [LOCKED]

**Text (two lines, must break after "INTELLIGENCE,"):**

```tsx
<h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
  <span className="text-white">GLOBAL INTELLIGENCE,</span>
  <br />
  <span className="text-cyan-400">EXPERIENTIAL ACTIVATION.</span>
</h1>
```

**Rules:**

- Line 1: white
- Line 2: cyan-400
- Must break after comma
- No rewording permitted


### Body Copy [LOCKED]

**Text:**

> WE'RE A BOUTIQUE AGENCY AND EXPERIENCE STUDIO THAT ACTUALLY CARES IF THE CAMPAIGN MOVES THE NEEDLE. WE PLAN CAMPAIGNS BASED ON REAL WORLD RESULTS THROUGH DIGITAL, VIRTUAL AND THE PHYSICAL SPACES..WITH THE MESSY BITS IN BETWEEN.

**Styles:**

```tsx
<p className="max-w-3xl mx-auto text-base lg:text-lg text-white/60 leading-relaxed">
  {body}
</p>
```


### CTAs [LOCKED]

**Container:** `flex items-center justify-center gap-4`

**Primary CTA (left):**

```tsx
<a
  href="https://rprcomms.com/labs"
  className="inline-flex items-center gap-2 bg-cyan-500 text-black px-6 py-3 rounded hover:bg-cyan-400 transition-colors text-sm font-semibold tracking-wider uppercase"
>
  HIGHLIGHTS
</a>
```

**Secondary CTA (right):**

```tsx
<button className="inline-flex items-center gap-2 bg-transparent border border-white/20 text-white/80 px-6 py-3 rounded hover:border-white/40 hover:text-white transition-colors text-sm font-semibold tracking-wider uppercase">
  <span className="material-symbols-outlined text-sky-500">smart_toy</span>
  ASK OLLIE
</button>
```

**Rules:**

- Order fixed: HIGHLIGHTS left, ASK OLLIE right
- No additional CTAs
- No text changes

***

## 2. FOUNDATIONS PILLARS [APPROVED]

**File:** `src/components/Foundations.tsx`

### Section Layout

- Section: `section#foundations` with `px-4 sm:px-6 lg:px-8 py-24`
- Container: `max-w-screen-2xl mx-auto`


### Section Label

```tsx
<h2 className="text-sm tracking-[0.3em] uppercase text-cyan-400 mb-12 font-mono">
  // THE FOUNDATIONS
</h2>
```


### Grid

- Layout: `grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16`


### Pillar Cards [LOCKED - 3 METRICS]

**Card chrome (applies to all 3):**

```tsx
<div className="border border-white/10 rounded-3xl bg-white/5 p-8 backdrop-blur-sm flex flex-col">
```

**Icon tile pattern:**

```tsx
<div className="mb-6 rounded-2xl bg-black/80 shadow-[0_0_40px_rgba(0,0,0,0.6)] p-3">
  <div className="w-10 h-10 rounded-2xl bg-neutral-900 flex items-center justify-center">
    <Icon name={metric.icon} className="text-cyan-400" size={24} />
  </div>
</div>
```

**Card header:**

```tsx
<div className="mb-4">
  <div className="text-xs text-white/40 tracking-widest uppercase font-mono mb-2">
    {metric.label}
  </div>
  <h3 className="text-xl font-bold text-white tracking-tight">
    {metric.title}
  </h3>
</div>
```


#### METRIC_01: THE SOURCE OF TRUTH

**Icon:** `flag`

**Title:** `THE SOURCE OF TRUTH`

**Summary (always visible):**
> A pretty story sitting on top of bad data is not a brand strategy; it is a very expensive lie we tell ourselves until the numbers don't add up and the contract gets handed to the next agency down the street.

**Details (collapsible):**
> Bad data quietly bleeds budgets, derails strategy, and breaks the journeys your customers experience, manifesting as confusion, inconsistency, and distrust.
>
> For most small and mid-sized businesses, the issue is not a lack of tools; it is that every tool is working from its own version of the truth. Marketing has one view of the data, finance has another, operations have a third, and your AI assistants are being trained on whatever happens to be in front of them that day. The result is noise: conflicting reports, misread signals, and "performance" that no one can tie back to reality.
>
> We work to identify what actually matters, where it lives, and how to measure it across every touchpoint and outcome. Then we structure every message, test and retest it until we're satisfied that it accurately reflects that truth. Your decisions are then based on reality instead of the meaningless fantasy we keep seeing each day.

#### METRIC_02: THE INSIGHT (UI)

**Icon:** `insights`

**Title:** `THE INSIGHT (UI)`

**Summary (always visible):**
> Your customers are not short on information; they are exhausted, conflicted, and trying to make sense of a world where human judgment was quietly outsourced to dashboards and algorithms.

**Details (collapsible):**
> Somewhere along the way, big data and "best practice" replaced the simple act of sitting with people, listening properly, and learning what they actually need. The mismatch is simple: your customers are still human, but the systems around them now treat them as rows in a report, so they answer with guesswork, silence, or whatever they think the machine wants to hear.
>
> This drift didn't come from bad intentions; it came from a culture that worships scale and efficiency, even when it quietly erases context, nuance, and basic empathy from everyday decisions. When every insight must fit a database and every feeling must become a metric, whole parts of your customers' reality simply stop being seen.
>
> We aim to ground consumer insight in measurable reality using the right tools. Which to us is not a slide or a chart. It's a small set of human truths your team recognizes as real, confirmed by numbers that actually reflect what's happening, not what they guaranteed would happen. Nobody can guarantee outcomes, but we can show you how we try.

#### METRIC_03: THE JOURNEY (CX)

**Icon:** `near_me`

**Title:** `THE JOURNEY (CX)`

**Summary (always visible):**
> We try to get the moments that matter right. We use the right tools to get the job done, not the other way around.

**Details (collapsible):**
> Your team feels this every day: the same issues repeating in every channel and across every industry, the same escalations, the same misunderstandings cycling through. You are not short on data; you are short on a way to turn what is happening on the screen and off the screen into fewer, better problems to fix.
>
> We observe what people actually do—not what we are told—and continuously adjust the words and steps to surface where friction exists and where momentum builds. Every change has to earn its place by showing measurable progress toward clearer, more manageable problems. Over time, this reveals what actually works versus what you assumed would work, so you're building on evidence rather than on hope.

### Collapsible Behavior [APPROVED]

**State management:**

```tsx
const [openMetric, setOpenMetric] = useState<string | null>(null);
const toggleMetric = (label: string) => 
  setOpenMetric((current) => (current === label ? null : label));
```

**Summary rendering:**

```tsx
<div className="text-sm text-white/60 leading-relaxed">
  {metric.summary}
</div>
```

**Details container (animated):**

```tsx
<div
  className={`overflow-hidden transition-[max-height] duration-300 ease-in-out ${
    isOpen ? 'max-h-[1500px] mt-4' : 'max-h-0'
  }`}
>
  <div className="text-sm text-white/60 leading-relaxed space-y-4 whitespace-pre-line">
    {metric.details}
  </div>
</div>
```

**Toggle button:**

```tsx
<button
  type="button"
  onClick={() => toggleMetric(metric.label)}
  className="mt-4 inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-cyan-400 hover:text-cyan-300"
>
  {isOpen ? 'Collapse' : 'Read full'}
  <span className="material-icons text-[16px]">
    {isOpen ? 'expand_less' : 'expand_more'}
  </span>
</button>
```

# **MOTHERSHIP C4 VISUALISER: MASTER CONTENT MANIFEST**

**Platform:** RPR KONTROL

**Governance Standard:** SENTINEL-PROTOCOL-v2.1.0

**Framework:** Relationship Accountability Model (RAM)

---

## **TAB 1: L1 - OVERWATCH COMMAND (The Sovereign Context)**

**Purpose:** Visualize the legal and strategic root of the system where authority originates.

### **Nodes & Definitions**

* **THE OVERWATCH (USER)
* **RAM Role:** Sovereign Commander. 
* **Key Action:** Bound legally to RPR COMMUNICATIONS LLC.


* **RPR COMMUNICATIONS LLC (System)**
* **RAM Role:** Legal Entity. Provides the foundational corporate structure and regulatory compliance.
* **Status:** Active. Anchored in Singapore jurisdiction.


* **THE ELDERS (Container Preview)**
* **RAM Role:** Governance Intelligence Layer. Handles delegated strategic oversight.



### **Audit Trail Key Events**

* **Authority Verification:** Sovereign status confirmed and command chains validated.
* **Strategic Review:** Quarterly governance assessment completed by Overwatch.

---

## **TAB 2: L2 - THE ELDERS (The Container Layer)**

**Purpose:** Visualize the "Quantum Network" brain handling shared-state decision making.

### **Nodes & Definitions**

* **THE SENTINEL (The Router)**
* **RAM Role:** Guardian & Routing Orchestrator. Assigns requests to optimum reasoning lanes.
* **Logic:** Manages task routing based on complexity and domain expertise.


* **THE ARCHITECT (The Reasoner)**
* **Platform:** Perplexity AI.
* **RAM Role:** Horizontal Strategist. Specializes in research and framework design.


* **THE ENGINEER (The Executor)**
* **Platform:** Google Gemini.
* **RAM Role:** Vertical Systems Engineer. Technical implementation and infrastructure orchestration.


* **THE GUARDIAN (The Monitor)**
* **RAM Role:** Security monitoring and compliance verification.



### **Infrastructure Substrate**

* **FIRESTORE:** NoSQL database for real-time state persistence.
* **CI/CD PIPELINE:** Automated deployment infrastructure ensuring build fidelity.

---

## **TAB 3: L3 - AGENCY & FORGE (The Component Layer)**

**Purpose:** Visualize role separation between high-value strategy (Project Fees) and scalable execution (Subscriptions).

### **Strategic Waterfall (Upper Tier)**

* **ADVERTISING AGENCY**
* **Revenue Model:** Project Fees.
* **RAM Role:** **Identify & Analyze**. Handles client strategy and market conceptualization.


* **BUSINESS DEPARTMENTS**
* **Units:** Sales, Marketing, Client Success.



### **Execution Substrate (Lower Tier)**

* **THE FORGE**
* **Revenue Model:** Subscription Services.
* **RAM Role:** **Document & Build**. Technical execution and artifact generation.


* **FORGE TOOLS**
* **CURSOR:** AI-powered code implementation.
* **GITHUB:** Version control and repository management.



---

## **TAB 4: L4 - SOVEREIGNTY & INSTANCES (The Deployment Layer)**

**Purpose:** Visualize the canonical data law and the specialized "Boots on the Ground" instances.

### **Canonical Archives (The Truth)**

* **SOVEREIGN_ROOT:** Master archive of governance protocols and legal frameworks. Encrypted and versioned.
* **COMMS_ROOT:** Communication protocols and messaging standards.

### **Specialist Instances**

* **UDD (User-Driven Design):** UX research and interface optimization.
* **IFS (Integrated Finance Solutions):** Financial modeling and budgeting analysis.
* **PBAS (Performance-Based Analytics):** KPI monitoring and operational metrics tracking.

### **The Warden (Regional Enforcement)**

* **RAM Role:** Regional Lock System. Enforces geographic sovereignty and PDPA compliance.
* **Primary Jurisdiction:** Singapore (`asia-southeast1`).

---

## **GOVERNANCE STATUS & TELEMETRY**

* **Decision Delta:** Time from Intake (Human) to Decomposition (Architect).
* **Fidelity Score:** Measured trust based on agent adherence to RAM obligations.
* **Spatial Status:** (x, y, z) telemetry tracking agent location and authority level.

**Would you like me to generate the Figma design specifications for the interactive "Audit Trail" sidebar used across all four tabs?**

### Sentinel Visualizer Block [APPROVED - v2.1.0]

**Status:** Structure AND content approved

**Subheading pattern:**

```tsx
<h3 className="text-sm tracking-[0.3em] uppercase text-cyan-400 font-mono mb-2">
  // THE MOTHERSHIP
</h3>
<p className="text-xs text-white/40 tracking-widest uppercase font-mono mt-2 mb-6">
  SENTINEL GOVERNANCE C4 DIAGRAMS
</p>
```

**Container:**

```tsx
<div className="border border-white/10 rounded-3xl bg-black/40 p-6 lg:p-8 backdrop-blur-sm">
  <SentinelVisualizer />
</div>
```

**Mermaid/C4 diagram descriptions:** See Section 7 below

***

## 3. METHODS CLIENT LOOP [APPROVED]

**File:** `src/components/Methods.tsx`

### Section Layout

- Section: `section#methods` with `px-4 sm:px-6 lg:px-8 py-24`
- Container: `max-w-screen-2xl mx-auto`


### Section Label \& Subtitle

```tsx
<h2 className="text-sm tracking-[0.3em] uppercase text-cyan-400 mb-4 font-mono">
  // THE METHODS
</h2>
<p className="text-sm text-white/60 mb-12">
  A continuous loop from strategy to post-campaign insight.
</p>
```


### Grid

- Layout: `grid grid-cols-1 md:grid-cols-5 gap-8`


### Step Cards [LOCKED - 5 STEPS]

**Card container:**

```tsx
<div className="bg-black rounded-3xl py-10 px-8 flex flex-col items-center text-center">
```

**Icon tile pattern:**

```tsx
<div className="mb-6 rounded-2xl bg-black/80 shadow-[0_0_40px_rgba(0,0,0,0.6)] p-6">
  <div className="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center">
    <Icon name={step.icon} className="text-white" size={32} />
  </div>
</div>
```

**Card content structure:**

```tsx
<h3 className="text-lg font-semibold tracking-[0.5em] text-white mb-2 uppercase">
  {step.title}
</h3>
<p className="text-sm text-white/60 mb-3">
  {step.subtitle}
</p>
<p className="text-sm text-white/60 leading-relaxed">
  {step.body}
</p>
```


#### Step 1: ASK

**Title:** `ASK`
**Subtitle:** `Strategic Planning`
**Icon:** `psychology` (or similar – TBD)

**Body:**
> Define problem \& objectives. Map consumer journey \& constraints. Decide success metrics \& scope.

#### Step 2: PAY

**Title:** `PAY`
**Subtitle:** `Client Approval`
**Icon:** `payments` (or similar – TBD)

**Body:**
> Present strategic recommendation. Align on risks, timelines, budgets. Obtain sign-off to proceed.

#### Step 3: MAKE

**Title:** `MAKE`
**Subtitle:** `Planning`
**Icon:** `construction` (or similar – TBD)

**Body:**
> Develop concepts \& narratives. Plan UX, content, and channels. Prepare production roadmap.

#### Step 4: PLAY

**Title:** `PLAY`
**Subtitle:** `Execution`
**Icon:** `play_circle` (or similar – TBD)

**Body:**
> Produce assets \& build flows. Launch campaigns / experiences. Monitor performance in market.

#### Step 5: REPEAT

**Title:** `REPEAT`
**Subtitle:** `Post Analysis`
**Icon:** `replay` (or similar – TBD)

**Body:**
> Review results \& learnings. Capture consumer insights (UI/CX). Identify improvements to journey.

**Rules:**

- 5 steps, fixed order
- Titles, subtitles, and body copy locked
- Icons TBD (Architect to confirm Material Icons names)
- No rewording permitted
- No additional steps

***

## 4. PROCESS CYCLE [STRUCTURE FROZEN, COPY TBD]

**File:** `src/components/Process.tsx`

### Status

- Section layout: APPROVED
- 4-step structure: APPROVED
- Step titles: APPROVED
- Card chrome: APPROVED (matches Foundations)
- Body copy: NOT YET APPROVED


### Section Layout

- Section: `section#process` with `px-4 sm:px-6 lg:px-8 py-24`
- Container: `max-w-screen-2xl mx-auto`


### Section Label

```tsx
<h2 className="text-sm tracking-[0.3em] uppercase text-cyan-400 mb-12 font-mono">
  // THE PROCESS
</h2>
```


### Grid

- Layout: `grid grid-cols-1 md:grid-cols-4 gap-8`


### Step Cards [STRUCTURE APPROVED]

**Card chrome (matches Foundations):**

```tsx
<div className="border border-white/10 rounded-3xl bg-white/5 p-8 backdrop-blur-sm flex flex-col items-center text-center">
```

**Icon tile pattern (matches Foundations):**

```tsx
<div className="mb-6 rounded-2xl bg-black/80 shadow-[0_0_40px_rgba(0,0,0,0.6)] p-3">
  <div className="w-16 h-16 rounded-2xl bg-neutral-900 flex items-center justify-center">
    <Icon name={step.icon} className="text-cyan-400" size={32} />
  </div>
</div>
```


#### Step Titles [APPROVED]

1. **DISCOVER** – Icon TBD
2. **DELIVER** – Icon TBD
3. **MEASURE** – Icon TBD
4. **IMPROVE** – Icon TBD

**Body copy:** HOLD – requires Architect approval before implementation

**Rules:**

- 4 steps, fixed order
- Titles locked
- Card chrome locked
- Icons TBD
- Body copy TBD
- DO NOT implement body content without approval

***

## 5. OVERWATCH SURFACE [APPROVED - v2.1.0]

**File:** `src/components/Overwatch.tsx` or integrated into main layout

### Section Layout

- Section: `section#overwatch` with `px-4 sm:px-6 lg:px-8 py-24`
- Container: `max-w-4xl mx-auto`


### Section Label

```tsx
<h2 className="text-sm tracking-[0.3em] uppercase text-cyan-400 mb-12 font-mono">
  // OVERWATCH
</h2>
```


### Biography Copy [LOCKED]

**Source:** MAIN-WEBSITE-FIX.md §6.3 "Overwatch Biography"[^1]

**Text (3 paragraphs):**

> Having spent 20 years in corporate communications and brand activation—from local event firms to international creative agencies—he has worked on everything from on-ground activations to award-winning campaigns for global corporations. What began as a fascination with human behaviour and systems, and a belief that technology should be used to improve people's lives rather than just generate TikTok likes, has evolved into a multidisciplinary approach to customer experience.
>
> While experimenting with AI for his own personal writings and ideas, a pattern he noticed in a client problem raised a different question: how can a sentient being leverage an artificial construct to apply its knowledge in knowledge discovery, systems thinking, and polymathic research—within the same human framework of systems and silos—to create something better?
>


**Layout structure:**

```tsx
<div className="space-y-6 text-base text-white/70 leading-relaxed">
  <p>{paragraph1}</p>
  <p>{paragraph2}</p>
  <p>{paragraph3}</p>
</div>
```

**Optional card container (if desired):**

```tsx
<div className="border border-white/10 rounded-3xl bg-white/5 p-8 backdrop-blur-sm">
  {/* Biography content */}
</div>
```

**Rules:**

- Copy locked (source: MAIN-WEBSITE-FIX.md)[^1]
- 3 paragraphs, exact wording
- No rewording permitted
- Layout flexible (card vs. raw text)
- Styling matches brand guidelines

***

## 6. MERMAID/C4 DIAGRAMS [UPDATED - v2.1.0]

**File:** `src/components/C4DiagramDefinitions-Final.ts`

### Status

- Structure: APPROVED
- Visual styling: APPROVED
- Diagram descriptions: **UPDATED** per Architect requirements


### Diagram Structure

**4 layers (tabs):**

1. L1: OVERWATCH
2. L2: ELDERS
3. L3: FORGE
4. L4: INSTANCES

### Updated Descriptions [LOCKED]

#### L1: OVERWATCH

**Title:** `L1: THE OVERWATCH`
**Description:** `Command horizon, strategic oversight, and sovereign governance authority`

#### L2: ELDERS

**Title:** `L2: THE ELDERS`
**Description:** `Elder triad coordination—Architect designs structure, Sentinel governs ethics, Engineer implements across the Google ecosystem`

#### L3: FORGE

**Title:** `L3: THE FORGE`
**Description:** `Asset synthesis, protocol refinement, and logic weaving—where raw concepts become production-ready frameworks`

#### L4: INSTANCES

**Title:** `L4: INSTANCES`
**Description:** `Standalone child instances inherit base templates and graduate into sovereign products`

### Implementation

**Update `C4DiagramDefinitions-Final.ts`:**

```typescript
export const sentinelDiagrams: Record<string, C4Diagram> = {
  l1_overwatch: {
    id: 'l1-overwatch',
    title: 'L1: THE OVERWATCH',
    description: 'Command horizon, strategic oversight, and sovereign governance authority',
    definition: `...` // Existing Mermaid definition
  },
  
  l2_elders: {
    id: 'l2-elders-divisions',
    title: 'L2: THE ELDERS',
    description: 'Elder triad coordination—Architect designs structure, Sentinel governs ethics, Engineer implements across the Google ecosystem',
    definition: `...` // Existing Mermaid definition
  },
  
  l3_forge: {
    id: 'l3-forge',
    title: 'L3: THE FORGE',
    description: 'Asset synthesis, protocol refinement, and logic weaving—where raw concepts become production-ready frameworks',
    definition: `...` // Existing Mermaid definition
  },
  
  l4_instances: {
    id: 'l4-instances',
    title: 'L4: INSTANCES',
    description: 'Standalone child instances inherit base templates and graduate into sovereign products',
    definition: `...` // Existing Mermaid definition
  },
};
```

**Rules:**

- Descriptions locked (above text only)
- Mermaid definitions unchanged (existing Bauhaus styling preserved)
- Tab labels unchanged
- Visual tokens unchanged
- No additional diagrams without approval

***

## 7. DEFERRED SURFACES [NOT APPROVED]

The following surfaces are **EXPLICITLY NOT APPROVED** for implementation:

### Labs Surface

- Case highlights
- Project cards
- Product inventory
- **Status:** Content and structure TBD


### Products Surface

- Product cards
- Pricing
- Feature lists
- **Status:** Not yet designed


### Footer

- Extended legal copy
- Links beyond basics
- **Status:** Basic legal links only (Terms, Privacy, Forensic Accord)

***

## 8. CHANGE CONTROL \& AUDIT

### Version History

- **v1.0.0** – Initial manifest (mixed approved/unapproved content)
- **v2.0.0** – Architect-approved surfaces only, deferred surfaces documented
- **v2.1.0** – Overwatch biography added, Mermaid descriptions updated


### Approval Authority

- All content changes require Architect approval
- All visual token changes require Architect approval
- All new sections require Architect approval


### Implementation Protocol

1. Agent reads this manifest
2. Agent implements ONLY approved sections character-for-character
3. Agent flags any ambiguity or missing detail
4. Agent does NOT invent, improve, or optimize without approval
5. Agent does NOT implement deferred surfaces

### Audit Markers

- **Document ID:** `RPR-MOTHERSHIP-CONTENT-MANIFEST-v2.1.0`
- **Alignment:** `SG-CANONICAL-2026`
- **Harbor Job:** `2026-001-RPR-WEBSITE`
- **Authority:** `RPR Communications LLC / Architect`
- **Date:** `2026-02-03`

***

## 9. IMPLEMENTATION CHECKLIST

Before deploying any surface, verify:

- [ ] Surface is marked APPROVED in this manifest
- [ ] All copy matches this manifest character-for-character
- [ ] All visual tokens match brand guidelines exactly
- [ ] Overwatch biography matches MAIN-WEBSITE-FIX.md[^1]
- [ ] Mermaid descriptions updated per v2.1.0
- [ ] No deferred surfaces have been implemented
- [ ] No invented content has been added
- [ ] Chrome patterns match approved specifications

If ANY item fails, restore to baseline and request Architect approval.

***

**END OF MANIFEST**

**Changelog v2.1.0:**

- Added Section 5: Overwatch Surface (biography copy from MAIN-WEBSITE-FIX.md)[^1]
- Updated Section 6: Mermaid/C4 diagram descriptions (4 layers, per Architect specifications)
- Moved Overwatch from "deferred" to "approved"
- Updated scope declaration to include Overwatch + Mermaid content
<span style="display:none">[^10][^11][^12][^13][^14][^2][^3][^4][^5][^6][^7][^8][^9]</span>

<div align="center">⁂</div>

[^1]: MAIN-WEBSITE-FIX.md

[^2]: RPR-MOTHERSHIP-CONTENT-MANIFEST-v2.md

[^3]: RLHF Core Configuration.json

[^4]: Space Instructions V2.md

[^5]: RPR-KONTROL Drive Manifest.md

[^6]: PERPLEXITY-BIBLE.json

[^7]: my-macstudio-won-t-start-LIlkVwzEQvmcjj.JhsWE1Q.md

[^8]: ALL_PROJECTS_STATUS.json

[^9]: organizational-framework.json

[^10]: IMPLEMENTATION-COMPLETE.md

[^11]: CONFIGURATION-README.md

[^12]: redo-this-file-and-prepare-a-completed-markdown-do.md

[^13]: RPR-MOTHERSHIP-CONTENT-MANIFEST-v2.md

[^14]: MAIN-WEBSITE-FIX.md

