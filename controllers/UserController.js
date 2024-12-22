'use strict';

const User = require('../models/User');

class UserController {
  static async getAllUsers(ctx) {
    try {
      const users = await User.query();
      ctx.body = users;
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to fetch users' };
    }
  }

  static async getUserById(ctx) {
    try {
      const user = await User.findById(ctx.params.id);
      ctx.status = 200;
      ctx.body = user;
    } catch (err) {
      ctx.status = 404;
      ctx.body = { error: 'No user found for that id' };
    }
  }

  static async getUserByEmail(ctx) {
    try {
      const user = await User.findByEmail(ctx.params.email);
      ctx.status = 200;
      ctx.body = user;
    } catch (err) {
      ctx.status = 404;
      ctx.body = { error: 'No user found for that email' };
    }
  }

  static async createUser(ctx) {
    try {
      const user = await User.query().insertAndFetch(ctx.request.body);
      ctx.status = 201;
      ctx.body = { ...user };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to post user' };
    }
  }

  static async deleteUserByFirstName(ctx) {
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
  }
}

module.exports = UserController;
