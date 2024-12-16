require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    useNullAsDefault: true,
    connection: {
      host: '127.0.0.1',
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      password: process.env.PASSWORD,
      charset: 'utf8',
    },
    migrations: {
      directory: __dirname + '/knex/migrations',
    },
    seeds: {
      directory: __dirname + '/knex/seeds',
    },
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'example',
    },
    pool: {
      min: 2,
      max: 10,
    },
  },
};
