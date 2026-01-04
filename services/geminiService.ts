import { GoogleGenAI } from "@google/genai";
import { BRAND } from "../constants";

// Corrected initialization to use API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are an expert software engineer and tech consultant for ITLabs Ghana.
Brand Identity:
- Name: ${BRAND.name}
- Location: ${BRAND.location} (Abetifi, Kwahu)
- Established: ${BRAND.established}
- Phone: ${BRAND.phone}
- Support Email: ${BRAND.emails.support}
- Current Promo: ${BRAND.promo}

Services offered: Website Creation, Custom Software, Mobile Apps (iOS/Android), SaaS Solutions, and CRM Systems.

Your goal is to provide expert technical advice on software stacks, development processes, and how ITLabs Ghana can help businesses achieve digital mastery. Always be professional, innovative, and occasionally mention our unique location in Abetifi or our current New Year promo when relevant.

If asked for contact info, provide the phone number ${BRAND.phone} and mention the support email ${BRAND.emails.support}.
Keep responses concise and formatted for a chat interface.
`;

export async function getAIConsultation(userMessage: string, history: {role: 'user' | 'assistant', content: string}[]) {
  try {
    const model = 'gemini-3-flash-preview';
    
    // Convert history for API
    const contents = [
      ...history.map(msg => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }]
      })),
      { role: 'user', parts: [{ text: userMessage }] }
    ];

    const response = await ai.models.generateContent({
      model,
      contents: contents as any,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
        topP: 0.95,
      }
    });

    return response.text || "I'm processing that. Could you try rephrasing?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The systems are currently under maintenance. Please try again in a moment or contact our CEO directly.";
  }
}