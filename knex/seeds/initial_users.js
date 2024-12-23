const bcrypt = require('bcrypt');
/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert(await seedUsers());
};

const seedUsers = async () => {
  const users = [
    {
      firstName: 'Joe',
      lastName: 'Simpson',
      email: 'j.s@test.com',
      password: 'password1',
    },
    {
      firstName: 'Sarah',
      lastName: 'Wazinski',
      email: 's.w@test.com',
      password: 'password2',
    },
    {
      firstName: 'First',
      lastName: 'Last',
      email: 'dev@test.com',
      password: 'password123',
    },
  ];

  for (const user of users) {
    user.password = await bcrypt.hash(user.password, 10);
  }

  return users;
};
