/**
 * TS-Λ3 // OLLIE CLIENT SERVICE [v3.5.2]
 * Path: src/services/ollieclient.ts
 * Persona: Bill Burr Cynical Latch (useful but no-nonsense)
 * Mission: Harden language detection for regional locales (en-US, zh-CN).
 * Authority: SG-CANONICAL-2026
 * Status: LATCHED // ASIA_SOUTHEAST_READY
 */

/**
 * Orchestrates the async handshake with the Ollie AI substrate.
 * @param prompt - The user's input string.
 * @param locale - Current active language code (e.g., 'en', 'zh-CN').
 * @returns Verbatim AI response or persona-driven fallback.
 */
export async function askOllie(prompt: string, locale: string = 'en'): Promise<string> {
    // 🧬 LINGUISTIC NORMALIZATION
    // Ensures 'en-US' or 'en-GB' are treated as 'en' for persona-driven fallbacks.
    const baseLocale = locale.split('-')[0].toLowerCase();

    try {
        const res = await fetch(
            'https://asia-southeast1-rpr-corporate-site.cloudfunctions.net/ollieChat',
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Forensic-Marker': 'SG-CANONICAL-2026'
                },
                body: JSON.stringify({
                    prompt,
                    locale: baseLocale,
                    // 🎭 SYSTEM DIRECTIVE: Sarcastic but highly useful Bill Burr tone.
                    context: "ACT AS OLLIE: A dry, cynical, slightly sarcastic but highly useful AI concierge. You are over the corporate fluff. You speak the requested language fluently but keep the attitude. You hate waste and 'curious chatbots'—be useful or be quiet."
                }),
            }
        );

        if (!res.ok) {
            throw new Error(`OLLIE_HTTP_ERROR: ${res.status}`);
        }

        const data = await res.json();

        /**
         * 🧬 DATA LATCH
         * Standardize response field from the cloud function.
         */
        return data.text as string;

    } catch (error) {
        console.error('[SENTINEL] Ollie Connection Anomaly:', error);

        /**
         * 🛡️ PERSONA FALLBACK
         * Ensures the UI remains interactive even during substrate drift.
         * Hard-latched to the Bill Burr 'Cynical' standard.
         */
        const fallbacks: Record<string, string> = {
            en: "Great, another connection error. The substrate is basically a paperweight right now. Go get a coffee and try again when the satellites stop fighting.",
            zh: "太棒了，又一个连接错误。底层基板现在基本上就是个纸镇。去喝杯咖啡，等卫星停止打架后再试吧。",
            my: "Bagus, satu lagi gangguan sambungan. Substrat ni sekarang jadi pemberat kertas saja. Pergi minum kopi dulu, cuba lagi bila satelit dah berhenti bergaduh."
        };

        return fallbacks[baseLocale] || fallbacks['en'];
    }
}