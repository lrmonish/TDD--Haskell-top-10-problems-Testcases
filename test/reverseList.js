var assert = require("assert");
const { describe } = require("mocha");

describe("Reverse a list", function () {
  describe("if list is not given", function () {
    it("should return nothing", function () {
      let result = reverseList();
      assert.equal(result, undefined);
    });
  });

  describe("if list is empty", function () {
    it("should return nothing", function () {
      let result = reverseList([]);
      assert.equal(result, undefined);
    });
  });

  describe("Return reversed list", function () {
    it("should return reversed", function () {
      const list = [1, 2, 3, 4, 5];
      let result = reverseList(list);
      assert.deepStrictEqual(result, [5, 4, 3, 2, 1]);
    });
  });

  describe("Return reversed string", function () {
    it("should return reversed string", function () {
      const list = "A man, a plan, a canal, panama!";
      let result = reverseList(list);
      assert.deepStrictEqual(result, "!amanap ,lanac a ,nalp a ,nam A");
    });
  });
});

const reverseList = (list = []) => {
  if (list.length === 0) {
    return;
  }
  if (Array.isArray(list)) {
    return list.reverse();
  } else if (typeof list === "string") {
    return list.split("").reverse().join("");
  }
};
