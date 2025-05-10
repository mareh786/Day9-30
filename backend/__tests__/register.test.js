import request from 'supertest';
import express from 'express';
import registerRoutes from '../routes/registerRoutes.js';

const app = express();
app.use(express.json());
app.use('/api/register', registerRoutes);

describe('POST /api/register', () => {
  it('should return 400 if required fields are missing', async () => {
    const res = await request(app).post('/api/register').send({});
    expect(res.statusCode).toEqual(400);
    expect(res.body.message).toBe('All fields are required.');
  });
});
