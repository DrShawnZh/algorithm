const getSmall = (arr) => {
  let least = arr[0];
  let leastIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < least) {
      least = arr[i];
      leastIndex = i;
    }
  }
  return leastIndex;
};

const sort = (arr) => {
  const ar = [];
  const len = arr.length;
  for (let i = 0; i < len; i++) {
    const index = getSmall(arr);
    ar.push(arr[index]);
    arr.splice(index, 1);
  }
  return ar;
};

console.log(sort([1, 3, 2, 6, 4]));

/**
 * 快速排序
 */
const quickSort = (arr = []) => {
  if (arr.length < 2) {
    return arr;
  }

  const base = arr[0];

  const less = [];
  const large = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < base) {
      less.push(arr[i]);
    } else {
      large.push(arr[i]);
    }
  }


  return [...quickSort(less), base, ...quickSort(large)];
};

console.log(quickSort([11, 10, 2, 4, 3, 7, 9]));
