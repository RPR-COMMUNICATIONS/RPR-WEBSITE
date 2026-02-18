```markdown
# ⚓ TS-Λ3 // AUTHORITATIVE ENVIRONMENT SUBSTRATE [v1.2.0]

**Path:** `.env`  
**Authority:** THE OVERWATCH // SG-CANONICAL-2026  
**Status:** ACTIVE // SENTINEL_ENFORCED  

---

## 🔐 FIREBASE CONFIGURATION (SENTINEL REQUIRED)

- **Format:** Stringified JSON object.  
- **Logic:** If missing, Auth vectors are disabled via `[SENTINEL]` warning.

```env
VITE_RPR_FIREBASE_CONFIG={"apiKey":"dummy","authDomain":"rpr-dummy.firebaseapp.com","projectId":"rpr-dummy","storageBucket":"rpr-dummy.appspot.com","messagingSenderId":"123456789","appId":"1:123456789:web:abcdef"}
```

---

## 🌏 REGIONAL LATCH

- **Primary Node:** Singapore

```env
VITE_NODE_REGION=asia-southeast1
```

---

## 🧩 FEATURE FLAGS

UI hygiene & debugging:

```env
VITE_SHOW_VIEWPORT_HUD=false
VITE_MAINTENANCE_MODE=false
```

---

## 💸 STRIPE HYBRID LATCH

- **Status:** HIBERNATION (`PAY_LATCH_ACTIVE = false`)

```env
VITE_STRIPE_PUBLIC_KEY=pk_test_placeholder_financial_vector_latch
```

---

## 📡 BACKEND TELEMETRY (STRIPE SECRETS)

> Note: These are consumed by `server.js`, not the Vite frontend.

```env
STRIPE_SECRET_KEY=sk_test_placeholder
STRIPE_PRICE_ID=price_placeholder
STRIPE_WEBHOOK_SECRET=whsec_placeholder
```