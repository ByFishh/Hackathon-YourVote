const mysql = require("../config/db");

const Vote = function (event) {
    this.eventName = event.name;
    this.participant = event.participant;
    this.end = event.end;
};

Vote.create = function (eventUser, result) {
    mysql.query("INSERT INTO vote SET `eventName`='" + eventUser.eventName + "', `eventParticipant`='" + JSON.stringify(eventUser.participant) + "', `end`='" + eventUser.end + "'", function (err, res) {
        if (err) {
            console.log("error when create: ", err);
            result(err, null);
        } else {
            console.log("successfully create: ", res.insertId);
            result(null, res.insertId);
        }
    });
}

Vote.findById = function (eventId, rs) {
    mysql.query("SELECT id, eventName, eventParticipant FROM vote WHERE id=?", eventId, function(err, res) {
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
    mysql.query("DELETE FROM vote WHERE id=?", eventId, function(err, res) {
        if (err) {
            console.log("error when find by ID: ", err);
            rs(err, null);
        } else {
            rs(null, res);
        }
    });
}

module.exports = Vote;