var expect = require("expect.js");
var Sequelize = require("sequelize");
var sequelize = new Sequelize("postgres://username:password@localhost:5432/testdbname", {logging: false});
var model = require("./../model")(sequelize);
var userService = require("./../userService")(sequelize);

describe("userService", function () {
    var mockResponse = function (callback) { return { send: callback }; };
    var newUser = { username: "Johne", password: "imjohne" };

    beforeEach(function (done) {
        sequelize.sync({ force: true}).success(function () { done(); });
    });

    it("should find created users", function (done) {
        //arrange
        model.User.create(newUser).success(function () {
            //act
            userService.get({}, mockResponse(function (data) {
                //assert
                expect(data[0].username).to.eql(newUser.username);
                done();
            }))
        })
    });
    it("should create user", function (done) {
        //arrange
        var req = { body: newUser };
        //act
        userService.create(req, mockResponse(function (statusCode) {
            //assert
            expect(statusCode).to.eql(200);
            done();
        }))
    });
});