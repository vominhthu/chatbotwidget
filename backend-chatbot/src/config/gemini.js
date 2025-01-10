import env  from '~/config/environment.js';
import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(env.GEMINI.API_KEY);

const generationConfig = {
    stopSequences: ["red"],
    maxOutputTokens: 200,
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
};
const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash", generationConfig, safetySettings });

export const sendMessage = async (history, message) => {
    const chat = await model.startChat({ history });
    let result = await chat.sendMessage(message);
    return result.response.text();
}
