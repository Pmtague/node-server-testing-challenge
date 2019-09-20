const request = require('supertest');

const server = require('../api/server.js');

describe('auth-router.js', () => {
	describe('POST /api/auth/register', () => {
		it('returns 201 CREATED', () => {
			return request(server)
				.post('/api/auth/register')
				.send({ username: 'jane', password: 'tague', department: 'finance' })
				.then(res => {
					expect(res.status).toBe(201);
				});
		});

		it('returns JSON', done => {
			request(server)
				.post('/api/auth/register')
				.send({ username: 'jane', password: 'tague', department: 'finance' })
				.then(res => {
					expect(res.type).toMatch(/json/i);
					done();
				});
		});
	});
});