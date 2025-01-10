import { sendMessage  } from '~/config/gemini';

export const getGeminiMessage = async (history, userMessage) => {
    const responseText = await sendMessage(history, userMessage);
    const botMessage = responseText || 'Sorry!!! We cannot ...';
    return botMessage;
}
