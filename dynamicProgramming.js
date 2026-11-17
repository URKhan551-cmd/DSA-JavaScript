// How Dynamic Programming actually works
// Think of DP as a computation system with four important components.
// 1 State
// What smaller problem are we solving?
// Example: dp[i] represents the Fibonacci number at position i.
// 2 Transition
// How can we calculate the current state using previously solved states?
// Example: dp[i] = dp[i - 1] + dp[i - 2].
// 3 Base cases
// What are the smallest problems whose answers we already know?
// Example: dp[0] = 0 and dp[1] = 1.
// 4 Evaluation order
// In which order should we calculate the states so their dependencies are already available?
// Example: Calculate dp[2], then dp[3], then dp[4], and so on.
// These four components form the foundation of almost every DP solution.


// mutation

function mutationDp(n, memo= {}){
if(n <= 1){
  return n;
}

  if(memo[n] !== undefined){
    return memo[n];
  }

  memo[n] = mutationDp(n - 1, memo) + mutationDp(n-2, memo);

  return memo[n];
  
}

// tabulation 
