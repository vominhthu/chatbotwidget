import axios from  'axios';
import environment from '~/config/environment';

const apiClient = axios.create({
    baseURL: environment.BACKEND_BASE_URL,
    withCredentials: true,
});

export const initChatSession = async () => {
    const response = await apiClient.get('/api/v1/chat');
    return response.data;
}

export const sendMessage = async (userMessage) => {
    const response = await apiClient.post('/api/v1/chat', {
        message: userMessage,
    })
    return response.data;
}