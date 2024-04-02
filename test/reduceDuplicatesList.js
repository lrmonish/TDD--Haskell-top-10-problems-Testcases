const assert = require("assert");

describe("Reduce duplicates", function () {
  it("should return nothing when list is not given", function () {
    const result = removeDuplicates();
    assert.deepStrictEqual(result, undefined);
  });

  it("should return nothing when list is empty", function () {
    const result = removeDuplicates([]);
    assert.deepStrictEqual(result, undefined);
  });

  it("should return a flattened list with string", function () {
    const result = removeDuplicates("aaaabccaadeeee");
    assert.deepStrictEqual(result, "abcade");
  });

  it("should return a flattened list with nested empty lists", function () {
    const result = removeDuplicates(123);
    assert.deepStrictEqual(result, 123);
  });
});

const removeDuplicates = (list = []) => {
  if (!Array.isArray(list) && typeof list === "string") {
    let str = compress(list);
    let str2 = Array.from(str).join("");
    return str2;
  } else if (!Array.isArray(list) && typeof list === "number") {
    const conNum = list.toString();
    let str = compress(conNum);
    let str2 = Array.from(str).join("");
    let num = parseInt(str2);
    return num;
  }

  return undefined;
};

function compress(list) {
  if (list.length === 0) return [];

  const compressedList = [list[0]];

  for (let i = 1; i < list.length; i++) {
    if (list[i] !== list[i - 1]) {
      compressedList.push(list[i]);
    }
  }

  return compressedList;
}
