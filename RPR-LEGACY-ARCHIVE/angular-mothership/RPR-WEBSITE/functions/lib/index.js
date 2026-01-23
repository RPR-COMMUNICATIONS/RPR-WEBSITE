"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ollieChat = void 0;
const functions = require("firebase-functions/v2");
const generative_ai_1 = require("@google/generative-ai");
const params_1 = require("firebase-functions/params");
const GEMINI_API_KEY = (0, params_1.defineSecret)("GEMINI_API_KEY");
exports.ollieChat = functions.https.onRequest({
    secrets: [GEMINI_API_KEY],
    region: "asia-southeast1",
    cors: true
}, async (req, res) => {
    const genAI = new generative_ai_1.GoogleGenerativeAI(GEMINI_API_KEY.value());
    const model = genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
        systemInstruction: "You are Ollie, the cynical strategiest for RPR. Provide forensic truth with biting efficiency."
    });
    try {
        const { prompt } = req.body;
        const result = await model.generateContent(prompt);
        res.status(200).send({ text: result.response.text() });
    }
    catch (error) {
        res.status(500).send({ text: "Ollie's busy. Try later." });
    }
});
//# sourceMappingURL=index.js.map