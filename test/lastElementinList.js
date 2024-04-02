var assert = require("assert");

const { describe } = require("mocha");
describe("find last element in a list", function () {
  describe("if list is empty", function () {
    it("should return nothing", function () {
      let result = findLastElement();
      assert.equal(result, undefined);
    });
  });

  describe("When list contain one element", function () {
    it("should return that element", function () {
      let result = findLastElement([100]);
      assert.equal(result, 100);
    });
  });

  describe("When list contain two element", function () {
    it("should return first element", function () {
      let result = findLastElement([100, 101]);
      assert.equal(result, 101);
    });
  });
});

const findLastElement = (list = []) => {
  return list[list.length - 1];
};
