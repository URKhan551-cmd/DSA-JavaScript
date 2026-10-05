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
