/**
 * 归并排序
 */

function gbSort(arr) {
  if (arr.length === 1) return arr;

  function devide(arr) {
    if (arr.length === 1) return arr;
    /**
     * 先把数据从中间拆分
     * 分为左半部和右半部
     * 递归调用左半部和右半部
     */
    const mid = Math.floor(arr.length / 2); 
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    return merge(devide(left), devide(right));
  }

  function merge(left, right) {
    const res = [];
    /**
     * 左半部和右半部逐个比较
     * 数值小的半边指针往后移
     * res中存入较小的数值
     */
    while (left.length || right.length) {
      if (left.length && right.length) {
        if (left[0] < right[0]) {
          res.push(left.shift());
        } else {
          res.push(right.shift());
        }
      } else {
        if (left.length && !right.length) {
          res.push(left.shift());
        }
        if (right.length && !left.length) {
          res.push(right.shift());
        }
      }
    }
    return res;
  }

  return devide(arr);
}

console.log(gbSort([4, 1, 3, 8, 2, 6, 33, 11, 7, 12]));
