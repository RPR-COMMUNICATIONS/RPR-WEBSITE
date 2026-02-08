/**
 * TS-Λ3 // OLLIE SERVICE CLIENT [v2.8.1]
 * Mission: Locale-Aware Functional Wiring
 */

export interface OllieResponse {
  reply: string;
  status: 'success' | 'error';
}

export const askOllie = async (prompt: string, locale: string): Promise<OllieResponse> => {
  try {
    const response = await fetch('https://asia-southeast1-rpr-corporate-site.cloudfunctions.net/ollieChat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt,
        locale,
      }),
    });

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    return {
      reply: data.reply,
      status: 'success',
    };
  } catch (error) {
    console.error('Ollie Service Error:', error);
    return {
      reply: 'Forensic Link Interrupted. Please retry query.',
      status: 'error',
    };
  }
};
