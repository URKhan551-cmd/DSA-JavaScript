Valid Parentheses
LeetCode #20
↗
Easy

›
details
The top is the bracket that must close next
Given a string of brackets containing the characters (), [], and {}, determine whether it is valid: 
every opening bracket must be closed by a matching bracket of the same type, and brackets must close in the correct order.

function isValid(s) {
 while (true) {
 // Look for any adjacent matching pair
 let foundPair = false; 
for (let i = 0; i < s.length - 1; i++) {
 const pair = s[i] + s[i + 1];
 if ( pair === "()" || pair === "[]" || pair === "{}" ) {
 // Delete the two characters 
s = s.slice(0, i) + s.slice(i + 2);
foundPair = true; 
break; 
}
 }
 // No pair was found 
if (!foundPair) {
 break; 
}
 } // If nothing remains, e verything was matched 
return s.length === 0;
 }


function isValid22(s) {
  // Odd-length strings can never be balanced
  if (s.length % 2 !== 0) return false;

  const pairs = { ')': '(', ']': '[', '}': '{' };
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];

    // Opening bracket → push
    if (ch === '(' || ch === '[' || ch === '{') {
      stack.push(ch);
    }
    // Closing bracket → top of stack must match
    else if (stack.pop() !== pairs[ch]) {
      return false;
}
}
return stack.length === 0;


Recursive / Divide-and-Conquer
A valid string can be split as A + B where A and B are valid, or it's open + X + close where X is valid.
 
function isValidRecursiveApproach(s) {
  if (s.length === 0) return true;
  if (s.length % 2 !== 0) return false;

  const pairs = { '(': ')', '[': ']', '{': '}' };
  const open = s[0];

  // First char must be an opener
  if (!pairs[open]) return false;

  // Find where this opener's matching closer sits
  let depth = 0;
  let matchIndex = -1;
  for (let i = 0; i < s.length; i++) {
    if (pairs[s[i]]) depth++;                 // opener
    else depth--;                             // closer


    if (depth === 0) { matchIndex = i; break; }
    if (depth < 0) return false;              // too many closers
  }

  if (matchIndex === -1) return false;
  if (s[matchIndex] !== pairs[open]) return false;

  // Inside + remainder after the matched pair
  return (
    isValid(s.slice(1, matchIndex)) &&
    isValid(s.slice(matchIndex + 1))
  );
}


 function isValid44(s) {
  const pairs = { ')': '(', ']': '[', '}': '{' };
  const used = new Array(s.length).fill(false);

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    if (pairs[ch]) {
      // closing bracket — find nearest unused matching opener
      let found = -1;
      for (let j = i - 1; j >= 0; j--) {
        if (!used[j] && s[j] === pairs[ch]) { found = j; break; }
        if (!used[j] && !pairs[s[j]]) return false; // an opener blocks it
      }
      if (found === -1) return false;
      used[found] = true;
      used[i] = true;
    }
  }

  // Every bracket must be used (paired)
  return used.every(Boolean) && s.length % 2 === 0;
}
Time: O(n²) — inner backward scan.
Space: O(n) for the used array.


   // ********************************************
 Baseball Game
LeetCode #682
↗
Easy

›
details
Every operation is about the top
You are given a list of operations: an integer records that score, 
"+" records the sum of the previous two, "D" records double 
the previous one, and "C" cancels the previous one. Return the sum of all scores at the end.

function game(arr){
 let n = arr.length;
if(n===0) return 0;
let record = [];
 for(let i=0;i<n;i++){
  let char = arr[i];
   if(char === "C"){
  record.pop();
 }else if(char === "D"){
 let last = record[record.length - 1];
record.push(last * 2);
} else if(char === "+"){
  let last = record[record.length - 1];
  let prevLast = record[record.length - 2];
  
record.push(last + prevLast);
}else {
  record.push(Number(char));
}
 }
return record.reduce((a, b) => a + b, 0);
}

 Dry Run — ["5","2","C","D","+"]
Op        Action        record
"5"        push 5        [5]
"2"        push 2        [5, 2]
"C"        pop        [5]
"D"        push 5×2        [5, 10]
"+"        push 5+10        [5, 10, 15]
Sum = 5 + 10 + 15 = 30 ✅



 function game2(ops) {
  const stack = [];

  for (const op of ops) {
    if (op === "C") {
      stack.pop();
    } else if (op === "D") {
      stack.push(stack.at(-1) * 2);
    } else if (op === "+") {
      stack.push(stack.at(-1) + stack.at(-2));
    } else {
      stack.push(Number(op));
    }
  }

  return stack.reduce((sum, n) => sum + n, 0);
}

stack.at(-1) is the modern way to get the top (ES2022).

stack.at(-2) is the second-from-top.

No index juggling.

Time: O(n) · Space: O(n)

Your instincts were right — it was just the small details that tripped you up. 👍
