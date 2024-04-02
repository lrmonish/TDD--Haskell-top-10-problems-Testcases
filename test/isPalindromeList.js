var assert = require("assert");
const { describe } = require("mocha");

describe("Is Palindrome", function () {
  describe("if list is not given", function () {
    it("should return false", function () {
      let result = isPalindrome();
      assert.strictEqual(result, false);
    });
  });

  describe("if list is not a palindrome", function () {
    it("should return false", function () {
      let result = isPalindrome([1, 2, 3]);
      assert.strictEqual(result, false);
    });
  });

  describe("if list is a palindrome", function () {
    it("should return true", function () {
      let result = isPalindrome([1, 2, 3, 2, 1]);
      assert.strictEqual(result, true);
    });
  });

  describe("if list is a string", function () {
    it("should return its nature", function () {
      let result = isPalindrome("madamimadam");
      assert.strictEqual(result, true);
    });
  });
});

const isPalindrome = (list = []) => {
  if (Array.isArray(list)) {
    if (list.length === 0) {
      return false;
    }
    const reversed = [...list].reverse();
    return JSON.stringify(list) === JSON.stringify(reversed);
  } else {
    let temp = list.split("").reverse().join("");
    if (temp === list) {
      return true;
    } else {
      return false;
    }
  }
};
