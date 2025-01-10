import dotenv from 'dotenv';
dotenv.config();

export default {
    APP_PORT: process.env.APP_PORT,
    APP_HOST: process.env.APP_HOST,
}