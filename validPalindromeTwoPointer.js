funtion isAlphaNumeric(char){
return /[a-zA-Z0-9]/.test(char);
}      // here we have two function this will clean the str or check if it has special char then remove

function isPalindrome(s){
let left = 0;    // point
let right = s.length-1;  // point

while(left < right){   
  while(right > left && !isAlphaNumeric(s[left])){   // chcek the left point element is it clean then check is less then right left++
 left++;
} 
while(right > left && !isAlphaNumeric(s[right])){
right--;
}

if(s[left].toLowerCase() !== s[right].toLowerCase()){    // if one is not equal left is not eual to right then is not a palindrome
return false;
}
left++;
right--;

}

return true;
}
