let loginController = {
    login: function(req, res) {
        res.render('users/login');
    },
    wrongUser: function(req, res) {
        res.render('users/login-wrong-user');
    },
    userNotFound: function(req, res) {
        res.render('users/login-user-not-found');
    }
}

module.exports = loginController;