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
