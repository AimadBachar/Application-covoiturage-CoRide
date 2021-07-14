const User = require("../app/models/User");
const {
    expect
} = require("chai");


//tests unitaires pour le model User
describe("User model", function () {
    describe("#findAll()", async function () {

        let results;

        before(async function () {
            results = await User.findAll();
        })


        it("should return an array", function () {
            expect(results).to.be.a("array");
        });
        it("should return an object in array", function () {
            expect(results[0]).to.be.a("object");
        });
        it("should return an instance of User", function () {
            expect(results[0] instanceof User).to.be.equal(true);
        })
    });

    describe("#findOne(id)", async function () {

        let result;

        const id = 3;

        before(async function () {
            result = await User.findOne(id);
        })

        it("should return an object", function () {
            expect(result).to.be.a("object");
        });
        it("should return an instance of User", function () {
            expect(result instanceof User).to.be.equal(true);
        })
    })

})