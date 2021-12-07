function isCousins(root, x, y) {

  let left, leftDept, right, rightDept;

  const getDep = (root, num1, num2, dept = 0) => {
    if (
      (root.left && root.left.val === num1) ||
      (root.right && root.right.val === num1)
    ) {
      left = root.val;
      leftDept = dept;
    } else if (
      (root.left && root.left.val === num2) ||
      (root.right && root.right.val === num2)
    ) {
      right = root.val;
      rightDept = dept;
    } else {
      dept++;
      root.left && getDep(root.left, num1, num2, dept);
      root.right && getDep(root.right, num1, num2, dept);
    }
  };

  getDep(root, x, y);


  return left !== right && leftDept === rightDept;
}

const root = {
  val: 1,
  left: {
    val: 2,
    right: null,
    left: {
      val: 4,
      left: null,
      right: null,
    },
  },
  right: {
    val: 3,
    left: null,
    right: {
      val: 5,
      left: null,
      right: null,
    },
  },
};

console.log(isCousins(root, 5, 4));
