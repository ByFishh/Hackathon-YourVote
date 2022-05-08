const mysql = require("../config/db");
const User = require("./user");

const Vote = function (event) {
    this.eventName = event.name;
    this.participant = event.participant;
    this.end = event.end;
};

Vote.create = function (eventUser, result) {
    let set = 0;
    mysql.query("INSERT INTO vote SET `eventName`='" + eventUser.eventName + "', `eventParticipant`='" + JSON.stringify(eventUser.participant) + "', `end`='" + eventUser.end + "'", function (err, res) {
        if (err) {
            console.log("error when create: ", err);
            if (set === 0)
                result(err, null);
            set = 1;
        } else {
            console.log("successfully create: ", res.insertId);
            for (let i = 0; i < eventUser.participant.length; i++) {

                User.findByWallet(eventUser.participant[i], function(err, user) {
                    if (err) {
                    } else {
                        if (user.length === 0) {
                        } else {
                            mysql.query("INSERT INTO link SET `userID`='" + user[0].id + "', `voteID`='" + res.insertId + "'", function (err, res) {
                                if (err) {
                                    console.log("error when create: ", err);
                                    if (set === 0)
                                        result(err, null);
                                    set = 1;
                                }
                            });
                        }
                    }
                });
            }
            if (set === 0)
                result(null, res.insertId);
        }
    });
}

Vote.findById = function (eventId, rs) {
    mysql.query("SELECT id, eventName, eventParticipant FROM vote WHERE `id`='" + eventId + "'", function(err, res) {
        if (err) {
            console.log("error when find by ID: ", err);
            rs(err, null);
        } else {
            rs(null, res);
        }
    });
}

Vote.findAll = function (rs) {
    mysql.query("SELECT id, eventName, eventParticipant FROM vote WHERE 1", function(err, res) {
        if (err) {
            console.log("error when find by ID: ", err);
            rs(err, null);
        } else {
            rs(null, res);
        }
    });
}

Vote.delete = function (eventId, rs) {
    mysql.query("DELETE FROM vote WHERE `id`='" + eventId + "'", function(err, res) {
        if (err) {
            console.log("error when find by ID: ", err);
            rs(err, null);
        } else {
            rs(null, res);
        }
    });
}

module.exports = Vote;