Median from Data Stream
LeetCode #295
↗
Hard

›
details
Two heaps straddling the middle
Design a data structure that supports adding integers from a stream and returning the median of all values seen so far at any time. 
  The median is the middle value, or the average of the two middle values when the count is even.

  
class DataMedian{
 constructor(){
   this.nums= [];
}

add(num){
  this.nums.push(num);
}

median(){
 let copyArr = [...this.nums];
  let sortArr = copyArr.sort((a,b) => a - b);
let n = sortArr.length;
if(n % 2 === 1){
 return sortArr[Math.floor(n / 2)];
}
const right = n / 2;
const left = right - 1;

return (sortArr[right] + sortArr[left]) / 2;
}
}


//



class Heap {
    constructor(compare) {
        this.heap = [];
        this.compare = compare;
    }

    size() {
        return this.heap.length;
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    peek() {
        return this.heap[0];
    }

   push(value) {
        this.heap.push(value);

        let index = this.heap.length - 1;

        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);

            if (
                this.compare(this.heap[index],  this.heap[parentIndex]) >= 0
            ) {
                break;
            }
      
       [
                this.heap[index],
                this.heap[parentIndex]
            ] = [
                this.heap[parentIndex],
                this.heap[index]
            ];

            index = parentIndex;
        }
    }

  pop() {
        if (this.heap.length === 0) {
            return null;
        }

        if (this.heap.length === 1) {
            return this.heap.pop();
        }

        const result = this.heap[0];

        this.heap[0] = this.heap.pop();

        let index = 0;

        while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let best = index;

while (true) {
            const left = 2 * index + 1;
            const right = 2 * index + 2;

            let best = index;

            if (
                left < this.heap.length &&
                this.compare(
                    this.heap[left],
                    this.heap[best]
                ) < 0
            ) {
                best = left;
            }

            if (
                right < this.heap.length &&
                this.compare(
                    this.heap[right],
                    this.heap[best]
                ) < 0

          ) {
                best = right;
            }

            if (best === index) {
                break;
            }

            [
                this.heap[index],
                this.heap[best]
            ] = [
                this.heap[best],
                this.heap[index]
            ];

            index = best;
        }

        return result;
}
