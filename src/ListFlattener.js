import React, { useState } from "react"
import "./ListFlattener.css"
import flattenList from "./utils/flattenList"
import isValidNestedList from "./utils/isValidNestedList"

const ListFlattener = () => {
  // State variables
  const [inputList, setInputList] = useState("")
  const [outputList, setOutputList] = useState(null)
  const [errorMessage, setErrorMessage] = useState("")

  // Event handler for input change
  const handleInputChange = (e) => {
    setInputList(e.target.value)
  }

  // Event handler for flatten button click
  const handleFlattenClick = () => {
    // Reset error message
    setErrorMessage("")

    // Check if inputList is empty
    if (!inputList) {
      setErrorMessage("Input cannot be empty")
      setOutputList(null)
      return
    }
    // Check if inputList is a valid nested list
    if (!isValidNestedList(inputList)) {
      setErrorMessage("Input must be a valid nested sequence")
      setOutputList(null)
      return
    }

    // Update outputList state with flattened list
    const flattenedList = flattenList(JSON.parse(inputList))
    setOutputList(flattenedList)
  }
  console.log(typeof outPutList)

  return (
    <div className="list-flattener-container">
      <h1 className="list-flattener-title">Sequence Flattener</h1>
      <textarea
        className="list-flattener-input"
        rows={6}
        placeholder="Enter a nested sequence"
        value={inputList}
        onChange={handleInputChange}
      />
      <button className="list-flattener-button" onClick={handleFlattenClick}>
        Flatten Sequence
      </button>
      <h2 className="list-flattener-subtitle">Flattened Sequence:</h2>
      {errorMessage && (
        <div className="list-flattener-error">{errorMessage}</div>
      )}
      {outputList && (
        <div className="list-flattener-output">
          {`[${outputList.join(", ")}]`}
        </div>
      )}
    </div>
  )
}

export default ListFlattener
