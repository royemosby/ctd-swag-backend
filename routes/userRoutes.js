'use strict';

const UserController = require('../controllers/UserController');

module.exports = (router) => {
  /**
   * Fetch all users.
   */
  router.get('/users', UserController.getAllUsers);

  /**
   * Create a new user.
   */
  router.post('/users', UserController.createUser);

  /**
   * Delete a user by first name.
   */
  router.del('/users/:firstName', UserController.deleteUserByFirstName);
};
