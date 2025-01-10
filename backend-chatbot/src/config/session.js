import { RedisStore } from 'connect-redis';
import redisClient from '~/config/redisClient';

export const sessionConfig = {
    store: new RedisStore({
        client: redisClient,
        prefix: 'sess:chatbot:',
    }),
    secret: 'chatbot-secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 24 * 60 * 60 * 1000 }
}
