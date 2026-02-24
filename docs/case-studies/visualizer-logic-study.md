# RPR-COMMUNICATIONS: ARCHITECTURE DECOUPLING (L0 vs L1–L4) CASE STUDY

## TELEMETRY OVERVIEW

- **Subject:** Separating the Organizational Root (The Firm) from the Technical Substrate (Command Plane)
- **Layers:** L0 (Org Root) vs L1–L4 (Product, Data, Infra, Agents) [web:58][web:64]
- **Authority:** THE OVERWATCH // SG-CANONICAL-2026
- **Status:** 🟢 IN‑PROGRESS

This study tracks how the Mothership Visualizer evolved from a single, tangled diagram into layered views that clearly distinguish business structure from technical implementation. [web:57][web:62]

---

## LAYER MODEL — DEFINITIONS

- **L0 — Organizational Root (The Firm):** Legal entity, brands, Harbors, governance, and value streams. No servers, no clusters; just who owns what and why. [web:62]
- **L1 — Product & Experience:** User-facing surfaces (Website, Verify, MyAudit, Dashboards) and their core user journeys.
- **L2 — Application & Services:** React apps, APIs, Firebase projects, auth flows, and integration boundaries. [web:59]
- **L3 — Data & Events:** Datastores, analytics pipelines, logs, and canonical entities (customer, project, harbor).
- **L4 — Infrastructure & Agents:** Cloud regions, CI/CD, rclone remotes, AI agents (Perplexity, Gemini, local tools) and their execution paths. [web:64][web:65]

The key rule: **L0 never shows servers; L4 never shows legal boxes.** Each level answers a different question and uses different notation. [web:58][web:64]

---

## LEGACY VISUALIZER — PROBLEM

- Org units, apps, and infrastructure were drawn on a single canvas, mixing:
  - Legal entities (RPR‑COMMUNICATIONS, LLC),
  - Product names (Mothership, Harbor A/B/C),
  - Low-level assets (Firebase projects, rclone remotes, scripts). [web:57][web:65]
- Consequences:
  - Hard to onboard: new people could not tell “who owns what” vs “what runs where”.
  - Diagrams drifted quickly; any infra change risked invalidating org-level views.
  - Governance questions (L0) and debugging questions (L3–L4) used the same messy picture. [web:62][web:64]

---

## TARGET VISUALIZER — DECOUPLED LOGIC

### A. Separate canvases per layer

- **L0 canvas:** Brands, Harbors, governance roles, case-study manifests.
- **L1 canvas:** User journeys and surfaces, mapped back to L0 owners.
- **L2–L4 canvases:** Technical diagrams only; each focuses on:
  - Services and modules (L2),
  - Data flows and events (L3),
  - Infra, regions, and agents (L4). [web:58][web:59]

Each canvas links **across layers** via references (e.g. “Harbor A Website → L2: Website Service → L4: asia-southeast1 cluster”) rather than embedding everything in one view. [web:64][web:65]

### B. Visual constraints

- Org shapes and colors reserved for L0; tech shapes reserved for L1–L4.
- Cross-layer relationships drawn as labeled jump-links, not ad‑hoc arrows.
- Any diagram that mixes L0 and L4 is treated as a specialized “alignment view”, not the default. [web:57][web:62]

---

## MEASUREMENT & ACCEPTANCE

You can treat this as a UX/architecture measurable change:

- **Comprehension time:** How long it takes a new contributor to answer:
  - “Who owns Harbor A?” (L0)
  - “Which Firebase project serves Harbor A Website?” (L2–L4)
- **Change blast radius:** When a technical asset (e.g. a region or remote) changes, how many diagrams must be updated?
  - Target: L0 diagrams stay valid across infra changes; only L2–L4 need edits. [web:64][web:65]
- **Diagram count vs clarity:** Fewer overloaded diagrams; more focused views that each tell one story well.

When those metrics look good (fast answers, minimal cross-layer edits), you can mark this case study as fully latched.