'use strict';

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const CartItemController = require('./CartItemController');

class AuthController {
  static async login(ctx) {
    try {
      const { email, password } = ctx.request.body;
      const user = await User.query().findOne({ email: email.toLowerCase() });

      if (!user) {
        ctx.status = 401;
        ctx.body = { error: 'Invalid email or password' };
        return;
      }

      const validPassword = await bcrypt.compare(password, user.password);
      if (!validPassword) {
        ctx.status = 401;
        ctx.body = { error: 'Invalid email or password' };
        return;
      }

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });

      ctx.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set secure flag in production
        maxAge: 604800000, // 7 days
      });
      ctx.state.user = { userId: user.id };

      await CartItemController.getUserCartItems(ctx);
      //console.log(ctx.response);
      ctx.status = 200;
      ctx.body = { message: 'Login successful', user };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to authenticate user' };
    }
  }

  static async register(ctx) {
    try {
      const { email, password, firstName, lastName } = ctx.request.body;
      const hashedPassword = await bcrypt.hash(password, 10);

      const user = await User.query().insertAndFetch({
        email: email.toLowerCase(),
        password: hashedPassword,
        firstName,
        lastName,
      });

      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: '7d',
      });

      ctx.cookies.set('token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set secure flag in production
        maxAge: 604800000, // 7 days
      });

      ctx.status = 201;
      ctx.body = { ...user };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to register user' };
    }
  }
  static async logout(ctx) {
    try {
      ctx.cookies.set('token', '', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production', // Set secure flag in production
        maxAge: 0, // Expire the cookie immediately
      });
      ctx.status = 200;
      ctx.body = { message: 'Logout successful' };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to logout user' };
    }
  }
}

module.exports = AuthController;
