'use strict';

const assert = require('assert');

function InvalidTimeException() {
    this.name = "MinutesOverflow";
    this.message = "Minutes cannot be greater than 59"
}

function Time(time) {
    if (parseInt(time.split(":")[1]) > 59) {
        throw new InvalidTimeException();
    }
    this.hours = parseInt(time.split(":")[0]);
    this.minutes = time.split(":")[1] ? parseInt(time.split(":")[1]) : 0;
}
Time.prototype.add = function (timeObj) {
    this.hours += timeObj.hours;
    this.minutes += timeObj.minutes;
    this.hours += this.minutes >= 60 ? this.minutes / 60 : 0;
    this.minutes = this.minutes >= 60 ? this.minutes % 60 : this.minutes;
};
Time.prototype.toString = function () {
    return this.hours + ":" + this.minutes;
};

exports.time = Time;
