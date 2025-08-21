/**
 * 中等难度
 */

/**
 * 2348. 全 0 子数组的数目
 * 给你一个整数数组 nums ，返回全部为 0 的 子数组 数目。
 * 子数组 是一个数组中一段连续非空元素组成的序列。
 * @param {number[]} nums
 * @return {number}
 */
var zeroFilledSubarray = function (nums) {
  let ans = 0;
  let left = 0;
  let right = 0;
  const len = nums.length;
  while (right < len) {
    if (nums[right] === 0) {
      right++;
    } else {
      ans += ((right - left) * (right - left + 1)) / 2;
      left = right + 1;
      right++;
    }
  }
  ans += ((right - left) * (right - left + 1)) / 2;
  return ans;
};

// console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));

/**
 * 1504. 统计全 1 子矩形
 * 给你一个 m x n 的二进制矩阵 mat ，请你返回有多少个 子矩形 的元素全部都是 1 。
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function (mat) {
  const m = mat.length,
    n = mat[0].length;
  let ans = 0;

  for (let top = 0; top < m; top++) {
    const a = new Array(n).fill(0);
    for (let bottom = top; bottom < m; bottom++) {
      const height = bottom - top + 1;

      let last = -1;
      for (let j = 0; j < n; j++) {
        a[j] += mat[bottom][j];

        if (a[j] !== height) {
          last = j;
        } else {
          ans += j - last;
        }
      }
    }
  }

  return ans;
};

console.log(
  "1504. 统计全 1 子矩形",
  numSubmat([
    [0, 1, 1, 0],
    [0, 1, 1, 1],
    [1, 1, 1, 0],
  ])
);
