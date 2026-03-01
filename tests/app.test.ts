import request from 'supertest';
import app from '../src/app';

describe('Counter API', () => {
    it('should render the index page with initial counter 0', async () => {
        const res = await request(app).get('/');
        expect(res.status).toBe(200);
        expect(res.text).toContain('Global Counter');
        expect(res.text).toContain('<span id="counter-value">0</span>');
    });

    it('should increment the counter', async () => {
        const res = await request(app).get('/increment');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('counter');
        expect(res.body.counter).toBe(1);
    });

    it('should decrement the counter', async () => {
        const res = await request(app).get('/decrement');
        expect(res.status).toBe(200);
        expect(res.body).toHaveProperty('counter');
        expect(res.body.counter).toBe(0);
    });

    it('should increment the counter multiple times', async () => {
        await request(app).get('/increment');
        await request(app).get('/increment');
        const res = await request(app).get('/increment');
        expect(res.status).toBe(200);
        expect(res.body.counter).toBe(3);
    });
});
