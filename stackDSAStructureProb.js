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
