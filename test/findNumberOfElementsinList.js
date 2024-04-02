var assert = require("assert");
const { describe } = require("mocha");

describe("Find the number of elements in a list.", function () {
  describe("if list is empty", function () {
    it("should return 0", function () {
      let result = findNumberofElement();
      assert.equal(result, 0);
    });
  });

  describe("Return no of elements in List", function () {
    it("should return Total no", function () {
      let result = findNumberofElement([1, 2, 3, 4, 5]);
      assert.equal(result, 5);
    });
  });
});

const findNumberofElement = (list = []) => {
  return list.length;
};
