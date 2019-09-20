const router = require('express').Router();

const Users = require('../users/users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', (req, res) => {
	// let loggedInDept = Users.findDepartment(req.user.username);
	Users.find()
		.then(users => {
			res.status(200).json({ users });
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({ error: 'Could not retrieve users' })
		});
});

router.delete('/:id', (req, res) => {
	const { id } = req.params;

	Users.remove(id)
		.then(deleted => {
			if (deleted) {
				res.json({ removed: deleted });
			} else {
				res.status(404).json({ message: 'Could not find user' })
			}
		})
		.catch(err => {
			res.status(500).json({ message: 'Could not delete user' })
		});
});

module.exports = router;