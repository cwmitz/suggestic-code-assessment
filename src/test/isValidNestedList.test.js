const isValidNestedList = require("../utils/isValidNestedList")

describe("isValidNestedList", () => {
  test("simple valid input", () => {
    const validList = '[1, [2, [3]], "four"]'
    expect(isValidNestedList(validList)).toBe(true)
  })

  test("valid with different data types", () => {
    const validList = '[1, [2, [3]], "four", true, null]'
    expect(isValidNestedList(validList)).toBe(true)
  })

  test("invalid data type", () => {
    const invalidList = "[1, [2, [3]], four]"
    expect(isValidNestedList(invalidList)).toBe(false)
  })

  test("extra bracket at the end", () => {
    const invalidList = "[1, [2, [3]]]]"
    expect(isValidNestedList(invalidList)).toBe(false)
  })

  test("random input", () => {
    const invalidList = "agfkasdhgfakudsyfgaod"
    expect(isValidNestedList(invalidList)).toBe(false)
  })

  test("empty input", () => {
    const invalidList = ""
    expect(isValidNestedList(invalidList)).toBe(false)
  })

  test("empty list", () => {
    const validList = "[]"
    expect(isValidNestedList(validList)).toBe(true)
  })
})
