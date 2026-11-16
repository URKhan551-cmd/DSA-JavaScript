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


 // Let's inspect the actual string:
const s = "eccbbbbdec";

Index positions:
Index:      0 1 2 3 4 5 6 7 8 9
Character:  e c c b b b d e c c

// Notice that there is a small indexing correction:
// - First e is at index 0.
// - Last e is at index 7, not index 8.
// - Last c is at index 9.
// Now trace it.
// Step 1: Start with e
At index 0:
e

// Its last occurrence is index 7.

// Therefore:
end = 7;

// We cannot close the partition before index 7.
// Step 2: Encounter c
// At index 1, we encounter c.

// Its last occurrence is index 9.

// So:
end = Math.max(7, 9);
// end = 9

// This is the critical moment!

// Even though e finishes at index 7, c requires us to continue until index 9.
// Step 3: Reach the boundary
e c c b b b d e c c
|                 |
0                 9

// At index 9, all the characters encountered in this partition have reached their final occurrences.

// Therefore, the entire string becomes one partition:
eccbbbbdec

// Result:
[10]

// Remember this distinction:
// - e tells us how far we must go because of e.
// - c can extend that boundary further.
// - Every newly encountered character can extend the boundary again.
// That's why we use Math.max() rather than simply assigning the last occurrence of the current character.

// One question to test your understanding: If c had its last occurrence at index 6 instead of index 9, would we still need to extend the boundary beyond index 7?
