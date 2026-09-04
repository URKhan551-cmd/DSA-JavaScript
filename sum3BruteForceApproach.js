function Sum3(arr){
let n = arr.length;
if(n < 3){
return [];    // check if the arr is less then 3 mean less element then 3
}

let result = [];
let seen = new Set();    // to check duplicacy mean it will allow just those which is not already present

for(let i=0; i<n-2; i++){     // first loop run until the 3rd last element because 2nd last for left and last for right
  
 for(let j= i+1; j<n-1; j++){  // n-1 time run 
   
  for(let k=j+1;k<n; k++){        // n times run 
    
    if(arr[i] + arr[j] + arr[k] === 0){      // chcek sum of these three pointer equal to 0 or not 
    let triplet = [arr[i], arr[j], arr[k]].sort((a,b) => a - b);    // make triplet arr and then sort it ascending [1,2 3]

 let key = triplet.join(","); // this will make it sttring  "1, 2, 3"
 if(!seen.has(key)){  // check it in seen mean Set() object holds the same triplet or not 
   seen.add(key);          // if not present it mean this triplet is unique then
   result.push(triplet)  // push it inside the result 
   }

   }
}
}
}
return result;
}
