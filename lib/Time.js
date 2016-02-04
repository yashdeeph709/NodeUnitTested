'use strict';

const assert = require('assert');


function Time(time) {
    if (parseInt(time.split(":")[1]) > 59) {
        console.log("minutes cannot be bigger than 59")
    }
    this.hours = parseInt(time.split(":")[0]);
    if (time.split(":")[1]) {
        var actualMinute = time.split(":")[1].length === 1 ? time.split(":")[1] + "0" : time.split(":")[1];
    }
    this.minutes = time.split(":")[1] ? parseInt(actualMinute) : 0;
}
Time.prototype.add = function (timeObj) {
    this.hours += timeObj.hours;
    this.minutes += timeObj.minutes;
    this.hours += this.minutes >= 60 ? Math.round(this.minutes / 60) : 0;
    this.minutes = this.minutes >= 60 ? this.minutes % 60 : this.minutes;
};

module.exports = Time;
