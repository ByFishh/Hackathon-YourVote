const mysql = require("../config/db");

const Vote = function (event) {
    this.eventID = event.ID;
    this.eventName = event.name;
    this.participant = event.participant;
};

Vote.create = function (eventUser, result) {

}