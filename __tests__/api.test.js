const request = require('supertest');
const { app, server } = require('../Server'); // Import both app and server

describe('GET /api/data', () => {
  it('should return a JSON response with a message', async () => {
    const response = await request(app).get('/api/data');
    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('message');
    expect(response.body.message).toBe('Hello from the API!');
  });
});
describe('GET /api/data/new', () => {
    it('should return a JSON response with a message new', async () => {
      const response = await request(app).get('/api/data/new');
      expect(response.status).toBe(200); // Check for 200 status
      expect(response.body).toHaveProperty('message');
      expect(response.body.message).toBe('Hello from the newGetApi!');
    });
  });
  
// Close the server after all tests are done
afterAll((done) => {
  server.close(done); // Close the server after all tests
});
