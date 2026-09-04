3SUM — Quick Notes

The 3SUM brute-force algorithm uses three nested loops to examine every possible combination of three different indices i < j < k. 
The loop boundaries are i < n - 2, j < n - 1, and k < n because i must leave 2 elements, j must leave 1 element, and k is the final index. 
When three numbers sum to 0, we store the triplet; a Set can be used to prevent the same value triplet from appearing multiple times. 
The brute-force approach takes O(n³) .
Choose 3 different positions → check their sum → if sum is 0, store the triplet → avoid duplicate triplets.

TWO POINTER APPROACH 


function Sum3(arr){
let records = [];    // to keep the final result in it
let n = arr.length;   // we get the size of an arr
if(n < 3){ 
  return records;  // if size of an arr is less then 3 then return which mean our 3 sum algo wil not perfomr on it.
};

arr.sort((a,b) => a-b);   // ascending order low value >>> high value  arr

for(let i=0; i<n-2; i++){    // this first loop to fix the initial point like index 0. then itterate until left 2 element at last for
 if(i>0 && arr[i] === arr[i-1]){   // left and right 
    continue;    // if i is more then 0 and also check arr[i] === arr[i-1] present position elemnet and previous if same just incremet
  }
let left = i+1;    // 2nd position
let right = n-1;   // 3 position from the last of an arr

while(left < right){   // untill left = right loop will run 
  let sum = arr[i]+arr[left]+arr[right];
  if(sum === 0){
    
    records.push([arr[i], arr[left], arr[right]]);  /// if we get push the sum the increment position of left and decrement right.
   left++;
   right--;

 while(left < right && arr[left] === arr[left-1]){  // check if left pointer is equal to the pevious left pointer if it is then just skip
    left++;
 }
while(left < right && arr[right] === arr[right - 1]){  // same skip for the right pointer
  right--;
}
   } else if(sum < 0){    // if sum is less then 0 it mean we need to increment number which can increase final sum 
      left++;
    } else {
       right--;   // when sum is greater then 0 then find the right whichis greater but we need small pointer to reach 0.
     }

}
}
return records;
}
