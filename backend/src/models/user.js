const mysql = require('../config/db');

const User = function(user) {
    this.name = user.name;
    this.password = user.password;
    this.email = user.email;
    this.wallet = user.wallet;
    this.created_at = new Date();
};

User.create = function(newUser, result) {
    mysql.query("INSERT INTO user SET ?", newUser, function (err, res) {
        if (err) {
            console.log("error when create: ", err);
            result(err, null);
        } else {
            console.log("successfully create: ", res.insertId);
            result(null, res.insertId);
        }
    });
};

User.findById = function(userId, result) {
    mysql.query("SELECT id, name, password, email, wallet, DATE_FORMAT(created_at, '%Y-%m-%d %T') AS created_at, name FROM user WHERE id=?", userId, function(err, res) {
        if (err) {
            console.log("error when find by ID: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.findAll = function(result) {
    mysql.query("SELECT id, name, password, email, wallet, DATE_FORMAT(created_at, '%Y-%m-%d %T') AS created_at, name FROM user", function(err, res) {
        if (err) {
            console.log("error when find all: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

User.update = function(id, user, result) {
    mysql.query("UPDATE user SET email=?, password=?, name=? WHERE id=?",
                [user.email, user.password, user.name, user.firstname, id],
                function(err, res) {
                    if (err) {
                        console.log("error when update: ", err);
                        result(err, null);
                    } else {
                        result(null, res);
                    }
    });
};

User.delete = function(id, result) {
    mysql.query("DELETE FROM user WHERE id=?", id, function(err, res) {
        if (err) {
            console.log("error when delete: ", err);
            result(err, null);
        } else {
            result(null, res);
        }
    });
};

module.exports = User;