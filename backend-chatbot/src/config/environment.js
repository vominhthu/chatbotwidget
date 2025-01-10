import dotenv from 'dotenv';
dotenv.config();

export default {
    APP_PORT: process.env.APP_PORT,
    APP_HOST: process.env.APP_HOST,
    REDIS: {
        HOST: process.env.REDIS_HOST,
        PORT: process.env.REDIS_PORT
    },
    GEMINI: {
        API_KEY: process.env.GEMINI_API_KEY,
    }
}