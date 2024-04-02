const assert = require("assert");

describe("count duplicates", function () {
  it("should return nothing when list is not given", function () {
    const result = sublist();
    assert.deepStrictEqual(result, undefined);
  });

  it("should return nothing when list is empty", function () {
    const result = sublist([]);
    assert.deepStrictEqual(result, undefined);
  });

  it("should return a count and that Alpha", function () {
    const result = sublist("aaaabccaadeeee");
    assert.deepStrictEqual(result, [
      [4, "a"],
      [1, "b"],
      [2, "c"],
      [2, "a"],
      [1, "d"],
      [4, "e"],
    ]);
  });
});

const sublist = (list = []) => {
  if (list.length === 0) {
    return undefined;
  } else {
    let cp = compress(list);
    return cp;
  }
};

function compress(str) {
  if (str.length === 0) return [];

  const compressedArr = [];
  let count = 1;
  let currentChar = str[0];

  for (let i = 1; i < str.length; i++) {
    if (str[i] === currentChar) {
      count++;
    } else {
      compressedArr.push([count, currentChar]);
      count = 1;
      currentChar = str[i];
    }
  }

  compressedArr.push([count, currentChar]);

  return compressedArr;
}
