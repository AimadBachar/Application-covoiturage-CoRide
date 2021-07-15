const Travel = require("../app/models/Travel");
const {
    expect
} = require("chai");


//tests unitaires pour le model Travel
describe("Travel model", function () {
    describe("#findAll()", async function () {

        let results;

        before(async function () {
            results = await Travel.findAll();
        })


        it("should return an array", function () {
            expect(results).to.be.a("array");
        });
        it("should return an object in array", function () {
            expect(results[0]).to.be.a("object");
        });
        it("should return an instance of Travel", function () {
            expect(results[0] instanceof Travel).to.be.equal(true);
        })
    });

    describe("#findOne(id)", async function () {

        let result;

        const id = 1;

        before(async function () {
            result = await Travel.findOne(id);
        })

        it("should return an object", function () {
            expect(result).to.be.a("object");
        });
        it("should return an instance of User", function () {
            expect(result instanceof Travel).to.be.equal(true);
        })
    })

})