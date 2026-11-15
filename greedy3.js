Gas Station
LeetCode #134
↗
Medium
✓ Solved

›
details
If total gas ≥ total cost, one start works, find it
Given gas available at each station along a circular route and the cost to travel from each station to the next, 
return the starting station index from which you can complete the full loop, or -1 if no such start exists. 
A unique answer is guaranteed when one exists.

function gasStation(gas, cost){
let start = 0;
let totalGas = 0;
let currentTank = 0;

for(let i =0; i<gas.length; i++){
  // net gain or lost at this station 
  let net = gas[i] - cost[i];

  // overall balance across all stations
  totalGas += net;

  // fuel balance since our candidate start
  currentTank += net;
  
  // current starting station has failed
   if(currentTank < 0){
   start = i + 1;
    currentTank = 0;
  }
}  

  // can the complete circukar route be covered?
  if(totalGas < 0){
    return -1;
  }
  return start;
}
