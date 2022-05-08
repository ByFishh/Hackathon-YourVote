const Vote = require('../models/vote');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require('../config/db');

function isEmpty(body) {
    for (const key in body) {
        if (Object.hasOwnProperty.call(body, key)) {
            if (body[key].length === 0) {
                return false;
            }
        }
    }
    return true;
};

exports.signup = (req, res, next) => {
    const validInput = isEmpty(req.body);
    if (!validInput) return res.status(400).json({ msg: "please provide all fields"});
    const newVote = new Vote({
        name: req.body.name,
        participant: req.body.participant,
        end: req.body.end
    });
    Vote.create(newVote, function(err, user) {
        if (err) {
            if (err.errno === 1062) {
                res.status(403).json({ msg: "vote already exists"});
            } else if (err.errno === 1048) {
                res.status(400).json({ msg: "please provide all fields"});
            } else {
                res.status(500).json({ msg: "internal server error"});
            }
        } else {
            res.status(201).json({
                message: "Success Event was created !"
            });
        }
    });
};

exports.login = (req, res, next) => {
    const validInput = isEmpty(req.body);
    if (!validInput) return res.status(400).json({ msg: "please provide all fields"});
    mysql.query("SELECT id, password FROM user WHERE email=?", req.body.email, function (err, email) {
        if (err) {
            console.log(err);
            res.status(500).json({ msg: "internal server error"});
        } else {
            if (email.length === 0) return res.status(403).json({ msg: "Invalid Credentials"});
            bcrypt.compare(req.body.password, email[0].password).then(
                (valid) => {
                    if (!valid) {
                        return res.status(403).json({ msg: "Invalid Credentials"});
                    }
                    res.status(200).json({
                        token: jwt.sign(
                            { userId: email[0].id },
                            process.env.SECRET,
                            { expiresIn: "24h"}
                        )
                    });
                }
            ).catch(() => res.status(500).json({ msg: "internal server error"}));
        }
    });
};
