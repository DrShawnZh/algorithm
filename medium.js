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

/**
 * 1792. 最大平均通过率
 * 一所学校里有一些班级，每个班级里有一些学生，现在每个班都会进行一场期末考试。给你一个二维数组 classes ，其中 classes[i] = [passi, totali] ，表示你提前知道了第 i 个班级总共有 totali 个学生，其中只有 passi 个学生可以通过考试。
 * 给你一个整数 extraStudents ，表示额外有 extraStudents 个聪明的学生，他们 一定 能通过任何班级的期末考。你需要给这 extraStudents 个学生每人都安排一个班级，使得 所有 班级的 平均 通过率 最大 。
 * 一个班级的 通过率 等于这个班级通过考试的学生人数除以这个班级的总人数。平均通过率 是所有班级的通过率之和除以班级数目。
 * 请你返回在安排这 extraStudents 个学生去对应班级后的 最大 平均通过率。与标准答案误差范围在 10-5 以内的结果都会视为正确结果。
 * @param {number[][]} classes
 * @param {number} extraStudents
 * @return {number}
 */
var maxAverageRatio = function (classes, extraStudents) {
  const pq = new PriorityQueue((a, b) => {
    const val1 = (b[1] + 1) * b[1] * (a[1] - a[0]);
    const val2 = (a[1] + 1) * a[1] * (b[1] - b[0]);
    return val1 < val2 ? 1 : -1;
  });

  for (const c of classes) {
    pq.enqueue([c[0], c[1]]);
  }

  for (let i = 0; i < extraStudents; i++) {
    const arr = pq.dequeue();
    const pass = arr[0],
      total = arr[1];
    pq.enqueue([pass + 1, total + 1]);
  }

  let res = 0;
  const count = classes.length;
  while (!pq.isEmpty()) {
    const arr = pq.dequeue();
    const pass = arr[0],
      total = arr[1];
    res += pass / total;
  }
  return res / count;
};

/**
 * 3025. 人员站位的方案数
 * 给你一个  n x 2 的二维数组 points ，它表示二维平面上的一些点坐标，其中 points[i] = [xi, yi] 。
 * 计算点对 (A, B) 的数量，其中
 * A 在 B 的左上角，并
 * 它们形成的长方形中（或直线上）没有其它点（包括边界）。
 * 返回数量。
 *
 * @param {number[][]} points
 * @return {number}
 */

var numberOfPairs = function (points) {
  let ans = 0,
    n = points.length;
  for (let i = 0; i < n; i++) {
    const x1 = points[i][0],
      y1 = points[i][1];

    for (let j = i + 1; j < n; j++) {
      const x2 = points[j][0],
        y2 = points[j][1];

      const aLeftB = x1 <= x2 && y1 >= y2;
      const aRightB = x1 >= x2 && y1 <= y2;

      if (aLeftB || aRightB) {
        let res = false;
        for (let k = 0; k < n; k++) {
          if (k !== i && k !== j) {
            const x3 = points[k][0],
              y3 = points[k][1];
            if (aLeftB) {
              if (x3 <= x2 && x3 >= x1 && y3 <= y1 && y3 >= y2) {
                console.log(points[k], points[i], points[j]);
                res = true;
                break;
              }
            }
            if (aRightB) {
              if (x3 <= x1 && x3 >= x2 && y3 <= y2 && y3 >= y1) {
                console.log(points[k], points[j], points[i]);
                res = true;
                break;
              }
            }
          }
        }

        if (!res) {
          ans++;
        }
      }
    }
  }

  return ans;
};

const result = numberOfPairs([
  [1, 1],
  [2, 2],
  [3, 3],
]);
console.log("3025. 人员站位的方案数", result);

/**
 * 2749. 得到整数零需要执行的最少操作数
 * 给你两个整数：num1 和 num2 。
 * 在一步操作中，你需要从范围 [0, 60] 中选出一个整数 i ，并从 num1 减去 2^i + num2 。
 * 请你计算，要想使 num1 等于 0 需要执行的最少操作数，并以整数形式返回。
 * 如果无法使 num1 等于 0 ，返回 -1 。
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var makeTheIntegerZero = function (num1, num2) {
  for (let i = 1; num1 - num2 * i >= i; i++) {
    if (
      (num1 - num2 * i)
        .toString(2)
        .split("")
        .filter((item) => item === "1").length <= i
    ) {
      return i;
    }
  }
  return -1;
};

console.log("2749. 得到整数零需要执行的最少操作数", makeTheIntegerZero(3, -2));
