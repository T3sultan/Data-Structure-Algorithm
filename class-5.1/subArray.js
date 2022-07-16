var subarraySum = function (nums, k) {
  const hasMap = {
    0: 1,
  };
  let sum = 0;
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if ([sum - k] in hasMap) {
      result += hasMap[sum - k];
    }
    hasMap[sum] = (hasMap[sum] || 0) + 1;
  }
  return result;
  //   console.log(result);
  //   console.log(hasMap);
};
console.log(subarraySum([1, 2, 3], 3)); //2
