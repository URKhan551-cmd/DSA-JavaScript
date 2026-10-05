function mostFrequentFirst(lists, n){
  let map = new Map();
 for(let list of lists){
  map.set(list, (map.get(list) || 0) + 1);
}
let maxFrequency = 0;
for(const frequency of map.values()){
 maxFrequency = Math.max(maxFrequency, frequncy);
}
let numberOfMaxFrequencyTask = 0;
for(const frequency of map.values()){
 if(frequency === maxFrequency){
   numberOfMaxFrequencyTask++;
}
}

let formula = (maxFrequency - 1) * (n + 1) + numberOfMaxFrequencyTask;
return Math.max(lists.length, formula) 

}
