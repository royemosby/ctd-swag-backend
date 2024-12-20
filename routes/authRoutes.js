'use strict';

const AuthController = require('../controllers/AuthController');

module.exports = (router) => {
  /**
   * User login.
   */
  router.post('/auth/login', AuthController.login);

  /**
   * User registration.
   */
  router.post('/auth/register', AuthController.register);
};
