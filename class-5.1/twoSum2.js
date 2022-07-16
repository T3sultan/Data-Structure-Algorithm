//time complexity 0(n^2)
var twoSum = function (nums, target) {
  const hasMap = {};
  for (let i = 0; i < nums.length; i++) {
    const expectValue = target - nums[i];
    if (expectValue in hasMap) {
      return [hasMap[expectValue], i];
    }
    hasMap[nums[i]] = i;
  }
};
console.log(twoSum([3, 2, 4], 6));
// {
// 3:0,
// 2:1,
// 4:2

//  6-3=3
//  6-2=4
//  6-4=2
