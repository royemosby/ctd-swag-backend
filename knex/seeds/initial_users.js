/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
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
  ]);
};
