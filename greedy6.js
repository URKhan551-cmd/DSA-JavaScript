Partition Labels
LeetCode #763
↗
Medium

›
details
Extend the part to each letter’s last occurrence
Given a string, partition it into as many contiguous parts as possible so that each letter 
appears in at most one part, and return the list of part sizes in order.

function partitioning(string){

// whenever we come to a character we will overwrite its previous value of index .
const lastOccurence = new Map();
for(let i=0; i< string.length; i++){
 lastOccurence.set(string[i], i);
  
}

let start = 0; // starting index of the current position
let end = 0;   // furthest reqiure boundary
let result = [];   // length of completed partitions

// Now scan the string again.

// For each character:
// 1. Look up its last occurrence.
// 2. Extend end if necessary.
// 3. Check whether the current index has reached end.
// 4. If yes, calculate the partition size and begin the next partition.

for(let i=0; i<string.length;i++){
  let currentChar = string[i];

  // extends the require boundary
end = Math.max(end, lastOccurece.get(currentChar));// here ends become the last index of that specific char in string.
// this will give us the farthest index end 

 // we have reached the final occurence of every char of current partition 
if(i === end ){
// loop will run until unless i=== end from lastOccurence.
  // when reached at index. 
  result.push(end - start + 1);

  //start the next partition
  start = i + 1;
}
  
}

  return result;
}
