var assert = require("assert");
const { describe } = require("mocha");

describe("Find the K'th element of a list.", function () {
  describe("if list is empty", function () {
    it("should return nothing", function () {
      let result = findKthElement();
      assert.equal(result, undefined);
    });
  });

  describe("find kth no if list given K not given", function () {
    it("should return nothing", function () {
      let result = findKthElement([1, 2, 3, 4]);
      assert.equal(result, undefined);
    });
  });

  describe("find kth no", function () {
    it("should return kth no", function () {
      let result = findKthElement([1, 2, 3, 4], 2);
      assert.equal(result, 2);
    });
  });

  describe("find kth no if given no is greater than list", function () {
    it("should return nothing no", function () {
      let result = findKthElement([1, 2, 3, 4], 8);
      assert.equal(result, null);
    });
  });

  describe("find kth no if given no is negative", function () {
    it("should return nothing ", function () {
      let result = findKthElement([1, 2, 3, 4], -8);
      assert.equal(result, null);
    });
  });

  describe("find kth no if given input is other than numbers", function () {
    it("should return nothing ", function () {
      let result = findKthElement([1, 2, 3, 4], "n");
      assert.equal(result, undefined);
    });
  });
});

const findKthElement = (list = [], k) => {
  return list[k - 1];
};
