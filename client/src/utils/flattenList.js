/**
 * Flattens a nested list recursively.
 *
 * @param {Array} list - The input list to be flattened.
 * @returns {Array} - The flattened list.
 */
const flattenList = (list) => {
  // Initialize flattened list
  const flattened = []

  // Iterate through each item in the input list
  list.forEach((item) => {
    // If item is a list, recursively flatten it
    if (Array.isArray(item)) {
      flattened.push(...flattenList(item))
    }
    // If item is not a list, push it to flattened list
    else {
      flattened.push(item)
    }
  })

  // Return the flattened list
  return flattened
}

export default flattenList
