const request = require('supertest');
const Users = require('./users-model.js');
const db = require('../data/db-config.js');

describe('users model', () => {
	beforeEach(async () => {
		await db('users').truncate();
	});

	it('should set environment to testing', () => {
		expect(process.env.DB_ENV).toBe('testing');
	});

	describe('add()', () => {
		it('should insert users into the db', async () => {
			await Users.add({ username: 'janny', password: 'tague', department: 'finance' });
			await Users.add({ username: 'lanny', password: 'tague', department: 'finance' });

			let users = await db('users');

			expect(users).toHaveLength(2);
		});

		it('should insert users into the db', async () => {
			const { id } = await Users.add({ username: 'danny', password: 'tague', department: 'finance' });

			let user = await db('users')
				.where({ id })
				.first();

			expect(user.username).toBe('danny');
		});
	});
});