var expect = require("chai").expect;
var Time = require("../lib/time");

//assert.deepEqual(time1, new Time("13:42"));
describe("Time", function () {
    describe("#add()", function () {
        it("should add hours and minutes", function () {
            var time1 = new Time("12:22");
            var time2 = new Time("1:20");
            time1.add(time2);
            expect(time1).to.have.a.property("hours", 13);
            expect(time1).to.have.a.property("minutes", 42);
        });
        it("should add minutes if 0 starts", function () {
            var time1 = new Time("12:02");
            var time2 = new Time("1:04");
            time1.add(time2);
            expect(time1).to.have.a.property("hours", 13);
            expect(time1).to.have.a.property("minutes", 06);
        });
        it("should add minutes if cross min by 1", function () {
            var time1 = new Time("12:58");
            var time2 = new Time("1:04");
            time1.add(time2);
            expect(time1).to.have.a.property("hours", 14);
            expect(time1).to.have.a.property("minutes", 02);
        });
        it("should accept zero hours", function () {
            var time1 = new Time("00:22");
            var time2 = new Time("1");
            time1.add(time2);
            expect(time1).to.have.a.property("hours", 1);
            expect(time1).to.have.a.property("minutes", 22);
        });
        it("should accept one zero in minutes ", function () {
            var time1 = new Time("20:22");
            var time2 = new Time("1:0");
            time1.add(time2);
            expect(time1).to.have.a.property("hours", 21);
            expect(time1).to.have.a.property("minutes", 22);
        });
    });
});
