const request = require('supertest');
const app = require('../app');
const db = require('../db');

beforeAll(done => {
  db.query('DELETE FROM entries', done); // clean slate before tests
});

afterAll(done => {
  db.end(done); // close DB connection
});

const testEntry = {
  name: 'John Doe',
  age: 30,
  visiting_to: 'Mr. Smith',
  in_time: '10:00',
  out_time: ''
};

describe('Register API Tests', () => {
  it('should create a new entry', async () => {
    const res = await request(app).post('/api/register').send(testEntry);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe('John Doe');
  });

  it('should fail to create a duplicate entry (same name, age, in_time)', async () => {
    const res = await request(app).post('/api/register').send(testEntry);
    expect(res.statusCode).toBe(400);
    expect(res.body.msg).toMatch(/Conflict/i);
  });

  it('should retrieve all entries', async () => {
    const res = await request(app).get('/api/entries');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should retrieve currently inside people (no out_time)', async () => {
    const res = await request(app).get('/api/inside');
    expect(res.statusCode).toBe(200);
    expect(res.body.some(e => e.name === 'John Doe')).toBeTruthy();
  });
});
