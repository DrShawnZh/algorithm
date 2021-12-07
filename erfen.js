const arr = [];

for (let i = 1; i < 121; i++) {
  arr[i - 1] = i;
}

const search = (arr, number) => {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    if (arr[mid] === number) {
      return mid;
    }
    if (number > arr[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return null;
};

console.log(search(arr, 119));
