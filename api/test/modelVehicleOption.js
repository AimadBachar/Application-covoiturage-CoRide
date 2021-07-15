const VehicleOption = require("../app/models/VehicleOption");
const {
    expect
} = require("chai");


//tests unitaires pour le model Vehicle option
describe("Vehicle_option model", function () {
    describe("#findAll()", async function () {

        let results;

        before(async function () {
            results = await VehicleOption.findAll();
        })


        it("should return an array", function () {
            expect(results).to.be.a("array");
        });
        it("should return an object in array", function () {
            expect(results[0]).to.be.a("object");
        });
        it("should return an instance of VehicleOption", function () {
            expect(results[0] instanceof VehicleOption).to.be.equal(true);
        })
    });

    describe("#findOne(id)", async function () {

        let result;

        const id = 1;

        before(async function () {
            result = await VehicleOption.findOne(id);
        })

        it("should return an object", function () {
            expect(result).to.be.a("object");
        });
        it("should return an instance of VehicleOption", function () {
            expect(result instanceof VehicleOption).to.be.equal(true);
        })
    })

})