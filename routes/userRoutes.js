'use strict';

const User = require('../models/User');

module.exports = (router) => {
  router.get('/users', async (ctx) => {
    try {
      const users = await User.query();
      ctx.body = users;
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to fetch users' };
    }
  });
  router.post('/users', async (ctx) => {
    try {
      const user = await User.query().insertAndFetch(ctx.request.body);
      ctx.status = 201;
      ctx.body = { ...user };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to post user' };
    }
  });
  router.del('/users/:firstName', async (ctx) => {
    try {
      const user = await User.query().findOne({
        firstName: ctx.params.firstName,
      });
      if (user) {
        await User.query().deleteById(user.id);
        ctx.status = 200;
        ctx.body = { message: 'User deleted successfully' };
      } else {
        ctx.status = 404;
        ctx.body = { message: 'User not found' };
      }
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to delete user' };
    }
  });
};
