```markdown
# ⚓ TS-Λ3 // OLLIE CHAT CORS FIX [v1.0.0]

**Date:** 2026-02-18  
**Role:** Engineer / Functions & CI  
**Region:** asia-southeast1 (Singapore)  
**Project:** rpr-corporate-site  
**Status:** 🟢 LATCHED  

---

## 🧬 1. IMPLEMENTATION DETAILS

The `ollieChat` Cloud Function has been hardened to resolve preflight (OPTIONS) anomalies and enforce strict origin-based access control for the Harbor A substrate.

- **Function Name:** `ollieChat`  
- **Function Path:** `functions/src/index.ts`  
- **Firebase Project:** `rpr-corporate-site`  
- **Region:** `asia-southeast1`  

**CORS Configuration**

- **Allowlist (origins):**  
  - `http://localhost:5173`  
  - `https://rprcomms.com`  

- **Allowed Methods:**  
  - `POST`  
  - `OPTIONS`  

- **Allowed Headers:**  
  - `Content-Type`  
  - `X-Forensic-Marker`  
  - `Authorization`  

**Error Topology**

- All error paths (including `catch` blocks) now return a structured JSON shape:  
  ```json
  { "text": "..." }
  ```  
- This satisfies the ingestion contract required by `src/services/ollieclient.ts` in the Harbor A frontend.

---

## 🛠️ 2. DEPLOYMENT STRIKE

Execute from the **functions** directory of the Firebase project:

```bash
firebase deploy --only functions:ollieChat --region asia-southeast1
```

**Deployment Expectations**

- Target: `asia-southeast1`  
- Function: `ollieChat`  
- Deployment completes without error before any acceptance checks are considered valid.

---

## 📊 3. VERIFICATION RESULTS (INITIAL STRIKE)

**Preflight (OPTIONS)**

- **Request:**  
  - Method: `OPTIONS`  
  - Headers:  
    - `Origin: https://rprcomms.com`  
    - `Access-Control-Request-Method: POST`  
    - `Access-Control-Request-Headers: X-Forensic-Marker`  
- **Expected / Observed:**  
  - Status: `204` (acceptable: `200` or `204`)  
  - `Access-Control-Allow-Origin` present and set to the requesting origin when it is in the allowlist.

**POST (Payload Ingestion)**

- **Request:**  
  - Method: `POST`  
  - Headers:  
    - `Origin: https://rprcomms.com`  
    - `Content-Type: application/json`  
    - `X-Forensic-Marker: SG-CANONICAL-2026`  
  - Body:  
    ```json
    { "prompt": "Forensic Ping", "locale": "en" }
    ```  
- **Expected / Observed:**  
  - Status: `200`  
  - Response JSON contains a `text` field:  
    ```json
    { "text": "..." }
    ```

**Forbidden Origin Behaviour**

- When the `Origin` header is set to a value **outside** the allowlist, the function returns a **403 FORBIDDEN** and does not expose sensitive headers.

---

## 🧪 4. REGRESSION CHECK (HARBOR A HEALTH PROBE)

A dedicated regression harness is provided to ensure zero-drift for the ollieChat CORS substrate.

- **Script Path (repo-relative):**  
  `scripts/devops/verify-ollie-cors.sh`  

- **Usage:**

From the Harbor A repo root:

```bash
bash scripts/devops/verify-ollie-cors.sh
```

**Script Behaviour**

1. **OPTIONS Probe**
   - Sends an `OPTIONS` request to  
     `https://asia-southeast1-rpr-corporate-site.cloudfunctions.net/ollieChat`  
     with `Origin`, `Access-Control-Request-Method`, and `Access-Control-Request-Headers`.  
   - Treats HTTP `200` or `204` as success; any other status causes a non-zero exit.

2. **POST Probe**
   - Sends a `POST` request with JSON body  
     `{ "prompt": "Forensic Ping", "locale": "en" }`  
     and verifies the response JSON contains a `text` field.  
   - On failure (no `text` field or invalid JSON), exits non-zero and prints the raw response.

**Acceptance Criteria**

- Script exits with code `0`.  
- Console output confirms:
  - `[1/2]` OPTIONS handshake ✅  
  - `[2/2]` POST payload ingestion ✅  

---

## 🧭 5. HARBOR A INTEGRATION NOTES

- The Harbor A frontend (`RPR-WEBSITE`) should now be able to call `ollieChat` from:
  - `npm run dev` → `http://localhost:5173`  
  - Production → `https://rprcomms.com`  
- Any CORS errors in the browser console are now treated as **regressions** and must be investigated with:
  - This ops log, and  
  - `scripts/devops/verify-ollie-cors.sh` before any further changes.

---

**Audit Marker:** `OLLIE-CORS-v1.0.0-LOCKED`  
**DOC_AUTHORITY:** OVERWATCH // SG-CANONICAL-2026  
```