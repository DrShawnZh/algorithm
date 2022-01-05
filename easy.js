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
