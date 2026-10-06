Better implementation
class MaxHeap {
    constructor() {
        this.heap = [];
    }

    get size() {
        return this.heap.length;
    }

    push(value) {
        this.heap.push(value);

        let index = this.heap.length - 1;

        while (index > 0) {
            const parent = Math.floor((index - 1) / 2);

            if (this.heap[parent] >= this.heap[index]) {
                break;
            }
        [this.heap[parent], this.heap[index]] =
                [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }

    pop() {
        if (this.heap.length === 0) {
            return null;
        }

        const max = this.heap[0];
        const last = this.heap.pop();

        if (this.heap.length > 0) {
            this.heap[0] = last;

            let index = 0;

            while (true) {
                const left = 2 * index + 1;
                const right = 2 * index + 2;

                let largest = index;

         if (
                    left < this.heap.length &&
                    this.heap[left] > this.heap[largest]
                ) {
                    largest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right] > this.heap[largest]
                ) {
                    largest = right;
                }

                if (largest === index) {
                    break;
                }

                [this.heap[index], this.heap[largest]] =
                    [this.heap[largest], this.heap[index]];

                index = largest;
          }
        }

        return max;
    }
}



//
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



// *************

Relative Ranks
LeetCode #506
↗
Easy

›
details
Sort the indices so the scores keep their owners
Given distinct scores, return each athlete’s rank in the same order as the input. The top three receive 
"Gold Medal", "Silver Medal" and "Bronze Medal"; the rest receive their placement number as a string.

 function relativeRanks(score){
 let find = [];

for(let i=0;i<score.length;i++){
 find.push(i);
}
find.sort((a,b) => score[b] - score[a]);
const result = new Array(score.length);
for(let i=0;i<find.length;i++){
  let originalIndex = find[i];
let rank = i+1;
if(rank === 1){
  result[originalIndex] = "Gold Medal";
}else if (rank === 2){
  result[originalIndex] = "Silver Medal";
} else if(rank === 3){
 result[originalIndex] = "Bronze Medal";
} else {
  result[originalIndex] = String(rank);
}
}

return result;
} 

actually we are pushing element in result 
through originalIndex wise.
original index been generating from 
sort find.


                    //
    optimized approach 


function relativeRanks22(score){
 let sorted = [...score].sort((a,b) => b - a);
let map = new Map();
for(let i=0; i<sorted.length; i++){
  map.set(sorted[i], i+1);
}
let result = new Array(score.length);
for(let i=0; i< score.length; i++){
  let rank =  map.get(score[i]);

if(rank === 1){
 result[i] = "Gold Medal";
} else if (rank === 2){
  result[i] = "Silver Medal";
} else if(rank === 3){
 result[i] = "Bronze Medal";
} else {
 result[i] = String(rank);
}
}
return result;
} 
