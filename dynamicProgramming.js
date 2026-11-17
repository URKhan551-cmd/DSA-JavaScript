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

// Approach A: Memoization (Top-Down DP)
// Memoization means:
// 1. Start with the original problem.
// 2. Recursively break it into smaller problems.
// 3. Store the answer when a subproblem is solved.
// 4. If that subproblem appears again, return the stored answer.
// Think of it as recursion with memory.

// JavaScript implementation:

function fibonacci(n, memo = {}) {
  // Base cases
  if (n <= 1) {
    return n;
  }

  // Check whether we already calculated this state
  if (memo[n] !== undefined) {
    return memo[n];
  }

  // Calculate and remember the answer
  memo[n] =
    fibonacci(n - 1, memo) +
    fibonacci(n - 2, memo);

  return memo[n];
}

console.log(fibonacci(6)); // 8

// Let's understand the execution flow.

// For fibonacci(5):
// fibonacci(5)
//     |
//     ├── fibonacci(4)
//     |      |
//     |      ├── fibonacci(3)
//     |      └── fibonacci(2)
//     |
//     └── fibonacci(3)
//            |
//            └── Already calculated!
//                Return memo[3]

// Instead of recursively calculating F(3) again, we return its stored value.

// (Time: O(n)) (Space: O(n))

// The time complexity becomes linear because each state is calculated only once.

// The space complexity includes the memo object and the recursion call stack.

// tabulation 
Approach B: Tabulation (Bottom-Up DP)
// Tabulation solves the same problem differently.

// Instead of starting from the original problem and moving downward through recursion, we start with the smallest known answers and build upward.

// JavaScript implementation:

function fibonacci(n) {
  if (n <= 1) {
    return n;
  }

  const dp = new Array(n + 1);

  // Initialize known answers
  dp[0] = 0;
  dp[1] = 1;

  // Build answers from smaller states
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

console.log(fibonacci(6)); // 8

// Let's execute it manually.

// For fibonacci(6):
// Iteration	Calculation	Stored result
// Initial	dp[0] = 0	0
// Initial	dp[1] = 1	1
// i = 2	0 + 1	1
// i = 3	1 + 1	2
// i = 4	2 + 1	3
// i = 5	3 + 2	5
// i = 6	5 + 3	8


// Final DP array

// Each cell stores an answer that can be reused by later calculations.

// (Time: O(n)) (Space: O(n))

// Engineering insight: Neither approach is universally better.
// - Memoization is useful when only a fraction of possible states are needed, or when the recursive relationship is easier to express.
// - Tabulation is useful when you can establish a reliable dependency order and want to avoid recursion overhead.
// - Both generally achieve the same asymptotic complexity when they compute the same states.

// SPACE OPTIMIZATION 
// WHY DO WE NEED FULL ARRAY WE CAN TAKE VARIABLES AND ALONG WITH NUMBER GROWS WE WILL ASIGNING NEXT NUMBERS 
// Space optimization: Can we do better?
// Look at the Fibonacci transition again:
// dp[i] = dp[i - 1] + dp[i - 2];

// Do we actually need the entire DP array?
// To calculate the next number, we only need the previous two numbers.
// That means we can discard older values.

function fibonacci(n) {
  if (n <= 1) return n;

  let prev2 = 0;    // VARIABLE  min2
  let prev1 = 1;   // VARIABLE   min1

  for (let i = 2; i <= n; i++) {
    const current = prev1 + prev2;

    prev2 = prev1;   
    prev1 = current;
  }

  return prev1;
}

console.log(fibonacci(6)); // 8

Now:
- Time: \(O(n)\)
- Auxiliary space: \(O(1)\)
// This is called Space Optimization.

// The important engineering question is:
// Can the next state be calculated using only a limited number of previous states?
// If yes, you may not need a complete DP table.
// However, don't optimize before understanding the full DP table. The table makes dependencies visible and is often easier to debug.
