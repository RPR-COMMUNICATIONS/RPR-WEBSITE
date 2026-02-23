/**
 * TS-Λ3 // OLLIE CHAT SPECIALIST [v1.5.4]
 * Path: backend/functions/olliechat.js
 * Mission: Path-Aware Handshake // 404 Liquidation
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Added explicit handlers for /api/ollieChat and /ollieChat paths 
 * to support direct Cloud Run rewrites from Firebase Hosting.
 */

import functions from 'firebase-functions';
import cors from 'cors';
import crypto from 'crypto';

// 🧬 CANONICAL ALLOWLIST
const allowedOrigins = [
    "http://localhost:5173",
    "https://rprcomms.com",
    "https://rpr-corporate-site.web.app",
    "https://rpr-corporate-site.firebaseapp.com"
];

const corsHandler = cors({
    origin: (origin, callback) => {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.warn(`[SENTINEL] BLOCKED_ORIGIN: ${origin}`);
            callback(new Error("CORS_POLICY_VIOLATION: Restricted Node Access"));
        }
    },
    methods: ["GET", "POST", "OPTIONS"],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "X-Forensic-Marker",
        "x-rpr-client-id"
    ],
    credentials: true,
    optionsSuccessStatus: 204
});

/**
 * 🛰️ OLLIE CHAT (HTTPS Trigger)
 * Region: asia-southeast1
 * Logic: Multi-path awareness for Hosting rewrites.
 */
export const ollieChat = functions
    .region("asia-southeast1")
    .https.onRequest((req, res) => {
        // 🛡️ AUTHORITATIVE HEADER LATCH
        const origin = req.headers.origin;
        if (allowedOrigins.includes(origin)) {
            res.set('Access-Control-Allow-Origin', origin);
            res.set('Vary', 'Origin');
        }

        return corsHandler(req, res, async () => {
            // 1. PREFLIGHT HANDSHAKE
            if (req.method === "OPTIONS") {
                res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
                res.status(204).send("");
                return;
            }

            // 🧬 PATH RESIDENCY CHECK
            // Support requests arriving at '/', '/ollieChat', or '/api/ollieChat'
            const Interaction_ID = `OLLIE-INT-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
            const requestPath = req.path;

            try {
                if (req.method !== "POST" && req.method !== "GET") {
                    res.status(405).json({ text: "Method Not Allowed.", Interaction_ID });
                    return;
                }

                // 2. DATA INGESTION
                const { prompt } = req.body || {};

                // 3. CANONICAL RESPONSE
                // We echo the path to verify the Hosting rewrite in the console logs.
                console.info(`[SENTINEL] Interaction Ingested: ${Interaction_ID} on path: ${requestPath}`);

                res.status(200).json({
                    text: `[Node: asia-southeast1] Ollie active. Path: ${requestPath}. Received: "${prompt || 'PING'}".`,
                    Interaction_ID,
                    region: "asia-southeast1",
                    status: "LATCHED",
                    timestamp: new Date().toISOString()
                });

            } catch (err) {
                console.error(`[SENTINEL] Strike Failure: ${Interaction_ID}`, err);
                res.status(500).json({
                    text: "Internal error in the Ollie substrate.",
                    Interaction_ID,
                    error: true
                });
            }
        });
    });