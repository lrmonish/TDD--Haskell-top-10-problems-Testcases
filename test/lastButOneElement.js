var assert = require("assert");

const { describe } = require("mocha");
describe("find last but one element in a list", function () {
  describe("if list is empty", function () {
    it("should return nothing", function () {
      let result = findLastElement();
      assert.equal(result, undefined);
    });
  });

  describe("When list contain one element", function () {
    it("should return nothing", function () {
      let result = findLastElement([100]);
      assert.equal(result, undefined);
    });
  });

  describe("When list contain two element", function () {
    it("should return first element", function () {
      let result = findLastElement([100, 101]);
      assert.equal(result, 100);
    });
  });

  describe("When list contain more than two element", function () {
    it("should return second last element", function () {
      let result = findLastElement([99, "b", 101]);
      assert.equal(result, "b");
    });
  });
});

const findLastElement = (list = []) => {
  return list[list.length - 2];
};
