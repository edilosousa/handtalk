import request from 'supertest';
import app from '../app';

describe('POST /collect', () => {
  it('should return 200 for valid request', async () => {
    const response = await request(app)
      .post('/collect')
      .set('x-access-token', 'token1')
      .send({
        device: 'desktop',
        os: 'windows',
        domain: 'domain1.com',
        themeChanges: 3
      });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('Data collected successfully');
  });

  it('should return 403 for invalid token', async () => {
    const response = await request(app)
      .post('/collect')
      .set('x-access-token', 'invalid_token')
      .send({
        device: 'desktop',
        os: 'windows',
        domain: 'domain1.com',
        themeChanges: 3
      });

    expect(response.status).toBe(403);
    expect(response.body.error).toBe('Unauthorized');
  });
});
