const User = require('../models/user');

const bcrypt = require('bcryptjs');

exports.getAllUser = (req, res, next) => {
    User.findAll(function(err, users) {
        if (err) {
            res.status(500).json({ msg: "internal server error"});
        } else {
            if (users.length === 0) return res.status(404).json({ msg: "Not found"});
            res.status(200).json( users );
        }
    });
};

exports.getCurrentUser = (req, res, next) => {
    User.findById(req.params.id, function(err, user) {
        if (err) {
            res.status(500).json({ msg: "internal server error"});
        } else {
            if (user.length === 0) return res.status(404).json({ msg: "Not found"});
            res.status(200).json( user[0] );
        }
    });
};

exports.getWalletUser = (req, res, next) => {
    User.findByWallet(req.params.wallet, function(err, user) {
        if (err) {
            res.status(500).json({ msg: "internal server error"});
        } else {
            if (user.length === 0) return res.status(404).json({ msg: "Not found"});
            res.status(200).json( user[0] );
        }
    });
};

exports.editUser = (req, res, next) => {
    bcrypt.hash(req.body.password, 10).then(
        (hash) => {
            const newUser = new User({
                name: req.body.name,
                password: hash,
                email: req.body.email,
                wallet: req.body.wallet
            });
            User.update(req.params.id, newUser, function(err, edit) {
                if (err) {
                    res.status(500).json({ msg: "internal server error"});
                } else {
                    User.findById(req.params.id, function(err, user) {
                        if (err) {
                            res.status(500).json({ msg: "internal server error"});
                        } else {
                            if (user.length === 0) return res.status(404).json({ msg: "Not found"});
                            res.status(201).json( user[0] );
                        }
                    });
                }
            });
        }
    ).catch(() => res.status(500).json({ msg: "internal server error"}));
};

exports.deleteAccount = (req, res, next) => {
    User.delete(req.params.id, function(err, deleted) {
        if (err) {
            res.status(500).json({ msg: "internal server error"});
        } else {
            if (deleted.affectedRows === 0) return res.status(404).json({ msg: "Not found"});
            res.status(201).json({ msg: `successfully deleted record number: ${req.params.id}`});
        }
    });
};
