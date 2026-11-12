Best Time to Buy and Sell Stock
LeetCode #121
↗
Easy

›
details
Track the cheapest day seen so far
Given an array where prices[i] is the price of a stock on day i, maximize your profit by choosing one day to 
buy and a later day to sell. Return the maximum profit, or 0 if no profit is possible.

  
function maxProfit(prices) {
  let minPrice = Infinity;
  let maxProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currentPrice = prices[i];

    // Calculate profit if we sell today.
    const profit = currentPrice - minPrice;

    // Keep the maximum profit discovered.
    maxProfit = Math.max(maxProfit, profit);

    // Remember the cheapest price so far.
    minPrice = Math.min(minPrice, currentPrice);
  }

  return maxProfit;
}

console.log(maxProfit([8, 3, 6, 2, 7, 1, 9]));
// 8
