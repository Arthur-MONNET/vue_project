
'use strict';
module.exports = function(app) {
    var userHandlers = require('../controllers/userController.js');
    // todoList Routes
    app.route('/tasks')
        .post(userHandlers.loginRequired, userHandlers.profile);
    app.route('/auth/register')
        .post(userHandlers.sign_in);
   app.route('/auth/login')
        .post(userHandlers.login);
};