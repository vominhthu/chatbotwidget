import request from 'supertest';
import server from '~/server';
import redisClient from '~/config/redisClient';

describe('ExpressJS API Tests', () => {
    afterAll(async () => {
        await redisClient.quit();
    });
    it('should return API status', async () => {
        const res = await request(server).get('/api/v1/healthz');
        expect(res.statusCode).toBe(200);
        expect(res.body).toEqual({ message: 'APIs V1 are ready to use' });
    });
});
