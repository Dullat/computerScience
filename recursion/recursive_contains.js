const obj = {
  book: {
    title: "spederman",
    author: "me",
    hero: "peter parker",
    abilities: {
      main: "jala feku",
    },
  },
}

function contains(object, searchValue) {
  // base case: if the one of the conditions is met, it means that the object is not an object itself, but rather a primitive value or null
  if (typeof object !== "object" || object === null) {
    return searchValue === object
  }
  // Recursive case: if the object is an Object (but not null), iterate over its values
  for (const value of Object.values(object)) {
    // Object.values(object) takes an object and returns a list containing object's values
    // Recursively call contains for each value
    if (contains(value, searchValue)) {
      return true // If the searchValue is found in any nested object, return true
    }
  }
  return false
}

console.log(contains(obj, "jala feku"))
