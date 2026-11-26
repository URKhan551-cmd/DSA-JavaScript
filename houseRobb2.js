function linearRob(nums, start, end){
let memo = new Map();

  function dp(i){
    // no house left to Robb 
    if(i > end) return 0;

    // reuse previous results 
    if(memo.has(i)){
      return memo.get(i);
    }

    // rob the present house 
    const rob = nums[i] + dp(i + 2);

    const skip = dp(i + 1);

    const result = Math.max(rob, skip);

    memo.set(i, result);
    return result;
  }

  return dp(start);
}

function robb(nums){
const n = nums.length;
  if(n === 0) return 0;
  if(n === 1) return nums[0];

  const excludeLast = linearRob(nums, 0, n-2)
const includeLast = linearRob(nums, 1, n-1)
  return Math.max(excludeLast, includeLast);
}
// Engineering concern: Recursive DP is elegant, but recursion introduces call-stack overhead. 
// In languages or environments with limited stack depth, bottom-up DP may be safer.

// Tabulation bottom - up
function robLinear(nums, start, end) {
    const dp = new Array(end - start + 1).fill(0);

    for (let i = start; i <= end; i++) {
        const index = i - start;

        const rob =
            nums[i] + (index >= 2 ? dp[index - 2] : 0);

        const skip =
            index >= 1 ? dp[index - 1] : 0;

        dp[index] = Math.max(rob, skip);
    }

    return dp[dp.length - 1];
}

function rob(nums) {
    const n = nums.length;

    if (n === 0) return 0;
    if (n === 1) return nums[0];

    return Math.max(
        robLinear(nums, 0, n - 2),
        robLinear(nums, 1, n - 1)
    );
}


// Because the current state only depends on two previous states:
// - dp(i - 1)
// - dp(i - 2)
// Once we calculate dp(i), older states are no longer needed.

// This is called a rolling-state optimization.


function robLinear(nums, start, end) {
    let prev2 = 0;
    let prev1 = 0;

    for (let i = start; i <= end; i++) {
        const rob = nums[i] + prev2;
        const skip = prev1;

        const current = Math.max(rob, skip);

        prev2 = prev1;
        prev1 = current;
    }

    return prev1;
}

function rob(nums) {
    const n = nums.length;

    if (n === 0) return 0;
    if (n === 1) return nums[0];

    return Math.max(
        robLinear(nums, 0, n - 2),
        robLinear(nums, 1, n - 1)
    );
}
