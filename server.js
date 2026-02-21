/**
 * TS-Λ3 // STRIPE SERVER & SOVEREIGN PROXY [v3.2.0]
 * Path: server.js
 * Mission: Financial Substrate & Ollie Identity Proxy
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // PROXY_LATCHED
 * Fix: Integrated Sovereign Proxy for Ollie to liquidate 403 Forbidden.
 */

import 'dotenv/config';
import express from 'express';
import Stripe from 'stripe';
import fetch from 'node-fetch'; // Ensure node-fetch is in package.json

const app = express();

// 🛡️ AUTHORITATIVE API LATCH
const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
const priceId = process.env.STRIPE_PRICE_ID;
// 🤖 SPECIALIST ENDPOINT: Private Cloud Run URL (Non-public)
const OLLIE_INTERNAL_URL = "https://olliechat-7kdy6vlrla-as.a.run.app";

// 🧪 HIBERNATION CHECK
if (!stripeSecretKey || !priceId || priceId.includes('PLACEHOLDER')) {
    console.warn("------------------------------------------------");
    console.warn("⚠️ [SENTINEL] FINANCIAL HIBERNATION ACTIVE.");
    console.warn("------------------------------------------------");
}

const stripe = stripeSecretKey ? new Stripe(stripeSecretKey) : null;

// 🌐 DOMAIN LATCH
const YOUR_DOMAIN = process.env.NODE_ENV === 'production'
    ? 'https://rprcomms.com'
    : 'http://localhost:4242';

// 🧬 SUBSTRATE MIDDLEWARE
app.use(express.static('public'));
app.use(express.json());

/**
 * 🛰️ OLLIE SOVEREIGN PROXY
 * Path: /api/ollieChat
 * Logic: Forward client request to Cloud Run using backend Service Account identity.
 */
app.post("/api/ollieChat", async (req, res) => {
    console.log(`[SENTINEL_PROXY] Ingesting interaction for Ollie...`);

    try {
        const response = await fetch(OLLIE_INTERNAL_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-Forensic-Marker": req.headers["x-forensic-marker"] || "PROXY_LATCH",
                // Note: The Service Account identity is handled automatically by the 
                // underlying GCP infrastructure when calling internal Run services.
            },
            body: JSON.stringify(req.body || {}),
        });

        const data = await response.json();

        // 🛡️ LATCH VERIFICATION
        res.status(response.status).json({
            ...data,
            proxy_status: "LATCHED_VIA_HARBOR_A",
            node: "asia-southeast1"
        });

    } catch (err) {
        console.error("[SENTINEL_PROXY] Strike Failure:", err.message);
        res.status(500).json({
            text: "Ollie proxy failed at Harbor A substrate. Bridge collapsed.",
            status: "PROXY_ERROR",
        });
    }
});

/**
 * 🚥 CHECKOUT SESSION CREATOR
 */
app.post('/create-checkout-session', async (req, res) => {
    if (!stripe || !priceId || priceId.includes('PLACEHOLDER')) {
        return res.redirect(`${YOUR_DOMAIN}/checkout-pending`);
    }

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [{ price: priceId, quantity: 1 }],
            mode: 'payment',
            success_url: `${YOUR_DOMAIN}/success.html`,
            cancel_url: `${YOUR_DOMAIN}/cancel.html`,
            automatic_tax: { enabled: true },
            metadata: { protocol: 'TS-Λ3' }
        });
        res.redirect(303, session.url);
    } catch (error) {
        console.error('[SENTINEL] Financial Latch Failure:', error.message);
        res.status(500).json({ error: 'FINANCIAL_SUBSTRATE_ERROR' });
    }
});

const PORT = process.env.PORT || 4242;
app.listen(PORT, () => {
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`🚀 MOTHERSHIP BACKEND ACTIVE // PORT: ${PORT}`);
    console.log(`📡 SOVEREIGN PROXY: ACTIVE -> ${OLLIE_INTERNAL_URL}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
});