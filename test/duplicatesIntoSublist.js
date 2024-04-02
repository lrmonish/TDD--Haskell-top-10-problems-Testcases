const assert = require("assert");

describe("Reduce duplicates", function () {
  it("should return nothing when list is not given", function () {
    const result = sublist();
    assert.deepStrictEqual(result, undefined);
  });

  it("should return nothing when list is empty", function () {
    const result = sublist([]);
    assert.deepStrictEqual(result, undefined);
  });

  it("should return a flattened sublistlist", function () {
    const result = sublist([
      "a",
      "a",
      "a",
      "a",
      "b",
      "c",
      "c",
      "a",
      "a",
      "d",
      "e",
      "e",
      "e",
      "e",
    ]);
    assert.deepStrictEqual(result, ["aaaa", "b", "cc", "aa", "d", "eeee"]);
  });
});

const sublist = (list = []) => {
  if (list.length === 0) {
    return undefined;
  } else {
    return compress(list);
  }
};

function compress(arr) {
  if (arr.length === 0) return [];

  const compressedArr = [];
  let currentGroup = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      compressedArr.push(currentGroup);
      currentGroup = arr[i];
    } else {
      currentGroup += arr[i];
    }
  }
  compressedArr.push(currentGroup);

  return compressedArr;
}
