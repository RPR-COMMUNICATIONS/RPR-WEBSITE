import * as functions from "firebase-functions/v2";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { defineSecret } from "firebase-functions/params";
import * as corsLib from "cors";

const GEMINI_API_KEY = defineSecret("GEMINI_API_KEY");

// Define the RPR Perimeter Whitelist
const allowedOrigins = [
    "https://rprcomms.com",
    "https://verify.rprcomms.com",
    "https://rpr-corporate-site.web.app",
    "http://localhost:4200"
];

// Initialize the CORS handler with our whitelist
const cors = corsLib({
    origin: (origin, callback) => {
        // Allow requests with no origin (like mobile apps or curl) or those in our whitelist
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Perimeter Breach: Origin not authorized by RPR"));
        }
    }
});

export const ollieChat = functions.https.onRequest(
    {
        secrets: [GEMINI_API_KEY],
        region: "asia-southeast1"
    },
    async (req, res) => {
        // Wrap the logic in the CORS handler
        return cors(req, res, async () => {
            const genAI = new GoogleGenerativeAI(GEMINI_API_KEY.value());
            const model = genAI.getGenerativeModel({
                model: "gemini-1.5-flash",
                systemInstruction: "You are Ollie, the cynical forensic helper for RPR. Be brief and biting."
            });

            try {
                const { prompt } = req.body;
                const result = await model.generateContent(prompt);
                res.status(200).send({ text: result.response.text() });
            } catch (error: any) {
                console.error("Ollie Error:", error);
                res.status(500).send({ text: "Ollie is offline. Discrepancy detected." });
            }
        });
    }
);
