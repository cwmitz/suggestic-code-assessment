const flattenList = require("../utils/flattenList")

describe("flattenList", () => {
  test("sample given by Shai", () => {
    const nestedList = [1, 2, [3, 4, [5, 6], 7], 8]
    const flattenedList = flattenList(nestedList)
    expect(flattenedList).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  test("simple nested list", () => {
    const nestedList = [1, [2, [3]], 4]
    const flattenedList = flattenList(nestedList)
    expect(flattenedList).toEqual([1, 2, 3, 4])
  })

  test("more complex nested list", () => {
    const nestedList = [1, [2, [3, [4], 5]], 6]
    const flattenedList = flattenList(nestedList)
    expect(flattenedList).toEqual([1, 2, 3, 4, 5, 6])
  })

  test("empty input list", () => {
    const nestedList = []
    const flattenedList = flattenList(nestedList)
    expect(flattenedList).toEqual([])
  })

  test("different data types", () => {
    const nestedList = [1, "a", true, { foo: "bar" }]
    const flattenedList = flattenList(nestedList)
    expect(flattenedList).toEqual([1, "a", true, { foo: "bar" }])
  })

  test("nested list with empty lists", () => {
    const nestedList = [1, [], [2, [3]], 4]
    const flattenedList = flattenList(nestedList)
    expect(flattenedList).toEqual([1, 2, 3, 4])
  })

  test("nested list with only empty lists", () => {
    const nestedList = [[], [[], [[[]]]]]
    const flattenedList = flattenList(nestedList)
    expect(flattenedList).toEqual([])
  })
})
