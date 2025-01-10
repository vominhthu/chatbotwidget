
import { createClient } from 'redis';
import env from '~/config/environment';

const redisClient = createClient({
    url: `redis://${env.REDIS.HOST}:${env.REDIS.PORT}`,
});

redisClient.on("connect", () => {
    console.log("Connected to Redis")
});

redisClient.on('error', (err) => {
    console.error('Redis connection error: ', err);
});

redisClient.connect();

export default redisClient;