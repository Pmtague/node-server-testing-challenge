
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'penny', password: 'tague', department: 'finance' },
        {id: 2, username: 'jenny', password: 'tague', department: 'finance' },
        {id: 3, username: 'lenny', password: 'tague', department: 'marketing' },
        {id: 4, username: 'renny', password: 'tague', department: 'sales' },
        {id: 5, username: 'kenny', password: 'tague', department: 'sales' },
      ]);
    });
};
