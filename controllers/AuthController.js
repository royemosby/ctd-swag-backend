'use strict';

const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CartItem = require('../models/CartItem');

class AuthController {
  static async login(ctx) {
    try {
      const { email, password } = ctx.request.body;
      const user = await User.findByEmail(email);

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

      const cartItems = await CartItem.findByUserId(user.id);
      ctx.status = 200;
      ctx.body = { message: 'Login successful', user, cartItems, token };
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

      ctx.status = 201;
      ctx.body = { ...user, token };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to register user' };
    }
  }

  static async logout(ctx) {
    try {
      ctx.status = 200;
      ctx.body = { message: 'Logout successful' };
    } catch (err) {
      ctx.status = 500;
      ctx.body = { error: 'Failed to logout user' };
    }
  }
}

module.exports = AuthController;
