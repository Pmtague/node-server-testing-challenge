const request = require('supertest');

const server = require('../api/server.js');

describe('users-router.js', () => {
	describe('GET /api/users', () => {
		it('returns 200 OK', () => {
			return request(server)
				.get('/api/users')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it("returns JSON", done => {
			request(server)
				.get('/api/users')
				.then(res => {
					expect(res.type).toMatch(/json/i);
					done();
				});
		});
	});

	describe('DELETE /api/users/:id', () => {
		it('returns 200 OK', () => {
			return request(server)
				.delete('/api/users/1')
				.then(res => {
					expect(res.status).toBe(200);
				});
		});

		it("returns JSON", done => {
			request(server)
				.delete('/api/users/1')
				.then(res => {
					expect(res.type).toMatch(/json/i);
					done();
				});
		});
	});
});