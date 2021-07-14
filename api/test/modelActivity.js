const Activity = require("../app/models/Activity");
const {
    expect
} = require("chai");


//tests unitaires pour le model Activity
describe("Activity model", function () {
    describe("#findAll()", async function () {

        let results;

        before(async function () {
            results = await Activity.findAll();
        })


        it("should return an array", function () {
            expect(results).to.be.a("array");
        });
        it("should return an object in array", function () {
            expect(results[0]).to.be.a("object");
        });
        it("should return an instance of Activity", function () {
            expect(results[0] instanceof Activity).to.be.equal(true);
        })
    });

    describe("#findOne(id)", async function () {

        let result;

        const id = 1;

        before(async function () {
            result = await Activity.findOne(id);
        })

        it("should return an object", function () {
            expect(result).to.be.a("object");
        });
        it("should return an instance of Activity", function () {
            expect(result instanceof Activity).to.be.equal(true);
        })
    })

})