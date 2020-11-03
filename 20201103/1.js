// 1. 两数之和
// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length; i++) {
//         let curNums = nums[i];
//         let resultNum = target - curNums;
//         if (nums.indexOf(resultNum) >= 0 && nums.indexOf(resultNum) !== i) {
//             return [i, nums.indexOf(resultNum)]
//         }
//     }
// };
// console.log(twoSum([3, 3], 6));

// 执行结果：
// 通过
// 显示详情
// 执行用时：
// 196 ms
// , 在所有 JavaScript 提交中击败了
// 18.61%
// 的用户
// 内存消耗：
// 38.9 MB
// , 在所有 JavaScript 提交中击败了
// 33.77%
// 的用户

// 感觉有点蠢 时间度On*n

var twoSum = function(nums, target) {
    let ans = {}
    for (let i = 0; i < nums.length; i++) {
        let curNums = nums[i];
        let resultNum = target - curNums;
        console.log(ans, ans[resultNum])
        if (ans[resultNum] !== undefined) {
            console.log('aa')
            return [ans[resultNum], i]
        } else {
            console.log('bb')
            ans[curNums] = i
        }
    }
};
console.log(twoSum([1, 3, 6, 5], 9));
// 执行用时：
// 76 ms
// , 在所有 JavaScript 提交中击败了
// 98.00%
// 的用户
// 内存消耗：
// 39.8 MB
// , 在所有 JavaScript 提交中击败了
// 8.29%
// 的用户
// 对象查找一个属性是否存在的时间度是1，每次遍历之后便将该数字作为属性，该数字的索引作为值，如果结果作为属性存在时，就返回结果
