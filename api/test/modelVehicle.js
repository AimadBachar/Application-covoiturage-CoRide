const Vehicle = require("../app/models/Vehicle");
const {
    expect
} = require("chai");


//tests unitaires pour le model Vehicle
describe("Vehicle model", function () {
    describe("#findAll()", async function () {

        let results;

        before(async function () {
            results = await Vehicle.findAll();
        })


        it("should return an array", function () {
            expect(results).to.be.a("array");
        });
        it("should return an object in array", function () {
            expect(results[0]).to.be.a("object");
        });
        it("should return an instance of Vehicle", function () {
            expect(results[0] instanceof Vehicle).to.be.equal(true);
        })
    });

    describe("#findOne(id)", async function () {

        let result;

        const id = 1;

        before(async function () {
            result = await Vehicle.findOne(id);
        })

        it("should return an object", function () {
            expect(result).to.be.a("object");
        });
        it("should return an instance of Vehicle", function () {
            expect(result instanceof Vehicle).to.be.equal(true);
        })
    })

})