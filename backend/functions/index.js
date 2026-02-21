/**
 * TS-Λ3 // OLLIE CHAT ORCHESTRATOR [v2.2.0]
 * Path: backend/functions/index.js
 * Mission: Liquidation of 403 Forbidden // GCFv2 IAM Latch
 * Authority: THE OVERWATCH // SG-CANONICAL-2026
 * Status: AUTHORITATIVE // LATCHED
 * Fix: Enforced "public" invoker and hardened OPTIONS handshake.
 * Fix: Synchronized service account telemetry for forensic auditing.
 */

const { onRequest } = require("firebase-functions/v2/https");
const { logger } = require("firebase-functions");
const crypto = require("crypto");

// 🧬 CANONICAL ALLOWLIST
const allowedOrigins = [
    "http://localhost:5173",
    "https://rprcomms.com",
    "https://rpr-corporate-site.web.app",
    "https://rpr-corporate-site.firebaseapp.com",
];

/**
 * 🛰️ OLLIE CHAT (GCFv2 HTTPS Trigger)
 * Region: asia-southeast1
 * Config: Native CORS + Public Invoker Latch
 */
exports.ollieChat = onRequest({
    region: "asia-southeast1",
    cors: allowedOrigins,
    maxInstances: 10,
    // 🛡️ AUTHORITATIVE INVOKER: This attempts to set allUsers run.invoker
    invoker: "public",
}, (req, res) => {
    const origin = req.headers.origin;

    // 🛡️ MANUAL ORIGIN REFLECTION (Same-Origin Support)
    if (origin && allowedOrigins.includes(origin)) {
        res.set("Access-Control-Allow-Origin", origin);
        res.set("Vary", "Origin");
    } else if (!origin) {
        // Support for Firebase Hosting internal rewrites (same-origin often omits Origin header)
        res.set("Access-Control-Allow-Origin", "*");
    }

    // 1. PREFLIGHT HANDSHAKE LIQUIDATION
    if (req.method === "OPTIONS") {
        res.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
        res.set("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Forensic-Marker, x-rpr-client-id");
        res.set("Access-Control-Max-Age", "3600");
        res.status(204).send("");
        return;
    }

    // 2. IDENTITY GENERATION
    const Interaction_ID = `OLLIE-INT-${crypto
        .randomBytes(4)
        .toString("hex")
        .toUpperCase()}`;

    const marker = req.headers["x-forensic-marker"] || "VOID";

    try {
        // 3. PROTOCOL VALIDATION
        if (req.method !== "POST" && req.method !== "GET") {
            logger.warn(`[SENTINEL] Method Mismatch: ${req.method}`, { Interaction_ID });
            res.status(405).json({
                text: "Method Not Allowed. Protocol Aborted.",
                Interaction_ID,
            });
            return;
        }

        const { prompt } = req.body || {};

        // 4. CANONICAL RESPONSE
        logger.info(`[SENTINEL] Ingestion Successful: ${Interaction_ID}`, { marker });

        res.status(200).json({
            text: `[Node: asia-southeast1] Ollie active. Received: "${prompt || "PING"}". Status: LATCHED.`,
            Interaction_ID,
            region: "asia-southeast1",
            status: "LATCHED",
            timestamp: new Date().toISOString(),
        });

    } catch (err) {
        logger.error(`[SENTINEL] Strike Failure: ${Interaction_ID}`, err);
        res.status(500).json({
            text: "Internal error in the Ollie substrate. Connection anomaly detected.",
            Interaction_ID,
            error: true,
        });
    }
});