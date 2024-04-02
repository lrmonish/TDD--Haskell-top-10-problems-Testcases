const assert = require("assert");

class NestedList {
  constructor(value) {
    if (Array.isArray(value)) {
      this.elements = value.map((item) => new NestedList(item));
    } else {
      this.element = value;
    }
  }

  flatten() {
    if (this.elements) {
      return this.elements.reduce(
        (acc, curr) => acc.concat(curr.flatten()),
        []
      );
    } else {
      return [this.element];
    }
  }
}

describe("Flatten a nested list structure", function () {
  it("should return an empty list when given an empty list", function () {
    const nestedList = new NestedList([]);
    assert.deepStrictEqual(nestedList.flatten(), []);
  });

  it("should return a flattened list with one element", function () {
    const nestedList = new NestedList(["a"]);
    assert.deepStrictEqual(nestedList.flatten(), ["a"]);
  });

  it("should return a flattened list with multiple elements", function () {
    const nestedList = new NestedList(["a", ["b", "c"], "d"]);
    assert.deepStrictEqual(nestedList.flatten(), ["a", "b", "c", "d"]);
  });

  it("should return a flattened list with nested empty lists", function () {
    const nestedList = new NestedList(["a", [], ["b", []], "c"]);
    assert.deepStrictEqual(nestedList.flatten(), ["a", "b", "c"]);
  });
});
