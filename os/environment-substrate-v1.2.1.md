```md
⚓ RPR-COMMUNICATIONS: ENVIRONMENT SUBSTRATE [v1.2.1]

Mission: TBA Pricing & Stripe Storefront Latch  
Harbor: A (rprcomms.com)  
Node: asia-southeast1 (Singapore)  

---

## 1. FRONTEND SUBSTRATE (Vite + Firebase)

Authoritative Firebase config for the Harbor A frontend, expressed as a Vite env payload:

```txt
VITE_RPR_FIREBASE_CONFIG={"apiKey":"dummy","authDomain":"rpr-dummy.firebaseapp.com","projectId":"rpr-dummy","storageBucket":"rpr-dummy.appspot.com","messagingSenderId":"123456789","appId":"1:123456789:web:abcdef"}
```

Execution region for node-adjacent logic:

```txt
VITE_NODE_REGION=asia-southeast1
```

> Note: Actual Firebase config for production lives in the real `.env` / secret manager. This document defines the shape and intent of the variables, not live credentials.

---

## 2. STRIPE STOREFRONT LATCH (TBA MODE)

Expose the **Stripe-hosted payment link or storefront URL** via env vars. These URLs may point to a Stripe Payment Link or checkout-hosted page in **test mode**:

```txt
VITE_STRIPE_STORE_URL=https://www.google.com/search?q=https://buy.stripe.com/test_6oE14t8pZ9Sg7Re9AA
STRIPE_STORE_URL=https://www.google.com/search?q=https://buy.stripe.com/test_6oE14t8pZ9Sg7Re9AA
```

Usage:

- `VITE_STRIPE_STORE_URL` is consumed by the Harbor A frontend (e.g. Labs / Pricing CTAs) to open the Stripe-hosted storefront in a new tab.  
- `STRIPE_STORE_URL` is available to backend scripts or future automation that need the same canonical storefront reference.

> Invariants:
> - Harbor A UI copy must present all pricing as **“To Be Announced (TBA)”** even if the Stripe page contains placeholder test prices.  
> - When moving to live pricing, update the Stripe Dashboard link and these env vars; then replace TBA copy with real amounts.

---

## 3. FINANCIAL HIBERNATION SUBSTRATE

The financial layer remains in **HIBERNATION**. All keys below are placeholders and must not be used as real secrets:

```txt
VITE_STRIPE_PUBLIC_KEY=pk_test_placeholder_financial_vector_latch
STRIPE_SECRET_KEY=sk_test_placeholder
STRIPE_PRICE_ID=price_placeholder
STRIPE_WEBHOOK_SECRET=whsec_placeholder
```

Operational semantics:

- `PAY_LATCH_ACTIVE = false` in application logic (e.g. `methods.tsx` / `server.js`).  
- `/create-checkout-session` and related flows may operate only in **test mode** until real keys are applied in secure env storage.  
- Production Harbor A must continue to route “Pay” / purchase flows to **TBA-friendly** experiences such as `/labs/checkout-pending` or a clearly marked beta storefront.

---

## 4. IMPLEMENTATION NOTES

- This document is an **environment specification**, not a live `.env`.  
- Real secrets belong in:
  - Local `.env` files outside of version control,  
  - Or cloud secret managers bound to CI/CD and runtime.  
- Any change to this substrate version (e.g. moving from TBA to live pricing) should bump the version tag (e.g. `[v1.2.2]`) and be referenced in the AGENT HANDOVER / strike ledgers.
```