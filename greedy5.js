Jump Game II
LeetCode #45
↗
Medium

›
details
Minimum jumps, greedy BFS by levels
Given an array where each element is the maximum jump length from that position, 
return the minimum number of jumps needed to reach the last index. It is guaranteed the last index is reachable.

// each number represent maximum distance you can jump forward from that index
// [2, 3, 1, 1, 4] here i=0 numw[i] = 2  so we can max jump upto 2 indexes from 0 -> 1 -> 2
// i = 1,  nums[i]  = 3  we can jump upto 3 indexes    i=1 to -> i=2 -> i=3 -> i=4
// the questions is : what is the smallest number of jumps that gets you from index 0 to final index.

  // index = 0 jump can be index = 1 or jump can be index = 2.  one jump can reach to two positions.
  // index = 1 has nums[i] = 3 so i can jump 3 possible position from that index.
  // so i decided to first jump reach indx 1 then second jump fromtheere to last index  totala num of jumps = 2;

function jumpGame2(nums){
 let jumps = 0;
 let currentEnd = 0;
 let farthest = 0;

  for(let i=0; i< nums.length - 1; i++)
  {
    // find the farthest index recheable 
    // from positions in the current level index.
    farthest = Math.max(farthest, i + nums[i]);

    // Finished exploring the current level.
    if(i === currentEnd){
      jumps++;
      currentEnd = farthest;

      // destination is now reachable.
      if(currentEnd >= nums.length -1){
        break;
      }
    }
  }  
  return jumps;
  }
