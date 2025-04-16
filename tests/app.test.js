const request = require('supertest');
const express = require('express');
const app = express();

app.get('/', (req, res) => res.status(200).send('Backend Running'));

test('GET / should return backend running', async () => {
  const res = await request(app).get('/');
  expect(res.statusCode).toBe(200);
  expect(res.text).toContain('Backend Running');
});