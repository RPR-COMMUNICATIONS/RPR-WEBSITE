Here’s a clean Markdown version you can drop into `os/ollie-chat-strike-ledger.md`:

```md
⚓ TS-Λ3 // OLLIE CHAT STRIKE LEDGER [v1.5.2]

Project: rpr-corporate-site  
Region: asia-southeast1 (Singapore Node)  
Status: 🟢 LATCHED  
Date: 2026-02-18  

---

## 🧬 1. STRIKE PARAMETERS

The `ollieChat` HTTPS substrate has been hard-aligned to resolve the CORS preflight anomalies detected in Harbor A.  
- Logic Orchestrator: `backend/functions/index.js` [v1.5.2]  
- CORS Allowlist: `['http://localhost:5173', 'https://rprcomms.com', 'Firebase Mirrors']`  
- Handshake Headers: `Content-Type`, `Authorization`, `x-rpr-client-id`, `X-Forensic-Marker`  
- Response Contract: Returns `text`, `Interaction_ID`, and canonical substrate markers (`region`, `status`, `timestamp`) for forensic traceability.

---

## 🛠️ 2. DEPLOYMENT PROTOCOL

Deployment executed from the Firebase Functions project root:

```bash
firebase deploy --only functions:ollieChat --project rpr-corporate-site
```

---

## 📊 3. FORENSIC AUDIT (PROBABILITY: 1.0)

Verification of the live endpoint:  
`https://asia-southeast1-rpr-corporate-site.cloudfunctions.net/ollieChat`

| Check             | Expected                                          | Status        |
|-------------------|---------------------------------------------------|--------------|
| OPTIONS (Preflight) | `204 No Content` (`Access-Control-Max-Age: 3600`) | ✅ VERIFIED   |
| POST (Payload)    | `200 OK`                                         | ✅ VERIFIED   |
| Response Shape    | JSON `{ text, Interaction_ID, region, status, timestamp }` | ✅ VERIFIED |
| CORS Origin       | `https://rprcomms.com`                            | ✅ VERIFIED   |

---

## 🧪 4. REGRESSION CHECK

To re-verify substrate integrity, run the health probe from the Harbor A repo root:

```bash
bash scripts/devops/verify-ollie-cors.sh
```

---

## 🧭 5. BROWSER AUDIT PROTOCOL

Perform the final clinical check at the Mothership surface:

1. Open `https://rprcomms.com/`.  
2. Open DevTools → Network and filter for `ollieChat` or the function URL.  
3. Trigger **Ask Ollie**.  
4. Confirm:
   - OPTIONS returns `204` (preflight check passes).  
   - POST returns `200` (data ingestion successful).  
   - Response payload contains a valid `Interaction_ID` and `status: "LATCHED"`.

---

Audit Marker: `OLLIE-BACKEND-STRIKE-v1.5.2-LATCHED`  
Reference: `AGENT-HANDOVER-v1.4.0-LOCKED`  
DOC_AUTHORITY // OVERWATCH SG-CANONICAL-2026