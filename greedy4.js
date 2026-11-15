Jump Game
LeetCode #55
↗
Medium

›
details
Track the farthest index you can reach
Given an array where each element is the maximum jump length from that position, 
determine whether you can reach the last index starting from the first index.


  function  jumpGame(nums){
  let maxReach = 0;

  for(let i=0; i<nums.length; i++){
    // cannot even reach this possition 
    if(i > maxReach){
      return false;
    }

    // update the farthest reachable position
    maxReach = Math.max(maxReach, i + nums[i]); // i= in which index we are present // nums[i] how far we can move further.

    // the last index is reachable
    if(maxReach >= nums.length - 1){
      return true;
    }
  }

  return true;
  }
 // do i really need to try every jump or can i track how far i am capable of reaching.
