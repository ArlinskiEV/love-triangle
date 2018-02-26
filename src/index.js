/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  // your implementation
  let arr = preferences.map((item) => (item - 1));
  let count = 0;
  let checked = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === arr[arr[arr[i]]]) {
      let triangle = [i, arr[i], arr[arr[i]]].sort().join('-');
      if (checked.indexOf(triangle) === -1) {
        checked.push(triangle);
        count += 1;
      }
    }
  }

  return count;
};
