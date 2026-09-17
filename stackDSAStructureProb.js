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



 //*************************************************************************


Decode String
LeetCode #394
↗
Medium
✓ Solved

›
details
k[body] with nesting · "]" collapses the top
Given an encoded string using the rule k[encoded] meaning the bracketed substring is repeated k times, 
 return the fully decoded string. Encodings may be nested.

 function decodeString(s) {
    while (s.includes("[")) {

        let open = -1;
        let close = -1;

        // Find an innermost [...]
        for (let i = 0; i < s.length; i++) {

            if (s[i] === "[") {
                open = i;
            }

            if (s[i] === "]") {
                close = i;
                break;
            }
        }

        // Find the number before [
        let start = open - 1;

while (start >= 0 && !isNaN(s[start])) {
            start--;
        }

        start++;

        let k = Number(s.slice(start, open));

        // Extract the content inside brackets
        let body = s.slice(open + 1, close);

        // Repeat body k times
        let decoded = "";

        for (let i = 0; i < k; i++) {
            decoded += body;
        }

        // Replace k[body] with decoded string
        s =
            s.slice(0, start) +
            decoded +
            s.slice(close + 1);
  }

    return s;
}



 function decode22(str){
while(str.includes("[")){
  let close = str.indexof("]")
let open = close - 1;

while(str[open] !== "["){
open--;
}

let start = open - 1;
while(start >= 0 && str[start] >= "0" && str[start] <= "9"){
  start--;
}
start++;

let count = Number(str.slice(start, open));
let body = str.slice(open + 1, close);
let expanded = body.repeat(count);

str = str.slice(0, start) + expanded + str.slice(close + 1);
}
return str
}




function decodeString22(s) {
  const countStack = []; // stores repeat counts
  const stringStack = []; // stores previous strings
  let current = "";
  let num = 0;

  for (const ch of s) {
    if (ch >= "0" && ch <= "9") {
      // Build multi-digit number
      num = num * 10 + Number(ch);
    } else if (ch === "[") {
      // Start a new nested block
      countStack.push(num);
      stringStack.push(current);
      num = 0;
    current = "";
    } else if (ch === "]") {
      // Finish current block
      const repeatTimes = countStack.pop();
      const prev = stringStack.pop();
      current = prev + current.repeat(repeatTimes);
    } else {
      // Normal character
      current += ch;
    }
  }

  return current;
}


               3[a2[c]]
                    │
                    │ find first ]
                    ↓
                3[a2[c]]
                    │
                    │ walk backwards
                    ↓
                 2[c]
                    │
                    │ find count
                    ↓
                 count = 2
                    │
                    │ find body
                    ↓
                  body = c
                    │
                    │ repeat
                    cc
                    │
                    │ replace
                    ↓
                 3[acc]
                    │
                    │ repeat process
                    ↓
              accaccacc
                    │
                    ↓
                  DONE/
                   // *****************************************************************************************************

  Longest Valid Parentheses
LeetCode #32
↗
Hard

›
details
Stack of indices · a base below every run
Given a string containing only the characters ( and ), 
 return the length of the longest contiguous substring that forms a well-formed (properly matched) sequence of parentheses.

 
function validParenthesis(str){
if(str.length === 0)return "";
let n = str.length;
let max =0;

for(let i=0;i<n;i++){
  let balance =0;
for(let j=i; j<n;j++){
  if(str[j] === "("){
  balance++;
} else {
  balance--;
}
if(balance < 0){ break; }

if(balance === 0){
 max = Math.max(max, j-i+1);
}
}
}
return max
}


 // optimized approach 

function validParenthesis223(str){
if(str.length === 0)return "";
let n = str.length;
let max =0;
const stack = [-1]

for(let i=0;i<n;i++){
 if(str[i] === "("){
  stack.push(i);
} else {
  stack.pop();

if(stack.length === 0){
 stack.push(i);
} else {
 let top = stack[stack.length - 1];
max = Math.max(max, i - top);
}
}
}

return max;
}
