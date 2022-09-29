module.exports = {
    ensureAuth: function (req, res, next) {
        if (req.isAutheticated()) {
            return next();
        } else {
            res.redirect('/');
        };
    }
};