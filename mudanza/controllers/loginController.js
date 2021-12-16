let loginController = {
    login: function(req, res) {
        res.render('login');
    },
    wrongUser: function(req, res) {
        res.render('login-wrong-user');
    },
    userNotFound: function(req, res) {
        res.render('login-user-not-found');
    }
}

module.exports = loginController;