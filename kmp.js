function getNext(ss, pp) {
  if (pp.length === 0) return 0;

  // 分别读取原串和匹配串的长度
  let n = ss.length,
    m = pp.length;
  // 原串和匹配串前面都加空格，使其下标从 1 开始
  ss = " " + ss;
  pp = " " + pp;

  // 构建 next 数组，数组长度为匹配串的长度（next 数组是和匹配串相关的）
  const next = new Array(m + 1).fill(0);
  // 构造过程 i = 2，j = 0 开始，i 小于等于匹配串长度 【构造 i 从 2 开始】
  for (let i = 2, j = 0; i <= m; i++) {
    // 匹配不成功的话，j = next(j)
    while (j > 0 && pp[i] != pp[j + 1]) j = next[j];
    // 匹配成功的话，先让 j++
    if (pp[i] == pp[j + 1]) j++;
    // 更新 next[i]，结束本次循环，i++
    next[i] = j;
  }

  console.log(next)

  // 匹配过程，i = 1，j = 0 开始，i 小于等于原串长度 【匹配 i 从 1 开始】
  for (let i = 1, j = 0; i <= n; i++) {
    // 匹配不成功 j = next(j)
    while (j > 0 && ss[i] != pp[j + 1]) j = next[j];
    // 匹配成功的话，先让 j++，结束本次循环后 i++
    if (ss[i] == pp[j + 1]) j++;
    // 整一段匹配成功，直接返回下标
    if (j == m) return i - m;
  }

  return -1;
}

console.log(getNext("aaabbcddef", "abcabcd"));


