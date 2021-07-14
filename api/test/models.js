const User = require("../app/models/User");
const {expect} = require("chai");

describe("User model", function(){
    describe("#getAll()", async function(){

        let results;

        before( async function(){
          results = await User.findAll();  
        })
        

        it("should return an array", function(){
            expect(results).to.be.a("array");
        });
        it("should return an object in array", function(){
            expect(results[0]).to.be.a("object");
        });
        it("should return an instance of User", function(){
            expect(results[0] instanceof User).to.be.equal(true);
        })
    })
})

