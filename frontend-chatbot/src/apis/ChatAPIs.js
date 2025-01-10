import axios from  'axios';
import environment from '~/config/environment';

const apiClient = axios.create({
    baseURL: environment.BACKEND_BASE_URL,
    withCredentials: true,
});

export const initChatSession = async () => {
    return await apiClient.get('/');
}