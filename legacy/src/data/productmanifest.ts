/**
 * TS-Λ3 // PRODUCT MANIFEST [v1.8.2]
 * Source of Truth: GitHub seated strings for graduated tools.
 * Authority: hello@butterdime.com
 */

export interface ProductDefinition {
    id: string;
    name: string;
    classification: string;
    description: string;
    status: 'GRADUATED' | 'STAGING' | 'FORGE';
  }
  
  export const productManifest: ProductDefinition[] = [
    {
      id: "rpr-kontrol",
      name: "RPR KONTROL",
      classification: "SOVEREIGN SYSTEM",
      description:
        "Sovereign AI‑governance system and document controller for RPR COMMUNICATIONS, LLC, implementing the SENTINEL PROTOCOL for forensic project tracking, agent performance audits, and mirrored Google Drive/Notion records.",
      status: "GRADUATED"
    },
    {
      id: "rpr-verify",
      name: "RPR VERIFY",
      classification: "COMPLIANCE ENGINE",
      description:
        "Purpose‑built intelligent onboarding solution for Australian businesses, combining proactive compliance with fast, fair dispute resolution.",
      status: "GRADUATED"
    },
    {
      id: "myaudit",
      name: "MYAUDIT",
      classification: "AUDIT SUBSTRATE",
      description:
        "Cloud‑based AI accounting and tax system for Malaysian SMEs, replacing manual bank‑to‑ledger bookkeeping with audit‑ready records and automated, owner‑friendly tax planning for business owners who do not want finance cost centers.",
      status: "GRADUATED"
    },
    {
      id: "labyrinth",
      name: "LABYRINTH",
      classification: "CHILD INSTANCE",
      description:
        "Standalone sovereign child product and client instance running on the Google ecosystem, governed by the SENTINEL PROTOCOL and inheriting patterns from THE MOTHERSHIP.",
      status: "GRADUATED"
    },
    {
      id: "ikon-gen",
      name: "IKON GENERATOR",
      classification: "CREATIVE SUITE",
      description:
        "Specialized creative module graduated from RPR KONTROL for forensic identity branding and visual substrate seating.",
      status: "GRADUATED"
    },
    {
      id: "logo-engine",
      name: "LOGO ENGINE",
      classification: "CREATIVE SUITE",
      description:
        "High‑fidelity substrate for SME visual seating, graduated from THE FORGE into production for logo and mark systems.",
      status: "GRADUATED"
    },
    {
      id: "video-synth",
      name: "VIDEO SYNTH LAB",
      classification: "MOTION AUDIT",
      description:
        "AI‑driven motion audit and synthesis engine for video surfaces, graduated to Level 4 In‑House Operations.",
      status: "GRADUATED"
    }
  ];