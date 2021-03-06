const db = require('../data/db-config.js');

module.exports = {
	add,
	find,
	findBy,
	findById,
	findDepartment,
	remove,
};

function find() {
	return db('users').select('id', 'username', 'department');
};

function findBy(filter) {
	return db('users').where(filter);
};

async function add(user) {
	const [id] = await db('users').insert(user);
	
	return findById(id);
};

function findById(id) {
	return db('users')
		.where({ id })
		.first();
};

function findDepartment(username) {
	return db('users')
		.select('department')
		.where({username})
		.first();
};

function remove(id) {
	return db('users')
		.where({ id })
		.del();
};