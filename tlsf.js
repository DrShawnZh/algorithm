const getRange = (min, max, step) => {
  const arr = [];
  while (min <= max) {
    arr.push(min);
    min = parseFloat((min + step).toFixed(1));
  }
  return arr;
};
console.log(getRange(2.1, 3.0, 0.1));
