/**
 * Validates if a given string represents a valid nested list.
 *
 * @param {string} listString - The string representation of the list to be validated.
 * @returns {boolean} - Returns true if the list is a valid nested list, otherwise false.
 */
const isValidNestedList = (listString) => {
  try {
    const list = JSON.parse(listString)
    if (!Array.isArray(list)) {
      return false
    }

    // Recursive function to validate nested lists
    const isNestedList = (value) => Array.isArray(value)
    const validateList = (nestedList) => {
      for (let i = 0; i < nestedList.length; i++) {
        if (isNestedList(nestedList[i])) {
          if (!validateList(nestedList[i])) {
            return false
          }
        }
      }
      return true
    }

    return validateList(list)
  } catch (error) {
    return false
  }
}

export default isValidNestedList
