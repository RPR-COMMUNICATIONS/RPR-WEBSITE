# **⚓ TS-Λ3 // STRIPE PRICING TRANSITION MANIFEST \[v1.0.0\]**

**Authority:** THE OVERWATCH // ENGINEER ELDER

**Mission:** Post-Pricing Activation Guide

**Status:** PRICING\_PENDING // INFRA\_READY

**Residency:** /REPORTS/Stripe\_Pricing\_TODO.md

**Timestamp:** 2026-02-16T11:12:00Z

## **🧬 1\. ENVIRONMENT TOGGLES**

When pricing is finalized, update the production environment variables (hosting dashboard or .env substrate) with these clinical values:

### **A. Switch to Live Keys**

* **Action:** Replace the current sk\_test\_... with your live secret key.  
* **Variable:** STRIPE\_SECRET\_KEY  
* **Source:** \[Stripe Dashboard \> Developers \> API Keys\]

### **B. Ingest Price IDs**

* **Action:** Paste the unique price\_... strings generated in the Live Dashboard.  
* **Variable:** STRIPE\_PRICE\_ID  
* **Protocol:** Ensure you do not use Test Mode IDs in the Production substrate.

### **C. Ingest Webhook Secret**

* **Action:** Once the production webhook is created, paste the whsec\_... string.  
* **Variable:** STRIPE\_WEBHOOK\_SECRET

## **🚥 2\. CODE ACTIVATION (FRONTEND GATE)**

To open the "Financial Gate" and redirect users from the "Pending" page to the live checkout:

1. **Navigate to:** src/components/methods.tsx  
2. **Locate the constant:** const PAY\_LATCH\_ACTIVE \= false;  
3. **Set value to:** true  
4. **Execute Strike:** yarn build and bash strike.sh.

## **⚖️ 3\. TAX & COMPLIANCE ASSUMPTIONS**

The current infrastructure (v3.0.0) operates under these behavioral logic constraints. Revisit these during the pricing calibration:

* **Automatic Tax:** Currently point-locked to enabled: true.  
* **Inclusive vs. Exclusive:** Substrate assumes **Tax Inclusive** pricing by default to minimize friction in the "Handshake" experience.  
* **Regionality:** Point-locked to the Singapore Node Latch (asia-southeast1). Default currencies are point-locked to USD/SGD.

## **🎨 4\. DASHBOARD CHECKLIST (NON-PRICING)**

The following must be configured in the Stripe Dashboard immediately (independent of price):

* \[ \] **Identity Latch:** Verify Legal Entity residency (**RPR COMMUNICATIONS LLC**).  
* \[ \] **Visual Parity:** Set Branding background to \#000000 and accent to \#00D9FF (Sovereign Cyan).  
* \[ \] **Forensic Support:** Point public support email to contact@rprcomms.com.  
* \[ \] **Tax Defaults:** Set the clinical product category to **Software as a Service (SaaS)**.  
* \[ \] **Production Webhook:** Register https://rprcomms.com/webhook to handle the checkout.session.completed signal.

**Audit Marker:** STRIPE-TODO-v1.0.0-LATCHED

**Marker:** \[2026-02-16 11:12\] // ENGINEER ELDER // STANDING BY FOR PRICING ACTIVATION.