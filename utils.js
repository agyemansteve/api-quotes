const getRandomElement = (arr) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");

  return arr[Math.floor(Math.random() * arr.length)];
};

const getElementByAuthor = (arr, author) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");
  const updatedArr = arr.filter((item) => {
    return item.person === author;
  });
  return updatedArr;
  // return arr[Math.floor(Math.random() * arr.length)];
};

const addElement = (arr, author, quote) => {
  if (!Array.isArray(arr)) throw new Error("Expected an array");

  const result = arr.push({
    quote: quote,
    person: author,
  });

  return result;
};

module.exports = {
  getRandomElement,
  getElementByAuthor,
  addElement,
};
