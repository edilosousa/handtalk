import request from 'supertest';
import app from '../app';

describe('GET /list', () => {
  it('should return 200 and list of extractions', async () => {
    const response = await request(app)
      .get('/list')
      .query({ token: 'token1' });

    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
  });
});
