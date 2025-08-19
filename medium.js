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
var zeroFilledSubarray = function(nums) {
    let ans = 0;
    let left = 0;
    let right = 0;
    const len = nums.length;
    while (right < len) {
        if (nums[right] === 0) {
            right++;
        } else {
            ans += (right - left) * (right - left + 1) / 2;
            left = right + 1;
            right++;
        }
    }
    ans += (right - left) * (right - left + 1) / 2;
    return ans;
};

console.log(zeroFilledSubarray([1, 3, 0, 0, 2, 0, 0, 4]));
