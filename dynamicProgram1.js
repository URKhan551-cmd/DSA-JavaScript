Solving a Question with Dynamic Programming
✓ Solved

›
details
State → recurrence → base case → order → answer
The 5-step framework (House Robber)
time
O(n)
space
O(n)
step
1/12
The 5-step framework (House Robber)


function tabulation (nums){
let n = nums.length;
if(n === 0) return 0;
if(n === 1) return nums[0];
 let dp = new Array(n);
dp[0] = nums[0];
dp[1] = Math.max(nums[0], nums[1]);

for(let i=2; i<=n; i++){
let skip = dp[i - 1];
let take = nums[i] + dp[i-2];
dp[i] = Math.max(skip, take);
}

return dp[n-1]
}












