/**
 * TS-Λ3 // OLLIE CHAT SPECIALIST [v1.5.2]
 * Path: backend/functions/olliechat.js
 * Mission: Hardened Forensic HTTPS Strike // CORS Handshake v2
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: LATCHED // SURGICALLY_TIGHT
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
    optionsSuccessStatus: 204
});

/**
 * 🛰️ OLLIE CHAT (HTTPS Trigger)
 * Region: asia-southeast1
 */
export const ollieChat = functions
    .region("asia-southeast1")
    .https.onRequest((req, res) => {
        return corsHandler(req, res, async () => {

            // 1. PREFLIGHT HANDSHAKE (OPTIONS)
            if (req.method === "OPTIONS") {
                res.set("Access-Control-Max-Age", "3600");
                res.status(204).send("");
                return;
            }

            // 2. IDENTITY GENERATION
            const Interaction_ID = `OLLIE-INT-${crypto.randomBytes(4).toString("hex").toUpperCase()}`;
            const marker = req.headers["x-forensic-marker"] || "VOID";

            try {
                // 3. PROTOCOL VALIDATION
                if (req.method !== "POST" && req.method !== "GET") {
                    res.status(405).json({
                        text: "Method Not Allowed. Protocol Aborted.",
                        Interaction_ID
                    });
                    return;
                }

                const { prompt, locale } = req.body;

                // 4. CANONICAL RESPONSE
                // Shape required by src/services/ollieclient.ts
                res.status(200).json({
                    text: `[Node: asia-southeast1] Ollie active. received: "${prompt || 'PING'}". status: LATCHED.`,
                    Interaction_ID: Interaction_ID,
                    region: "asia-southeast1",
                    status: "LATCHED",
                    timestamp: new Date().toISOString()
                });

            } catch (err) {
                console.error(`[SENTINEL] Strike Failure: ${Interaction_ID}`, err);
                res.status(500).json({
                    text: "Internal error in the Ollie substrate. Connection anomaly detected.",
                    Interaction_ID: Interaction_ID,
                    error: true
                });
            }
        });
    });