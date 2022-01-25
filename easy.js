/**
 * leetcode 1576. 替换所有的问号
 * @param {string} s
 */
var modifyString = function (s) {
  let prev = "",
    next = "";

  const arr = s.split("");
  for (let i = 0; i < arr.length; i++) {
    const it = arr[i];
    if (it === "?") {
      // 找问号前后的字符串，若没有则职位’-‘，做占位符
      prev = i === 0 ? "-" : arr[i - 1];
      next = i === arr.length - 1 ? "-" : arr[i + 1];

      // 从a开始遍历字母charcode，若与点前位置左右两侧的字母均不同时，可以替换此位置的？
      for (let j = 97; j < 113; j++) {
        if (prev.charCodeAt() !== j && next.charCodeAt() !== j) {
          arr[i] = String.fromCharCode(j);
          break;
        }
      }
    }
  }

  return arr.join("");
};

/**
 * 1614. 括号的最大嵌套深度
 * @param {string} s 有效括号字符串
 * @return {number} s的嵌套深度
 */
var maxDepth = function (s) {
  let arr = [0],
    // 当前位置的嵌套深度
    deep = 0;

  // 判断s的长度为1或者0的情况直接返回深度为0
  if (s.length === 1 || s.length === 0) return 0;

  // 遍历字符串，遇到"("当前深度加1；遇到")"深度减1，并记录此时的深度，放到数组中
  for (let i = 0; i < s.length; i++) {
    const it = s[i];

    if (it === "(") {
      deep += 1;
    } else if (it === ")") {
      arr.push(deep);
      deep -= 1;
    }
  }
  return Math.max(...arr);
};

/**
 * 219. 存在重复元素 II
 * 题意：是否存在长度不超过的 [公式] 窗口，窗口内有相同元素
 *
 * 滑动窗口 哈希表
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const len = nums.length;

  const set = new Set();

  for (let i = 0; i < len; i++) {
    const it = nums[i];
    if (i > k) {
      set.delete(nums[i - k - 1]);
    }
    if (set.has(it)) return true;
    set.add(it);
  }
  return false;
};

/**
 * 1688. 比赛中的配对次数
 * dfs
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function (n, ans = 0) {
  if (n === 1) return ans;
  let left;
  if ((n & 1) === 1) {
    left = (n - 1) / 2;
    ans += left;
    return numberOfMatches(left + 1, ans);
  } else {
    left = n / 2;
    ans += left;
    return numberOfMatches(left, ans);
  }
};
